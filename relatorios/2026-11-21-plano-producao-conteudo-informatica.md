# Plano de produção do currículo anual da Inspirar Informática
**Data:** 2026-11-21 · **Elaborado por:** Telchar (Gestor da Inspirar Informática) · **Pedido:** Durin
**Base:** currículo do Pelennor (`relatorios/2026-11-21-curriculo-anual-informatica.md`), correções de 20/11
(`relatorios/2026-11-20-correcoes-plataforma-informatica.md`), `plataforma-informatica/LEIA-ME.md`,
`plataforma-informatica/atual/src/app.js` (só leitura), `gestao/pendencias.md` (itens 27, 34, 64 a 72).
**Data da Colônia:** 11 a 15/01/2027 (confirmada pelo Júnior). Nada foi alterado nem publicado nesta tarefa.

Legenda: **fato** = está nos arquivos ou no código · **estimativa** = cálculo meu · **hipótese** = aposta a confirmar.

---

## 1. Resumo (semáforo: AMARELO, viável com 3 condições)

1. **Sim, os marcos do Pelennor são viáveis**, e com folga a partir de fevereiro. O único marco apertado é o **Bronze**: E1–E10 até 01/02 é seguro; E1–E14 até 01/02 é provável; o limite de 15/02 para E11–E14 é a rede de segurança.
2. **O gargalo não é escrever código, é o tempo de revisão do Júnior.** O código é produzido por mim (Telchar/Claude), não pelo Júnior. Estimo **~30 sessões de produção** no período (cerca de 15 dias de trabalho) contra **~20 h do Júnior em 8 meses**, sendo quase nada entre 21/12 e 17/01.
3. **Condições:** (a) o Júnior **delega à Giovana a aprovação aula a aula** e fica só com as decisões de estrutura (30 min/semana); (b) o Pelennor entrega os roteiros do Bronze **em 2 partes (11/12 e 18/12)**; (c) a **versão Colônia fica congelada de 27/12 a 15/01**, e a estrutura de níveis é feita em paralelo e só vai para os alunos em **25/01**.
4. **Prata (01/04), Apresentações + Scratch (01/06) e Ouro (01/08) têm folga de 2 a 4 semanas** (fato: o simulador de PowerPoint já existe, com 6 simulações e 7 aulas). Diamante (01/11) depende da proposta da pendência 34 e é produzido de agosto a outubro, fora desta janela.
5. **Maior risco técnico:** levar o progresso das crianças da Colônia (versão por semestres) para a versão por níveis sem perder nada. Isso exige migração testada com cópias de segurança reais antes de 25/01.

---

## 2. Mudanças de estrutura na plataforma

**Como o código está hoje (fato):** 7 módulos (`MODS`), 2 semestres (`SEM`: módulos 1–4 e 5–7), progresso salvo por aula (`'4.5'`), teste por módulo (perguntas ≥ 70 + meta de digitação), certificado por semestre, tudo no navegador (`localStorage`, chave `trilha-digital-demo-v3`). Um código só gera os 2 artifacts (`build.py`).

**Princípio do redesenho:** as 40 aulas atuais **mantêm o mesmo código** (`1.1` … `7.5`), para o progresso já feito continuar valendo. Por cima delas entra uma camada nova: **nível → módulo novo (B0…O4) → itens**. Cada item pode ser uma aula-base, uma aula nova, um projeto, uma atividade fora da plataforma (caderno, Scratch, LibreOffice) marcada pela tutora, ou uma avaliação.

Unidade de esforço: **1 sessão** = meio dia de trabalho do Telchar/Claude, incluindo a bateria de testes.

