// Estimativa de tempo por aula (antes x depois), a partir do conteúdo das aulas.
// É um MODELO (hipótese), não medição com crianças. Premissas (criança de 8 a 10 anos):
//  leitura 70 palavras/min + 20 s por tela; animação +30 s; pergunta 30 s; ordenar 15 s por item;
//  clicar na figura 20 s; bolinhas 5 s cada; digitação 30 caracteres/min (cerca de 6 palavras/min) x 1,3 de correções;
//  simulador Word/Excel 90 s por tarefa, PowerPoint 70 s; formulário 90 s por campo;
//  lista de marcar 20 s por item, ou 90 s por item quando é atividade "no computador de verdade".
// Uso: node plataforma-informatica/testes/tempo.js
const { chromium } = require('playwright');
const path = require('path');
const files = { antes: path.resolve(__dirname, '../original-2026-11-20/gestao/index.html'), depois: path.resolve(__dirname, '../atual/gestao/index.html') };
(async () => {
  const b = await chromium.launch(); const res = {};
  for (const [k, f] of Object.entries(files)) {
    const p = await b.newPage(); await p.route(/fonts/, r => r.fulfill({ status: 200, body: '' })); await p.goto('file://' + f);
    res[k] = await p.evaluate(() => {
      const words = t => String(t || '').split(/\s+/).filter(Boolean).length;
      const real = it => /verdade|tutora|Explorador|Word de verdade|notebook/i.test(it);
      const sec = s => {
        const y = x => typeof x === 'string' ? x : (x && x.y) || '';
        switch (s.t) {
          case 'info': return 20 + words(y(s.x)) / 70 * 60;
          case 'anim': return 50 + words(y(s.x)) / 70 * 60;
          case 'quiz': return 30; case 'order': return 15 * s.items.length; case 'hot': return 20; case 'targets': return 5 * s.n;
          case 'type': return y(s.text).length / 30 * 60 * 1.3;
          case 'word': return 90 * SIMS[s.sim].tasks.length; case 'xl': return 90 * SIMX[s.sim].tasks.length; case 'ppt': return 70 * SIMP[s.sim].tasks.length;
          case 'form': return 90 * s.fields.length; case 'check': return s.items.reduce((a, it) => a + (real(s.q + it) ? 90 : 20), 0);
        } return 30;
      };
      const out = {};
      for (const m of MODS) for (let l = 1; l <= m.aulas.length; l++) { const st = LES[m.n + '.' + l] || []; out[m.n + '.' + l] = { passos: st.length, bonus: st.filter(s => s.bonus).length, min: st.reduce((a, s) => a + sec(s), 0) / 60, minSemBonus: st.filter(s => !s.bonus).reduce((a, s) => a + sec(s), 0) / 60 }; }
      return out;
    });
  }
  await b.close();
  const f = x => x.toFixed(1).replace('.', ',');
  console.log('| Aula | Passos antes | Passos depois (bônus) | Min. antes | Min. depois sem bônus | Min. depois com bônus |');
  console.log('|---|---|---|---|---|---|');
  const tot = { a: 0, d: 0, db: 0, pa: 0, pd: 0 }, byMod = {};
  for (const k of Object.keys(res.antes)) {
    const a = res.antes[k], d = res.depois[k];
    console.log(`| ${k} | ${a.passos} | ${d.passos} (${d.bonus}) | ${f(a.min)} | ${f(d.minSemBonus)} | ${f(d.min)} |`);
    tot.a += a.min; tot.d += d.minSemBonus; tot.db += d.min; tot.pa += a.passos; tot.pd += d.passos;
    const m = k.split('.')[0]; byMod[m] = byMod[m] || { a: 0, d: 0, db: 0 }; byMod[m].a += a.min; byMod[m].d += d.minSemBonus; byMod[m].db += d.min;
  }
  console.log(`| **Total (40 aulas)** | ${tot.pa} | ${tot.pd} | ${f(tot.a)} | ${f(tot.d)} | ${f(tot.db)} |`);
  console.log('\nPor módulo (min): ' + Object.entries(byMod).map(([m, v]) => `M${m} ${f(v.a)} → ${f(v.d)} (${f(v.db)} com bônus)`).join(' · '));
  console.log(`Média por aula: ${f(tot.a / 40)} → ${f(tot.d / 40)} min (${f(tot.db / 40)} com bônus). Passos por aula: ${f(tot.pa / 40)} → ${f(tot.pd / 40)}`);
})();
