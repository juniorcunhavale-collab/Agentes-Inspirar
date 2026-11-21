# Plataforma Inspirar Informática: fonte, versões e testes

- `original-2026-11-20/`: cópia fiel do que estava publicado antes das correções (para voltar atrás, se precisar).
- `atual/src/`: **um código só** para os dois artifacts (`app.js` = conteúdo e lógica, `base.html` = estilos,
  `extra.css` = estilos novos, `assets.html` = logo e personagens).
- `atual/build.py`: monta `atual/gestao/index.html` ("Inspirar Informática") e `atual/aluno/index.html`
  ("Inspirar Informática Aluno", só perfil de aluno + área da tutora). Rodar depois de qualquer mudança.
- `testes/bateria.js`: bateria automática (Playwright, 1366x768 e 390x844). Rodar antes de publicar:
  `node plataforma-informatica/testes/bateria.js` → precisa terminar com "0 falharam".
- `testes/tempo.js`: estimativa de minutos por aula (antes x depois).
- `testes/checkup-original/`: scripts e log do check-up de 20/11.

Para usar sem claude.ai (Colônia): copiar `atual/aluno/index.html` para cada notebook e abrir no Edge.
PIN padrão da área da tutora: **2501** (trocar em Área da tutora → Ajustes, em cada notebook).

Registro de tempo (desde 21/11, ainda não publicado): cada passo concluído grava os segundos no próprio aluno.
A tutora vê o fator F e baixa ou copia a tabela em Área da tutora → **Tempos**. Atalho de salvar do Word:
Área da tutora → **Ajustes** (ou a constante `ATALHO_PADRAO` em `app.js`). Histórico de lotes: `CHANGELOG.md`.
Especificação da versão Níveis: `ESPECIFICACAO-NIVEIS.md`.
