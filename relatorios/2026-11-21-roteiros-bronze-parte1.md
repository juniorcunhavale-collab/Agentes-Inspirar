# Roteiros do Nível Bronze, Parte 1 (módulos B0 a B3, encontros E1 a E9)
**Data:** 2026-11-21 · **Elaborado por:** Pelennor (Coordenador Pedagógico) · **Pedido:** Durin (plano aprovado)
**Para:** Telchar (transformar em aulas na plataforma) · Giovana (tutora) · Júnior (decisões D1 a D4)
**Bases:** currículo anual (`relatorios/2026-11-21-curriculo-anual-informatica.md`), plano de produção do Telchar
(`relatorios/2026-11-21-plano-producao-conteudo-informatica.md`, itens BR-01 a BR-04, BR-08, BR-10 e BR-11),
conteúdo atual das aulas 1.1 a 3.5 em `plataforma-informatica/atual/src/app.js` (só leitura), fichas dos mascotes
(`relatorios/2026-11-20-prompts-mascotes-theo-lia.md`).
**Parte 2 (até 18/12):** B4, B5, Teste Bronze + mini-Mostra, Caderno Bronze completo, rubrica e gabaritos finais.

Legenda: **fato** = está nos arquivos ou no código · **estimativa** = cálculo meu (fator F = 2,5, recalibrar com o teste de 12/12) · **hipótese** = aposta pedagógica.
Marcação **[DECISÃO JÚNIOR D1–D4]** = depende das decisões pendentes (D1 nomes dos níveis e do certificado · D2 carga horária no certificado · D3 testes antigos como prova de validação · D4 limite de 1 módulo à frente, duro ou flexível).

---

## 1. Resumo (para ler em 2 minutos)

1. Estão prontos os roteiros dos **9 primeiros encontros (E1 a E9)**: nivelamento (B0), computador e pastas (B1), teclado ninja (B2) e internet segura (B3). Todos seguem a rotina **8 min de digitação + 47 min de missão + 5 min de diário de bordo**.
2. **Aproveito as 14 aulas-base atuais (1.1 a 3.5) sem mudar o código delas**, com 2 ajustes pequenos de texto (seção 2.4). O que é novo: **17 aulas novas** (≈ 277 min reais, estimativa), 4 páginas de caderno e o **banco de 30 frases do aquecimento**.
3. Cada módulo termina com **um produto que vai para a pasta-portfólio**: Cartão do Explorador (B0), ficha + "minha pasta organizada" (B1), gráfico do meu recorde (B2) e **Pacto da Internet Segura assinado pela família** (B3). Nada aqui depende do painel dos pais, que **não deve ser prometido**.
4. O Telchar precisa criar **5 tipos de passo novos** (avatar, simulador de pastas, jogos de digitação, cartas para classificar e "fora da plataforma" com PIN). Para cada um, deixei um **plano B com os tipos que já existem**, caso falte tempo.
5. Os riscos práticos são o **teclado ABNT2 configurado no Windows** (sem ele, "ç" e acentos não funcionam no B2) e o **duplo clique** das crianças de 8 anos (o simulador de pastas aceita também a tecla Enter).

---

## 2. Como usar este roteiro (para o Telchar)

### 2.1 Códigos
| Item | Código | Exemplo |
|---|---|---|
| Aula-base (mantém o código atual) | `m.l` | 1.3 |
| Aula nova | `B<módulo>-N<nº>` | B1-N3 |
| Missão Extra (★) | `B<módulo>-X<nº>` | B2-X1 |
| Missão Reforço | `B<módulo>-R<nº>` | B3-R1 |
| Página do caderno | `C<nº>` | C4 (Pacto) |

### 2.2 Tipos de passo
| Tipo | Existe? | Uso aqui | Plano B se faltar tempo |
|---|---|---|---|
| `info` (balão), `quiz`, `order`, `hot`, `targets`, `type`, `check`, `anim` | **Sim** (fato) | Em quase todas as aulas | — |
| `avatar` (montar o personagem) | Novo | B0-N1 | Escolher 1 entre 6 avatares prontos (botões) |
| `pastas` (simulador do Explorador de Arquivos) | Novo (BR-02) | B1-N3, B1-N4, B1-X2, B1-R2 | Sequência de `hot` sobre imagens das telas + Giovana demonstra no Windows real |
| `jogo` (modos: chuva, trem, ditado, acento) | Novo, sobre o motor de digitação (BR-03) | B2-N1, N3, N4, N6 | `type` comum com as mesmas listas de palavras |
| `recorde` (teste de 1 min + gráfico de barras) | Novo (BR-03) | B0-N2, B2-N2, B2-N7 | Teste de 1 min atual + Giovana anota os números na ficha do caderno |
| `cartas` (arrastar cartões para 2 ou 3 caixas) | Novo | B1-N2, B3-N2, B3-N3, B3-N5 | Uma `quiz` por cartão (mesmas opções das caixas) |
| `fora` (atividade no caderno ou no notebook real; a Giovana confirma com o PIN) | Novo (E7 do plano) | B1-N1, B2-N5, B3-N1, B3-N7 | `check` com a frase "A tutora conferiu" |
| `imprimir` (cartão, pasta, gráfico, pacto) | Novo (E6 do plano) | B0-N3, B1-N4, B2-N7, B3-N7 | A Giovana imprime a tela (Ctrl+P) |

### 2.3 Regras de texto
- **Balão:** versão 8–9 com **até 40 palavras**; versão 10–12 com **até 50 palavras**. Instrução de tarefa: **até 15 palavras**, uma ação por frase.
- **Falas:** **Theo** abre a ideia (pergunta, "e se…?", "será que…?"). **Lia** comemora o acerto. Quando não há indicação de versão, o texto vale para as duas idades.
- **Mensagens de acerto:** curtas e variadas; nunca repetir a mesma mensagem duas vezes seguidas. **Mensagem de erro:** sempre diz o que fazer, nunca "errado!" sozinho.
- **Digitação antes da aula 2.4:** escrevi as frases em português correto; o motor já converte para minúsculas e sem acento (`easyTxt`, fato). Na comparação de **nomes digitados** (nome da criança, nome da pasta), ignorar maiúsculas, acentos e espaços nas pontas.
- **Gênero:** evitar adjetivo flexionado nas mensagens ("Que organização!" em vez de "Você é organizado").
- **Quizzes:** a opção certa está marcada com ✔ (a plataforma embaralha as opções, fato).

### 2.4 Ajustes nas aulas-base (só texto, sem mudar código nem estrutura)
| Aula | Hoje (fato) | Ajuste |
|---|---|---|
| 1.1, 1º balão, versão 8–9 | "Eu sou o seu parceiro de aventuras." | Trocar por: "Oi de novo! Eu sou o Theo." (o resto do balão fica igual) |
| Todas de B1 a B3 | Balões sem personagem definido | Exibir os balões de explicação com o **Theo** e as mensagens de acerto com a **Lia** (BR-12, troca dos mascotes) |
| 3.5, último passo (`check` "Combinado da internet") | Fica | Manter: ele prepara o Pacto (B3-N7) |

### 2.5 Tempo
Tempo das aulas-base = tempo-modelo × 2,5 (estimativa do currículo): **1.1 = 10, 1.2 = 11, 1.3 = 12, 1.4 = 10 min**; **2.1 = 13, 2.2 = 11, 2.3 = 11, 2.4 = 13, 2.5 = 10 min**; **3.1 a 3.5 = 9 min cada**. As aulas novas foram dimensionadas para fechar **47 min** por encontro. Tudo será recalibrado com o teste de 12/12.

---

## 3. O Bronze Parte 1 numa olhada

| Encontro | Módulo | Aulas-base | Aulas novas (min) | Base + novo | Produto |
|---|---|---|---|---|---|
| E1 | B0 Boas-vindas e nivelamento | — | B0-N1 (10) · B0-N2 (25) · B0-N3 (8) · combinados (4) | 0 + 47 | **Cartão do Explorador** |
| E2 | B1 Meu computador e minhas pastas | 1.1 · 1.2 | B1-N1 caderno C1 (16) · B1-N2 (10) | 21 + 26 | Ficha C1 (parte do produto B1) |
| E3 | B1 | 1.3 · 1.4 | B1-N3 (13) · B1-N4 (12) | 22 + 25 | **Ficha C1 + "minha pasta organizada"** |
| E4 | B2 Teclado ninja | 2.1 · 2.2 | B2-N1 (14) · B2-N2 (9) | 24 + 23 | — |
| E5 | B2 | 2.3 | B2-N3 (15) · B2-N4 (12) · B2-N5 caderno C2 (9) | 11 + 36 | — |
| E6 | B2 | 2.4 · 2.5 | B2-N6 (14) · B2-N7 (10) | 23 + 24 | **Gráfico do meu recorde** |
| E7 | B3 Internet segura I | 3.1 · 3.2 | B3-N1 caderno C3 (14) · B3-N2 (15) | 18 + 29 | — |
| E8 | B3 | 3.3 · 3.4 | B3-N3 (15) · B3-N4 (14) | 18 + 29 | — |
| E9 | B3 | 3.5 | B3-N5 (12) · B3-N6 (12) · B3-N7 caderno C4 (14) | 9 + 38 | **Pacto da Internet Segura** |
| **Total** | | **14 aulas = 146 min** | **17 aulas novas = 277 min** | **423 min** | 4 produtos |

Conferência com o currículo: novo B0 47 + B1 51 + B2 83 + B3 96 = **277 min** ✔ · base B1 43 + B2 58 + B3 45 = **146 min** ✔ · 9 × 47 = **423 min** ✔.

