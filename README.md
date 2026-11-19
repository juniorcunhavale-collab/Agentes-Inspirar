# Agentes Inspirar — escritório virtual de gestão

Sistema de agentes de IA (Claude Code) que trabalha como uma **equipe de gestão** do Instituto
Inspirar: Polo Unicesumar, Inspirar Idiomas, Inspirar Informática e novas frentes.

## A equipe

Cada agente tem nome e personalidade. A inicial do nome é a inicial da área, para facilitar lembrar.

```
                          👤 DONO (decide)
                                │
                 🧭 DAVI — Diretor Geral (sessão principal)
           coordena, consolida, prioriza, cobra pendências
                                │
   ┌────────────────┬───────────┴────────────┬──────────────────────┐
 RADAR E VISÃO    ÁREAS                      UNIDADES DE NEGÓCIO
 🛡️ Vera           💼 Camila (Comercial)      🎓 Ulisses (Unicesumar)
 ♟️ Estevão        📣 Marina (Marketing)      🌎 Isabela (Idiomas)
                  💰 Fernando (Financeiro)   💻 Tiago (Informática)
                  📚 Paula (Pedagógico)      🚀 Nina (Novos Negócios)
                  🤝 Sara (Sucesso do Aluno)
                  ⚙️ Otávio (Pessoas e Operações)
```

| Nome | Cargo | Papel em uma frase |
|---|---|---|
| **Davi** | Diretor Geral | Coordena a equipe, junta as opiniões e te entrega uma recomendação. |
| **Vera** | Sentinela da Controladoria | Vigia tudo: metas, caixa, evasão, prazos, números estranhos. Dá o alerta. |
| **Estevão** | Estrategista | Pensa melhorias e cenários, faz o papel de advogado do diabo. |
| **Camila** | Diretora Comercial | Funil, metas de matrícula, scripts, follow-up, parcerias B2B, cross-sell. |
| **Marina** | Gerente de Marketing | Campanhas, conteúdo pronto, anúncios, presença local. |
| **Fernando** | Diretor Financeiro | Caixa, DRE por unidade, inadimplência, preço, ponto de equilíbrio, repasses. |
| **Paula** | Coordenadora Pedagógica | Qualidade de ensino, cursos, professores, avaliação, aula experimental. |
| **Sara** | Gerente de Sucesso do Aluno | Retenção, evasão, rematrícula, satisfação, atendimento. |
| **Otávio** | Gerente de Pessoas e Operações | Equipe, processos (POPs), contratos, infraestrutura, LGPD. |
| **Ulisses** | Gestor do Polo Unicesumar | Operação do polo EAD: metas, ciclos, alunos ativos, mantenedora. |
| **Isabela** | Gestora da Inspirar Idiomas | Turmas, produtos, rematrícula e resultado da escola de idiomas. |
| **Tiago** | Gestor da Inspirar Informática | Portfólio atual, laboratório, empregabilidade. |
| **Nina** | Gerente de Novos Negócios | Encontra e testa novas fontes de receita ("outras opções"). |

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
Escreva normalmente e chame a equipe pelo nome, por exemplo:
- *"Isabela, a inadimplência do inglês está alta, o que fazemos?"*
- *"Nina, quero lançar um curso de IA para empresas. Vale a pena?"*
- *"Ulisses e Marina, montem a campanha de matrícula da Unicesumar para janeiro."*
- *"Davi, pergunta à Camila e ao Fernando: posso dar 20% de desconto na matrícula?"*

O Davi decide quais agentes chamar, junta as respostas e te entrega uma recomendação.

## Memória do negócio
- `gestao/pendencias.md` — o que precisa ser feito, por quem, até quando
- `gestao/riscos.md` — mapa de riscos
- `gestao/decisoes.md` — decisões tomadas e porquê
- `gestao/ideias.md` — banco de ideias

Quanto mais o `contexto/` e os `dados/` estiverem atualizados, melhores ficam os agentes.
