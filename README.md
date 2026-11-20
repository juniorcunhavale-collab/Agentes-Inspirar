# Agentes Inspirar — escritório virtual de gestão

Sistema de agentes de IA (Claude Code) que trabalha como uma **equipe de gestão** do Instituto
Inspirar: Polo Unicesumar, Inspirar Idiomas, Inspirar Informática e novas frentes.

## A equipe

Os nomes vêm do universo de Tolkien, e a inicial de cada um é a inicial da área, para facilitar lembrar.

```
                          👤 DONO (decide)
                                │
                 🧭 DURIN — Diretor Geral (sessão principal)
           coordena, consolida, prioriza, cobra pendências
                                │
   ┌────────────────┬───────────┴────────────┬──────────────────────┐
 RADAR E VISÃO    ÁREAS                      UNIDADES DE NEGÓCIO
 🛡️ Valinor        💼 Celeborn (Comercial)    🎓 Ulmo (Unicesumar)
 ♟️ Elrond         📣 Merry (Marketing)       🌎 Isengard (Idiomas)
                  💰 Fíli (Financeiro)       💻 Telchar (Informática)
                  📚 Pelennor (Pedagógico)   🚀 Nori (Novos Negócios)
                  🤝 Sam (Sucesso do Aluno)
                  ⚙️ Orthanc (Pessoas e Operações)
```

| # | Nome | Função | Papel em uma frase |
|---|---|---|---|
| 0 | **Durin** | Direção Geral | Coordena a equipe, junta as opiniões e te entrega uma recomendação. |
| 1 | **Valinor** | Sentinela | Vigia tudo: metas, caixa, evasão, prazos, números estranhos. Dá o alerta. |
| 2 | **Elrond** | Estrategista | Pensa melhorias e cenários, faz o papel de advogado do diabo. |
| 3 | **Celeborn** | Comercial | Funil, metas de matrícula, scripts, follow-up, parcerias B2B, cross-sell. |
| 4 | **Merry** | Marketing | Campanhas, conteúdo pronto, anúncios, presença local. |
| 5 | **Fíli** | Financeiro | Caixa, DRE por unidade, inadimplência, preço, ponto de equilíbrio, repasses. |
| 6 | **Pelennor** | Pedagógico | Qualidade de ensino, cursos, professores, avaliação, aula experimental. |
| 7 | **Sam** | Sucesso do Aluno | Retenção, evasão, rematrícula, satisfação, atendimento. |
| 8 | **Orthanc** | Pessoas e Operações | Equipe, processos (POPs), contratos, infraestrutura, LGPD. |
| 9 | **Ulmo** | Polo Unicesumar | Operação do polo EAD: metas, ciclos, alunos ativos, mantenedora. |
| 10 | **Isengard** | Inspirar Idiomas | Turmas, produtos, rematrícula e resultado da escola de idiomas. |
| 11 | **Telchar** | Inspirar Informática | Portfólio atual, laboratório, empregabilidade. |
| 12 | **Nori** | Novos Negócios | Encontra e testa novas fontes de receita ("outras opções"). |

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
- *"Isengard, a inadimplência do inglês está alta, o que fazemos?"*
- *"Nori, quero lançar um curso de IA para empresas. Vale a pena?"*
- *"Ulmo e Merry, montem a campanha de matrícula da Unicesumar para janeiro."*
- *"Durin, pergunta ao Celeborn e ao Fíli: posso dar 20% de desconto na matrícula?"*

O Durin decide quais agentes chamar, junta as respostas e te entrega uma recomendação.

## Memória do negócio
- `gestao/pendencias.md` — o que precisa ser feito, por quem, até quando
- `gestao/riscos.md` — mapa de riscos
- `gestao/decisoes.md` — decisões tomadas e porquê
- `gestao/ideias.md` — banco de ideias

Quanto mais o `contexto/` e os `dados/` estiverem atualizados, melhores ficam os agentes.