**Aluno vindo da Colônia (11 a 15/01):** as aulas-base que ele já concluiu (1.1 a 1.4, 2.1 e 3.1 a 3.5 na Colônia, fato do código `COL`) ficam validadas; ele faz só o que é novo e ganha cerca de 2 encontros, que vão para Missões Extras. **Validar por teste** quem nunca fez a aula, mas já sabe, depende de **[DECISÃO JÚNIOR D3]**.

**Insígnias (nomes que já existem no código, fato):** Explorador ao concluir B1, Digitador ao concluir B2, Navegador ao concluir B3. Texto final das insígnias e do nível ("Bronze, Explorador Digital"): **[DECISÃO JÚNIOR D1]**.

---

## 4. Rotina fixa dos encontros E1 a E9

### 4.1 Aquecimento de digitação (8 min)
A criança digita frases do banco do nível até completar 8 minutos (o motor `WARM` já existe, fato). A **meta do dia** aparece no topo; bater a meta **não trava nada**: dá uma comemoração da Lia e uma estrela de aquecimento.

| Encontro | Banco | Meta 8–9 anos | Meta 10–12 anos | Observação |
|---|---|---|---|---|
| E1 | Livre | sem meta | sem meta | "Ache as letras do seu nome": digitar o próprio nome e 3 palavras do banco A |
| E2–E3 | A | 4 palavras/min, 85% | 8 palavras/min, 88% | Ainda "caçando" as letras (é normal) |
| E4–E5 | A (E4) e B (E5) | 6 palavras/min, 88% | 12 palavras/min, 90% | Pode cair um pouco ao passar a usar os dez dedos (avisar a família) |
| E6 | B | 8 palavras/min, 88% | 14 palavras/min, 90% | — |
| E7–E9 | C | 8 palavras/min, 90% | 15 palavras/min, 92% | **Meta Bronze** (certificação no E14) |
Metas: **estimativa**, alinhadas ao `METAM`/`ACCM` do código para os módulos 1 a 3 e à meta Bronze do currículo. Recalibrar após 12/12.

**Banco de frases Bronze (BR-08, 30 frases).** Antes da aula 2.4 o motor converte para minúsculas e sem acento.

| # | Banco A (E1–E4): palavras e frases curtas · 8–9 anos | 10–12 anos |
|---|---|---|
| A1 | a sala | a sala da casa |
| A2 | a fada | a fada fala alto |
| A3 | o dado | o dado caiu da mesa |
| A4 | a casa | a casa tem janela azul |
| A5 | o lago | o lago fica perto da serra |
| A6 | a bola | a bola rolou pela sala |
| A7 | o sapo | o sapo pulou no lago |
| A8 | a mala | a mala da viagem pesa |
| A9 | o gato | o gato dorme no sofá |
| A10 | a lua | a lua apareceu cedo hoje |

| # | Banco B (E5–E6): frases sem acento · 8–9 anos | 10–12 anos |
|---|---|---|
| B1 | o pato nada no lago | o pato nada no lago todo dia de manhã |
| B2 | eu gosto de pipoca | eu gosto de comer pipoca vendo um filme |
| B3 | a vaca come capim | a vaca come capim verde perto da cerca |
| B4 | meu time joga bem | meu time joga bem quando todos ajudam |
| B5 | a pipa voa alto | a pipa voa alto quando o vento ajuda |
| B6 | o bolo ficou bom | o bolo de fubá ficou bom para o lanche |
| B7 | a zebra tem listras | a zebra tem listras pretas e brancas |
| B8 | eu leio um livro | eu leio um livro novo toda semana |
| B9 | o trem passa cedo | o trem passa cedo e acorda a cidade |
| B10 | a nuvem virou chuva | a nuvem escura virou chuva forte |

| # | Banco C (E7 em diante): maiúsculas, acentos e "ç" · 8–9 anos | 10–12 anos |
|---|---|---|
| C1 | Eu moro em Pinhão. | Eu moro em Pinhão, no Paraná, e gosto daqui. |
| C2 | A maçã é vermelha. | A maçã vermelha estava doce e suculenta. |
| C3 | O avô fez café. | O avô fez café e pão de queijo para nós. |
| C4 | Você tem um irmão? | Você tem irmãos ou é filho único? |
| C5 | A onça é rápida. | A onça-pintada é um animal rápido e forte. |
| C6 | O ônibus chegou. | O ônibus da escola chegou cedo hoje. |
| C7 | A Lia ganhou o jogo! | A Lia ganhou o jogo e comemorou com o Theo! |
| C8 | Minha senha é segredo. | Minha senha é segredo e eu não conto a ninguém. |
| C9 | O Theo é curioso. | O Theo faz perguntas porque é muito curioso. |
| C10 | Hoje tem informática! | Hoje tem aula de informática e eu vou aprender. |

### 4.2 Diário de bordo (5 min)
Tela fixa: **"Hoje eu aprendi a…"** (a criança completa a frase digitando) + **carinha** (gostei / mais ou menos / difícil) + **pergunta do dia** (opcional, 1 frase). Depois, a cópia de segurança.
- Instrução: "Complete a frase. Depois escolha uma carinha."
- Acerto (Lia): "Diário guardado! Até a próxima missão."
- Regra de privacidade (LGPD): o diário **não pede nomes de pessoas, endereço nem telefone**. As perguntas do dia foram escritas para isso.
- A pergunta do dia de cada encontro está no roteiro do encontro.

### 4.3 Sinais de alerta (a Giovana avisa o Sam)
Frequência < 75% no mês · 2 encontros seguidos sem concluir a missão · carinha "difícil" 3 vezes seguidas · Pacto (B3) não devolvido depois de 2 encontros · responsável que não aparece em nenhuma das saídas do Bronze.

---

## 5. B0 · Boas-vindas e nivelamento (E1)

**Objetivo do encontro:** ao final, a criança consegue entrar no seu perfil, usar o mouse com precisão e mostrar o que já sabe (o ponto de partida).
**Rotina:** aquecimento 8 min "Ache as letras do seu nome" (sem meta) · missão 47 min · diário 5 min.
**Aulas-base:** nenhuma. **Tudo é novo:** B0-N1, B0-N2, B0-N3 e os combinados da sala.
**Pergunta do diário:** "O que você mais quer aprender aqui?"

### B0-N1 · Boas-vindas e meu avatar (10 min, `info` + `avatar` + `type` + `quiz`)
1. **Balão (Theo)** · 8–9: "Oi! Eu sou o Theo. Adoro descobrir como as coisas funcionam. Esta é a Lia, minha parceira. Aqui você vai aprender a usar o computador de verdade, um passo de cada vez." · 10–12: "Oi! Eu sou o Theo, e esta é a Lia. Aqui você vai aprender a usar o computador de verdade: organizar arquivos, digitar rápido, navegar com segurança e criar os seus próprios projetos."
2. **Balão (Lia)** · 8–9: "E cada descoberta a gente comemora! Primeiro, vamos criar o seu personagem. Ele vai acompanhar você o ano todo." · 10–12: "E cada descoberta a gente comemora! Primeiro, crie o seu personagem. Ele vai acompanhar você o ano inteiro e mostrar até onde você chegou."
3. **Tarefa (`avatar`):** "Escolha o cabelo, a pele e a roupa. Depois clique em Pronto." · **Verifica:** avatar salvo no perfil. · **Acerto (Lia):** "Ficou demais! Agora você tem cara de Explorador Digital." **[DECISÃO JÚNIOR D1]** (nome do nível). · Sem foto real da criança (LGPD).
4. **Tarefa (`type` livre):** "Digite o seu primeiro nome. Depois aperte Enter." · **Verifica:** campo com pelo menos 2 letras (aceita sem acento e sem maiúscula). · **Acerto (Lia):** "Prazer, [nome]! Seja bem-vindo à equipe." (versão neutra: "Prazer, [nome]! Que bom ter você na equipe.")
5. **Balão (Theo)** · 8–9: "Cada aula tem três partes. Primeiro a gente aquece os dedos no teclado. Depois vem a missão do dia. No final, você escreve no diário o que aprendeu." · 10–12: "Cada encontro tem três partes: 8 minutos de aquecimento no teclado, a missão do dia e, nos últimos 5 minutos, o diário de bordo, onde você registra o que aprendeu."
6. **Quiz:** "Qual é a última parte de cada aula?" · ✔ Escrever no diário o que aprendi · Desligar o computador · Jogar à vontade.

### B0-N2 · Meu ponto de partida (25 min, nivelamento: `info` + `targets` + `quiz` + `recorde` + `quiz`)
**Não é prova.** Nenhuma mensagem de erro nesta aula: tudo é registrado para a Giovana.
1. **Balão (Lia)** · 8–9: "Agora vamos ver o que você já sabe. Não é prova e ninguém perde ponto! É só para descobrir por onde começar." · 10–12: "Agora vamos descobrir o que você já sabe. Não é prova: ninguém perde ponto. Isso ajuda a escolher o melhor caminho para você."
2. **Mouse (`targets`, n = 10, 5 min):** "Clique em cada bolinha assim que ela aparecer." · **Registra:** tempo total e cliques fora. · **Acerto (Lia):** "Mira boa! Anotado."
3. **Leitura (5 min).** **Balão-teste (Theo)** · 8–9: "O Theo ganhou um computador. Ele abriu um jogo de pintar e desenhou um cachorro azul. Depois, guardou o desenho numa pasta chamada Bichos." · 10–12: "O Theo abriu o programa de desenho e fez um cachorro azul com chapéu vermelho. Para não perder o trabalho, ele salvou o arquivo com o nome Rex, dentro de uma pasta chamada Bichos."
   - **Quiz 1:** "De que cor era o cachorro?" · ✔ Azul · Verde · Amarelo.
   - **Quiz 2:** "Onde o Theo guardou o desenho?" · ✔ Numa pasta chamada Bichos · Dentro do jogo · Na mochila.
   - **Giovana marca** na área da tutora: leu sozinho / leu com ajuda / não leu (medida 4 do teste de dezembro).
