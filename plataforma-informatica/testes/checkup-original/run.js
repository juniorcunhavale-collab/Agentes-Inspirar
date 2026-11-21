const { chromium } = require('playwright');
const path = require('path');
const SP = '/tmp/claude-0/-home-user-Agentes-Inspirar/d3a95ea2-128e-56d9-b256-82c2b6065a37/scratchpad';
const PROF = 'file://' + SP + '/prof/index.html';
const ALUNO = 'file://' + SP + '/aluno/index.html';
const SHOTS = SP + '/shots/';
const log = [];
const L = (...a) => { const s = a.join(' '); log.push(s); console.log(s); };

async function mk(browser, vp) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  const page = await ctx.newPage();
  page.errs = [];
  page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') page.errs.push(m.type() + ': ' + m.text()); });
  page.on('pageerror', e => page.errs.push('PAGEERROR: ' + e.message));
  return { ctx, page };
}
const ev = (p, f, a) => p.evaluate(f, a);
async function overflow(page, label) {
  const o = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
  if (o.sw > o.iw + 1) L(`  [OVERFLOW] ${label}: scrollWidth ${o.sw} > ${o.iw}`);
  return o;
}
async function clickNext(page) {
  const b = page.locator('[data-act=next]:not([disabled]), [data-act=typedone]').last();
  if (await b.count() === 0) return false;
  await b.click(); return true;
}
async function selectNode(page, id) {
  await page.evaluate(id => { const el = document.getElementById(id); const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }, id);
}
async function selectRangeIds(page, a, b) {
  await page.evaluate(([a, b]) => { const r = document.createRange(); r.setStartBefore(document.getElementById(a).firstChild); r.setEndAfter(document.getElementById(b).lastChild); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }, [a, b]);
}
async function caretEnd(page, id) {
  await page.evaluate(id => { const el = document.getElementById(id); const r = document.createRange(); r.selectNodeContents(el); r.collapse(false); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }, id);
}
const rib = (page, sel) => page.click('#ribbon ' + sel);

