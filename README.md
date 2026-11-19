# Agentes Inspirar — escritório virtual de gestão

Sistema de agentes de IA (Claude Code) que trabalha como uma **equipe de gestão** do Instituto
Inspirar: Polo Unicesumar, Inspirar Idiomas, Inspirar Informática e novas frentes.

## A equipe

```
                         👤 DONO (decide)
                               │
                 🧭 DIREÇÃO GERAL (sessão principal)
          coordena, consolida, prioriza, cobra pendências
                               │
   ┌───────────────┬───────────┴───────────┬────────────────────┐
 RADAR E VISÃO   ÁREAS FUNCIONAIS        UNIDADES DE NEGÓCIO   
 🛡️ sentinela     💼 comercial            🎓 polo-unicesumar    
 ♟️ estrategista   📣 marketing            🌎 inspirar-idiomas   
                 💰 financeiro           💻 inspirar-informatica
                 📚 pedagogico           🚀 novos-negocios     
                 🤝 sucesso-aluno                              
                 ⚙️ pessoas-operacoes                          
```

| Agente | Papel em uma frase |
|---|---|
| **sentinela** | Vigia tudo: metas, caixa, evasão, prazos, números estranhos. Dá o alerta. |
| **estrategista** | Pensa melhorias e cenários, faz o papel de advogado do diabo. |
| **comercial** | Funil, metas de matrícula, scripts, follow-up, parcerias B2B, cross-sell. |
| **marketing** | Campanhas, conteúdo pronto, anúncios, presença local. |
| **financeiro** | Caixa, DRE por unidade, inadimplência, preço, ponto de equilíbrio, repasses. |
| **pedagogico** | Qualidade de ensino, cursos, professores, avaliação, aula experimental. |
| **sucesso-aluno** | Retenção, evasão, rematrícula, satisfação, atendimento. |
| **pessoas-operacoes** | Equipe, processos (POPs), contratos, infraestrutura, LGPD. |
| **polo-unicesumar** | Dono da operação do polo EAD: metas, ciclos, alunos ativos, mantenedora. |
| **inspirar-idiomas** | Dono da escola de idiomas: turmas, produtos, rematrícula, resultado. |
| **inspirar-informatica** | Dono da unidade de informática: portfólio atual, laboratório, empregabilidade. |
| **novos-negocios** | Encontra e testa novas fontes de receita ("outras opções"). |

## Como usar

### Primeiros passos (implantação)
1. Rode **`/atualizar-contexto`** — o sistema vai te entrevistar e preencher `contexto/`.
   (Ou responda `contexto/00-questionario-inicial.md` como preferir.)
2. Coloque as primeiras planilhas em `dados/` (veja `dados/README.md`).
3. Rode **`/diagnostico situação geral do negócio`** para o primeiro raio-x completo.

### Rotina sugerida
| Quando | Comando |
|---|---|
| Todo dia | `/briefing` |
| Segunda-feira | `/reuniao-semanal` |
| Dia 1–5 do mês | `/fechamento-mensal` |
| Antes de cada ciclo de matrícula | `/plano-captacao <unidade>` |
| Quando algo preocupar | `/diagnostico <problema>` |
| Uma vez por mês (ou quando quiser crescer) | `/ideias` |

### Ou simplesmente converse
Escreva normalmente, por exemplo:
- *"A inadimplência do inglês está alta, o que fazemos?"*
- *"Quero lançar um curso de IA para empresas. Vale a pena?"*
- *"Monta a campanha de matrícula da Unicesumar para janeiro."*
- *"Fala com o comercial e o financeiro: posso dar 20% de desconto na matrícula?"*

A Direção Geral decide quais agentes chamar, junta as respostas e te entrega uma recomendação.

## Memória do negócio
- `gestao/pendencias.md` — o que precisa ser feito, por quem, até quando
- `gestao/riscos.md` — mapa de riscos
- `gestao/decisoes.md` — decisões tomadas e porquê
- `gestao/ideias.md` — banco de ideias

Quanto mais o `contexto/` e os `dados/` estiverem atualizados, melhores ficam os agentes.