4. **Digitação de 1 minuto (`recorde`, 7 min com a explicação):** "Digite o texto que aparece. Vale errar! Depois de 1 minuto, o relógio para." · **Texto (repete até acabar o tempo)** · 8–9: "o gato da casa pula na cama e dorme no sol" · 10–12: "hoje eu vou aprender a digitar com os dez dedos sem olhar para o teclado" · **Registra:** palavras/min e precisão = **Recorde 1 (Dia 1)**, usado no gráfico do B2. · **Mensagem (Lia):** "Pronto! Este é o seu ponto de partida."
5. **"Eu já sei" (8 min).** Para cada item: "Você já fez isto sozinho?" (Sim / Não / Não sei). Se **Sim**, aparece 1 pergunta de conferência:
   | # | Já fez sozinho? | Pergunta de conferência (só se "Sim") |
   |---|---|---|
   | a | Criar uma pasta e guardar um arquivo nela | "Para achar os arquivos depois, o melhor é…" ✔ guardar em pastas com nomes claros · deixar tudo na área de trabalho · dar nomes como asdfg |
   | b | Digitar com as duas mãos sem olhar o teclado | "Na fileira base, a mão esquerda fica em…" ✔ A S D F · Q W E R · Z X C V |
   | c | Criar uma senha e guardar em segredo | "Qual senha é a mais forte?" ✔ Bola!Verde72 · 1234 · o meu nome |
   | d | Escrever um texto no Word | "Para deixar uma palavra em negrito, primeiro você…" ✔ seleciona a palavra · aperta Enter · fecha o Word |
   | e | Fazer uma conta no Excel | "No Excel, uma fórmula começa com…" ✔ = · # · @ |
   - **Resultado para a Giovana:** "Sim" + conferência certa = sinal verde naquele módulo (a: B1, b: B2, c: B3, d: B5/P1, e: P2). Com sinal verde, oferecer a **prova de validação** do módulo (os testes atuais) **[DECISÃO JÚNIOR D3]**.
   - **Mensagem para a criança (sempre a mesma, nunca negativa):** Lia: "Obrigada! Agora a gente sabe por onde começar."
6. **Balão (Lia)** · 8–9: "Pronto! Agora a gente conhece o seu ponto de partida. Daqui a algumas aulas, você vai comparar e ver o quanto cresceu!" · 10–12: "Ponto de partida registrado! Daqui a algumas semanas, você vai comparar os números e ver, num gráfico, o quanto evoluiu."

### B0-N3 · Cartão do Explorador (8 min, `info` + `type` + `imprimir`)
1. **Balão (Theo)** · 8–9: "Sabia que todo explorador tem um cartão? O seu vai mostrar de onde você partiu. Será que no fim do ano você vai reconhecer esse começo?" · 10–12: "Todo explorador registra o ponto de partida. O seu cartão mostra como você começou. No fim do nível, você vai comparar com o que conseguiu fazer."
2. **Tarefa (`type` livre):** "Complete a frase: Eu quero aprender a…" · **Verifica:** pelo menos 3 palavras. · **Acerto (Lia):** "Que objetivo legal! Vamos atrás dele."
3. **Tarefa (`imprimir`):** "Confira o seu cartão. Chame a tutora para imprimir." · **Verifica:** a Giovana confirma com o PIN. · **Acerto (Lia):** "Seu cartão está pronto! Ele vai para a sua pasta-portfólio."
- **Conteúdo do cartão:** logotipo · "Cartão do Explorador Digital" **[DECISÃO JÚNIOR D1]** · avatar · primeiro nome · data · "Meu ponto de partida": X palavras por minuto, Y% de acerto, 10 bolinhas em Z segundos · "Eu quero aprender a…" · "Nível Bronze: 14 encontros" **[DECISÃO JÚNIOR D2]**. **Não incluir** a marcação de leitura nem o "já sei" (são dados de trabalho da tutora).

### Combinados da sala (4 min, `check`)
"Combinados da nossa sala. Marque cada um:" · Cuido do notebook com as duas mãos · Levanto a mão quando preciso de ajuda · Salvo o meu trabalho antes de sair · Ajudo o colega sem fazer por ele. · **Acerto (Lia):** "Combinado é combinado!"

**Missão Extra (★) B0-X1:** "Digite 3 coisas de que você gosta, separadas por vírgula." (`type` livre, mínimo 3 palavras) · Acerto (Lia): "Anotado! A gente vai usar isso nos seus projetos." (vira sugestão de tema no cartão de aniversário e no livrinho).
**Missão Reforço B0-R1 · Treino do mouse:** bolinhas maiores e mais lentas (`targets`, n = 6), com a mão desenhada mostrando o clique. Para quem errou mais de 4 cliques no diagnóstico.
**Produto para os pais:** **Cartão do Explorador** (fica na pasta-portfólio; a Giovana mostra ao responsável na saída, se ele vier buscar). **Rubrica:** não se aplica, é o ponto de partida; conferir só se tem nome, avatar e os números.

**Nota para a Giovana (E1):**
- Antes: perfil de cada criança criado, notebook carregado, fone se houver, ficha de nivelamento impressa (para anotar à mão se algo falhar).
- Leia o balão em voz alta **só depois** de marcar a leitura da criança (passo 3).
- Anote quem tem sinal verde no "já sei". Não ofereça a prova de validação no 1º dia: deixe a criança conhecer a rotina primeiro. **[DECISÃO JÚNIOR D3]**
- A digitação do E1 costuma ser lenta e "catando milho". Diga: "É o seu ponto de partida; ele existe para ser superado."
- Dê **2 minutos para o responsável** na saída: mostre o Cartão e explique que a prova do aprendizado é a pasta-portfólio e as mini-Mostras (não fale em painel na internet).

---

## 6. B1 · Meu computador e minhas pastas (E2 e E3)

**Ao final do módulo, a criança consegue:** nomear as partes do computador, dizer o que é entrada e saída, usar clique, duplo clique e arrastar, desligar com segurança e criar, renomear e abrir uma pasta e um arquivo.

### E2 · As partes do computador
**Objetivo:** nomear as partes do computador e do notebook e separar o que é de entrada e o que é de saída.
**Rotina:** aquecimento 8 min, banco A, meta 4 palavras/min e 85% (8–9) · 8 palavras/min e 88% (10–12) · missão 47 min · diário 5 min.
**Missão:** **1.1** (10 min, base) → **1.2** (11 min, base) → **B1-N1** caderno C1 (16 min, novo) → **B1-N2** entrada ou saída (10 min, novo).
**Pergunta do diário:** "Qual parte do computador você achou mais curiosa? Por quê?"

#### B1-N1 · O notebook de verdade (16 min, `fora` + caderno C1)
1. **Balão (Theo)** · 8–9: "Hora de sair da tela! Pegue o seu caderno na página 1. Será que você acha todas as partes no notebook de verdade?" · 10–12: "Agora é com o notebook de verdade. Abra o caderno na página 1: você vai localizar as partes, ligar cada nome ao desenho e descobrir para que serve cada uma."
2. **Tarefa no caderno (C1):** "Ligue cada nome à parte certa do desenho." (tela, teclado, touchpad, botão de ligar, câmera, entrada USB, entrada do carregador, alto-falante)
3. **Tarefa no caderno:** "Pinte de azul o que manda ordens ao computador. Pinte de laranja o que mostra o resultado."
4. **Tarefa no notebook, com a tutora:** "Ache a câmera, a entrada USB e a entrada do carregador. Só aponte, não aperte nada."
5. **Verifica (`fora`):** a Giovana confere a página e digita o PIN. · **Acerto (Lia):** "Você virou especialista em notebook!"

#### B1-N2 · Entrada ou saída? (10 min, `info` + `cartas` + `quiz`)
1. **Balão (Theo)** · 8–9: "Algumas partes mandam ordens para o computador: são de entrada. Outras mostram o resultado: são de saída. E o microfone, será de quê?" · 10–12: "Dispositivos de entrada enviam informações ao computador: teclado, mouse, microfone, câmera. Dispositivos de saída mostram ou tocam o resultado: tela, caixa de som, impressora, fone de ouvido."
2. **Tarefa (`cartas`, 2 caixas):** "Arraste cada cartão para a caixa certa." · **Entrada:** teclado, mouse, touchpad, microfone, câmera · **Saída:** tela, caixa de som, impressora, fone de ouvido. · **Verifica:** os 9 cartões no lugar certo. · **Se errar, o cartão volta com uma dica:** "O fone deixa você ouvir. Ele manda ordens ou mostra o resultado?" · **Acerto (Lia):** "Tudo no lugar certo! Uhul!"
3. **Quiz:** "A impressora é de…" · ✔ Saída · Entrada · Nenhuma das duas.
4. **Quiz:** "Você fala no microfone. Ele é de…" · ✔ Entrada · Saída · Nenhuma das duas.