async function doWord(page, sim) {
  await page.click('#paper');
  if (sim === 'format') {
    await selectNode(page, 'w-t'); await rib(page, '[data-cmd=bold]');
    await selectNode(page, 'w-t'); await rib(page, '[data-color]');
    await selectNode(page, 'w-p1'); await rib(page, '[data-cmd=italic]');
    await selectNode(page, 'w-p2'); await page.keyboard.type('Meu gato se chama Tom e gosta de leite.');
  } else if (sim === 'align') {
    await selectNode(page, 'w-t'); await rib(page, '[data-cmd=justifyCenter]');
    await selectNode(page, 'w-p1'); await rib(page, '[data-cmd=justifyRight]');
    await selectRangeIds(page, 'w-p2', 'w-p4'); await rib(page, '[data-cmd=insertUnorderedList]');
  } else if (sim === 'image') {
    await caretEnd(page, 'w-p1'); await rib(page, '[data-img]');
    // centralizar a linha da imagem: clicar na imagem e no botão
    const svg = page.locator('#paper svg').first();
    if (await svg.count()) { await svg.click(); await rib(page, '[data-cmd=justifyCenter]'); }
  } else if (sim === 'final') {
    await selectNode(page, 'w-t'); await page.keyboard.type('Minha viagem');
    await selectNode(page, 'w-t'); await rib(page, '[data-cmd=bold]');
    await selectNode(page, 'w-t'); await rib(page, '[data-cmd=justifyCenter]');
    await selectNode(page, 'w-p1'); await page.keyboard.type('Eu fui para a praia nas férias');
    await page.evaluate(() => { const el = document.getElementById('w-p1'); const t = el.firstChild; const r = document.createRange(); r.setStart(t, 0); r.setEnd(t, 2); const s = getSelection(); s.removeAllRanges(); s.addRange(r); });
    await rib(page, '[data-cmd=italic]');
    await selectRangeIds(page, 'w-p2', 'w-p3'); await rib(page, '[data-cmd=insertUnorderedList]');
    await page.evaluate(() => { const p = document.getElementById('paper'); const r = document.createRange(); r.selectNodeContents(p); r.collapse(false); const s = getSelection(); s.removeAllRanges(); s.addRange(r); });
    await rib(page, '[data-img]');
  } else if (sim === 'proj') {
    await selectNode(page, 'w-t'); await rib(page, '[data-cmd=bold]');
    await selectNode(page, 'w-p1'); await page.keyboard.type('Os cachorros são animais leais e brincalhões, adoro o meu.');
  }
  await page.waitForTimeout(150);
}
async function cell(page, ref, val, enter = true) {
  await page.click(`td[data-ref=${ref}]`);
  if (val !== undefined) { await page.keyboard.press('Control+A'); await page.keyboard.type(val); if (enter) await page.keyboard.press('Enter'); }
}
async function doXl(page, sim) {
  const S = {
    cells: async () => { await cell(page, 'C3'); await cell(page, 'B1'); await cell(page, 'A5', 'Ana'); },
    data: async () => { await cell(page, 'A2', 'Maçã'); await cell(page, 'A3', 'Pão'); await cell(page, 'B2', '5'); await cell(page, 'B3', '3,5'); },
    format: async () => { await cell(page, 'A1'); await page.click('#xrib [data-xb]'); await page.click('#xrib [data-xf]'); await cell(page, 'B3'); await page.click('#xrib [data-xb]'); },
    sum: async () => { await cell(page, 'B5', '=SOMA(B2:B4)'); },
    formula: async () => { await cell(page, 'C2', '=A1+B1'); await cell(page, 'C3', '=A1*B1'); await cell(page, 'A1', '10'); },
    avg: async () => { await cell(page, 'B6', '=MEDIA(B2:B5)'); await cell(page, 'B7', '=MAXIMO(B2:B5)'); },
    chart: async () => { await page.click('#xrib [data-xchart]'); await cell(page, 'B3', '20'); },
    final: async () => { await cell(page, 'B5', '=SOMA(B2:B4)'); await cell(page, 'B6', '=MEDIA(B2:B4)'); await cell(page, 'A1'); await page.click('#xrib [data-xb]'); await page.click('#xrib [data-xchart]'); },
    proj: async () => { await cell(page, 'B2', '4'); await cell(page, 'B3', '7'); await cell(page, 'B4', '9'); await cell(page, 'B5', '=SOMA(B2:B4)'); },
  };
  await S[sim]();
  await page.waitForTimeout(150);
}
async function doPpt(page, sim) {
  const pt = async v => { await page.fill('#pt', v); };
  const S = {
    create: async () => { await pt('Meu slide'); await page.click('[data-pb=new]'); await pt('Segundo'); },
    theme: async () => { await page.click('[data-pth="1"]'); await page.fill('#pb', 'Texto curto'); },
    image: async () => { await page.click('[data-pb=img]'); },
    transition: async () => { await page.click('[data-pb=new]'); await page.selectOption('#ptr', 'esmaecer'); },
    present: async () => { await page.click('[data-pb=new]'); await page.click('[data-pb=play]'); for (let i = 0; i < 4; i++) { const n = page.locator('[data-pb=next]'); if (await n.count()) await n.click(); } },
    proj: async () => { await pt('Meu projeto'); await page.click('[data-pb=new]'); await page.click('[data-pb=new]'); await page.click('[data-pb=img]'); await page.click('[data-pth="2"]'); },
  };
  await S[sim]();
  await page.waitForTimeout(150);
}
async function typeText(page, text, delay = 15) {
  await page.click('#tbox');
  await page.keyboard.type(text, { delay });
  await page.waitForTimeout(300);
}
async function doLesson(page, m, l) {
  await page.evaluate(([m, l]) => { V.view = 'module'; V.mod = m; render(); }, [m, l]);
  const btn = page.locator(`[data-act=openLes][data-m="${m}"][data-l="${l}"]`);
  if (!(await btn.count())) { return { ok: false, why: 'aula travada/sem botão' }; }
  await btn.click();
  const issues = [];
  for (let guard = 0; guard < 20; guard++) {
    const st = await ev(page, () => { if (V.view !== 'lesson') return null; const s = steps(V.mod, V.les)[V.step]; return { t: s.t, a: s.a, n: s.n, sim: s.sim, items: s.items, step: V.step, total: steps(V.mod, V.les).length, stub: !!s.stub, fields: s.fields }; });
    if (!st) break;
    const tag = `${m}.${l} passo ${st.step + 1}/${st.total} (${st.t}${st.sim ? ':' + st.sim : ''})`;
    try {
      if (st.t === 'info' || st.t === 'anim') { if (st.stub) issues.push('aula em produção (stub)'); }
      else if (st.t === 'quiz') { await page.click(`.opt[data-i="${st.a}"]`); }
      else if (st.t === 'hot') { await page.click(`[data-part=${st.a}]`); }
      else if (st.t === 'targets') { for (let i = 0; i < st.n; i++) await page.click('.target'); }
      else if (st.t === 'order') { for (let i = 0; i < st.items.length; i++) await page.click(`#ordbox [data-i="${i}"]`); }
      else if (st.t === 'type') { const t = await ev(page, () => document.getElementById('tbox').dataset.text); await typeText(page, t); }
      else if (st.t === 'word') { await doWord(page, st.sim); }
      else if (st.t === 'xl') { await doXl(page, st.sim); }
      else if (st.t === 'ppt') { await doPpt(page, st.sim); }
      else if (st.t === 'form') { for (const [k] of st.fields) await page.fill('#f_' + k, 'Animais da fazenda'); await page.click('[data-act=formok]'); continue; }
      else if (st.t === 'check') { for (const c of await page.locator('[data-ck]').all()) await c.check(); }
      await page.waitForTimeout(100);
      const before = await ev(page, () => V.step + '|' + V.view);
      const ok = await clickNext(page);
      if (!ok) {
        const pend = await ev(page, () => [...document.querySelectorAll('.task')].filter(t => !t.classList.contains('done')).map(t => t.innerText.split('\n')[0]));
        issues.push(`${tag}: NÃO concluiu (sem botão Continuar). Tarefas pendentes: ${JSON.stringify(pend)}`);
        await page.screenshot({ path: SHOTS + `fail-${m}.${l}-${st.step}.png` });
        return { ok: false, issues };
      }
      const after = await ev(page, () => V.step + '|' + V.view);
      if (before === after) { issues.push(`${tag}: clique em Continuar não avançou`); return { ok: false, issues }; }
    } catch (e) { issues.push(`${tag}: ERRO ${e.message.split('\n')[0]}`); await page.screenshot({ path: SHOTS + `err-${m}.${l}-${st.step}.png` }); return { ok: false, issues }; }
  }
  const end = await ev(page, ([m, l]) => ({ view: V.view, stars: me().prog[m + '.' + l] }), [m, l]);
  return { ok: end.view === 'lessonend' && !!end.stars, issues, stars: end.stars };
}
async function doTest(page, m) {
  await page.evaluate(m => { V.mod = m; V.view = 'module'; render(); }, m);
  const tb = page.locator('[data-act=test]');
  if (await tb.isDisabled()) return 'botão do teste desabilitado';
  await tb.click();
  await page.click('[data-act=tpart][data-p=quiz]');
  for (let i = 0; i < 10; i++) { const a = await ev(page, () => TQ.qs[TQ.i].a); await page.click(`[data-act=tans][data-i="${a}"]`); }
  const sc = await ev(page, m => me().tests[m].score, m);
  await page.click('[data-act=test]');
  await page.click('[data-act=tpart][data-p=type]');
  const t = await ev(page, () => document.getElementById('tbox').dataset.text);
  await typeText(page, t, 10);
  await page.waitForTimeout(900);
  const r = await ev(page, m => ({ typOk: me().tests[m].typOk, pass: modPassed(me(), m), tres: V.tres }), m);
  return `quiz ${sc} pts · digitação ${JSON.stringify(r.tres)} · aprovado=${r.pass}`;
}

