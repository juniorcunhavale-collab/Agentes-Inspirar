# Check-up da plataforma Inspirar Informática (Trilha Digital)
**Data:** 2026-11-20 · **Elaborado por:** Telchar (Gestor da Inspirar Informática) · **Pedido:** Júnior, via Durin
**O que foi testado:** artifacts "Inspirar Informática" (versão do professor/gestão) e "Inspirar Informática Aluno"
(código baixado e rodado com Playwright em 1366x768 e 390x844), comparados com a "Ementa do curso de informática
básica (8 a 12 anos)", o "Plano técnico da versão real", os "Personagens", o "Rascunho do termo LGPD" e "Voz e IA
para o tutor". Nenhum artifact foi alterado.

---

## 1. Resumo (para ler em 1 minuto)

1. **Ainda não está pronta para lançar.** A parte do aluno é bonita, roda sem erros e as 40 aulas existem, mas é
   uma **demonstração que guarda tudo só no navegador de cada notebook**.
2. **Bloqueia a Colônia (11/01):** a trilha travada não deixa a criança chegar ao Word e ao Excel na semana;
   **duas aulas são impossíveis de concluir** (4.5 e 5.5); o Excel **perde cliques**; o termo LGPD não está pronto.
3. **Bloqueia fevereiro:** os **pais não têm como ver nada** e a tutora não vê os alunos reais (precisa de banco de
   dados e login), e o conteúdo é raso para 40 horas de aula.
4. **Caminho recomendado:** Colônia em "modo local" (arquivo da plataforma salvo em cada notebook, trilha especial
   da Colônia e Mostra presencial para os pais) e banco de dados real até fevereiro.
5. Os consertos de código da Colônia são pequenos (estimo **2 a 4 dias** de trabalho do Júnior). O teste com 2 ou
   3 crianças precisa acontecer **até 12/12**.

---

## 2. O que existe hoje (inventário)

**Os dois artifacts usam o mesmo código** (cerca de 1.300 linhas; os personagens e a logo vêm embutidos no arquivo).
O "Aluno" só esconde os outros perfis e o modo demonstração. **Nenhum dos dois declara banco de dados, login ou
outra capacidade do claude.ai:** os dados ficam em `localStorage` (o armazenamento do navegador). Por isso não há
nada que dependa do claude.ai para ser testado com a Giovana. O problema é o contrário: **falta** um servidor.

| Item | Situação | Observação |
|---|---|---|
| Tela de entrada (perfis) | ✅ | No "Aluno": nome, idade e personagem (Mia ou Teo). Sem senha |
| Perfil **Aluno**: trilha com 7 módulos, travas e barra de progresso | ✅ | Testado de ponta a ponta |
| **40 aulas** (4+5+5+6+8+7+5) | ✅ / ⚠️ | Todas têm conteúdo; nenhuma em "em produção". Mas são curtas (ver seção 4) |
| Quizzes, "clique na peça", jogo das bolinhas, ordenar passos | ✅ | Funcionam; nos quizzes das aulas a resposta certa quase sempre é a 1ª opção |
| Mini-animações (clique, mãos no teclado, salvar) | ✅ | 3 animações |
| Treino de digitação com teclado na tela, palavras/min e precisão | ✅ | Acentos no teclado ABNT2 ainda precisam de teste no Windows real |
| Simulador de **Word** (negrito, itálico, sublinhado, cor, alinhamento, lista, imagem) | ⚠️ | Aula 4.5 impossível de concluir |
| Simulador de **Excel** (células, fórmulas, SOMA, MEDIA, MAXIMO, cor, gráfico) | ⚠️ | Perde cliques; aula 5.5 impossível |
| Simulador de **PowerPoint** (slides, tema, imagem, transição, apresentar) | ✅ | A ementa o deixava para a fase 2: já existe |
| Teste de módulo (10 de 20 perguntas sorteadas + digitação), 70 pts | ✅ | Embaralha as opções; refaz só a parte que faltou |
| Estrelas, adesivos (15), personagem que evolui em 7 fases | ✅ | |
| Certificado por semestre | ⚠️ | Só na tela; o código de verificação não confere nada; não há PDF |
| Perfil **Tutor**: presença, onde cada aluno está, "precisa de apoio", liberar módulo | ⚠️ | Funciona só com os **alunos fictícios** do próprio aparelho; nome fixo "Tutora Marina" |
| Perfil **Gestor**: horários × computadores, matrícula, liberações, alunos em atenção | ⚠️ | Dados fictícios; horários de exemplo ("Seg 14h", "Polo Exemplo") não batem com a grade real |
| Perfil **Pais**: presença, aulas, notas, digitação | ❌ na prática | A tela existe só no artifact privado, com filhos fictícios. O "Aluno" não tem acesso para pais |
| Gabaritos e roteiro para a tutora | ❌ | Não existe (o contexto diz que existe) |
| Voz / áudio / IA | ❌ | Nada no código; o documento "Voz e IA" é só estudo de custo |
| Login com senha, banco de dados, acesso dos pais pela internet | ❌ | Previsto no "Plano técnico" (Supabase + Vercel), ainda não feito |
| Navegador simulado (módulo 3) | ❌ | A ementa prevê; hoje o módulo 3 é só leitura e quiz |
| Trilha própria da Colônia (5 missões) | ❌ | Não existe |
| Telas no notebook (1366) e no celular (390) | ✅ | Nenhuma rolagem lateral; layout se adapta; único erro de console foi o das fontes, que bloqueei de propósito no teste |