**Missão Extra (★):** bônus atuais de **1.1** (olhar a sala) e **1.2** (achar touchpad, espaço e botão de ligar) + **B1-X1:** "No caderno, desenhe um computador do futuro. Escreva uma parte nova que ele teria e para que ela serve." (`fora`, a Giovana confere).
**Missão Reforço B1-R1 · Partes em 4 cliques:** só os 4 passos `hot` da aula 1.2 (teclado, monitor, mouse, gabinete), cada um precedido de um balão de 1 frase do Theo apontando a parte. Para quem errou 2 vezes o mesmo `hot` ou não terminou a ficha C1.
**Produto:** ficha C1 (entra no produto do módulo, junto com a pasta do E3).

**Nota para a Giovana (E2):** na ficha C1, aceite "monitor" ou "tela". A câmera e a entrada USB variam entre o HP e o Dell: confira antes onde ficam em cada notebook. Na 1.2 o simulador mostra um computador de mesa; no notebook não há gabinete separado (o balão "Você sabia?" da 1.2 já explica, fato).

### E3 · Mouse, pastas e arquivos
**Objetivo:** usar clique, duplo clique e arrastar; desligar com segurança; criar, renomear, abrir e achar uma pasta e um arquivo.
**Rotina:** aquecimento 8 min, banco A, mesma meta do E2 · missão 47 min · diário 5 min.
**Missão:** **1.3** (12 min, base) → **1.4** (10 min, base) → **B1-N3** minha pasta (13 min, novo) → **B1-N4** salvar, renomear e achar (12 min, novo).
**Pergunta do diário:** "Que nome você deu para a sua pasta? Por que um nome bom ajuda?"

**Especificação do simulador `pastas` (BR-02, para o Telchar):**
- Janela parecida com o Explorador de Arquivos do Windows 11, simplificada: à esquerda, **Área de trabalho, Documentos, Downloads, Imagens**; no topo, o botão **Nova pasta** e a **lupa** (pesquisar); no meio, os itens.
- **Duplo clique** abre uma pasta ou um arquivo. **Também aceitar:** clique simples + **Enter** (acessibilidade para quem ainda não faz o duplo clique).
- **Botão direito** abre o menu: Abrir · Renomear · Excluir (Excluir pede "Tem certeza?").
- **Arrastar** um arquivo até uma pasta move o arquivo para dentro dela (a pasta acende quando o arquivo passa por cima).
- **Janela "Salvar como"** simulada: escolher a pasta à esquerda, digitar o nome, clicar em Salvar.
- Itens já existentes: na Área de trabalho, `arquivo1` (imagem de um cachorro); em Downloads, `bolo de aniversario` (foto); em Imagens, 3 fotos de bichos.
- Comparação de nomes: ignora maiúsculas, acentos e espaços nas pontas.
- Reinicia sozinho ao reabrir a aula (cada criança começa com o mesmo cenário), mas **guarda o estado final** para o "Imprimir minha pasta".

#### B1-N3 · Minha pasta (13 min, `info` + `pastas` + `quiz`)
1. **Balão (Theo)** · 8–9: "Lembra das gavetas? No computador, a gaveta se chama pasta. E se a gente criar uma pasta só sua, com o seu nome?" · 10–12: "Pastas organizam arquivos como gavetas de um armário. Você vai usar o Explorador de Arquivos, o programa da pastinha amarela, para criar uma pasta só sua."
2. **Tarefa:** "Dê dois cliques em Documentos." · **Verifica:** Documentos aberto. · **Se errar:** "Dois cliques bem rápidos: tum-tum! Ou clique uma vez e aperte Enter." · **Acerto (Lia):** "Abriu! Dedo rápido!"
3. **Tarefa:** "Clique no botão Nova pasta." · **Verifica:** uma pasta "Nova pasta" aparece com o nome selecionado. · **Acerto (Lia):** "Pasta nova na área!"
4. **Tarefa:** "Digite: Pasta do e o seu nome. Aperte Enter." · **Verifica:** nome = "pasta do " + primeiro nome do perfil, dentro de Documentos. · **Se errar:** "Confira: Pasta do, um espaço e o seu nome." · **Acerto (Lia):** "Sua pasta existe! Ninguém mais tem uma igual."
5. **Tarefa:** "Dê dois cliques na sua pasta para abrir." · **Verifica:** pasta aberta. · **Fala (Theo):** "Ela está vazia. Vamos guardar alguma coisa nela?"
6. **Quiz:** "Onde está a sua pasta agora?" · ✔ Dentro de Documentos · Dentro do mouse · Na Lixeira.

#### B1-N4 · Salvar, renomear e achar (12 min, `info` + `pastas` + `quiz` + `imprimir`)
1. **Balão (Theo)** · 8–9: "Eu fiz um desenho, mas salvei com um nome esquisito: arquivo1. E se eu precisar achar amanhã? Você me ajuda?" · 10–12: "Nomes como arquivo1 ou sem título não dizem nada. Um bom nome conta o que tem dentro do arquivo e ajuda a achar depois. Vamos arrumar os arquivos do Theo?"
2. **Tarefa:** "Na Área de trabalho, clique em arquivo1 com o botão direito. Escolha Renomear." · **Verifica:** modo de renomear ativo. · **Se errar:** "É o botão da direita do mouse."
3. **Tarefa:** "Digite: desenho do Theo. Aperte Enter." · **Verifica:** nome do arquivo = "desenho do theo". · **Acerto (Lia):** "Agora o nome conta o que tem dentro!"
4. **Tarefa:** "Arraste o desenho até a sua pasta." · **Verifica:** o arquivo está dentro de "Pasta do [nome]". · **Se errar:** "Segure o botão, arraste e só solte em cima da pasta."
5. **Tarefa:** "Abra o desenho. Clique em Salvar como. Escolha a sua pasta. Nome: meu primeiro desenho." · **Verifica:** o arquivo "meu primeiro desenho" está na pasta da criança. · **Acerto (Lia):** "Salvo no lugar certo! Que organização!"
6. **Tarefa:** "O Theo perdeu a foto do bolo. Clique na lupa e digite: bolo." · **Verifica:** a foto `bolo de aniversario` foi aberta. · **Acerto (Lia):** "Achou! A lupa ajuda quem procura."
7. **Quiz:** "Qual é o melhor nome para um arquivo?" · ✔ trabalho de ciências das plantas · arquivo1 · sem título.
8. **Tarefa (`imprimir`):** "Clique em Imprimir minha pasta e chame a tutora." · **Verifica:** PIN da Giovana. · **Acerto (Lia):** "Pasta organizada e impressa! Insígnia Explorador conquistada!" **[DECISÃO JÚNIOR D1]**

**Missão Extra (★):** bônus atuais de **1.3** (10 bolinhas) e **1.4** (Explorador de Arquivos de verdade, com a tutora) + **B1-X2 (`pastas`):** "Dentro da sua pasta, crie duas pastas: Desenhos e Textos. Guarde cada arquivo na pasta certa." (3 arquivos soltos na Área de trabalho: `gato.png`, `historia.txt`, `casa.png`) · Verifica: 2 imagens em Desenhos, 1 texto em Textos · Acerto (Lia): "Pastas dentro de pastas! Nível craque."
**Missão Reforço B1-R2 · Minha pasta com setas:** a mesma B1-N3 em 3 passos (abrir Documentos, Nova pasta, nome), com uma **seta piscando** sobre o lugar do clique e Enter aceito no lugar do duplo clique. Para quem errou 2 vezes o mesmo passo de B1-N3 ou B1-N4.

**Produto para os pais (B1):** **ficha C1 + impressão "minha pasta organizada"**.
**Critério da rubrica (rubrica única do currículo, 4 critérios de 1 a 3; aceito com 6 ou mais):** foco em **Usou a ferramenta** (1 = só criou a pasta · 2 = pasta com o nome certo e 1 arquivo dentro · 3 = 2 arquivos com nomes claros, ou fez a B1-X2) e **Sabe explicar** (a Giovana pergunta: "Onde está o seu desenho?"; 3 = a criança diz o caminho sozinha: "Documentos, Pasta do…").

**Nota para a Giovana (E3):**
- Trava conhecida da 1.3 (fato, `TRAVA`): duplo clique devagar demais. Mostre o ritmo "tum-tum" e lembre que **Enter também abre**.
- No simulador, arrastar é o passo mais difícil para os de 8 anos: segure a mão da criança sobre o mouse uma vez e depois deixe-a tentar sozinha.
- O bônus da 1.4 (Explorador de Arquivos real) é a ponte com o Windows de verdade. Se der tempo, faça com todos, **sem** apagar nada do notebook.
- Quem fez a Colônia já tem 1.1 a 1.4: faz só B1-N1 a B1-N4 e ganha tempo para a B1-X2.

---

## 7. B2 · Teclado ninja (E4, E5 e E6)

**Ao final do módulo, a criança consegue:** digitar com as duas mãos a partir da fileira base, usar Shift, acentos e "ç" no teclado ABNT2 e chegar perto da meta Bronze (8 palavras/min com 90% para 8–9 anos; 15 com 92% para 10–12; estimativa).

### E4 · Fileira base e fileira de cima
**Objetivo:** pôr os dedos na fileira base sem olhar, alcançar a fileira de cima e voltar, e medir o recorde da semana.
**Rotina:** aquecimento 8 min, banco A, meta 6 palavras/min e 88% (8–9) · 12 e 90% (10–12) · missão 47 min · diário 5 min.
**Missão:** **2.1** (13 min, base) → **B2-N1** chuva de letras (14 min, novo) → **2.2** (11 min, base) → **B2-N2** meu recorde da semana (9 min, novo).
**Pergunta do diário:** "O que é mais difícil: não olhar para o teclado ou achar a letra?"