| # | Mudança | O que muda para o aluno e para a Giovana | Esforço Telchar | Esforço Júnior | Depende de |
|---|---|---|---|---|---|
| E1 | **Níveis no lugar de semestres** | Trilha em 3 níveis (Bronze, Prata, Ouro) com os módulos B0–O4; os testes antigos dos módulos 1–7 viram **prova de validação** (passou, pula a aula-base); teste de nível no fim. Telas de tutor, gestor e pais passam a mostrar nível e módulo novo | 3 sessões | 30 min (decide nomes e texto) | Decisões D1–D3 (seção 7) |
| E2 | **Migração de dados** | Quem fez a Colônia ou usou a versão antiga entra na nova com tudo validado. A importação de cópias de segurança antigas continua funcionando (código e arquivo `.json`) | 1 sessão | 15 min (testa 1 cópia real) | E1 |
| E3 | **Rotina fixa do encontro (8 + 47 + 5)** | Botão "Começar o encontro": aquecimento de digitação com frases por nível (o motor existe: `WARM`) → missão do dia → **diário de bordo** ("Hoje eu aprendi a…" + carinha). Contador "Encontro 7" | 1,5 sessão | — | E1 |
| E4 | **Certificados por nível** | Certificado Bronze, Prata e Ouro com os 4 critérios do Pelennor (módulos, teste ≥ 70, meta de digitação, produtos com rubrica ≥ 6). Imprimir. Sem PDF com código conferível (precisa de servidor) | 0,5 sessão | 15 min (aprova texto e carga horária) | E1, E6 |
| E5 | **Missões Extras (★) e Missões Reforço** | Cada módulo com 2–3 extras (marca "Craque") e 1 reforço. Reforço sugerido automaticamente quando a criança erra 2 vezes o mesmo passo ou a rubrica fica < 6 | 1 sessão (estrutura) | — | E1 |
| E6 | **Produtos e portfólio** | O que a criança faz no simulador (cartão, livrinho, planilha, slides) **fica salvo** e pode ser impresso. A Giovana marca a rubrica (4 critérios, 1 min). Tela "Meu portfólio" para imprimir e levar na pasta física | 1,5 sessão | — | E1 |
| E7 | **Atividades fora da plataforma** | Passo "no caderno / no Scratch / no LibreOffice": a criança faz fora, a Giovana confirma com o PIN | 0,5 sessão | — | E1 |
| E8 | **Limite de 1 módulo à frente** | A criança abre no máximo 1 módulo além do previsto para o número de encontros que já fez (contados pelo diário). A Giovana pode liberar com motivo (como já faz nas liberações) | 0,5 sessão | 10 min (regra dura ou flexível: D4) | E3 |
| E9 | **Área da tutora ampliada** | Roteiro de cada encontro, "onde trava", rubrica, quem está à frente ou atrás do plano, **sinais de alerta para o Sam** (frequência < 75%, 2 encontros sem concluir, carinha "difícil" 3 vezes) | 1 sessão | — | E1, E3 |
| E10 | **Registro de tempo por passo** (para o teste de dezembro) | Grava início e fim de cada passo; a tutora exporta a tabela de tempos. Entra **na versão atual**, antes do teste com crianças | 0,5 sessão | 10 min (OK para publicar) | — (fazer já) |
| E11 | **Bateria estendida + 3º alvo de build** (artifact de teste) | Ver seção 5 | 1,5 sessão | — | E1 |
| | **Total da estrutura** | | **~12,5 sessões** | **~1h30** | |

**Ordem de construção (estimativa):** E10 (até 04/12, versão atual) → E1 + E2 + E11 (07–18/12) → E3 + E7 + E6 (14–23/12) → E4 + E5 + E8 + E9 (28/12–08/01).

**O que eu NÃO faço sem banco de dados:** painel dos pais real, tutora vendo vários notebooks juntos, login com senha. Mas o modelo de dados novo (nível, encontro, diário, produtos, rubrica) será desenhado **já pensando no Supabase**, para o painel dos pais (pendência 66) só ler o que existe. Enquanto o painel não sai, **o portfólio impresso e as mini-Mostras são a prova para os pais** (o painel não deve ser prometido na venda).

---

## 3. Backlog de conteúdo

Tamanho: **P** ≤ 1 h de produção · **M** ≈ meia sessão · **G** ≈ 1 a 2 sessões (tempo do Telchar).
Quem: **T** = Telchar/Claude no código · **Pe** = Pelennor (roteiro pedagógico: objetivo, passos, textos 8–9 e 10–12 anos, quizzes, gabarito, rubrica, páginas do caderno) · **J** = Júnior · **G** = Giovana · **F** = Fíli (custo).