**Teste automático de ponta a ponta (fato):** um aluno percorreu as 40 aulas e os 7 testes. Passaram 32 aulas e
os 7 testes. As 8 que falharam são as do Word (4.5) e do Excel (5.1, 5.2, 5.3, 5.5, 5.6, 5.8, 7.3). Clicando de
novo quando o clique se perde, todas as do Excel passam, **menos a 5.5**. O certificado foi emitido no final.

---

## 3. Problemas encontrados

Legenda: 🔴 bloqueia o lançamento · 🟡 importante antes de fevereiro · 🟢 melhoria

| # | Onde | O que acontece | Grav. | Sugestão de correção |
|---|---|---|---|---|
| 1 | Toda a plataforma | Progresso, presença e notas ficam **só no navegador do notebook onde a criança entrou**. Se ela trocar de notebook, começa do zero; se alguém limpar o navegador, perde tudo | 🔴 | **Colônia:** cada criança usa sempre o mesmo notebook (etiqueta "Notebook Azul: Ana, Bruno…") e a tutora faz um backup por dia. **Fevereiro:** banco de dados real (Supabase, como no Plano técnico) |
| 2 | Painel dos pais | Os pais **não têm como acessar**: o artifact do aluno não tem tela de pais e o principal é privado e mostra filhos fictícios. É a promessa principal de venda | 🔴 | **Colônia:** Mostra presencial na sexta e um resumo da Giovana por WhatsApp. **Fevereiro:** login dos pais ligado ao banco, vendo só o próprio filho |
| 3 | Painel da tutora | No aparelho dela, a Giovana vê os alunos fictícios, não as crianças da sala. A presença "aguardando confirmação" nunca chega até ela | 🔴 | Colônia: a tutora confere a presença em cada notebook (ou numa lista em papel). Fevereiro: banco |
| 4 | Trilha travada × Colônia | O Word (módulo 4) e o Excel (módulo 5) só abrem depois de passar nos testes 1, 2 e 3, **incluindo as metas de digitação**. No artifact do aluno **não há** como destravar. A Colônia prevê Word no dia 2 e Excel no dia 4 | 🔴 | Criar a **"Trilha Colônia"**: 5 missões montadas com aulas existentes, liberadas uma por dia pela tutora (com senha da tutora) |
| 5 | Aula **4.5** (Word, imagem) | A tarefa "Centralize a linha da imagem" **nunca conclui**: a imagem entra num bloco próprio e o botão de centralizar alinha a frase de cima. Testei clicando na imagem, ao lado dela, com as setas e com Ctrl+End. Sem a 4.5, a 4.6 e o teste do Word ficam travados, e **ninguém chega ao Excel** pela trilha normal | 🔴 | Trocar a regra por "a imagem ou o parágrafo dela está centralizado" ou inserir a imagem dentro do parágrafo. Retestar |
| 6 | Aula **5.5** (Excel, fórmulas) | **Impossível concluir**: as tarefas 1 e 2 exigem C2 = 10 e C3 = 24, e a tarefa 3 manda trocar A1 para 10, o que muda C2 para 14 e C3 para 40. As três nunca ficam certas juntas. Trava a 5.6 a 5.8 e o teste do Excel | 🔴 | Guardar cada tarefa como "feita" quando acertar, sem recalcular depois, ou conferir a tarefa 1 pela fórmula (`=A1+B1`) e não pelo valor |
| 7 | Simulador de **Excel** | Depois de digitar na barra de fórmulas, **o clique na próxima célula se perde** (a tabela é redesenhada no meio do clique). A criança precisa clicar 2 vezes, e o que ela digita nesse meio-tempo **some**. Medido: 1 a 3 cliques perdidos por exercício | 🔴 | Ouvir `mousedown` na tabela em vez de `click`, ou não redesenhar a tabela no `blur` |
| 8 | Notebook da sala / claude.ai | Se for preciso estar logado no claude.ai para abrir o artifact, a criança fica a um clique da conta do dono (conversas, finanças, dados de alunos). Além disso, o claude.ai é feito para adultos | 🔴 (verificar) | Para a Colônia, **salvar o HTML do "Aluno" em cada notebook** e abrir pelo Edge, sem login. Testei: roda de arquivo local, inclusive sem internet. Fevereiro: hospedagem própria (Vercel) |
| 9 | Termo LGPD | O rascunho veio de outro projeto: fala em "folhas", "ano escolar", "relatório mensal" e "tutor com IA e voz", que a informática não tem. Falta CNPJ, encarregado de dados e prazo de guarda, e **não houve revisão jurídica** | 🔴 | Adaptar ao que a plataforma guarda (nome, idade, horário, progresso, digitação, presença), tirar IA e voz por enquanto e passar pelo advogado antes de 11/01 |
| 10 | Conteúdo × carga horária | As 40 aulas têm de 2 a 5 passos (média de **2,8**), e todo o texto explicativo do ano soma **cerca de 985 palavras** (faixa de 8 a 10 anos). Estimativa: **5 a 15 minutos por aula**, contra 1 hora prevista. Com ritmo livre, uma criança rápida pode "terminar o ano" em poucas semanas, e o contrato é anual | 🟡 (alto) | Medir no teste com crianças. Engrossar as aulas: mais prática por aula, aquecimento real de 10 minutos, desafios extras e as lacunas da ementa (#11) |
| 11 | Lacunas × ementa | **Faltam:** janelas, botão direito e arrastar (mód. 1); números e símbolos (mód. 2); navegador simulado e abas (mód. 3); fonte e tamanho, salvar/abrir de verdade e cartão ou cartaz (mód. 4); bordas, largura de coluna, divisão, MÍNIMO e gráfico de pizza (mód. 5); pesquisa segura e avaliação por critérios no projeto (mód. 7) | 🟡 | Priorizar o que entra em fev–abr: módulos 1 a 3 |
| 12 | Quizzes das aulas | **21 de 24** têm a resposta certa como 1ª opção, e a ordem não é embaralhada: a criança aprende a "clicar na primeira" | 🟡 | Embaralhar as opções nas aulas, como já é feito nos testes |
| 13 | Digitação | O teste do **módulo 1** (antes de aprender a digitar) pede frases de 61 a 76 caracteres com maiúscula e acento. As aulas 2.2 e 2.3 pedem maiúscula ("Ela quer…", "A nova vaca…") **antes** da aula 2.4, que ensina o Shift. O erro não avança o cursor: quem não sabe o Shift fica parado | 🟡 | Módulo 1 sem teste de digitação (ou com frase só em minúsculas); frases sem maiúscula até a 2.4 |
| 14 | Acentos (ã, ç, é) | O teclado ABNT2 usa teclas "mortas" para os acentos. Não dá para garantir sem testar no Windows 11 real | 🟡 | Testar as aulas 2.4 e 2.5 no notebook HP |
| 15 | Duas cópias do código | O "Aluno" é uma **versão anterior** do principal: frases de digitação em minúsculas, "se chama" virou "chama", "repita" virou "repete", "abaixo da meta" virou "abaixo". Cada correção precisa ser feita duas vezes | 🟡 | Um código só, com uma chave que liga ou desliga os perfis de gestão |
| 16 | Tutor e gestor | "Tutora Marina" fixa no topo e nas liberações; "Polo Exemplo (expansão)"; horários "Seg 14h", "Sáb 9h" fora da grade real | 🟡 | Giovana; grade real (Turma Manhã e Turma Tarde) |
| 17 | Apoio à tutora | Não há gabaritos, roteiro por aula nem lista de "onde a criança costuma travar" | 🟡 | Gerar a partir das próprias aulas (as respostas já estão no código) uma página ou um impresso para a Giovana |
| 18 | Login das crianças | Não há senha: no mesmo notebook, qualquer criança abre o perfil da outra em "Já tem perfil neste computador?" | 🟡 | Colônia: aceitável, com supervisão. Fevereiro: código + senha simples ou figura-senha |
| 19 | Voz | Nenhuma leitura em voz alta; a criança de 8 anos lê balões de 30 a 40 palavras | 🟡 | Custo zero: botão "ouvir" com a voz do próprio Windows (voz em português "Maria", pela função de leitura do navegador). IA e voz pagas ficam para depois |
| 20 | Textos de "demonstração" | Rodapé "primeira versão para demonstração… dados ficam apenas neste navegador" e aviso "Versão de teste" aparecem para crianças e pais | 🟡 | Trocar antes da Colônia |
| 21 | Certificado | Não há PDF, o código de verificação não é conferível e não existe certificado da Colônia | 🟡 | Certificado da Colônia impresso (modelo único) para a Mostra |
| 22 | Botão "Continuar" | Com todas as aulas feitas e o teste pendente, o botão diz "Continuar: aula 1" em vez de "Fazer o teste" | 🟢 | Apontar para o teste |
| 23 | Pais (topo) | Aparece "Responsável: Responsável" | 🟢 | Mostrar o nome do responsável ou só "Pais" |
| 24 | Gestor: matrícula | Os campos de nome e idade usam uma classe de estilo inexistente (`inp`) e ficam sem formatação | 🟢 | Usar a mesma classe `sel` dos outros campos |
| 25 | Excel (fórmulas) | `=SOMA(B2;B3)` (com `;`, como no Excel em português) dá `#ERRO`; `=3,5+1` dá 6 em vez de 4,5 | 🟢 | Aceitar `;` como separador; tratar a vírgula decimal dentro da fórmula |
| 26 | Aquecimento | Uma frase curta, não os 10 minutos previstos na ementa | 🟢 | Sequência de frases com tempo de 10 minutos |
| 27 | Personagens | Mia e Teo estão no código, mas o quadro "Personagens" ainda lista a escolha entre a dupla A (Mia e Teo) e a B (Nina e Davi) como pendente | 🟢 | Júnior confirma Mia e Teo (já prontos) e fecha o assunto |

---

## 4. Cobertura de conteúdo × ementa

| Módulo | Ementa (aulas de 1 h) | Aulas na plataforma | Passos por aula | Situação |
|---|---|---|---|---|
| 1. Computador | 4 | 4 ✅ | 3 a 5 | Faltam janelas, botão direito e arrastar |
| 2. Digitação | 5 | 5 ✅ | 2 a 4 | Faltam números e símbolos; maiúsculas antes da hora |
| 3. Internet | 5 | 5 ✅ | 2 a 4 | Falta o navegador simulado |
| 4. Word | 6 | 6 ⚠️ | 2 a 4 | 4.5 travada; faltam fonte, tamanho e salvar |
| 5. Excel | 8 | 8 ⚠️ | 2 a 3 | 5.5 travada; cliques perdidos |
| 6. PowerPoint | 7 | 7 ✅ | 2 a 3 | Adiantado em relação à ementa |
| 7. Projeto final | 5 | 5 ✅ | 2 a 3 | Avaliação por quiz e digitação, não por critérios |
| **Total** | **40 (1 ano)** | **40 de 40** | média 2,8 | |

- **Em número de aulas:** o ano inteiro está coberto (40 de 40). **Fato.**
- **Em horas de atividade:** estimo que o conteúdo de hoje ocupe **de 6 a 10 horas** das 40 previstas (5 a 15 minutos
  por aula). **Estimativa, a confirmar cronometrando no teste com crianças.** Na prática, o que está pronto equivale
  a **1 a 3 meses** de um aluno no ritmo de 1 hora por semana, e não a 10 meses.
- **Para a Colônia** (5 encontros de 2 h, cerca de 35 a 40 min de notebook por criança por dia, no rodízio das
  estações), o conteúdo existente **é suficiente** se for reorganizado assim:

| Dia | Missão da Colônia | Aulas da plataforma | Situação |
|---|---|---|---|
| Seg 11/01 | Computador e teclado | 1.1 a 1.4 + 2.1 | ✅ pronto |
| Ter 12/01 | Word | 4.1 a 4.4 (+ 4.6, sem a imagem) | ⚠️ depende da trilha Colônia e da correção da 4.5 |
| Qua 13/01 | Internet segura | 3.1 a 3.5 | ✅ pronto (só leitura e quiz) |
| Qui 14/01 | Excel | 5.1 a 5.4 + 5.7 | ⚠️ depende da trilha Colônia e da correção dos cliques |
| Sex 15/01 | Projeto final + Mostra | 7.3 (texto e planilha do projeto) | ⚠️ idem; sem PowerPoint na Colônia |

- **Para os primeiros meses (fevereiro a abril, cerca de 10 encontros):** os módulos 1 a 3 têm 14 aulas no papel,
  mas pouca prática por aula. É preciso **engrossar os módulos 1 a 3 primeiro**, que são o que os alunos de
  fevereiro vão usar.

---

## 5. Pendências fora do código

| Pendência | Situação hoje | O que fazer | Quem | Até |
|---|---|---|---|---|
| **Termo LGPD dos pais** | Rascunho genérico, de outro projeto, sem revisão | Adaptar ao que a informática guarda, sem IA e voz por enquanto; enviar ao advogado; versão de papel para a Colônia | Telchar adapta → Orthanc → advogado | 11/12 |
| **Contas e logins das crianças** | Não existem (só nome no notebook) | Colônia: perfil criado pela tutora no 1º dia, só com o **primeiro nome**, no notebook fixo da criança. Fevereiro: código + senha no banco | Júnior + Giovana | Colônia: 08/01; banco: 31/01 |
| **Rotina da tutora** | Não descrita | Roteiro de 1 página: ligar os notebooks, abrir a plataforma, conferir presença, liberar a missão do dia, backup no fim, onde as crianças travam e gabaritos | Telchar + Pelennor → Giovana | 18/12 |
| **Acesso dos pais** | Não existe | Colônia: Mostra + resumo individual por WhatsApp (sem dados sensíveis no grupo). Fevereiro: login de pais | Giovana (Colônia), Júnior (banco) | 15/01 e 31/01 |
| **Teste com 2 ou 3 crianças** | Não feito | 1 sessão de 2 h num notebook com Windows 11 e teclado ABNT2: cronometrar cada aula, medir a digitação real, testar acentos, ver onde travam | Júnior + Giovana (Telchar prepara a ficha) | **até 12/12** |
| **Notebook sem conta adulta aberta** | Não verificado | Usuário do Windows "Aluno", sem login no claude.ai; plataforma aberta de arquivo local | Júnior | 18/12 |
| **Escolha dos personagens e nome da plataforma** | Mia e Teo no código; "Trilha Digital" × "Inspirar Informática" | Decisão do Júnior (5 minutos) | Júnior | 27/11 |
| **Hospedagem real (Supabase + Vercel)** | Decisão marcada para 06/11, não registrada | Decidir e criar as contas; é a base de tudo o que é de fevereiro | Júnior | 04/12 |

---

## 6. Plano de ação até 11/01/2027 (semana a semana)

| Semana | Entregas | Responsável |
|---|---|---|
| **23–29/11** | Corrigir os 🔴 de código: aula 4.5, aula 5.5, cliques do Excel (#5 a #7). Unificar o código (#15). Trocar "Marina" por Giovana e tirar os textos de demonstração (#16, #20). Decidir personagens e hospedagem | Júnior (Telchar revisa) |
| **30/11–06/12** | Criar a **Trilha Colônia** (5 missões liberadas pela tutora, com senha) e o botão de **backup/restauração** do progresso. Embaralhar os quizzes; frases sem maiúscula antes da 2.4; teste do módulo 1 sem digitação (#12, #13). Termo LGPD adaptado e enviado ao advogado | Júnior; Telchar (termo) |
| **07–13/12** | **Teste com 2 ou 3 crianças** (até 12/12) no notebook real: tempo por aula, acentos, metas de digitação, onde travam. Ajustar as metas. Começar o banco de dados (contas criadas) | Júnior + Giovana; Telchar consolida |
| **14–20/12** | Ajustes do teste. Roteiro e gabaritos da Giovana. Certificado da Colônia impresso. Notebooks com usuário "Aluno" e o HTML salvo (#8). Botão "ouvir" com a voz do Windows, se der tempo (#19) | Júnior; Telchar + Pelennor |
| **21–27/12** | Congelar a versão da Colônia (nada novo depois daqui). Termo revisado pelo advogado e impresso | Júnior; Orthanc |
| **28/12–03/01** | Ensaio geral com a Giovana: uma Colônia simulada de ponta a ponta em todos os notebooks, com backup, troca de dia e Mostra | Giovana + Júnior |
| **04–10/01** | Folga técnica para imprevistos. Termos assinados no ato da inscrição. Perfis prontos para o dia 11 | Giovana |
| **11–15/01** | **Colônia Digital** | Giovana (Júnior de apoio) |

**O que pode ficar para depois da Colônia, mas não depois de fevereiro:** banco de dados com login de alunos, pais e
tutora (#1 a #3, #18); painel dos pais de verdade; engrossar os módulos 1 a 3 (#10, #11); certificado em PDF.

**O que pode ficar para o 2º semestre de 2027:** IA e voz pagas (o estudo de custo está pronto); navegador simulado
completo; gestão de vários polos; ajustes do PowerPoint e do projeto final (módulos 6 e 7 só serão usados a partir
de agosto).

---

## Alertas
- 🔴 **Expectativa × realidade:** o `contexto/negocio.md` registra a plataforma como "pronta" e diz que ela "mostra o
  progresso para os pais" e "oferece gabaritos". Hoje, **nenhuma das três afirmações vale fora da demonstração**.
  Celeborn e Merry **não devem prometer o painel dos pais** nos materiais do Pacote Fundador até o banco estar no ar.
  Vale também atualizar o contexto.
- 🔴 **Ritmo livre + conteúdo raso + contrato anual:** se uma criança "zerar" o curso em 2 ou 3 meses, os pais vão
  questionar o contrato de 12 meses. Este é o maior risco de negócio da plataforma; vale validar com o Fíli o
  impacto no caixa se houver cancelamentos.
- 🟡 **Dependência de uma pessoa só:** todo o código depende do Júnior, que também cobre a Giovana e cuida do polo.
  As 7 semanas até 11/01 já têm Black Week, formaturas e captação. Sugiro que o Durin proteja na agenda do Júnior
  2 manhãs por semana para a plataforma.
- 🟡 O documento "Voz e IA" e o termo LGPD citam "folhas" e "homework": parecem escritos para a **plataforma de
  reforço**. Não misturar os dois projetos no termo nem no orçamento.
- 🟢 Ponto forte para o marketing: o visual, os personagens que evoluem e os simuladores de Word, Excel e
  PowerPoint estão **muito acima** do que se espera de um curso de informática local.

## Próximas ações
1. **Júnior:** corrigir as aulas 4.5 e 5.5 e o clique do Excel. Até **29/11**.
2. **Júnior:** criar a Trilha Colônia e o backup do progresso. Até **06/12**.
3. **Júnior + Giovana:** teste com 2 ou 3 crianças no notebook real (Telchar entrega a ficha de teste até 01/12). Até **12/12**.
4. **Telchar → Orthanc → advogado:** termo LGPD da informática adaptado e revisado. Envio em 04/12; versão final até **18/12**.
5. **Júnior:** decidir a hospedagem (Supabase + Vercel) e começar o banco, com meta de pais e tutora em produção até **31/01/2027**.

— Telchar, Gestor da Inspirar Informática