#### B2-N1 · Chuva de letras (14 min, `info` + `jogo` modo chuva)
1. **Balão (Theo)** · 8–9: "E se as letras caíssem do céu? Elas vão cair devagar. Aperte a letra certa antes de ela chegar ao chão. Dedos na fileira base!" · 10–12: "As letras vão cair do alto da tela. Aperte cada uma antes de ela tocar o chão, sempre voltando os dedos para a fileira base. A velocidade aumenta quando você acerta bastante."
2. **Jogo (4 fases de 90 segundos):** fase 1 só **F e J** · fase 2 **A S D F** · fase 3 **J K L Ç** · fase 4 fileira base inteira. A velocidade sobe na fase seguinte se a precisão for ≥ 90%. Não existe "fim de jogo": letra que cai vira uma poça e conta como erro.
3. **Instrução na tela:** "Olhe para a tela. Os dedos ficam na fileira base."
4. **Ao errar:** a mão desenhada (animação `hands` da 2.1) acende o dedo certo.
5. **Verifica:** 4 fases com precisão ≥ 80% (8–9) ou ≥ 85% (10–12). · **Acerto de fase (Lia):** "Fase vencida! Seus dedos já sabem o caminho." · **Acerto final (Lia):** "Chuva de letras domada!"

#### B2-N2 · Meu recorde da semana (9 min, `info` + `recorde`)
1. **Balão (Lia)** · 8–9: "Lembra do primeiro dia? Agora vamos ver o quanto você já cresceu. Respire, olhe para a tela e vá com calma." · 10–12: "No primeiro dia você registrou o seu ponto de partida. Agora é a vez do Recorde 2. Respire, olhe para a tela e lembre: precisão primeiro, velocidade depois."
2. **Teste de 1 minuto (`recorde`):** texto do **mesmo nível** do E1 (para a comparação ser justa) · 8–9: "a lua sobe no alto e o sapo canta no lago" · 10–12: "todo dia eu treino um pouco e meus dedos ficam mais ligeiros no teclado" · **Registra:** Recorde 2 (Semana 1).
3. **Se melhorou (Lia):** "Você passou o seu recorde! Uhul!" · **Se não melhorou (Theo):** "Ainda não passou, e tudo bem. Seus dedos estão aprendendo um caminho novo. Na próxima, a gente tenta de novo."

### E5 · Fileira de baixo, trem e ditado
**Objetivo:** alcançar a fileira de baixo, digitar palavras inteiras com as 3 fileiras e saber qual dedo aperta cada tecla.
**Rotina:** aquecimento 8 min, banco B, meta 7 palavras/min e 88% (8–9) · 13 e 90% (10–12) · missão 47 min · diário 5 min.
**Missão:** **2.3** (11 min, base) → **B2-N3** trem das palavras (15 min, novo) → **B2-N4** ditado-relâmpago (12 min, novo) → **B2-N5** caderno C2 (9 min, novo).
**Pergunta do diário:** "Qual dedo trabalhou mais hoje?"

#### B2-N3 · Trem das palavras (15 min, `info` + `jogo` modo trem)
1. **Balão (Theo)** · 8–9: "Cada vagão do trem leva uma palavra. Digite a palavra e o vagão chega à estação. Será que você salva o trem inteiro?" · 10–12: "O trem anda da direita para a esquerda, e cada vagão leva uma palavra. Digite a palavra antes de o vagão sair da tela. Três fases: fileira de cima, fileira de baixo e todas misturadas."
2. **Jogo (3 fases de 8 palavras, tudo minúsculo e sem acento):**
   | Fase | 8–9 anos | 10–12 anos |
   |---|---|---|
   | 1 · fileira de cima + base | pipa · pote · rua · tia · pera · sopa · tutu · fio | pipoca · porta · torre · quero · tapete · poeira · roupa · tesouro |
   | 2 · fileira de baixo + base | vaca · cama · nave · mala · cabo · banana · bacia · banco | cavalo · camada · banana · camelo · baleia · macaco · cabana · zebra |
   | 3 · misturadas | casa · bolo · zebra · mesa · nuvem · vela · moto · dado | bicicleta · computador · janela · mochila · caderno · formiga · vizinho · chocolate |
3. **Verifica:** 24 vagões, precisão ≥ 85% (8–9) ou ≥ 88% (10–12). · **Acerto (Lia):** "Piuí! O trem chegou inteiro!"

#### B2-N4 · Ditado-relâmpago (12 min, `info` + `jogo` modo ditado)
1. **Balão (Theo)** · 8–9: "Agora é desafio de memória! A palavra aparece e some. Você lembra e digita. Consegue?" · 10–12: "A palavra aparece por 3 segundos e some. Guarde na memória e digite. Se a plataforma tiver o botão ouvir, você também pode escutar a palavra."
2. **Jogo (10 palavras; aparece por 4 s para 8–9 e 3 s para 10–12):** 8–9: bola · casa · pato · mesa · lua · dado · vela · sapo · uva · mapa · 10–12: janela · caderno · tomate · girafa · pijama · escola · telhado · moeda · panela · tapete.
3. **Verifica:** pelo menos 7 de 10 certas. · **Acerto (Lia):** "Memória de elefante e dedos de ninja!" · **Se ficar abaixo de 7:** "Vamos de novo? Desta vez, leia a palavra em voz baixa antes de ela sumir."

#### B2-N5 · Mapa dos meus dedos (9 min, `fora` + caderno C2)
1. **Balão (Theo)** · 8–9: "Cada dedo tem a sua turma de teclas. Vamos fazer o mapa dos seus dedos no caderno, página 2?" · 10–12: "Cada dedo cuida de uma coluna de teclas. No caderno, página 2, você vai pintar o mapa do teclado com as cores dos dedos."
2. **Tarefa no caderno (C2):** "Pinte cada tecla com a cor do dedo que aperta." Mindinho vermelho · anelar laranja · médio verde · indicador azul · polegar amarelo (barra de espaço).
3. **Verifica (`fora`):** a Giovana pergunta 3 teclas sorteadas ("Qual dedo aperta o E?") e digita o PIN. · **Acerto (Lia):** "Mapa pronto! Agora você tem o seu guia."
- **Gabarito (teclado ABNT2):** mão esquerda: mindinho Q A Z (e 1, Tab, Caps Lock, Shift esquerdo) · anelar W S X · médio E D C · indicador R F V T G B · mão direita: indicador Y H N U J M · médio I K vírgula · anelar O L ponto · mindinho P Ç ponto e vírgula, barra, as teclas de acento (´ e ~) e o Shift direito · polegares: barra de espaço.

### E6 · Acentos, maiúsculas e o gráfico do recorde
**Objetivo:** usar Shift, acentos (´ ~ ^) e "ç"; digitar frases completas; comparar o recorde com o ponto de partida.
**Rotina:** aquecimento 8 min, banco B, meta 8 palavras/min e 88% (8–9) · 14 e 90% (10–12) · missão 47 min · diário 5 min.
**Missão:** **2.4** (13 min, base) → **B2-N6** caça ao acento (14 min, novo) → **2.5** (10 min, base) → **B2-N7** meu recorde e meu gráfico (10 min, novo).
**Pergunta do diário:** "Quanto você melhorou desde o primeiro dia? O que ajudou?"

#### B2-N6 · Caça ao acento (14 min, `info` + `jogo` modo acento)
1. **Balão (Theo)** · 8–9: "Algumas palavras perderam o acento! Sem ele, avó vira avo. Vamos devolver? Aperte a tecla do acento, solte e depois aperte a letra." · 10–12: "No teclado ABNT2, o acento é uma tecla que espera a próxima letra. Aperte o acento, solte e depois aperte a letra. Para o ^, segure Shift e aperte a tecla do ~."
2. **Jogo (5 fases de 5 itens; 8–9 digita palavras, 10–12 digita frases curtas):**
   | Fase | 8–9 anos | 10–12 anos |
   |---|---|---|
   | 1 · ç | laço · praça · cabeça · palhaço · onça | A onça dorme. · O laço é azul. · A praça é grande. · Que palhaço legal! · Lavei a cabeça. |
   | 2 · til (~) | mão · pão · limão · irmã · balão | O pão está quente. · Meu irmão joga bola. · O balão subiu. · Lavei a mão. · O limão é azedo. |
   | 3 · agudo (´) | café · pé · avó · sofá · jacaré | A avó fez café. · O jacaré nada. · O sofá é macio. · Meu pé cresceu. · O baú é antigo. |
   | 4 · circunflexo (^ = Shift + ~) | você · avô · ônibus · pêssego · lâmpada | Você viu o avô? · O ônibus parou. · A lâmpada queimou. · Comi um pêssego. · O bebê dormiu. |
   | 5 · maiúscula (Shift) | Pinhão · Theo · Lia · Brasil · Paraná | Pinhão fica no Paraná. · O Theo e a Lia são amigos. · Eu moro no Brasil. · A Lia gosta de Pinhão. · Hoje é sexta-feira. |
3. **Ao errar:** animação curta "acento → soltar → letra" na tecla certa.
4. **Verifica:** pelo menos 4 de 5 certas em cada fase. · **Acerto (Lia):** "Acento devolvido! A palavra agradece."
5. **Quiz:** "Para escrever ê, você…" · ✔ Segura Shift, aperta a tecla do ~ e depois o e · Aperta só o e · Aperta Enter e depois o e.