### 3.1 Bronze (marco: E1–E10 em 01/02, E11–E14 em 15/02)
| ID | Item | Tipo | Tam. | T | Pe | J | G |
|---|---|---|---|---|---|---|---|
| BR-01 | B0 nivelamento: diagnóstico de 25 min (mouse, leitura, digitação 1 min, 5 perguntas) + avatar + **Cartão do Explorador** para imprimir | Aula nova + avaliação | M | código e impressão | roteiro | aprova | aplica |
| BR-02 | B1 **simulador de pastas** (criar "Pasta do [nome]", salvar, renomear, achar o arquivo) + 2 aulas | Simulador novo + 2 aulas | G | sim. e aulas | roteiro | testa no Windows real se o desenho bate | testa com 1 criança |
| BR-03 | B2 **jogos de digitação** por fileira, ditado curto, caça ao acento, **recorde pessoal** e gráfico antes × depois | 3 modos sobre o motor atual + 3 aulas | M | sim | roteiro dos textos | testa ABNT2 (acentos) | testa |
| BR-04 | B3 Internet segura ampliada: fato ou boato, pegada digital, o que eu não conto, quando chamar um adulto | 4 aulas | M | aulas | roteiro | — | testa |
| BR-05 | B4 aula curta "ordenar passos" (plataforma) | 1 aula | P | aula | roteiro | — | — |
| BR-06 | B5 projeto **cartão de aniversário** (os bônus atuais viram projeto) + **imprimir a criação** | 1 aula-projeto | P | aula + impressão | rubrica | — | testa impressão |
| BR-07 | **Teste Bronze**: sorteio dos bancos 1–3 + 2 tarefas práticas + mini-Mostra | Avaliação | M | código | 2 tarefas + roteiro da Mostra | aprova regras | aplica |
| BR-08 | Rotina: banco de frases Bronze (≥ 30, sem acento antes da 2.4) + diário | Conteúdo + E3 | P | código | frases | — | — |
| BR-09 | **Caderno Bronze** (12–16 páginas: partes do computador, Pacto da Internet Segura, robô humano, cartas de sequência, labirinto do Theo, algoritmo da minha rotina) | Papel | M | diagramação para imprimir (na área da tutora) | **conteúdo** | imprime (F: custo) | aplica |
| BR-10 | Missões Extras Bronze (2 por módulo; os 23 bônus atuais cobrem metade) | Conteúdo | M | código | roteiro | — | — |
| BR-11 | Roteiro por encontro E1–E14 + gabaritos + "onde trava" para a Giovana | Material da tutora | P | gabarito automático (já existe) | roteiro | — | **usa e corrige** |
| BR-12 | Trocar mascotes antigos por Theo e Lia (pendência 72) | Arte | P | código | — | **imagens** (Merry) | — |

