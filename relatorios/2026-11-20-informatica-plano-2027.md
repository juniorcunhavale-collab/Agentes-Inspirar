# Inspirar Informática — plano de 2027: máquinas, Fundo de Equipamentos e projetos correlatos
**Data:** 2026-11-20 · **Equipe:** Telchar (técnico), Fíli (financeiro), Nori (projetos correlatos)
· consolidado por Durin

## Resumo (o que a equipe concluiu)
1. **Máquina melhor não é necessária em 2027.** O Dell recondicionado (~R$ 900) roda tudo o que
   está previsto: plataforma, Scratch, LibreOffice, Canva e robótica de entrada (micro:bit). Máquina
   melhor só quando houver um **produto pago que exija** (ex.: trilha de vídeo para 13–15 anos).
   E, mesmo assim, o caminho mais barato é **upgrade de memória do próprio Dell** (8 → 16 GB).
2. **A Informática se autofinancia com uma regra simples** (Fundo de Equipamentos, abaixo). No
   cenário realista, o fundo paga **4 Básicas no ano** e ainda sobram ~R$ 12,6 mil.
3. **Acima de ~6 máquinas, o limite passa a ser a tutora**, não o equipamento
   (6 crianças por horário × 11 horários = 66 vagas).
4. **A meta (~R$ 4.700/mês) não é batida só com as turmas regulares** no cenário realista
   (dez/2027 ≈ R$ 4.320/mês, ~32 alunos; a meta pede ~35 alunos com 10% de inadimplência).
   Os projetos correlatos do Nori (Hora do Código, Colônia de julho, escolas, prefeitura)
   cobrem a diferença.
5. **Decisão do Durin sobre a sobra de ~R$ 12,6 mil:** como máquina melhor não é necessária em
   2027, a sobra vai prioritariamente para a **reserva geral do Instituto** (hoje zero) e para um
   **piloto de 2–3 kits micro:bit** (~R$ 300 cada, segundo o Telchar) para o 2º ano. Máquina melhor
   só com produto pago aprovado.

## 1. Níveis de máquina (Telchar)
| Nível | Para quê | Mínimo | Preço | Quando |
|---|---|---|---|---|
| **Básica** (recondicionada) | Plataforma, Scratch, LibreOffice, Canva, micro:bit | Intel 8ª ger.+/Ryzen 2000+, 8 GB, SSD 256 GB, Windows 11, teclado ABNT2 | ~R$ 900 (premissa do dono) | Já |
| **Intermediária** | Design pesado, vídeo 1080p (13–15 anos) | i5 10ª ger.+, **16 GB**, SSD 512 GB, Full HD | [PESQUISAR] — preferir upgrade do Dell | Trilha de vídeo aprovada + ≥ 4 alunos pagantes + teste de vídeo falhar no Básico |
| **Avançada** (nova) | Cursos adultos com software profissional | Ryzen 7 ou equivalente, 16 GB, SSD 512 GB | R$ 3.400–5.400 (ofertas fev–mai/2026) | Só com curso adulto pago que exija |

**Antes da 1ª compra:** confirmar que o modelo Dell tem **slot de memória livre e SSD M.2**
(sem isso, a estratégia de upgrade não funciona). Fazer 3 cotações com frete.
Alternativas avaliadas: Chromebook (não vale), mini-PC (só posto fixo/recepção), kits micro:bit
(melhor "upgrade de produto" para o 2º ano).

## 2. Fundo de Equipamentos — a regra (Fíli)
1. **100% das entradas** (matrícula, margem do kit, Colônia) vão para o **Fundo de Equipamentos**.
2. **50% da margem mensal** da Informática também vão para o fundo, **até ele ter R$ 5 mil parados**.
3. Os outros 50%: primeiro um **colchão operacional da Informática de R$ 1.500**; depois, a
   **reserva geral do Instituto**.
4. As mensalidades antecipadas dos Fundadores (jan + fev) **não entram no fundo**: pagam jan e fev.

**Proteções:** duas caixinhas Pix separadas ("Fundo de Equipamentos" e "Operacional Informática");
o fundo só paga máquina, acessório, reparo ou reembolso; a Informática paga ao Instituto o rateio
da Giovana; sem dívida nova; **freio automático** (2 meses de margem negativa ou inadimplência
> 15% congelam as compras); conferência semanal pelo Valinor.