#### B2-N7 · Meu recorde e meu gráfico (10 min, `info` + `recorde` + `type` + `imprimir`)
1. **Balão (Lia)** · 8–9: "Chegou a hora do Recorde 3! Depois, você vai ver tudo num gráfico: o primeiro dia, a semana passada e hoje." · 10–12: "Último recorde do módulo! Depois, a plataforma monta um gráfico com os três recordes e a meta Bronze. Lembre-se: a precisão também aparece no gráfico."
2. **Teste de 1 minuto (`recorde`):** texto do mesmo nível do E1 e do E4 · 8–9: "o sol nasce cedo e o galo canta na cerca" · 10–12: "quem treina todo dia digita melhor e erra menos no teclado" · **Registra:** Recorde 3 (Hoje).
3. **Gráfico (automático):** barras "Dia 1 · Semana 1 · Hoje" (palavras por minuto), linha tracejada da meta Bronze e, embaixo, a precisão de cada dia em %.
4. **Quiz (gerado a partir dos dados):** "Em qual dia você digitou mais palavras por minuto?" · ✔ o maior valor · os outros dois.
5. **Tarefa (`type` livre):** "Complete: Eu melhorei porque…" · **Verifica:** pelo menos 3 palavras. A frase aparece no gráfico impresso.
6. **Tarefa (`imprimir`):** "Chame a tutora para imprimir o seu gráfico." · **Verifica:** PIN. · **Se melhorou (Lia):** "Olha esse gráfico subindo! Isso é treino que virou resultado. Insígnia Digitador conquistada!" · **Se não melhorou (Theo):** "O gráfico mostra o caminho, não só a chegada. Veja a sua precisão: ela também conta! Insígnia Digitador conquistada!" **[DECISÃO JÚNIOR D1]**

**Missão Extra (★):** bônus atuais de **2.1 a 2.5** (5 frases-desafio, fato) + **B2-X1 · Chuva relâmpago:** a fase 4 da chuva de letras com a velocidade dobrada · **B2-X2 · Frase de muitas letras:** 8–9: "O jabuti viu a zebra e o cavalo no quintal." · 10–12: "Um pequeno jabuti xereta viu dez cegonhas felizes." (frase famosa que usa todas as letras do alfabeto, menos k, w e y) · Acerto (Lia): "Quase o alfabeto inteiro de uma vez! Craque!"
**Missão Reforço B2-R1 · Só F e J:** chuva de letras só com F, J, D e K, com a mão desenhada sempre visível e a velocidade mais lenta. **B2-R2 · Acento passo a passo:** 3 palavras (pão, café, você), com a animação antes de cada letra. Para quem ficou abaixo do mínimo da fase 2 vezes.

**Produto para os pais (B2):** **Gráfico do meu recorde de digitação** (Dia 1 × Semana 1 × Hoje + "Eu melhorei porque…").
**Critério da rubrica:** foco em **Fez sozinho** (3 = fez os testes sem olhar para o teclado; 2 = olhou algumas vezes; 1 = olhou o tempo todo) e **Capricho e clareza** (3 = precisão ≥ 90% no Recorde 3; 2 = 80% a 89%; 1 = abaixo de 80%). O produto vale pelo **progresso e pela precisão**, nunca pela velocidade comparada à de outra criança.

**Nota para a Giovana (B2):**
- **Antes do E4:** confira se o Windows de cada notebook está com o teclado **Português (Brasil) ABNT2**. Sem isso, "ç" e acentos não saem certos (fato do check-up: falta testar os acentos no Windows real).
- Trava conhecida da 2.1 (fato, `TRAVA`): a criança olha para o teclado. Um pano leve sobre as mãos ajuda. Trava da 2.4: aperta-se o acento, **solta**, e depois a letra.
- É normal a velocidade **cair** no E4 (a criança troca o "catar milho" pelos dez dedos). Avise a família na saída, para ninguém se assustar com o Recorde 2.
- No ditado, se não houver botão "ouvir", dite você a palavra para quem lê devagar e anote isso.
- Carinha "difícil" 3 vezes seguidas no B2 é comum em quem tem pouca coordenação motora: avise o Sam e proponha a B2-R1 antes do E6.

---

## 8. B3 · Internet segura I (E7, E8 e E9)

**Ao final do módulo, a criança consegue:** explicar o que é a internet e como uma mensagem viaja, usar o navegador, criar uma senha forte (sem contar a ninguém) e dizer o que fazer diante de um estranho, de um link suspeito, de um boato ou de bullying.

### E7 · Como a internet funciona e o que eu não conto
**Objetivo:** explicar com palavras simples como uma mensagem viaja pela internet, usar o navegador e separar o que pode e o que não pode ser contado na internet.
**Rotina:** aquecimento 8 min, banco C, meta Bronze: 8 palavras/min e 90% (8–9) · 15 e 92% (10–12) · missão 47 min · diário 5 min.
**Missão:** **3.1** (9 min, base) → **3.2** (9 min, base) → **B3-N1** correio da internet (14 min, novo, desplugado) → **B3-N2** o que eu não conto (15 min, novo).
**Pergunta do diário:** "O que você nunca conta na internet?"

#### B3-N1 · Correio da internet (14 min, `fora` + caderno C3, desplugado)
1. **Balão (Theo)** · 8–9: "Como uma mensagem chega do outro lado do mundo tão rápido? E se a gente virasse a internet? Pegue o caderno na página 3." · 10–12: "Na internet, a mensagem é dividida em pedacinhos chamados pacotes. Cada pacote leva o endereço de quem vai receber e um número. Eles viajam por caminhos diferentes e são montados no final."
2. **Atividade (com a tutora e os colegas):**
   - "Escreva uma mensagem de 8 palavras para um colega."
   - "Recorte a mensagem em 4 tiras. Cada tira é um pacote."
   - "Em cada tira, escreva o número (1, 2, 3, 4) e o nome de quem vai receber."
   - Os pacotes passam por 2 ou 3 "roteadores" (colegas ou cadeiras), por caminhos diferentes.
   - "Quem recebe monta a mensagem pela ordem dos números."
   - A Giovana "perde" um pacote de propósito: quem recebe pede de novo o número que faltou.
3. **Registro no caderno (C3):** "Minha mensagem tinha ___ pacotes." · "Ela chegou na ordem certa? ___" · "Para que servem os números nos pacotes? ___"
4. **Verifica (`fora`):** a Giovana confere o C3 e digita o PIN. · **Acerto (Lia):** "Mensagem entregue! Você acabou de funcionar como a internet."

#### B3-N2 · O que eu não conto na internet (15 min, `info` + `cartas` + `quiz`)
1. **Balão (Theo)** · 8–9: "Na internet, nem tudo pode ser contado. E se um estranho descobrir onde você mora? Vamos separar o que pode e o que é segredo." · 10–12: "Dados pessoais mostram quem você é e onde encontrar você. Na internet, eles ficam guardados e podem chegar a pessoas que você não conhece. Por isso, alguns ficam em segredo."
2. **Tarefa (`cartas`, 3 caixas):** "Arraste cada cartão para a caixa certa."
   | Posso contar | Não conto | Pergunto a um adulto antes |
   |---|---|---|
   | Minha cor favorita | O endereço da minha casa | Postar uma foto minha |
   | O meu desenho animado favorito | A minha senha | Baixar um jogo novo |
   | Que eu gosto de futebol | O nome da minha escola e o meu horário | Fazer cadastro num site |
   | | O meu telefone | |
   | | Onde eu estou agora | |
   - **Se errar, o cartão volta com uma dica:** "Com isso, um estranho conseguiria achar você?" · **Acerto (Lia):** "Seus segredos estão protegidos!"
3. **Quiz:** "Num jogo online, alguém pergunta: em que escola você estuda? O que você faz?" · ✔ Não conto e aviso um adulto · Conto, porque é só a escola · Conto se ele contar a dele.
4. **Quiz:** "Um amigo do jogo, que você nunca viu, quer encontrar você na praça. O que fazer?" · ✔ Não vou e conto para um adulto · Vou sozinho · Vou e levo um amigo.

**Missão Extra (★):** bônus atuais de **3.1** (o que não precisa de internet) e **3.2** (voltar à página anterior).
**Missão Reforço B3-R1 · Segredo ou não?:** 6 cartões e só 2 caixas ("Posso contar" e "Não conto"), com balão de 1 frase. Para quem errou 3 cartões ou mais na B3-N2.

**Nota para a Giovana (E7):** a B3-N1 funciona melhor com 3 ou mais crianças. **Se houver só 1 ou 2:** você e a criança são remetente e destinatário, e 2 cadeiras são os roteadores. Leve tesoura sem ponta. Na B3-N2, o cartão "nome da escola" costuma gerar discussão ("mas todo mundo sabe!"): é uma boa conversa; a regra é **não contar a quem não conhecemos pessoalmente**.

### E8 · Fato ou boato e senha forte
**Objetivo:** usar as 3 perguntas do detetive antes de acreditar ou compartilhar, e criar uma senha forte de treino.
**Rotina:** aquecimento 8 min, banco C, meta Bronze · missão 47 min · diário 5 min.
**Missão:** **3.3** (9 min, base) → **B3-N3** fato ou boato (15 min, novo) → **3.4** (9 min, base) → **B3-N4** fábrica de senhas (14 min, novo).
**Pergunta do diário:** "Como você descobre se uma notícia é boato?"

