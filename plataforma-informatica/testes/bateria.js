// Bateria automática da plataforma Inspirar Informática (Playwright / Chromium, o mesmo motor do Edge).
// Uso: node plataforma-informatica/testes/bateria.js [pasta-com-aluno-e-gestao]   (padrão: ../atual)
// Sai com código 1 se qualquer verificação falhar. Log em testes/ultimo-resultado.txt
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path'), os = require('os');
const BASE = path.resolve(process.argv[2] || path.join(__dirname, '..', 'atual'));
const URL = { aluno: 'file://' + BASE + '/aluno/index.html', gestao: 'file://' + BASE + '/gestao/index.html' };
const VPS = [{ width: 1366, height: 768 }, { width: 390, height: 844 }];
const OUT = [], FAILS = [];
const L = (...a) => { const s = a.join(' '); OUT.push(s); console.log(s); };
const ok = (cond, label, extra = '') => { L(`${cond ? 'PASSOU' : 'FALHOU'} · ${label}${extra ? ' · ' + extra : ''}`); if (!cond) FAILS.push(label); return cond; };
const ev = (p, f, a) => p.evaluate(f, a);
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'bateria-'));

async function mk(browser, vp) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1, acceptDownloads: true });
  // fontes do Google: respondemos vazio (sem internet no teste) para não gerar erro de console
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, r => r.fulfill({ status: 200, contentType: 'text/css', body: '' }));
  const page = await ctx.newPage();
  page.errs = [];
  page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') page.errs.push(m.type() + ': ' + m.text()); });
  page.on('pageerror', e => page.errs.push('PAGEERROR: ' + e.message));
  return { ctx, page };
}
async function overflow(page, label) {
  const o = await ev(page, () => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
  return ok(o.sw <= o.iw + 1, `sem rolagem lateral: ${label}`, `${o.sw}/${o.iw}`);
}
async function clickNext(page) {
  const b = page.locator('[data-act=next]:not([disabled]), [data-act=typedone]').last();
  if (await b.count() === 0) return false;
  await b.click(); return true;
}
async function selectNode(page, id) { await ev(page, id => { const el = document.getElementById(id); const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }, id); }
async function selectRangeIds(page, a, b) { await ev(page, ([a, b]) => { const r = document.createRange(); r.setStartBefore(document.getElementById(a).firstChild); r.setEndAfter(document.getElementById(b).lastChild); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }, [a, b]); }
const rib = (page, sel) => page.click('#ribbon ' + sel);
let CLICKLOST = 0;

async function imageFlow(page, mode = 'clicar-imagem') {
  // fluxo real de uma criança: clica no fim da frase, botão Imagem, clica na imagem, centraliza
  const p1 = page.locator('#w-p1'); await p1.click(); await page.keyboard.press('End');
  await rib(page, '[data-img]');
  if (mode === 'clicar-imagem') await page.locator('#paper svg').first().click();
  if (mode === 'setas') await page.keyboard.press('ArrowDown');
  await rib(page, '[data-cmd=justifyCenter]');
}
async function doWord(page, sim) {
  await page.click('#paper');
  const S = {
    format: async () => { await page.click('#w-t', { clickCount: 3 }); await rib(page, '[data-cmd=bold]'); await selectNode(page, 'w-t'); await rib(page, '[data-color]'); await selectNode(page, 'w-p1'); await rib(page, '[data-cmd=italic]'); await selectNode(page, 'w-p2'); await page.keyboard.type('Meu gato se chama Tom e gosta de leite.'); },
    format2: async () => { await selectNode(page, 'w-t'); await rib(page, '[data-cmd=bold]'); await selectNode(page, 'w-t'); await rib(page, '[data-color]'); await selectNode(page, 'w-p2'); await rib(page, '[data-cmd=underline]'); },
    align: async () => { await selectNode(page, 'w-t'); await rib(page, '[data-cmd=justifyCenter]'); await selectNode(page, 'w-p1'); await rib(page, '[data-cmd=justifyRight]'); await selectRangeIds(page, 'w-p2', 'w-p4'); await rib(page, '[data-cmd=insertUnorderedList]'); },
    convite: async () => { await selectRangeIds(page, 'w-t', 'w-p1'); await rib(page, '[data-cmd=justifyCenter]'); await selectRangeIds(page, 'w-p2', 'w-p3'); await rib(page, '[data-cmd=insertUnorderedList]'); await selectNode(page, 'w-t'); await rib(page, '[data-color]'); },
    image: async () => { await imageFlow(page, 'clicar-imagem'); },
    final: async () => {
      await selectNode(page, 'w-t'); await page.keyboard.type('Minha viagem'); await selectNode(page, 'w-t'); await rib(page, '[data-cmd=bold]'); await selectNode(page, 'w-t'); await rib(page, '[data-cmd=justifyCenter]');
      await selectNode(page, 'w-p1'); await page.keyboard.type('Eu fui para a praia nas férias');
      await ev(page, () => { const t = document.getElementById('w-p1').firstChild; const r = document.createRange(); r.setStart(t, 0); r.setEnd(t, 2); const s = getSelection(); s.removeAllRanges(); s.addRange(r); });
      await rib(page, '[data-cmd=italic]'); await selectRangeIds(page, 'w-p2', 'w-p3'); await rib(page, '[data-cmd=insertUnorderedList]');
      await ev(page, () => { const p = document.getElementById('paper'); const r = document.createRange(); r.selectNodeContents(p); r.collapse(false); const s = getSelection(); s.removeAllRanges(); s.addRange(r); });
      await rib(page, '[data-img]');
    },
    proj: async () => { await selectNode(page, 'w-t'); await rib(page, '[data-cmd=bold]'); await selectNode(page, 'w-p1'); await page.keyboard.type('Os cachorros são animais leais e brincalhões, adoro o meu.'); },
  };
  await S[sim](); await page.waitForTimeout(120);
}
// clique REAL na célula; se o clique se perder, conta e NÃO tenta de novo (o teste falha)
async function cell(page, ref, val, enter = true) {
  await page.click(`td[data-ref=${ref}]`);
  const st = await ev(page, () => XS.sel + '|' + (document.activeElement && document.activeElement.id));
  if (st !== ref + '|xin') CLICKLOST++;
  if (val !== undefined) { await page.keyboard.type(val); if (enter) await page.keyboard.press('Enter'); }
}
async function doXl(page, sim) {
  const S = {
    cells: async () => { await cell(page, 'C3'); await cell(page, 'B1'); await cell(page, 'A5', 'Ana'); },
    cells2: async () => { await cell(page, 'D6'); await cell(page, 'F1'); await cell(page, 'A8', 'oi'); },
    // sem Enter entre as células: digita e já clica na próxima (era onde o clique se perdia)
    data: async () => { await cell(page, 'A2', 'Maçã', false); await cell(page, 'A3', 'Pão', false); await cell(page, 'B2', '5', false); await cell(page, 'B3', '3,5'); },
    data2: async () => { for (const [r, v] of [['A2', 'pega-pega'], ['A3', 'futebol'], ['A4', 'pipa'], ['B2', '5'], ['B3', '3'], ['B4', '8']]) await cell(page, r, v, false); await page.keyboard.press('Enter'); },
    format: async () => { await cell(page, 'A1'); await page.click('#xrib [data-xb]'); await page.click('#xrib [data-xf]'); await cell(page, 'B3'); await page.click('#xrib [data-xb]'); },
    format2: async () => { await cell(page, 'A1'); await page.click('#xrib [data-xb]'); for (const r of ['A2', 'A3', 'A4']) { await cell(page, r); await page.click('#xrib [data-xf]'); } },
    sum: async () => { await cell(page, 'B5', '=SOMA(B2:B4)'); },
    sum2: async () => { await cell(page, 'B6', '=SOMA(B2:B5)'); },
    formula: async () => { await cell(page, 'C2', '=A2+B2'); await cell(page, 'D2', '=B2*2'); await cell(page, 'A2', '10'); },
    avg: async () => { await cell(page, 'B6', '=MEDIA(B2:B5)'); await cell(page, 'B7', '=MAXIMO(B2:B5)'); },
    min: async () => { await cell(page, 'B6', '=MINIMO(B2:B5)'); },
    chart: async () => { await page.click('#xrib [data-xchart]'); await cell(page, 'B3', '20'); },
    final: async () => { await cell(page, 'B5', '=SOMA(B2:B4)'); await cell(page, 'B6', '=MEDIA(B2:B4)'); await cell(page, 'A1'); await page.click('#xrib [data-xb]'); await page.click('#xrib [data-xchart]'); },
    proj: async () => { await cell(page, 'B2', '4'); await cell(page, 'B3', '7'); await cell(page, 'B4', '9'); await cell(page, 'B5', '=SOMA(B2:B4)'); },
  };
  await S[sim](); await page.waitForTimeout(120);
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
  await S[sim](); await page.waitForTimeout(120);
}
async function typeText(page, text, delay = 8) { await page.click('#tbox'); await page.keyboard.type(text, { delay }); await page.waitForTimeout(250); }

// resolve os passos da aula aberta; opts.skipBonus pula os desafios bônus
async function solveLesson(page, tag, opts = {}) {
  const issues = [];
  for (let guard = 0; guard < 40; guard++) {
    const st = await ev(page, () => { if (V.view !== 'lesson') return null; const s = steps(V.mod, V.les)[V.step]; return { t: s.t, a: s.a, n: s.n, sim: s.sim, items: s.items, step: V.step, total: steps(V.mod, V.les).length, fields: s.fields, bonus: !!s.bonus }; });
    if (!st) break;
    const t = `${tag} passo ${st.step + 1}/${st.total} (${st.t}${st.sim ? ':' + st.sim : ''}${st.bonus ? ' bônus' : ''})`;
    try {
      if (st.bonus && opts.skipBonus) { await page.click('[data-act=skipbonus]'); continue; }
      if (st.t === 'quiz') await page.click(`.opt[data-i="${st.a}"]`);
      else if (st.t === 'hot') await page.click(`[data-part=${st.a}]`);
      else if (st.t === 'targets') { for (let i = 0; i < st.n; i++) await page.click('.target'); }
      else if (st.t === 'order') { for (let i = 0; i < st.items.length; i++) await page.click(`#ordbox [data-i="${i}"]`); }
      else if (st.t === 'type') { const tx = await ev(page, () => document.getElementById('tbox').dataset.text); await typeText(page, tx); }
      else if (st.t === 'word') await doWord(page, st.sim);
      else if (st.t === 'xl') await doXl(page, st.sim);
      else if (st.t === 'ppt') await doPpt(page, st.sim);
      else if (st.t === 'form') { for (const [k] of st.fields) await page.fill('#f_' + k, 'Animais da fazenda'); await page.click('[data-act=formok]'); continue; }
      else if (st.t === 'check') { for (const c of await page.locator('[data-ck]').all()) await c.check(); }
      await page.waitForTimeout(60);
      const before = await ev(page, () => V.step + '|' + V.view);
      if (!(await clickNext(page))) {
        const pend = await ev(page, () => [...document.querySelectorAll('.task')].filter(t => !t.classList.contains('done')).map(t => t.innerText.split('\n')[0]));
        issues.push(`${t}: não concluiu. Pendentes: ${JSON.stringify(pend)}`); return { ok: false, issues };
      }
      if (before === await ev(page, () => V.step + '|' + V.view)) { issues.push(`${t}: Continuar não avançou`); return { ok: false, issues }; }
    } catch (e) { issues.push(`${t}: ERRO ${e.message.split('\n')[0]}`); return { ok: false, issues }; }
  }
  const end = await ev(page, () => ({ view: V.view, stars: V.mod && me().prog[V.mod + '.' + V.les] }));
  return { ok: end.view === 'lessonend' && !!end.stars, issues, stars: end.stars };
}
// abre a aula pelo caminho normal (lista do módulo, que respeita as travas)
async function doLesson(page, m, l, opts) {
  await ev(page, m => { V.view = 'module'; V.mod = m; render(); }, m);
  const btn = page.locator(`[data-act=openLes][data-m="${m}"][data-l="${l}"]`);
  if (!(await btn.count())) return { ok: false, issues: ['aula travada/sem botão'] };
  await btn.click();
  return solveLesson(page, `${m}.${l}`, opts);
}
async function doTest(page, m) {
  await ev(page, m => { V.mod = m; V.view = 'module'; render(); }, m);
  const tb = page.locator('[data-act=test]');
  if (await tb.isDisabled()) return { pass: false, why: 'botão do teste desabilitado' };
  await tb.click();
  await page.click('[data-act=tpart][data-p=quiz]');
  for (let i = 0; i < 10; i++) { const a = await ev(page, () => TQ.qs[TQ.i].a); await page.click(`[data-act=tans][data-i="${a}"]`); }
  await page.click('[data-act=test]');
  await page.click('[data-act=tpart][data-p=type]');
  const t = await ev(page, () => document.getElementById('tbox').dataset.text);
  await typeText(page, t, 6); await page.waitForTimeout(900);
  return await ev(page, m => ({ pass: modPassed(me(), m), text: '' }), m).then(r => Object.assign(r, { text: t }));
}
async function newKid(page, name, age = '9') {
  await page.fill('#nn', name); await page.selectOption('#na', age); await page.click('[data-act=newstudent]'); await page.waitForTimeout(100);
}
async function enterAsKid(page, which) {
  if (which === 'aluno') { await page.goto(URL.aluno); await newKid(page, 'Bia'); }
  else { await page.goto(URL.gestao); await page.click('[data-act=roleAluno]'); await page.click('[data-act=pick][data-id=davi]'); }
}
async function openTutora(page, pin = '2501') {
  await page.click('[data-act=tutora] >> nth=0'); await page.fill('#pin', pin); await page.click('[data-act=pinok]'); await page.waitForTimeout(80);
}

// ======================= 1. ponta a ponta: 40 aulas + 7 testes, sem modo demonstração =======================
async function fullRun(browser, which, vp) {
  L(`\n=== Ponta a ponta · ${which} · ${vp.width}x${vp.height} ===`);
  const { ctx, page } = await mk(browser, vp);
  await enterAsKid(page, which);
  CLICKLOST = 0;
  const mods = await ev(page, () => MODS.map(m => ({ n: m.n, aulas: m.aulas.length })));
  let lessonsOk = 0, testsOk = 0, totalL = 0; const bad = [];
  for (const m of mods) {
    await ev(page, () => { V.view = 'home'; render(); });
    if (!(await page.locator(`[data-act=openMod][data-m="${m.n}"]`).count())) bad.push(`módulo ${m.n} travado na trilha`);
    for (let l = 1; l <= m.aulas; l++) {
      totalL++;
      const r = await doLesson(page, m.n, l);
      if (r.ok) lessonsOk++; else bad.push(`${m.n}.${l}: ${r.issues.join(' ; ')}`);
    }
    if (m.n === 1) {
      await ev(page, () => { V.view = 'home'; render(); });
      ok(await page.locator('[data-act=test][data-m="1"]').count() === 1, `${which} ${vp.width}: com as aulas feitas, o botão principal leva ao teste (#22)`);
    }
    const tr = await doTest(page, m.n);
    if (m.n === 1) ok(tr.text === tr.text.toLowerCase() && !/[áàâãéêíóôõúç]/i.test(tr.text), `${which} ${vp.width}: teste do módulo 1 sem maiúscula nem acento (#13)`, JSON.stringify(tr.text));
    if (tr.pass) testsOk++; else bad.push(`teste ${m.n}: ${tr.why || 'não aprovado'}`);
  }
  ok(lessonsOk === 40 && totalL === 40, `${which} ${vp.width}: aluno automático completa as 40 aulas (inclusive desafios bônus)`, `${lessonsOk}/${totalL}`);
  ok(testsOk === 7, `${which} ${vp.width}: aluno automático passa nos 7 testes`, `${testsOk}/7`);
  ok(CLICKLOST === 0, `${which} ${vp.width}: nenhum clique perdido no Excel (sem clicar de novo) (#7)`, `perdidos: ${CLICKLOST}`);
  if (bad.length) L('   problemas: ' + bad.join(' | '));
  await ev(page, () => { V.view = 'home'; render(); });
  ok(await page.locator('[data-act=cert]').count() >= 1, `${which} ${vp.width}: certificado disponível no fim`);
  await overflow(page, `${which} ${vp.width} trilha final`);
  ok(page.errs.length === 0, `${which} ${vp.width}: nenhum erro de console`, JSON.stringify(page.errs.slice(0, 5)));
  await ctx.close();
}

// ======================= 2. testes de cada correção =======================
async function specific(browser) {
  const vp = VPS[0];
  L('\n=== Testes de cada correção ===');
  let { ctx, page } = await mk(browser, vp);
  await enterAsKid(page, 'gestao'); await page.click('#demo');
  // A1. aula 4.5: três jeitos de centralizar
  for (const mode of ['clicar-imagem', 'direto', 'setas']) {
    await ev(page, () => { V.mod = 4; V.les = 5; V.step = 1; V.view = 'lesson'; V.errs = 0; V.st = {}; render(); });
    await imageFlow(page, mode); await page.waitForTimeout(80);
    ok(await page.locator('.task.done').count() === 2, `4.5: imagem centralizada (${mode}) conclui as 2 tarefas (#5)`);
  }
  // A2. aula 5.5 em ordem diferente (muda A2 antes das fórmulas)
  await ev(page, () => { V.mod = 5; V.les = 5; V.step = 1; V.view = 'lesson'; V.errs = 0; V.st = {}; render(); });
  await cell(page, 'A2', '10'); await cell(page, 'C2', '=A2+B2'); await cell(page, 'D2', '=B2*2'); await page.waitForTimeout(80);
  ok(await page.locator('.task.done').count() === 3, '5.5: tarefas coerentes mesmo fora de ordem (#6)');
  // A3. Excel: digitar e clicar direto na próxima célula, sem Enter, sem perder letra
  CLICKLOST = 0;
  await ev(page, () => { V.mod = 5; V.les = 2; V.step = 1; V.view = 'lesson'; V.errs = 0; V.st = {}; render(); });
  for (const [r, v] of [['A2', 'Maçã'], ['A3', 'Pão'], ['B2', '5'], ['B3', '3,5'], ['C4', 'ok']]) await cell(page, r, v, false);
  await page.click('td[data-ref=A1]');
  const vals = await ev(page, () => ['A2', 'A3', 'B2', 'B3', 'C4'].map(xlRaw));
  ok(CLICKLOST === 0 && JSON.stringify(vals) === JSON.stringify(['Maçã', 'Pão', '5', '3,5', 'ok']), 'Excel: 5 cliques seguidos sem perder clique nem digitação (#7)', JSON.stringify(vals));
  // F25. fórmulas em português
  const f = await ev(page, () => { XS.cells.D1 = { raw: '=SOMA(B2;B3)' }; XS.cells.D2 = { raw: '=3,5+1' }; XS.cells.D3 = { raw: '=B2-10' }; XS.cells.D4 = { raw: '=10-B3' }; XS.cells.D5 = { raw: '=soma(b2:b3)' }; return ['D1', 'D2', 'D3', 'D4', 'D5'].map(xlVal); });
  ok(JSON.stringify(f) === JSON.stringify([8.5, 4.5, -5, 6.5, 8.5]), 'Excel: =SOMA(B2;B3), vírgula decimal e números negativos (#25)', JSON.stringify(f));
  // F12. quizzes embaralhados
  const firsts = new Set();
  for (let i = 0; i < 12; i++) { await ev(page, () => { V.mod = 1; V.les = 1; V.step = 1; V.view = 'lesson'; V.st = {}; render(); }); firsts.add(await page.locator('.opt').first().getAttribute('data-i')); }
  ok(firsts.size > 1, 'Quiz das aulas com opções embaralhadas (#12)', 'primeiras opções vistas: ' + [...firsts]);
  // F13. frases antes da aula 2.4 sem maiúscula
  const pre = await ev(page, () => ['2.1', '2.2', '2.3'].flatMap(k => LES[k].filter(s => s.t === 'type').map(s => s.text)));
  ok(pre.every(t => t === t.toLowerCase()), 'Aulas 2.1 a 2.3 sem letra maiúscula (#13)');
  // dica do Shift
  await ev(page, () => { V.mod = 2; V.les = 4; V.step = 1; V.view = 'lesson'; V.st = {}; render(); });
  await page.click('#tbox'); await page.keyboard.type('o', { delay: 20 }); await page.waitForTimeout(80);
  ok(/Shift/.test(await page.locator('#feed').innerText()), 'Digitação: aviso de usar Shift quando falta a maiúscula');
  // bônus: pular não tira estrela
  await ev(page, () => { V.view = 'module'; V.mod = 1; render(); });
  await page.click('[data-act=openLes][data-m="1"][data-l="1"]');
  const r = await solveLesson(page, '1.1-pular', { skipBonus: true });
  ok(r.ok && r.stars === 3, 'Desafio bônus pode ser pulado sem perder estrela', `estrelas ${r.stars}`);
  // aquecimento: 4 frases, sem maiúscula antes da 2.4
  await ev(page, () => { me().prog = {}; save(); V.view = 'home'; render(); });
  await page.click('[data-act=warm]');
  const w = await ev(page, () => LES['2.0'].map(s => tx(s.text)));
  ok(w.length === 4 && w.every(x => x === x.toLowerCase()), 'Aquecimento com 4 frases e sem maiúscula antes da 2.4 (#26)');
  // F. gestão: tutora Giovana, aviso de demonstração, pais
  await ev(page, () => { V = { st: {}, view: 'login', role: null }; render(); });
  await page.click('[data-act=roleTutor]');
  const tt = await page.locator('main').innerText();
  ok(/Giovana/.test(await page.locator('.top').innerText()) && !/Marina/.test(tt), 'Tutora Giovana no lugar de "Tutora Marina" (#16)');
  ok(await page.locator('.demo-note').count() === 1, 'Tela da tutora avisa que os dados são de demonstração');
  // horário fixo com aluno para liberar (antes dependia do dia da semana: falhava aos sábados e domingos)
  await page.click('[data-act=slot][data-t="Qui 10h45"]');
  const rel = page.locator('[data-act=relopen]');
  if (await rel.count()) { await rel.first().click(); await page.click('[data-act=reldo]'); }
  await page.click('[data-act=logout]'); await page.click('[data-act=roleGestor]');
  ok(await page.locator('.demo-note').count() === 1 && await page.locator('text=Tutora Giovana').count() >= 1, 'Gestor: aviso de demonstração e liberação registrada como Tutora Giovana');
  ok(await page.locator('#en.sel').count() === 1, 'Gestor: campo de matrícula com estilo (#24)');
  await overflow(page, 'gestor 1366');
  await page.click('[data-act=logout]'); await page.click('[data-act=rolePais]'); await page.click('[data-act=pick][data-id=ana]');
  ok(/Família de Ana/.test(await page.locator('.top').innerText()), 'Pais: topo mostra "Família de Ana" (#23)');
  ok(page.errs.length === 0, 'Testes de correção (gestão): nenhum erro de console', JSON.stringify(page.errs.slice(0, 5)));
  await ctx.close();
}

// ======================= 3. Trilha Colônia, área da tutora, gabaritos =======================
async function colonia(browser, vp) {
  L(`\n=== Trilha Colônia · aluno · ${vp.width}x${vp.height} ===`);
  const { ctx, page } = await mk(browser, vp);
  await page.goto(URL.aluno);
  await page.click('[data-act=tutora] >> nth=0'); await page.fill('#pin', '0000'); await page.click('[data-act=pinok]');
  ok(/PIN errado/.test(await page.locator('#pinerr').innerText()), `${vp.width}: PIN errado não entra`);
  await page.fill('#pin', '2501'); await page.click('[data-act=pinok]');
  ok(await page.locator('[data-act=colon]').count() === 1, `${vp.width}: PIN padrão 2501 abre a área da tutora`);
  await page.click('[data-act=colon]'); // liga (missão 1 liberada)
  await page.click('[data-act=colmis][data-n="2"]'); // libera a missão 2 (Word) sem testes
  await overflow(page, `${vp.width} área da tutora`);
  await page.click('[data-act=tutorax]');
  await newKid(page, 'Caio', '8');
  ok(await page.locator('[data-act=openLes][data-m="4"][data-l="1"]').count() === 1, `${vp.width}: com a missão 2 liberada, o Word abre no 1º dia, sem teste de digitação`);
  ok(await page.locator('[data-act=openLes][data-m="5"][data-l="1"]').count() === 0, `${vp.width}: missão 4 (Excel) continua travada até a tutora liberar`);
  await overflow(page, `${vp.width} trilha Colônia`);
  // libera tudo e completa as aulas principais das 5 missões (pulando os bônus)
  await page.click('[data-act=tutora] >> nth=0'); await page.fill('#pin', '2501'); await page.click('[data-act=pinok]');
  for (const n of [3, 4, 5]) await page.click(`[data-act=colmis][data-n="${n}"]`);
  await page.click('[data-act=tutorax]');
  const main = await ev(page, () => COL.flatMap(m => m.main));
  let done = 0;
  for (const k of main) {
    const [m, l] = k.split('.');
    await ev(page, () => { V.view = 'home'; render(); });
    await page.click(`[data-act=openLes][data-m="${m}"][data-l="${l}"]`);
    const r = await solveLesson(page, 'col ' + k, { skipBonus: true }); if (r.ok) done++; else L('   ' + r.issues.join(' ; '));
    if (k === '4.1') ok(await page.locator('[data-act=home]', { hasText: 'Voltar à Colônia' }).count() === 1, `${vp.width}: fim da aula volta para a Colônia`);
  }
  ok(done === main.length, `${vp.width}: as ${main.length} aulas principais das 5 missões concluem`, `${done}/${main.length}`);
  await page.click('[data-act=home] >> nth=0');
  const cc = page.locator('[data-act=colcert]');
  ok(await cc.count() === 1, `${vp.width}: certificado da Colônia liberado no fim das missões (#21)`);
  if (await cc.count()) { await cc.click(); ok(/Colônia Digital/.test(await page.locator('.cert').innerText()) && /Giovana/.test(await page.locator('.cert').innerText()), `${vp.width}: certificado da Colônia com nome da tutora`); await overflow(page, `${vp.width} certificado Colônia`); }
  // gabaritos e ajustes
  await page.click('[data-act=home]');
  await page.click('[data-act=tutora] >> nth=0'); await page.fill('#pin', '2501'); await page.click('[data-act=pinok]');
  await page.click('[data-act=tabT][data-t=gabarito]'); await page.click('[data-act=gabM][data-m="5"]');
  const g = await page.locator('main').innerText();
  ok(/=A2\+B2/.test(g) && /Resposta:/.test(g) && /Onde costuma travar/.test(g), `${vp.width}: gabaritos do Excel com respostas e dicas (#17)`);
  await overflow(page, `${vp.width} gabaritos`);
  await page.click('[data-act=tabT][data-t=config]'); await page.fill('#tname', 'Giovana S.'); await page.fill('#tpin', '9876'); await page.click('[data-act=cfgsave]');
  await page.click('[data-act=tutorax]'); await page.click('[data-act=tutora] >> nth=0'); await page.fill('#pin', '2501'); await page.click('[data-act=pinok]');
  ok(await page.locator('[data-act=colon]').count() === 0, `${vp.width}: PIN antigo deixa de valer depois da troca`);
  await page.fill('#pin', '9876'); await page.click('[data-act=pinok]'); await page.click('[data-act=tabT][data-t=colonia]');
  ok(await page.locator('[data-act=colon]').count() === 1 && /Giovana S\./.test(await page.locator('h1').innerText()), `${vp.width}: PIN novo e nome da tutora salvos`);
  ok(page.errs.length === 0, `${vp.width}: Colônia sem erro de console`, JSON.stringify(page.errs.slice(0, 5)));
  await ctx.close();
}

// ======================= 4. cópia de segurança =======================
async function backup(browser) {
  L('\n=== Cópia de segurança (arquivo e código) ===');
  const vp = VPS[0];
  let { ctx, page } = await mk(browser, vp);
  await page.goto(URL.aluno); await newKid(page, 'Duda', '10');
  for (const l of [1, 2]) await doLesson(page, 1, l);
  await ev(page, () => { V.view = 'home'; render(); });
  const [dl] = await Promise.all([page.waitForEvent('download'), page.click('[data-act=mybackup]')]);
  const f1 = path.join(TMP, dl.suggestedFilename()); await dl.saveAs(f1);
  await page.waitForSelector('#codeout');
  const code = await page.locator('#codeout').inputValue();
  ok(/^progresso-duda-\d{4}-\d\d-\d\d\.json$/.test(dl.suggestedFilename()) && /^TD[01]\./.test(code), 'Aluno: "Guardar meu progresso" baixa o arquivo e mostra o código', dl.suggestedFilename() + ' · código ' + code.length + ' caracteres');
  await page.click('[data-act=modalx]');
  // segunda criança no mesmo notebook + cópia de todas (tutora)
  await page.click('[data-act=logout]'); await newKid(page, 'Enzo', '11'); await doLesson(page, 1, 1);
  await ev(page, () => { V.view = 'home'; render(); });
  await openTutora(page); await page.click('[data-act=tabT][data-t=backup]');
  const [dl2] = await Promise.all([page.waitForEvent('download'), page.click('[data-act=bkall]')]);
  const f2 = path.join(TMP, dl2.suggestedFilename()); await dl2.saveAs(f2);
  ok(Object.keys(JSON.parse(fs.readFileSync(f2, 'utf8')).students).length === 2, 'Tutora: cópia de todas as crianças do computador (2 crianças)');
  await ctx.close();
  // notebook novo (navegador limpo): traz pelo arquivo
  ({ ctx, page } = await mk(browser, vp));
  await page.goto(URL.aluno); await page.click('[data-act=restore]');
  await page.setInputFiles('#rfile', f1); await page.click('[data-act=restoredo]'); await page.waitForTimeout(400);
  const st = await ev(page, () => V.view === 'home' && me() ? { name: me().name, n: Object.keys(me().prog).length } : null);
  ok(st && st.name === 'Duda' && st.n === 2, 'Notebook novo: "Trazer meu progresso" pelo arquivo devolve a criança com as 2 aulas', JSON.stringify(st));
  await ctx.close();
  // navegador limpo: traz pelo código colado
  ({ ctx, page } = await mk(browser, vp));
  await page.goto(URL.aluno); await page.click('[data-act=restore]');
  await page.fill('#rcode', code); await page.click('[data-act=restoredo]'); await page.waitForTimeout(400);
  ok(await ev(page, () => V.view === 'home' && me() && me().name === 'Duda'), 'Navegador limpo: progresso volta pelo código colado');
  // juntar: a cópia da tutora traz as duas crianças sem apagar nada
  await page.click('[data-act=tutora] >> nth=0'); await page.fill('#pin', '2501'); await page.click('[data-act=pinok]');
  await page.click('[data-act=tabT][data-t=backup]'); await page.click('[data-act=restore]');
  await page.setInputFiles('#rfile', f2); await page.click('[data-act=restoredo]'); await page.waitForTimeout(400);
  const kids = await ev(page, () => realStudents().map(s => s.name + ':' + Object.keys(s.prog).length).sort());
  ok(JSON.stringify(kids) === JSON.stringify(['Duda:2', 'Enzo:1']), 'Importar a cópia do computador junta as crianças sem apagar progresso', JSON.stringify(kids));
  // arquivo inválido
  await page.waitForTimeout(1500);
  await page.click('[data-act=restore]'); await page.fill('#rcode', 'isso não é um código'); await page.click('[data-act=restoredo]'); await page.waitForTimeout(200);
  ok(/Não consegui ler/.test(await page.locator('#rmsg').innerText()), 'Código inválido mostra aviso e não quebra nada');
  ok(page.errs.length === 0, 'Cópia de segurança sem erro de console', JSON.stringify(page.errs.slice(0, 5)));
  await ctx.close();
}

// ======================= 5. dados antigos continuam funcionando =======================
async function migration(browser) {
  L('\n=== Dados salvos pela versão antiga ===');
  const ORIG = path.resolve(__dirname, '..', 'original-2026-11-20');
  const { ctx, page } = await mk(browser, VPS[0]);
  await page.goto('file://' + ORIG + '/aluno/index.html'); await newKid(page, 'Lia');
  await doLesson(page, 1, 1);
  const saved = await ev(page, () => localStorage.getItem('trilha-digital-demo-v3'));
  await page.goto(URL.aluno); // mesmo endereço de arquivo? não: copiamos o armazenamento
  await ev(page, s => { localStorage.setItem('trilha-digital-demo-v3', s); localStorage.removeItem('trilha-digital-demo-v3-sessao'); }, saved);
  await page.reload();
  const kids = await ev(page, () => [...document.querySelectorAll('[data-act=pick]')].map(b => b.innerText.split('\n')[0]));
  ok(kids.includes('Lia'), 'Criança criada na versão antiga continua aparecendo na versão nova', JSON.stringify(kids));
  await page.click('[data-act=pick]');
  ok(await ev(page, () => !!me().prog['1.1'] && tutorName() === 'Giovana'), 'Progresso antigo preservado e tutora padrão Giovana');
  ok(page.errs.length === 0, 'Migração sem erro de console', JSON.stringify(page.errs.slice(0, 5)));
  await ctx.close();
}

// ======================= 6. telas no celular (390) =======================
async function mobileScreens(browser) {
  L('\n=== Telas no celular 390x844 ===');
  const { ctx, page } = await mk(browser, VPS[1]);
  await enterAsKid(page, 'gestao'); await page.click('#demo');
  for (const [m, l, s] of [[4, 5, 1], [5, 5, 1], [6, 2, 1], [2, 4, 1], [1, 1, 5]]) {
    await ev(page, ([m, l, s]) => { V.mod = m; V.les = l; V.step = s; V.view = 'lesson'; V.errs = 0; V.st = {}; render(); }, [m, l, s]);
    await page.waitForTimeout(80); await overflow(page, `390 aula ${m}.${l} passo ${s + 1}`);
  }
  for (const r of ['roleTutor', 'roleGestor']) { await ev(page, () => { V = { st: {}, view: 'login', role: null }; render(); }); await page.click(`[data-act=${r}]`); await overflow(page, '390 ' + r); }
  ok(page.errs.length === 0, 'Telas do celular sem erro de console', JSON.stringify(page.errs.slice(0, 5)));
  await ctx.close();
}

// ======================= 7. registro de tempo por passo e atalho de salvar (22/11) =======================
async function tempoAtalho(browser) {
  L('\n=== Registro de tempo por passo e atalho de salvar ===');
  let { ctx, page } = await mk(browser, VPS[0]);
  await page.goto(URL.aluno); await newKid(page, 'Rafa', '9');
  const r1 = await doLesson(page, 1, 1);
  const lg = await ev(page, () => ({ n: (me().tlog || []).length, steps: steps(1, 1).length, e: me().tlog }));
  ok(r1.ok && lg.n === lg.steps && lg.e.every(x => x.k === '1.1' && x.s >= 0 && typeof x.m === 'number' && x.r > 0), 'Tempo: cada passo da aula 1.1 vira 1 registro (aula, passo, segundos, tempo-modelo)', `${lg.n}/${lg.steps}`);
  ok(lg.e.every((x, i) => x.p === i) && new Set(lg.e.map(x => x.r)).size === 1, 'Tempo: passos em ordem e na mesma tentativa');
  ok(lg.e.some(x => x.t === 'quiz') && lg.e.some(x => x.b === 1), 'Tempo: guarda o tipo do passo e marca o desafio bônus');
  // erros contados no passo certo
  await ev(page, () => { V.view = 'module'; V.mod = 1; render(); });
  await page.click('[data-act=openLes][data-m="1"][data-l="1"]'); await clickNext(page);
  const qa = await ev(page, () => steps(1, 1)[V.step].a);
  const wrong = await page.locator(`.opt:not([data-i="${qa}"])`).first(); await wrong.click(); await page.click(`.opt[data-i="${qa}"]`); await clickNext(page);
  const le = await ev(page, () => me().tlog.slice(-1)[0]);
  ok(le.p === 1 && le.e === 1, 'Tempo: erro registrado no passo onde aconteceu', JSON.stringify({ p: le.p, e: le.e }));
  // sair no meio da aula fica marcado
  await page.click('.crumb [data-act=openMod]'); await page.click('[data-act=leaveyes]');
  const lv = await ev(page, () => me().tlog.slice(-1)[0]);
  ok(lv.l === 1 && lv.p === 2, 'Tempo: saída no meio da aula fica registrada com o passo onde parou', JSON.stringify({ p: lv.p, l: lv.l }));
  // aquecimento também conta
  await ev(page, () => { V.view = 'home'; render(); });
  if (await page.locator('[data-act=warm]').count()) {
    await page.click('[data-act=warm]');
    for (let i = 0; i < 4; i++) { const t = await ev(page, () => document.getElementById('tbox').dataset.text); await typeText(page, t); await clickNext(page); }
    ok(await ev(page, () => me().tlog.filter(x => x.k === '2.0').length === 4), 'Tempo: aquecimento de digitação registrado (4 frases)');
  }
  // área da tutora: aba Tempos
  await openTutora(page); await page.click('[data-act=tabT][data-t=tempos]');
  const tt = await page.locator('main').innerText();
  ok(/Tempos por aula/.test(tt) && /1\.1/.test(tt) && /Aquecimento/.test(tt) && /fator F/.test(tt), 'Tutora: aba Tempos mostra as aulas, o aquecimento e o fator F');
  await overflow(page, '1366 aba Tempos');
  const [dl] = await Promise.all([page.waitForEvent('download'), page.click('[data-act=tempoCsv]')]);
  const f = path.join(TMP, dl.suggestedFilename()); await dl.saveAs(f);
  const csv = fs.readFileSync(f, 'utf8').replace(/^﻿/, '').trim().split(/\r?\n/);
  const nlog = await ev(page, () => me().tlog.length);
  ok(/^tempos-\d{4}-\d\d-\d\d\.csv$/.test(dl.suggestedFilename()) && csv[0].startsWith('crianca;idade;data;hora_inicio;aula') && csv.length === nlog + 1 && csv[1].startsWith('Rafa;9;'), 'Tutora: baixa a tabela de tempos (CSV para Excel), 1 linha por passo', `${dl.suggestedFilename()} · ${csv.length - 1} linhas`);
  ok(await page.locator('#codeout').count() === 1 && (await page.locator('#codeout').inputValue()).startsWith('crianca;'), 'Tutora: a tabela também aparece para copiar (claude.ai não baixa arquivo)');
  await page.click('[data-act=modalx]');
  // desligar o registro
  await page.click('[data-act=tempoTog]'); await page.click('[data-act=tutorax]');
  const n0 = await ev(page, () => me().tlog.length); await doLesson(page, 1, 2);
  ok(await ev(page, n0 => me().tlog.length === n0, n0), 'Tempo: com o registro desligado, nada é gravado');
  await ev(page, () => { DB.config.tempoOff = 0; save(); });
  // cópia de segurança leva os tempos e a junção não duplica
  await ev(page, () => { V.view = 'home'; render(); });
  const [bk] = await Promise.all([page.waitForEvent('download'), page.click('[data-act=mybackup]')]);
  const code = await page.locator('#codeout').inputValue(); await page.click('[data-act=modalx]');
  const fb = path.join(TMP, 'tempo-' + bk.suggestedFilename()); await bk.saveAs(fb);
  await page.click('[data-act=restore]'); await page.fill('#rcode', code); await page.click('[data-act=restoredo]'); await page.waitForTimeout(400);
  ok(await ev(page, n => me().tlog.length === n, nlog), 'Tempo: trazer a mesma cópia de novo não duplica os registros');
  await ctx.close();
  ({ ctx, page } = await mk(browser, VPS[1]));
  await page.goto(URL.aluno); await page.click('[data-act=restore]'); await page.setInputFiles('#rfile', fb); await page.click('[data-act=restoredo]'); await page.waitForTimeout(400);
  ok(await ev(page, n => !!me() && me().tlog.length === n, nlog), 'Tempo: os registros vão junto na cópia de segurança para outro notebook');
  await openTutora(page); await page.click('[data-act=tabT][data-t=tempos]'); await overflow(page, '390 aba Tempos');
  await page.click('[data-act=tempoClr]'); await page.click('[data-act=tempoClrYes]');
  ok(await ev(page, () => realStudents().every(x => !(x.tlog || []).length) && Object.keys(me().prog).length > 0), 'Tutora: "Apagar os tempos" limpa só os tempos, não o progresso');
  ok(page.errs.length === 0, 'Tempo no celular sem erro de console', JSON.stringify(page.errs.slice(0, 5)));
  await ctx.close();

  // atalho de salvar
  ({ ctx, page } = await mk(browser, VPS[0]));
  await page.goto(URL.aluno); await newKid(page, 'Teo', '11');
  const at0 = await ev(page, () => ({ q: LES['4.2'].find(x => x.atalho === 'quiz'), b: BANK[4].map(x => x[0]), i: tx(LES['4.2'][0].x) }));
  ok(/disquete/.test(at0.q.q) && at0.q.opts[at0.q.a] === 'O botão do disquete' && at0.b.includes('O botão do disquete...') && !/Ctrl \+ S/.test(at0.i), 'Atalho: sem conferir o Office, as aulas ensinam o botão do disquete', at0.q.q);
  await openTutora(page); await page.click('[data-act=tabT][data-t=config]');
  await page.selectOption('#tatalho', 'B'); await page.click('[data-act=cfgsave]');
  const atB = await ev(page, () => ({ q: LES['4.2'].find(x => x.atalho === 'quiz'), q2: LES['4.6'].find(x => x.atalho === 'quiz2'), b: BANK[4].map(x => x[0]), s: tx(LES['4.2'].find(x => x.atalho === 'sabia').x), a: animSvg('save') }));
  ok(atB.q.opts[atB.q.a] === 'Ctrl + B' && atB.q2.opts[atB.q2.a] === 'Ctrl + B' && atB.b.includes('Ctrl + B...') && /sublinha/.test(atB.s) && />B</.test(atB.a), 'Atalho: com "Ctrl + B" escolhido, aulas 4.2 e 4.6, teste do módulo 4 e animação mudam');
  await page.click('[data-act=tabT][data-t=gabarito]'); await page.click('[data-act=gabM][data-m="4"]');
  ok(/Resposta: Ctrl \+ B/.test(await page.locator('main').innerText()), 'Atalho: gabarito da tutora acompanha (Ctrl + B)');
  await page.reload();
  ok(await ev(page, () => LES['4.2'].find(x => x.atalho === 'quiz').opts[0] === 'Ctrl + B'), 'Atalho: escolha fica guardada depois de recarregar');
  await ev(page, () => { DB.config.atalho = 'S'; applyAtalho(); });
  ok(await ev(page, () => LES['4.6'].find(x => x.atalho === 'quiz2').opts[0] === 'Ctrl + S' && BANK[4].some(x => x[0] === 'Ctrl + S...')), 'Atalho: com "Ctrl + S" volta ao conteúdo original');
  // aula 4.2 de ponta a ponta com o atalho configurado
  await ev(page, () => { V.demo = true; V.role = 'aluno'; V.sid = realStudents()[0].id; V.view = 'module'; V.mod = 4; render(); });
  await page.click('[data-act=openLes][data-m="4"][data-l="2"]');
  const r42 = await solveLesson(page, '4.2-atalho');
  ok(r42.ok, 'Atalho: aula 4.2 completa com o atalho configurado', r42.issues.join(' ; '));
  ok(page.errs.length === 0, 'Atalho sem erro de console', JSON.stringify(page.errs.slice(0, 5)));
  await ctx.close();
}

(async () => {
  L('Bateria da plataforma · ' + new Date().toISOString() + ' · pasta ' + BASE);
  const browser = await chromium.launch();
  try {
    for (const vp of VPS) for (const w of ['aluno', 'gestao']) await fullRun(browser, w, vp);
    await specific(browser);
    for (const vp of VPS) await colonia(browser, vp);
    await backup(browser);
    await migration(browser);
    await mobileScreens(browser);
    await tempoAtalho(browser);
  } catch (e) { ok(false, 'bateria terminou sem exceção', e.message.split('\n')[0]); }
  await browser.close();
  L(`\nRESUMO: ${OUT.filter(x => x.startsWith('PASSOU')).length} verificações passaram, ${FAILS.length} falharam.`);
  if (FAILS.length) L('Falhas: ' + FAILS.join(' | '));
  fs.writeFileSync(path.join(__dirname, 'ultimo-resultado.txt'), OUT.join('\n') + '\n');
  process.exit(FAILS.length ? 1 : 0);
})();