(async () => {
  const browser = await chromium.launch();
  // ===== 1. PROF artifact, notebook =====
  L('=== ARTIFACT "Inspirar Informática" @1366x768 ===');
  let { ctx, page } = await mk(browser, { width: 1366, height: 768 });
  await page.goto(PROF); await page.waitForTimeout(500);
  await page.screenshot({ path: SHOTS + 'prof-login-1366.png' });
  await overflow(page, 'login');
  // contagem de conteúdo
  const inv = await ev(page, () => {
    const out = { mods: MODS.map(m => ({ n: m.n, name: m.name, aulas: m.aulas.length })), total: 0, prontas: 0, faltando: [], tipos: {}, bank: {} };
    for (const m of MODS) for (let l = 1; l <= m.aulas.length; l++) { out.total++; const k = m.n + '.' + l; if (LES[k]) { out.prontas++; LES[k].forEach(s => out.tipos[s.t] = (out.tipos[s.t] || 0) + 1); } else out.faltando.push(k); }
    for (const m in BANK) { out.bank[m] = { n: BANK[m].length, ans0: BANK[m].filter(x => x[2] === 0).length }; }
    out.passosPorAula = Object.fromEntries(Object.entries(LES).map(([k, v]) => [k, v.length]));
    return out;
  });
  L('Inventário:', JSON.stringify(inv));
  // Tutor
  await page.click('[data-act=roleTutor]'); await page.waitForTimeout(200);
  await page.screenshot({ path: SHOTS + 'prof-tutor-1366.png', fullPage: true });
  L('Tutor topbar:', (await page.locator('.top .chip').allInnerTexts()).join(' | '));
  const tutRows = await page.locator('.tbl tbody tr').count(); L('Tutor: linhas na tabela', tutRows);
  // liberar módulo modal
  const rel = page.locator('[data-act=relopen]');
  L('Tutor: botões Liberar módulo', await rel.count());
  if (await rel.count()) { await rel.first().click(); await page.click('[data-act=reldo]'); L('  liberação feita'); }
  const mp = page.locator('[data-act=confirm]'); if (await mp.count()) { await mp.first().click(); L('  confirmar presença ok'); }
  await page.click('[data-act=logout]');
  // Gestor
  await page.click('[data-act=roleGestor]'); await page.waitForTimeout(200);
  await page.screenshot({ path: SHOTS + 'prof-gestor-1366.png', fullPage: true });
  await page.fill('#en', 'Teste Matricula'); await page.click('[data-act=enroll]'); await page.waitForTimeout(100);
  L('Gestor: matrícula ->', await page.locator('#eerr').innerText().catch(() => ''), '| alunos agora:', await ev(page, () => Object.keys(DB.students).length));
  L('Gestor: liberações listadas:', await page.locator('text=Tutora Marina').count());
  await page.click('[data-act=logout]');
  // Pais
  await page.click('[data-act=rolePais]'); await page.click('[data-act=pick][data-id=ana]'); await page.waitForTimeout(200);
  await page.screenshot({ path: SHOTS + 'prof-pais-1366.png', fullPage: true });
  L('Pais: título', await page.locator('h1').innerText());
  await page.click('[data-act=logout]');
  // Aluno Davi (zero aulas), modo demo, todas as aulas
  await page.click('[data-act=roleAluno]'); await page.click('[data-act=pick][data-id=davi]'); await page.waitForTimeout(200);
  await page.screenshot({ path: SHOTS + 'prof-aluno-home-1366.png' });
  L('Aluno home: demo toggle presente', await page.locator('#demo').count());
  // Sem modo demo: tentar abrir módulo 4 (Word)
  L('Módulo 4 clicável sem demo?', await page.locator('[data-act=openMod][data-m="4"]').count());
  // Aquecimento
  await page.click('[data-act=warm]'); await page.waitForTimeout(200);
  { const t = await ev(page, () => document.getElementById('tbox').dataset.text); await typeText(page, t); const ok = await clickNext(page); L('Aquecimento concluído:', ok, '| view', await ev(page, () => V.view)); }
  const results = {};
  for (const m of inv.mods) {
    for (let l = 1; l <= m.aulas; l++) {
      const r = await doLesson(page, m.n, l);
      results[m.n + '.' + l] = r;
      L(`Aula ${m.n}.${l}: ${r.ok ? 'OK ' + r.stars + '★' : 'FALHOU'} ${r.issues && r.issues.length ? '-> ' + r.issues.join(' ; ') : ''}${r.why ? ' ' + r.why : ''}`);
    }
    const tr = await doTest(page, m.n);
    L(`  Teste módulo ${m.n}: ${tr}`);
  }
  await ev(page, () => { V.view = 'home'; render(); });
  await page.screenshot({ path: SHOTS + 'prof-aluno-fim-1366.png' });
  const cb = page.locator('[data-act=cert]');
  L('Certificado disponível:', await cb.count());
  if (await cb.count()) { await cb.first().click(); await page.screenshot({ path: SHOTS + 'prof-cert-1366.png' }); L('Cert texto:', (await page.locator('.cert').innerText()).replace(/\n/g, ' ')); }
  L('Erros de console (prof 1366):', JSON.stringify(page.errs));
  await ctx.close();

  // ===== Excel: clique em outra célula sem Enter =====
  L('=== Excel: clicar outra célula sem apertar Enter ===');
  ({ ctx, page } = await mk(browser, { width: 1366, height: 768 }));
  await page.goto(PROF); await page.click('[data-act=roleAluno]'); await page.click('[data-act=pick][data-id=ana]');
  await page.click('#demo');
  await ev(page, () => { V.mod = 5; V.les = 4; V.step = 1; V.view = 'lesson'; V.errs = 0; render(); });
  await page.click('td[data-ref=B5]'); await page.keyboard.type('=SOMA(B2:B4)');
  await page.click('td[data-ref=C2]');
  L('  Após 1 clique em C2: célula selecionada =', await ev(page, () => XS.sel), '| B5 =', await ev(page, () => xlVal('B5')));
  await page.keyboard.type('abc'); await page.keyboard.press('Enter');
  L('  Digitou "abc"+Enter -> C2 raw =', JSON.stringify(await ev(page, () => xlRaw('C2'))), '| B5 raw =', JSON.stringify(await ev(page, () => xlRaw('B5'))));
  // fórmulas pt-BR com ;
  await ev(page, () => { XS.cells.D1 = { raw: '=SOMA(B2;B3)' }; XS.cells.D2 = { raw: '=MÉDIA(B2:B4)' }; XS.cells.D3 = { raw: '=3,5+1' }; XS.cells.D4 = { raw: '=B2/0' }; XS.cells.D5 = { raw: '=soma(b2:b4)' }; });
  L('  =SOMA(B2;B3) ->', await ev(page, () => xlVal('D1')), '| =MÉDIA ->', await ev(page, () => xlVal('D2')), '| =3,5+1 ->', await ev(page, () => xlVal('D3')), '| =B2/0 ->', await ev(page, () => xlVal('D4')), '| minúsculas ->', await ev(page, () => xlVal('D5')));
  await ctx.close();

  // ===== Word: tarefa por clique triplo real =====
  L('=== Word: clique triplo real no título + Negrito ===');
  ({ ctx, page } = await mk(browser, { width: 1366, height: 768 }));
  await page.goto(PROF); await page.click('[data-act=roleAluno]'); await page.click('[data-act=pick][data-id=ana]'); await page.click('#demo');
  await ev(page, () => { V.mod = 4; V.les = 3; V.step = 1; V.view = 'lesson'; V.errs = 0; render(); });
  await page.click('#w-t', { clickCount: 3 }); await page.click('#ribbon [data-cmd=bold]');
  L('  título em negrito detectado:', await page.locator('#task0.done').count(), '| html título:', await ev(page, () => document.getElementById('w-t') ? document.getElementById('w-t').outerHTML : 'SUMIU (id perdido)'));
  await page.click('#w-t', { clickCount: 3 }).catch(e => L('  w-t não clicável:', e.message.split('\n')[0]));
  await page.click('#ribbon [data-color]');
  L('  cor detectada:', await page.locator('#task1.done').count());
  // apagar o parágrafo inteiro
  await page.click('#w-p2', { clickCount: 3 }); await page.keyboard.type('Eu adoro o meu gatinho Tom.');
  L('  frase nova detectada:', await page.locator('#task3.done').count(), '| w-p2 existe?', await ev(page, () => !!document.getElementById('w-p2')));
  await page.screenshot({ path: SHOTS + 'word-triple.png' });
  await ctx.close();

  // ===== Teste de digitação do módulo 1 exige maiúscula? =====
  L('=== Textos de digitação ===');
  ({ ctx, page } = await mk(browser, { width: 1366, height: 768 }));
  await page.goto(PROF);
  L('  TESTL y:', JSON.stringify(await ev(page, () => TESTL.y.map(x => x.length + ' chars: ' + x.slice(0, 40)))));
  L('  Maiúsculas/acentos antes da aula 2.4:', JSON.stringify(await ev(page, () => ['2.1', '2.2', '2.3'].map(k => LES[k].filter(s => s.t === 'type').map(s => s.text)))));
  await ctx.close();

  // ===== 2. ALUNO artifact =====
  for (const vp of [{ width: 1366, height: 768 }, { width: 390, height: 844 }]) {
    L(`=== ARTIFACT "Inspirar Informática Aluno" @${vp.width}x${vp.height} ===`);
    ({ ctx, page } = await mk(browser, vp));
    await page.goto(ALUNO); await page.waitForTimeout(400);
    await page.screenshot({ path: SHOTS + `aluno-login-${vp.width}.png`, fullPage: true });
    await overflow(page, 'login aluno');
    await page.click('[data-act=newstudent]'); L('  sem nome ->', await page.locator('#nerr').innerText());
    await page.fill('#nn', 'Lucas'); await page.selectOption('#na', '8'); await page.click('[data-act=newstudent]'); await page.waitForTimeout(200);
    L('  view', await ev(page, () => V.view), '| demo toggle', await page.locator('#demo').count(), '| presença msg:', await page.locator('.card p.muted').first().innerText());
    await page.screenshot({ path: SHOTS + `aluno-home-${vp.width}.png`, fullPage: true });
    await overflow(page, 'home aluno');
    L('  Módulos abertos:', await page.locator('[data-act=openMod]').count());
    // abrir aula 1.1 e 1.3 no celular
    if (vp.width === 390) {
      await page.click('[data-act=openMod][data-m="1"]'); await page.click('[data-act=openLes][data-m="1"][data-l="3"]').catch(() => L('  1.3 travada (esperado)'));
      await page.click('[data-act=openLes][data-m="1"][data-l="1"]'); await page.screenshot({ path: SHOTS + 'aluno-aula-390.png', fullPage: true }); await overflow(page, 'aula 1.1 390');
    }
    // reload: sessão volta?
    await page.reload(); await page.waitForTimeout(300);
    L('  após recarregar: view', await ev(page, () => V.view), 'aluno', await ev(page, () => V.sid && DB.students[V.sid] ? DB.students[V.sid].name : null));
    await page.click('[data-act=logout]');
    L('  após sair, perfis neste computador:', await page.locator('[data-act=pick]').count());
    L('  Erros console:', JSON.stringify(page.errs));
    await ctx.close();
  }
  // Aluno artifact: módulo 1 completo -> módulo 2 libera? Word bloqueado no dia 2?
  L('=== ALUNO: fluxo Colônia (módulo 1 inteiro, depois tentar Word) ===');
  ({ ctx, page } = await mk(browser, { width: 1366, height: 768 }));
  await page.goto(ALUNO); await page.fill('#nn', 'Bia'); await page.click('[data-act=newstudent]');
  for (let l = 1; l <= 4; l++) { const r = await doLesson(page, 1, l); L(`  1.${l}:`, r.ok ? 'OK' : 'FALHOU ' + JSON.stringify(r)); }
  L('  Teste módulo 1:', await doTest(page, 1));
  await ev(page, () => { V.view = 'home'; render(); });
  L('  Módulos abertos depois do módulo 1:', await page.locator('[data-act=openMod]').count(), '(Word=4, Excel=5)');
  await ctx.close();

  // ===== 3. Celular dos pais / tutor / gestor @390 (prof) =====
  L('=== PROF @390x844 (pais, tutor, gestor) ===');
  ({ ctx, page } = await mk(browser, { width: 390, height: 844 }));
  await page.goto(PROF); await page.waitForTimeout(300);
  await page.screenshot({ path: SHOTS + 'prof-login-390.png', fullPage: true }); await overflow(page, 'login prof 390');
  await page.click('[data-act=rolePais]'); await page.click('[data-act=pick][data-id=gabi]'); await page.waitForTimeout(200);
  await page.screenshot({ path: SHOTS + 'prof-pais-390.png', fullPage: true }); await overflow(page, 'pais 390');
  await page.click('[data-act=logout]');
  await page.click('[data-act=roleTutor]'); await page.screenshot({ path: SHOTS + 'prof-tutor-390.png', fullPage: true }); await overflow(page, 'tutor 390');
  await page.click('[data-act=logout]');
  await page.click('[data-act=roleGestor]'); await page.screenshot({ path: SHOTS + 'prof-gestor-390.png', fullPage: true }); await overflow(page, 'gestor 390');
  await page.click('[data-act=logout]');
  await page.click('[data-act=roleAluno]'); await page.click('[data-act=pick][data-id=gabi]'); await page.click('#demo');
  for (const [m, l, s] of [[4, 3, 1], [5, 4, 1], [6, 2, 1], [2, 1, 2]]) {
    await ev(page, ([m, l, s]) => { V.mod = m; V.les = l; V.step = s; V.view = 'lesson'; V.errs = 0; render(); }, [m, l, s]);
    await page.waitForTimeout(150); await page.screenshot({ path: SHOTS + `sim-${m}.${l}-390.png`, fullPage: true }); await overflow(page, `sim ${m}.${l} 390`);
  }
  L('  Erros console:', JSON.stringify(page.errs));
  await ctx.close();
  await browser.close();
  require('fs').writeFileSync(SP + '/tests/log.txt', log.join('\n'));
})().catch(e => { console.error('FATAL', e); process.exit(1); });