#### B3-N3 · Fato ou boato? (15 min, `info` + `cartas` + `quiz`)
1. **Balão (Theo)** · 8–9: "Recebi uma mensagem dizendo que manga com leite faz mal. Será verdade? Antes de acreditar, o detetive faz três perguntas." · 10–12: "Recebi uma mensagem que diz: manga com leite faz mal. Muita gente acredita. Antes de acreditar e espalhar, um bom detetive da internet faz três perguntas."
2. **Balão (Lia)** · 8–9: "As três perguntas do detetive: Quem escreveu? Outros lugares confiáveis dizem o mesmo? A mensagem quer me assustar ou me apressar?" · 10–12: "As perguntas do detetive: 1) Quem escreveu e de onde vem a informação? 2) Outras fontes confiáveis dizem o mesmo? 3) A mensagem tenta me assustar ou me apressar?"
3. **Tarefa (`cartas`, 3 caixas: Fato · Boato · Preciso conferir):**
   | Cartão | Caixa certa | Dica se errar |
   |---|---|---|
   | A Terra gira em volta do Sol. | Fato | "Isso está nos livros de Ciências." |
   | Pinhão fica no Paraná. | Fato | "Olhe o mapa do Paraná." |
   | Compartilhe com 10 amigos ou o seu celular vai quebrar. | Boato | "Ela quer assustar você. Celular não quebra por isso." |
   | Ganhe um celular de graça! Clique aqui em 1 minuto! | Boato | "Ela quer apressar você. É golpe." |
   | Manga com leite faz mal. | Boato | "É uma crença antiga. Os médicos já explicaram que não faz mal." |
   | Amanhã não vai ter aula em nenhuma escola! (mensagem sem autor) | Preciso conferir | "Quem escreveu? Pergunte à escola ou a um adulto." |
   - **10–12 ganha mais 1 cartão:** "A água ferve a 100 graus ao nível do mar." → Fato.
   - **Acerto (Lia):** "Detetive aprovado! Boato não engana você."
4. **Quiz:** "Qual é a primeira pergunta do detetive?" · ✔ Quem escreveu isso? · Quantas curtidas tem? · A imagem é bonita?
5. **Quiz:** "Uma mensagem diz: compartilhe agora, antes que apaguem! O que ela quer?" · ✔ Me apressar para eu não pensar · Me ajudar · Nada, é normal.

#### B3-N4 · Fábrica de senhas (14 min, `info` + botões + `type` + `order` + `quiz`)
1. **Balão (Theo)** · 8–9: "Senha forte é difícil de adivinhar, mas fácil de lembrar. O truque: juntar palavras malucas, um número e um símbolo. Vamos criar uma senha de treino para o meu robô?" · 10–12: "Uma senha forte é comprida, mistura letras maiúsculas e minúsculas, números e símbolos, e não tem nome, data nem 1234. O truque é juntar palavras sem relação, fáceis de lembrar só para você."
2. **Balão (Lia)** · 8–9: "Atenção: esta senha é só de treino. Nunca digite aqui a sua senha de verdade!" · 10–12: "Atenção: esta é uma senha de treino. Nunca digite aqui, nem em lugar nenhum da aula, uma senha que você usa de verdade."
3. **Tarefa (botões):** "Escolha 2 palavras malucas." (Pipoca · Foguete · Girafa · Nuvem · Sapato · Abacaxi · Trovão · Pijama) · "Escolha um número de 2 algarismos." · "Escolha um símbolo: ! ? # @" · A plataforma monta a senha (ex.: Girafa!Nuvem27) e mostra o **termômetro de força**. · **Acerto (Lia):** "Senha de aço!"
4. **Tarefa (`type`):** "Digite a senha que você montou. Use o Shift nas letras maiúsculas." · **Verifica:** igual à senha montada. · **Acerto (Lia):** "Nem o robô do Theo consegue adivinhar!"
5. **Tarefa (`order`):** "Coloque em ordem, da senha mais fraca para a mais forte:" 1234 → theo → theo2015 → Girafa!Nuvem27.
6. **Quiz:** "Com quem posso dividir a minha senha?" · ✔ Só com o meu responsável · Com o meu melhor amigo · Com quem pedir no jogo.
- **Regra técnica (Telchar):** a senha de treino **não é gravada** no progresso nem na cópia de segurança; some ao sair da aula.

**Missão Extra (★):** bônus atuais de **3.3** (corrente falsa) e **3.4** (celular de graça) + **B3-X1 · Detetive avançado:** 3 mensagens novas; para cada uma, a criança digita 1 frase dizendo por que é boato (`type` livre, mínimo 5 palavras; a Giovana confere). Mensagens: "Seu jogo vai ser apagado se você não mandar a sua senha." · "Beber água gelada depois do almoço faz o coração parar." · "Ganhe 1.000 moedas no jogo: é só digitar o número do cartão."
**Missão Reforço B3-R2 · Senha forte em 3 passos:** palavras e símbolo já escolhidos; a criança só escolhe o número e digita a senha. Para quem não completou a B3-N4.

**Nota para a Giovana (E8):** a carta da manga com leite costuma surpreender ("minha avó disse"). Responda com respeito: "Muita gente aprendeu assim; hoje os médicos sabem que não faz mal. É assim que boatos passam de geração em geração." **Nunca** peça que a criança diga ou digite a senha real de casa; se ela começar, interrompa com gentileza.

### E9 · Pegada digital, quando chamar um adulto e o Pacto
**Objetivo:** explicar o que é pegada digital, reconhecer quando chamar um adulto ("medo, vergonha ou pressa") e assinar o Pacto da Internet Segura.
**Rotina:** aquecimento 8 min, banco C, meta Bronze · missão 47 min · diário 5 min.
**Missão:** **3.5** (9 min, base) → **B3-N5** pegada digital (12 min, novo) → **B3-N6** quando chamar um adulto (12 min, novo) → **B3-N7** Pacto da Internet Segura (14 min, novo).
**Pergunta do diário:** "Qual promessa do Pacto é a mais importante para você?"

#### B3-N5 · Minha pegada digital (12 min, `info` + `cartas` + `quiz` + `order`)
1. **Balão (Theo)** · 8–9: "Na areia, os pés deixam pegadas. Na internet também! Cada foto, curtida e comentário fica marcado. E se alguém vir isso daqui a dez anos?" · 10–12: "Tudo o que você posta, curte ou comenta forma a sua pegada digital. Mesmo apagando, alguém pode ter salvado ou tirado print. Antes de postar, pense: eu mostraria isso para a minha família e para a escola?"
2. **Tarefa (`cartas`, 2 caixas: Pegada boa · Pegada ruim):** Pegada boa: parabenizar um amigo pelo desenho · compartilhar a dica de um livro · pedir ajuda com respeito · Pegada ruim: postar foto de um colega sem pedir · comentar "que feio" no vídeo de alguém · xingar no chat do jogo. · **Acerto (Lia):** "Pegada de craque! Você deixa marcas boas por onde passa."
3. **Quiz:** "Você apagou uma foto que postou. Ela sumiu para sempre?" · ✔ Não: alguém pode ter salvado ou tirado print · Sim, sumiu de todo lugar · Só se eu desligar o celular.
4. **Tarefa (`order`, regra do semáforo):** "Coloque em ordem o que fazer antes de postar:" Vermelho: parar → Amarelo: pensar se isso pode magoar alguém → Verde: postar só se a minha família e a escola puderem ver.

#### B3-N6 · Quando chamar um adulto (12 min, `info` + `quiz` em série + `fora`)
1. **Balão (Theo)** · 8–9: "Tem horas que a gente resolve sozinho. E tem horas que precisa de um adulto. Como saber? Sentiu medo, vergonha ou pressa? Chame um adulto!" · 10–12: "Alguns problemas você resolve sozinho, como uma página que não carrega. Outros pedem um adulto. A regra: se a situação deu medo, vergonha ou pressa, pare e chame um adulto de confiança."
2. **Quiz em série (7 situações; opções: "Resolvo sozinho ou com um colega" / "Chamo um adulto"):**
   | Situação | Resposta |
   |---|---|
   | A página do site não carregou. | Resolvo sozinho (aperto Atualizar) |
   | Esqueci onde fica o botão de aumentar o volume. | Resolvo sozinho ou com um colega |
   | Apareceu uma janela: "Seu computador tem vírus! Clique aqui!" | Chamo um adulto |
   | Alguém do jogo pede uma foto minha. | Chamo um adulto |
   | Um colega recebe mensagens maldosas todo dia. | Chamo um adulto |
   | Vi uma imagem que me deixou assustado. | Chamo um adulto |
   | Um site pede o número do cartão do meu responsável. | Chamo um adulto |
   - **Acerto (Lia):** "Pedir ajuda é coisa de gente esperta!" · **Se errar:** "Isso deu medo, vergonha ou pressa? Então…"
3. **Tarefa no caderno (C4, parte de cima):** "Escreva o nome de 2 adultos de confiança." (**só no papel**, nunca na plataforma; LGPD) · Verifica: segue para a B3-N7.

#### B3-N7 · Pacto da Internet Segura (14 min, `info` + `check` + `type` + `imprimir` + `fora`)
1. **Balão (Theo)** · 8–9: "Chegou a hora do nosso combinado mais importante. Um pacto é uma promessa que duas partes assinam: você e a sua família!" · 10–12: "Um pacto é um acordo em que as duas partes prometem algo. No Pacto da Internet Segura, você faz promessas e a sua família também. Vocês dois assinam."
2. **Tarefa (`check`):** "Leia cada promessa. Marque se você entendeu." (as 6 promessas da criança, abaixo)
3. **Tarefa (`type` livre):** "Escreva uma regra sua para o Pacto." · **Verifica:** pelo menos 5 palavras. A regra aparece impressa no Pacto. · **Acerto (Lia):** "Que regra boa! Ela entrou no seu Pacto."
4. **Tarefa (`imprimir`):** "Chame a tutora para imprimir o seu Pacto." · Leitura em voz alta com a Giovana · assinatura da criança.
5. **Verifica (`fora`):** a Giovana digita o PIN quando o Pacto **voltar assinado pela família** (normalmente no E10). · **Acerto (Lia):** "Pacto assinado! Insígnia Navegador conquistada!" **[DECISÃO JÚNIOR D1]**