## 3. Projeção resumida (Fíli — premissas: R$ 150/mês, matrícula R$ 100, Giovana 50% rateada, imposto 6% a confirmar)
| | Pessimista | Realista | Otimista |
|---|---|---|---|
| Alunos em dez/2027 | 14 | 32 | 46 |
| Receita no ano | ~R$ 19,6 mil | ~R$ 41,6 mil | ~R$ 62,7 mil |
| Margem de contribuição no ano | ~R$ 11,3 mil | ~R$ 31,9 mil | ~R$ 51,8 mil |
| Máquinas compradas | 0 | 4 | 4 + |
| Repasse à reserva do Instituto | ~R$ 4,3 mil | ~R$ 20 mil | ~R$ 37,7 mil |

- **Ponto de equilíbrio direto:** ~5 alunos.
- **Fevereiro é o mês mais apertado** (no pessimista, margem de −R$ 157).

**Calendário de compras (realista):** 1 Básica de teste até 08/01 (se o fundo tiver R$ 980) ·
março: 2ª Básica (4 máquinas) · setembro: 2ª onda (6 máquinas). Gatilho: ocupação > 70% **e**
dinheiro já no fundo.

Simulador: `modelos/simulador-fundo-informatica.py` — `python3 modelos/simulador-fundo-informatica.py <X> <custo_kit>`.

## 4. Projetos correlatos (Nori — fontes no relatório original da conversa)
| # | Ideia | Nota (máx. 25) |
|---|---|---|
| 1 | **Hora do Código Inspirar** — evento grátis de 1h em dezembro (campanha mundial; no Brasil, Programaê!), gancho para o Pacote Fundador | **23** |
| 2 | **Colônia Digital também em julho** (férias 12–25/07) — calendário fixo de férias | 21 |
| 3 | **B2B escolas particulares: "Computação BNCC"** — a norma de computação vale para todas as escolas | 20 |
| 4 | **B2B prefeitura: formação de professores** em BNCC Computação (e gancho para pós/2ª licenciatura do polo) | 20 |
| 5 | **Clube Scratch de sábado** (modelo Code Club) — funil do 2º ano | 20 |
| 6 | Oficinas de educação digital na **Jornada Ampliada** municipal (4º ano) | 19 |
| 7 | Turma preparatória para a **OBI** (Olimpíada Brasileira de Informática), modalidade Iniciação | 19 |
| 8 | Celular e internet seguros **60+** (golpes, WhatsApp, Gov.br) | 18 |
| 9 | "Primeiro emprego digital" 14–17 anos (Fase 2) | 17 |
| 10 | Excel/IA para empresas locais (turma fechada, à noite) | 17 |

**Contexto que dá força ao B2B público (Nori):** a BNCC Computação (Res. CNE/CEB nº 1/2022) e a
Resolução CIF nº 24/2026 ligam o alinhamento do currículo de computação à complementação VAAR do
Fundeb; a rede estadual do PR já ensina programação a partir do 6º ano — a lacuna é do 1º ao 5º
ano (rede municipal), exatamente o público da Inspirar. Confirmar detalhes com a Secretaria
Municipal antes de usar em proposta.

**Não fazer agora:** robótica com kits em escala, virar entidade de Jovem Aprendiz, licenciar a
plataforma para outras cidades, informática para adultos como produto principal, franquias
(investimento de R$ 147–271 mil).

**Gargalo de todo B2B:** quem dá a aula em horário escolar (Giovana no polo, Júnior no inglês).
Resolver antes de vender.

## 5. Decisões para os sócios
1. Aprovar a **regra do Fundo de Equipamentos** (100% das entradas + 50% da margem, teto de R$ 5 mil).
2. Aprovar a **Hora do Código** em dezembro (divulgação a partir de 24/11).
3. Destino da sobra: **reserva do Instituto + piloto micro:bit** (recomendação do Durin) ou máquinas melhores.
4. Explorar **escolas e prefeitura** (exige definir quem dá a aula).
5. **Kit do Aluno:** preço R$ 100–120 com custo de até R$ 35–40 (hipótese do Fíli), a orçar em gráfica local.