### 3.2 Prata (marco: 01/04; meu alvo: 15/03)
| ID | Item | Tipo | Tam. | T | Pe | J | G |
|---|---|---|---|---|---|---|---|
| PR-01 | **Word multipágina**: capa, quebra de página, numeração, corretor (sublinhado vermelho) + modelo do livrinho com Theo e Lia (2 temas) | Extensão grande do simulador + 3 aulas | **G** (2 sessões) | sim + aulas | roteiro + 2 modelos | aprova | testa com 1 criança |
| PR-02 | Livrinho: imprimir 4 a 6 páginas | Impressão | P | código | — | define impressora | testa |
| PR-03 | **Excel: ordenar A–Z, bordas, cabeçalho** + modelo "Minha coleção" | Extensão do simulador + 2 aulas | M | sim + aulas | roteiro | — | testa |
| PR-04 | Mesada inteligente: meta de economia, mercadinho, MÉDIA e subtração, gráfico (valores fictícios) | 2 aulas + desafio | M | aulas | roteiro | — | testa |
| PR-05 | P4 Internet II: comparar fontes, crédito de imagem, golpes, o que é IA e por que conferir | 3 aulas | M | aulas | roteiro | — | testa |
| PR-06 | Navegador simulado (pendência #11 do check-up), para pesquisar "de verdade" sem internet aberta | Simulador novo (opcional) | G | sim | — | — | testa |
| PR-07 | Teste Prata + certificado Prata + banco de frases Prata | Avaliação | M | código | tarefas | aprova | aplica |
| PR-08 | **Caderno Prata** (~10 páginas: planejar o livrinho, ficha de pesquisa, plano da mesada) | Papel | M | diagramação | conteúdo | imprime | aplica |
| PR-09 | Missões Reforço do Bronze (a partir do que travou de fato) + Extras do Prata | Conteúdo | M | código | roteiro | — | **diz onde travou** |

### 3.3 Ouro (marcos: Apresentações e Scratch 01/06; Ouro inteiro 01/08)
| ID | Item | Tipo | Tam. | T | Pe | J | G |
|---|---|---|---|---|---|---|---|
| OU-01 | **Apresentações: extensão do simulador de PowerPoint** (fato: já existe com 6 simulações) para 5 slides, layout "1 ideia por slide", **roteiro de fala**, **ensaio cronometrado** (2 min) e imprimir 6 slides por folha | Extensão + 2 aulas novas + revisão das 7 aulas do módulo 6 | M a G | sim + aulas | roteiro | — | testa |
| OU-02 | O2 desplugado II: cartas de laço e condição (papel) | Papel | P | diagramação | conteúdo | imprime | aplica |
| OU-03 | **Labirinto do Theo** (blocos de sequência, repetição e condição antes do Scratch; serve também para a Hora do Código, pendência 35) | Simulador novo | G | sim | roteiro das fases | — | testa |
| OU-04 | **4 fichas de Scratch** (animar o nome, história com Theo e Lia, mini-jogo com pontos, desafio) | Fichas impressas + passo "no Scratch" | M | diagramação + passo E7 | **conteúdo** | **instala Scratch 3 offline, sem conta**, nos notebooks | testa com 2 crianças |
| OU-05 | Vídeos curtos de tela (≤ 2 min) para as fichas de Scratch e LibreOffice | Gravação (opcional) | — | — | roteiro | **grava** | — |
| OU-06 | **2 fichas de LibreOffice** (Writer e Calc) + aula "o que é igual e o que muda" | Fichas + 1 aula | M | diagramação + aula | conteúdo | **instala** | testa |
| OU-07 | O4: 3 roteiros de projeto final (campanha, feira da coleção, jogo + manual) com cronograma e checklist na plataforma | 3 aulas-projeto | M | checklists | **roteiros** | — | — |
| OU-08 | Teste Ouro + certificado Ouro ("Mestre Digital") + roteiro da Mostra Digital de dezembro | Avaliação | M | código | tarefas + roteiro | aprova | aplica |
| OU-09 | **Caderno Ouro** (~12 páginas) + Extras e Reforço do Ouro | Papel + conteúdo | M | diagramação + código | conteúdo | imprime | — |

### 3.4 Resumo do backlog (estimativa)
| Bloco | Aulas novas na plataforma | Simuladores novos ou ampliados | Papel | Sessões do Telchar |
|---|---|---|---|---|
| Estrutura (seção 2) | — | — | — | 12,5 |
| Bronze | 13 | 2 (pastas, jogos de digitação) | Caderno Bronze | 6 |
| Prata | 12 | 2 a 3 (Word multipágina, Excel, navegador opcional) | Caderno Prata | 6 |
| Ouro | 10 | 2 (PowerPoint ampliado, Labirinto do Theo) | Caderno Ouro + 6 fichas | 5,5 |
| **Total** | **~35** (bate com as ~36 do Pelennor) | **6 a 7** | **3 cadernos** | **~30** |

**Quem produz o quê, sem rodeio:**
- **Eu (Telchar/Claude), direto:** todo o código (estrutura, simuladores, aulas a partir do roteiro, testes de nível, certificados, portfólio, diagramação dos cadernos e fichas para imprimir), a bateria, o versionamento e as fichas de aprovação de cada lote. Se um roteiro atrasar, eu escrevo um rascunho a partir da matriz do Pelennor e ele revisa.
- **Pelennor (roteiros):** 1 pacote por módulo, **1 a 2 semanas antes** do código (não 3: com o código rápido, 3 semanas só aumenta o retrabalho). É trabalho de agente: o Durin só precisa acioná-lo na data.
- **Júnior (pessoa, o recurso escasso):** decisões de estrutura, aprovação final do lote (15–30 min), testes no notebook real (Windows 11, ABNT2, Office), instalar Scratch e LibreOffice, imprimir, contas do Supabase/Vercel, imagens dos mascotes, vídeos (opcional).
- **Giovana:** testar cada lote com 1 criança, aplicar caderno e rubrica, anotar "onde travou" (vira Missão Reforço), aprovar o conteúdo aula a aula **se o Júnior delegar** (decisão D5).
- **Fíli:** custo de impressão (cadernos, certificados, livrinho, pasta-portfólio).

---

## 4. Cronograma semana a semana (23/11/2026 a 01/08/2027)

**Duas versões convivem até 25/01:** a **versão Colônia** (a atual, com pequenos ajustes, congelada de 27/12 a 15/01, pendência 67) e a **versão Níveis**, construída em paralelo e mostrada só no artifact de teste até ser aprovada.

| Semana | Telchar (código) | Pelennor | Júnior | Giovana / outros | Marco |
|---|---|---|---|---|---|
| **23–29/11** | Ficha do teste com crianças (8 medidas); especificação da estrutura de níveis e da migração; registro de tempo por passo (E10) pronto para aprovar | Começa roteiros B0–B3 | Troca o PIN (68); decisões D1–D6 (seção 7); testes da seção 5 das correções | — | Plano aprovado |
| **30/11–06/12** | Publica E10 + atalho Ctrl+S/Ctrl+B (após OK) na versão atual; começa E1 (níveis) e E2 (migração) | Roteiros B0–B3 | Decide hospedagem (04/12); instala Scratch e LibreOffice no notebook de teste + pendência 27 (05/12) | Sócios: contrato 12 meses × ano civil (05/12); Fíli: custo de impressão (04/12) | — |
| **07–13/12** | E1 + E2 + 3º alvo de build (artifact de teste, se aprovado); **Lote 0** = estrutura de níveis vazia, para o Júnior ver | **Entrega B0–B3 (11/12)** | **Teste com 2–3 crianças (até 12/12)** com a Giovana | Merry/Júnior: cenas dos mascotes (08/12) | Teste com crianças |
| **14–20/12** | Analisa o teste (fator F) e recalibra (14–15/12); ajustes da **versão Colônia** a partir do teste; mascotes Theo e Lia; **Lote 1** = B0, B1 (simulador de pastas), B2 (jogos de digitação) | **Entrega B4, B5, Teste Bronze, Caderno Bronze, rubrica (18/12)**; roteiro impresso da Colônia com o Telchar (18/12) | Aprova a versão Colônia final (20 min) | Giovana testa Lote 1 com 1 criança (se possível) | Roteiros do Bronze completos |
| **21–27/12** | **Congela a versão Colônia (27/12)**: cópia em `versoes/`, etiqueta no git; **Lote 2** = B3, B4, B5 (cartão + imprimir) e E3 (rotina + diário) | — | 15 min: OK do congelamento | Natal | Versão Colônia congelada |
| **28/12–03/01** | **Lote 3** = B0 diagnóstico, Teste Bronze, E4 certificados, E6 portfólio, E7, Extras do Bronze; Caderno Bronze pronto para imprimir; bateria completa da versão Níveis | — | Ensaio geral da Colônia com a Giovana (03/01); **nada da versão Níveis** | — | Bronze completo no artifact de teste (código) |
| **04–10/01** | E5, E8, E9 (área da tutora ampliada); ficha de observação da Colônia (tempos e travas) | Revisa o Bronze no artifact de teste | Imprime Caderno Bronze e kits da Colônia | Giovana testa Lotes 2–3 com 1 criança (30 min) | — |
| **11–15/01** | **COLÔNIA. Plataforma congelada.** Só conserto crítico, a pedido do Júnior | — | Colônia | Giovana anota tempos e travas; cópia de segurança no fim de cada dia | Colônia |
| **18–22/01** | Importa as cópias reais da Colônia no artifact de teste (**teste de migração com dados reais**); recalibra com o Pelennor (22/01) | Recalibração com a Colônia (22/01) | Inglês volta (18/01). **Aprova Bronze E1–E10 (30 min, até 22/01)** | Supabase: contas criadas pelo Júnior, se decidido | — |
| **25–29/01** | **Publica a versão Níveis** nos 2 links (Bronze E1–E10 no mínimo; E1–E14 se aprovado); integração com o banco e painel dos pais mínimo (se a hospedagem estiver no ar) | Roteiros P1–P2 | 15 min: OK da publicação | Cópia de segurança de todos os notebooks **antes** de trocar a versão | Versão Níveis no ar |
| **01–05/02** | Ajustes da 1ª semana de uso; começa o Word multipágina (PR-01) | Roteiros P3–P4 + Caderno Prata | Aprova E11–E14 (se ainda faltar) | Grade regular de fevereiro | **01/02: Bronze E1–E10 (mínimo)** |
| **08–12/02** | **Lote 4** = P1 livrinho (Word multipágina + imprimir). Carnaval em 09/02 | — | — | Giovana: lista do que travou no Bronze | — |
| **15–19/02** | **Lote 5** = P2 Excel (ordenar, bordas, coleção); Missões Reforço do Bronze (1ª leva) | — | Aprovação do lote (20 min) | — | **15/02: E11–E14 garantidos** |
| **22–26/02** | **Lote 6** = P3 mesada | — | — | — | — |
| **01–05/03** | **Lote 7** = P4 Internet II (+ navegador simulado, se houver tempo); Teste Prata; certificado Prata | — | Aprovação (20 min) | — | — |
| **08–12/03** | Caderno Prata para imprimir; Extras do Prata; Reforço do Bronze (2ª leva) | — | Imprime Caderno Prata | Giovana testa o Prata | — |
| **15–19/03** | Prata completo no artifact de teste; publica após OK | — | **Aprova o Prata (30 min)** | — | Meu alvo: Prata pronto 15/03 |
| **22/03–02/04** | Folga e correções; recalibração com 6 semanas de aula (31/03); Páscoa em 28/03 | Recalibração (31/03); roteiros O1 | — | — | **01/04: Prata completo** |
| **Abril** | O1 Apresentações (PowerPoint ampliado); Labirinto do Theo; cartas do desplugado II | Roteiros O2 (fichas de Scratch) | **Instala Scratch 3 offline em todos os notebooks (até 30/04)** | Orthanc: confere "Scratch sem conta" no termo LGPD | — |
| **Maio** | Fichas de Scratch para imprimir; passo "no Scratch"; Reforço do Prata | Revisa | Vídeos curtos (opcional) | Giovana testa Scratch com 2 crianças | Meu alvo: 21/05 · **01/06: Apresentações + Scratch** |
| **Junho** | O3 LibreOffice (fichas + aula); O4 checklists dos 3 projetos finais; Teste Ouro; certificado Ouro | Roteiros O3, O4, teste Ouro | **Instala LibreOffice** | — | — |
| **Julho** | Caderno Ouro; Extras e Reforço do Ouro; roteiro da Mostra Digital; revisão geral com os dados do semestre. Recesso de julho (data a confirmar) | Matriz do Diamante (com Telchar e Nori, a partir da pendência 34) | Aprova o Ouro (30 min) | — | Meu alvo: 15/07 · **01/08: Ouro inteiro** |
| Ago–Out (fora da janela) | Nível Diamante (2º ano) | — | — | — | 01/11: Diamante |

**Tempo do Júnior no período (estimativa):** dezembro ~3 h (decisões, aprovações, congelamento; fora o teste com crianças), janeiro ~1h30, fevereiro a julho ~30 min por semana (~12 h), mais instalações (~2 h) e impressão. **Entre 21/12 e 17/01 a versão Níveis não pede nada a ele.**

---

## 5. Fluxo de trabalho para acelerar

### 5.1 O ciclo semanal do lote
1. **Até segunda:** roteiro do Pelennor pronto (1 a 2 semanas antes).
2. **Segunda a quarta:** eu codifico, rodo a bateria (**precisa dar "0 falharam"**) e publico no **artifact de teste** "Inspirar Informática Teste" (privado, compartilhado com Júnior e Giovana, com faixa "VERSÃO DE TESTE" e dados separados dos alunos). Esse artifact ainda não existe: criar depende do OK do Júnior (D6).
3. **Quinta:** o Júnior e a Giovana recebem a **ficha do lote** (1 página): o que mudou, link, um roteiro de cliques de 10–15 min e 3 perguntas ("o texto está claro para 8 anos?", "algo travou?", "pode ir para os alunos?"). Comentários direto no artifact de teste.
4. **Sexta ou sábado:** a Giovana testa com 1 criança (30 min) e marca onde travou.
5. **Segunda seguinte:** com o OK registrado, publico nos 2 links dos alunos. **Sem OK, o lote espera:** silêncio não é aprovação.

**Quem aprova o quê (proposta, decisão D5 do Júnior):** o Júnior aprova o que muda **regra, estrutura, certificado ou texto para os pais**; a Giovana aprova **o conteúdo aula a aula** depois do teste com a criança. Isso tira ~70% da carga do Júnior.

### 5.2 Bateria automática estendida
- **Ponta a ponta por nível:** a bateria já percorre `MODS` sozinha (fato); passa a percorrer os níveis B0–O4 com travas reais, nos 2 artifacts, no notebook (1366x768) e no celular (390x844).
- **Um "resolvedor" para cada simulador novo** (pastas, jogos de digitação, Word multipágina, Excel ordenar, PowerPoint ampliado, Labirinto), como já existem `doWord`, `doXl`, `doPpt`.
- **Migração:** uma cópia de segurança gerada pela versão Colônia é importada na versão Níveis e nada se perde (aulas, estrelas, testes, adesivos).
- **Regras novas:** limite de 1 módulo à frente, critérios do certificado, rubrica, diário de bordo, validação por teste.
- **Conferência de texto:** toda aula com as versões 8–9 e 10–12 anos; balão da versão 8–9 com até 40 palavras (fato do check-up: é o que a criança lê); resposta certa existente em cada quiz; nenhuma maiúscula ou acento antes da 2.4.
- **Tempo:** `testes/tempo.js` passa a somar por encontro; alerta se o núcleo previsto ficar fora de 35–55 min (com o fator F medido em dezembro).
- **Telas de impressão** (portfólio, certificados, cadernos) abrem sem erro e sem rolagem lateral.

### 5.3 Versionamento em `plataforma-informatica/`
| Pasta ou arquivo | Para quê |
|---|---|
| `atual/src/` | Continua o código único (desenvolvimento) |
| `atual/build.py` | Ganha o 3º alvo `teste/` (artifact de teste, chave de dados separada) |
| `publicada/` | Cópia exata do que está nos links dos alunos agora (para conferir e voltar atrás) |
| `versoes/2026-12-27-colonia/`, `versoes/2027-01-25-niveis-bronze/` … | Cópias congeladas de cada versão que foi para os alunos |
| `CHANGELOG.md` | Uma linha por lote: data, o que entrou, resultado da bateria, quem aprovou |
| Etiquetas no git (`plat-2026-12-27-colonia` …) | Volta atrás com 1 comando |

**Distribuição nos notebooks (atenção):** os dados das crianças ficam no navegador de cada notebook. Se o arquivo HTML for usado direto no notebook (como na Colônia), a nova versão **tem de substituir o arquivo no mesmo lugar e com o mesmo nome**, depois de uma cópia de segurança. Trocar de arquivo local para o link do claude.ai (ou o contrário) **não leva o progresso junto**; é preciso usar o código da cópia de segurança. Decisão D6.

---

## 6. Riscos e o que se corta se faltar tempo

### 6.1 Riscos
| Risco | Nível | Mitigação |
|---|---|---|
| Júnior sem tempo para revisar em dez/jan | Alto | Delegar o conteúdo à Giovana (D5); zero pedido de 21/12 a 17/01; fichas de 15 min |
| Progresso da Colônia se perde na troca de versão | Alto | Mesmos códigos de aula; migração testada com cópias reais (18–22/01); cópia de segurança obrigatória antes da troca |
| Roteiros do Bronze atrasam | Médio | Rascunho meu a partir da matriz; Pelennor revisa |
| Fator F muito diferente de 2,5 | Médio | Regras de decisão do Pelennor (seção 6 dele); recalibrar em 15/12, 22/01 e 31/03 |
| Banco de dados e painel dos pais disputam janeiro com o Bronze | Médio | **Bronze tem prioridade**; painel não é prometido; se a hospedagem não estiver decidida até 18/12, o painel vai para março e o impresso segura |
| Scratch e LibreOffice pesados nos notebooks recondicionados | Médio | Testar no notebook de teste em 05/12, junto com a pendência 27 |
| Custo de impressão (cadernos, livrinhos, certificados) | Médio | Fíli calcula até 04/12; caderno em preto e branco se preciso |
| Turma com níveis diferentes sobrecarrega a Giovana | Médio | Roteiro por encontro, gabaritos e "onde trava" entram em todo lote |
| Arquivo da plataforma cresce (431 KB hoje) | Baixo | Estimo 700–900 KB no fim; longe do limite de 16 MB |

### 6.2 Ordem de corte (do primeiro ao último)
1. **Painel dos pais** → portfólio impresso e mini-Mostras (não foi prometido).
2. **Vídeos, navegador simulado e Labirinto do Theo** → fichas em papel e desplugado.
3. **Missões Reforço** → só sob demanda, onde a Giovana viu travar.
4. **Missões Extras novas** → usar os 23 desafios bônus que já existem.
5. **Limite automático de 1 módulo à frente** → regra manual da Giovana.
6. **Word multipágina** (o item de código mais caro) → livrinho feito com 4 a 6 documentos de 1 página no simulador atual, impressos e grampeados.
7. **Excel ordenar/bordas** → feito no LibreOffice ou no papel.

### 6.3 O mínimo indispensável (não se corta)
Para cada módulo: **aulas-base + 1 produto com roteiro + teste de nível + certificado do nível + rotina fixa** (aquecimento com frases que já existem + diário de bordo). E sempre uma **fila de reserva** para nenhum aluno ficar parado: recorde de digitação, desafios bônus e páginas extras do caderno. Com isso, mesmo no pior cenário, o aluno mais adiantado sempre tem o próximo passo.

---

## Alertas
1. **AMARELO: o contrato "anual" ainda não está definido** (12 meses da entrada × ano civil). Não trava a produção até agosto, mas decide o que o aluno de agosto recebe e se o Diamante precisa sair antes de 01/11. Sócios, com Fíli e Celeborn, até 05/12.
2. **AMARELO: o calendário tem duas datas de início** da Informática (`contexto/calendario.md`: "jan/2027, fevereiro no máximo" e "grade regular em fev/2027"). Planejei a versão Níveis no ar em 25/01, o que atende os dois casos. Também falta a data do recesso de julho.
3. **AMARELO: o modelo de dados do banco** (pendência 66) deve nascer com níveis, encontros, diário e produtos. Se o Júnior começar o banco antes de 18/12 com o modelo de semestres, haverá retrabalho. Vale combinar comigo antes.
4. **VERDE: a data da Colônia está resolvida** (11–15/01). O alerta 6 do Pelennor pode ser fechado.
5. **VERDE: Apresentações não exige simulador novo:** o de PowerPoint já existe; é ampliação. Isso dá folga ao marco de 01/06.

---

## 7. As 5 primeiras ações desta semana

| # | O quê | Quem | Até |
|---|---|---|---|
| 1 | **Decisões de estrutura** (30 min): D1 nomes dos níveis e do certificado; D2 carga horária no certificado (ex.: "Bronze, 14 horas"); D3 os testes antigos viram prova de validação; D4 limite de 1 módulo à frente duro ou flexível; D5 Giovana aprova conteúdo aula a aula; D6 criar o artifact de teste e escolher como as versões chegam aos notebooks (link × arquivo local) | **Júnior** (Telchar prepara a lista de 1 página) | 27/11 |
| 2 | Ficha do teste com crianças com as 8 medidas do Pelennor e a folha de cronometragem para a Giovana | **Telchar** | 27/11 |
| 3 | Registro automático de tempo por passo (E10) e ajuste do atalho de salvar, prontos para aprovação; publicar só com o OK do Júnior, antes do teste de 12/12 | **Telchar** (código) → **Júnior** (OK) | 28/11 (pronto) · 04/12 (no ar) |
| 4 | Especificação técnica da versão Níveis: modelo de dados (já pensando no Supabase), regra de migração e mapa aula-base → módulo novo | **Telchar** | 28/11 |
| 5 | Acionar o Pelennor para entregar os roteiros do Bronze em 2 partes (B0–B3 em 11/12; B4, B5, Teste Bronze, Caderno e rubrica em 18/12) e registrar este plano em `gestao/pendencias.md` | **Durin** | 24/11 |

Sugestão para o Durin registrar (não editei `gestao/`, conforme o pedido): ações 1 a 5 em `gestao/pendencias.md`; riscos "revisão do Júnior em dez/jan" e "migração da Colônia" em `gestao/riscos.md`; marcar como resolvido o alerta da data da Colônia.

— Telchar, Gestor da Inspirar Informática