**Texto do Pacto (página C4 do caderno, 1 folha para ir para casa):**
> **Pacto da Internet Segura**
> Eu, ______________________, prometo:
> 1. Guardar a minha senha em segredo. Só o meu responsável pode saber.
> 2. Não contar na internet onde moro, onde estudo, o meu telefone nem onde estou.
> 3. Não conversar com estranhos e nunca ir a um encontro com alguém que conheci pela internet.
> 4. Pensar antes de postar: isso pode magoar alguém? A minha família e a escola podem ver?
> 5. Conferir antes de acreditar e antes de compartilhar.
> 6. Chamar um adulto sempre que eu sentir medo, vergonha ou pressa.
> 7. A minha regra: ______________________ (vem da plataforma)
> Os meus adultos de confiança: __________ e __________.
>
> **A minha família promete:**
> 1. Ouvir com calma quando eu contar algo que aconteceu na internet, sem brigar comigo por ter contado.
> 2. Combinar comigo os horários, os jogos e os aplicativos que posso usar.
> 3. Pedir a minha permissão antes de postar uma foto minha.
>
> Assinatura da criança: __________ · Assinatura do responsável: __________ · Data: ___/___/____

**Missão Extra (★):** **B3-X2 · Professor por um dia:** "Ensine a regra do semáforo para alguém da sua casa. Na próxima aula, conte no diário como foi." (a Giovana confirma pelo diário).
**Missão Reforço:** B3-R1 (segredo ou não) e B3-R2 (senha em 3 passos), conforme o ponto em que a criança travou.

**Produto para os pais (B3):** **Pacto da Internet Segura assinado pela criança e pela família** (vai para casa e volta; a cópia assinada fica na pasta-portfólio).
**Critério da rubrica:** foco em **Sabe explicar** (a Giovana pede: "Me conte 3 promessas do Pacto com as suas palavras"; 3 = explica sozinha; 2 = com ajuda; 1 = não consegue) e **Capricho e clareza** (a regra própria: 3 = clara e sem erros de digitação; 2 = dá para entender; 1 = difícil de entender). O Pacto só entra no portfólio **assinado pela família**.

**Nota para a Giovana (E9):**
- Mande o Pacto para casa num envelope ou na pasta, com um bilhete curto: "Leiam juntos e assinem. Devolver na próxima aula." Se não voltar em 2 encontros, imprima uma 2ª via e **avise o Sam** (sinal de família pouco envolvida).
- A aula 3.5 (bullying) pode trazer relatos reais. **Se uma criança contar que sofre ou pratica bullying ou que foi abordada por um estranho:** ouça sem julgar, não prometa segredo, registre só o essencial e avise o Júnior no mesmo dia.
- Os nomes dos adultos de confiança ficam **só no papel**.

---

## 9. Páginas do caderno usadas na Parte 1 (conteúdo; a diagramação é do Telchar, BR-09)

| Página | Encontro | Conteúdo |
|---|---|---|
| **C1 · As partes do notebook** | E2 | Desenho do notebook aberto com 8 setas · lista de nomes para ligar (tela, teclado, touchpad, botão de ligar, câmera, entrada USB, entrada do carregador, alto-falante) · legenda "azul = entrada · laranja = saída" · caixinha "A tutora conferiu" |
| **C2 · Mapa dos meus dedos** | E5 | Teclado ABNT2 em branco, em tamanho grande · 2 mãos desenhadas com os dedos coloridos (vermelho, laranja, verde, azul, amarelo) · "Pinte cada tecla com a cor do dedo" |
| **C3 · Correio da internet** | E7 | 4 tiras pontilhadas para recortar (com espaço para número e destinatário) · 3 perguntas de registro (seção 8, B3-N1) · desenho simples de 3 "roteadores" ligados por linhas |
| **C4 · Pacto da Internet Segura** | E9 | Texto do Pacto (seção 8), 1 folha destacável, com espaço para os 2 adultos de confiança e as assinaturas |
Custo de impressão do caderno e do Pacto: **Fíli** (pendente, previsto até 04/12).

---

## 10. Como medir o resultado

| Indicador | Meta | Como medir | Quando |
|---|---|---|---|
| Encontro fecha em 60 min | Núcleo entre 40 e 55 min em ≥ 80% dos encontros | Registro de tempo por passo (E10 do plano) | Teste de 12/12, Colônia, 6 primeiras semanas |
| Pedidos de ajuda por aula nova | ≤ 3 por aula | Risco na ficha da Giovana | Teste de 12/12 |
| Produtos aceitos no portfólio (rubrica ≥ 6) | ≥ 85% das crianças em cada módulo | Rubrica da Giovana | Fim do E3, E6 e E9 |
| Evolução da digitação | ≥ 80% das crianças com Recorde 3 > Recorde 1 | Gráfico do B2 | E6 |
| Pacto devolvido assinado | ≥ 80% em até 2 encontros | Marcação `fora` da Giovana | E10–E11 |
| Carinha "difícil" | < 20% dos diários do módulo | Diário de bordo | Toda semana |
| Leitura | Quem "não leu" no E1 lê com ajuda até o E9 | Marcação da Giovana | E1 e E9 |

**Regras de ajuste (a partir do teste de 12/12):** se uma aula nova passar de 1,5× o tempo previsto ou tiver > 3 pedidos de ajuda, reescrevo a aula (não só corto); se sobrar tempo (núcleo < 40 min), a criança vai para a Missão Extra, nunca para o módulo seguinte antes do previsto **[DECISÃO JÚNIOR D4]**.

---

## 11. Onde estão as decisões pendentes neste roteiro

| Decisão | Onde aparece | O que muda |
|---|---|---|
| **D1** nomes dos níveis e do certificado | B0-N1 (mensagem do avatar), B0-N3 (título do cartão), insígnias Explorador, Digitador e Navegador (B1-N4, B2-N7, B3-N7) | Só o texto; uso "Explorador Digital" provisoriamente |
| **D2** carga horária no certificado | B0-N3 ("Nível Bronze: 14 encontros") | Se o Júnior preferir horas ("14 horas") ou nada no cartão |
| **D3** testes antigos como prova de validação | B0-N2 ("já sei"), seção 3 (criança da Colônia ou que já sabe), nota da Giovana do E1 | Se "Não": quem já sabe faz a aula-base rapidamente e ganha a Missão Extra |
| **D4** limite de 1 módulo à frente | Missões Extras de todos os módulos, seção 10 | Se duro: a plataforma trava o módulo seguinte e oferece a Missão Extra; se flexível: a Giovana libera com motivo |

---

## Alertas

1. 🔴 **Teclado ABNT2 no Windows.** Todo o B2 (ç, acentos, ^ com Shift) depende de o layout estar certo nos notebooks. Precisa entrar no teste de 05/12 (pendência 27) e no teste com crianças de 12/12. Sem isso, a criança "erra" sem ter errado.
2. 🟡 **O simulador de pastas é o item mais caro do Bronze (BR-02, tamanho G).** Se apertar, o plano B (imagens com `hot` + a Giovana demonstra no Windows real) preserva o objetivo, mas perde a parte "fiz sozinho". Sugiro que ele entre no Lote 1 do Telchar, como já está no plano.
3. 🟡 **Tipo `cartas` é usado em 4 aulas.** Vale construir uma vez e bem; o plano B (uma `quiz` por cartão) funciona, mas é mais lento e menos divertido.
4. 🟡 **Impressão:** 4 produtos impressos no Bronze Parte 1 por criança (cartão, pasta, gráfico, Pacto), mais 4 páginas de caderno. O custo por aluno (Fíli) ainda não existe.
5. 🟡 **Relatos sensíveis no B3** (bullying, abordagem de estranhos). A Giovana precisa de um fluxo combinado com o Júnior e o Orthanc (quem avisar, o que registrar, LGPD) antes de fevereiro.
6. 🟢 A atividade desplugada B3-N1 rende mais com 3 ou mais crianças: se as turmas da manhã forem pequenas, usar o plano com cadeiras.

## Próximas ações (priorizadas)

| # | O quê | Quem | Até |
|---|---|---|---|
| 1 | Decidir D1 a D4 (a lista de 1 página do Telchar já cobre os 4 pontos) | **Júnior** | 27/11 |
| 2 | Codificar o Lote 1 (B0, B1 com o simulador de pastas, B2 com os jogos) e o tipo `cartas`; conferir os balões da versão 8–9 com até 40 palavras na bateria | **Telchar** | 20/12 |
| 3 | Conferir o teclado ABNT2 e os acentos no notebook de teste, junto com a pendência 27 | **Júnior** | 05/12 |
| 4 | Testar no dia 12/12: B0-N2 (diagnóstico) e, em papel, a B3-N1, cronometrando; a Giovana marca onde travou | **Giovana** (com a ficha do Telchar) | 12/12 |
| 5 | Entregar a Parte 2 (B4, B5, Teste Bronze + mini-Mostra, Caderno Bronze completo, rubrica, gabaritos) e recalibrar a Parte 1 com o teste | **Pelennor** | 18/12 |

Sugestão para o Durin: registrar as ações 1 a 5 em `gestao/pendencias.md` e o alerta 5 em `gestao/riscos.md`; incluir este relatório na Central de Documentos (não editei esses arquivos, conforme o pedido).

— Pelennor, Coordenador Pedagógico
