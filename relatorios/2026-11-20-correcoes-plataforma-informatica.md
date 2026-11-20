# Correções da plataforma Inspirar Informática (Trilha Digital)
**Data:** 2026-11-20 · **Elaborado por:** Telchar (Gestor da Inspirar Informática) · **Pedido:** Júnior (aprovado), via Durin
**Base:** check-up `relatorios/2026-11-20-checkup-plataforma-informatica.md` · **Fonte versionada:** `plataforma-informatica/`

---

## 1. Resumo (1 minuto)

1. **As duas aulas impossíveis foram consertadas** (4.5 Word e 5.5 Excel) e o **Excel não perde mais cliques**. O aluno
   automático agora completa **as 40 aulas e os 7 testes** nos dois artifacts, no notebook e no celular, **sem nenhum
   erro de console** (antes: 32 de 40).
2. **Trilha Colônia pronta:** a tutora liga o "Modo Colônia" com um PIN e libera uma missão por dia. A criança chega
   ao Word e ao Excel **sem depender dos testes de digitação**. No fim, certificado da Colônia para imprimir.
3. **Cópia de segurança:** cada criança pode "Guardar meu progresso" e a tutora faz a cópia de todo o notebook
   (arquivo `.json` e código para copiar e colar). Testado: navegador limpo e notebook novo recuperam tudo.
4. **Tutora Giovana** (nome configurável), **gabaritos** gerados das próprias aulas, aviso claro de **dados de
   demonstração** na gestão, **desafios bônus** e conteúdo mais rico (passos por aula: 2,8 → 4,8).
5. **Publicado nos mesmos links** depois da bateria passar (100 de 100 verificações). Nada foi apagado; título e
   ícone mantidos; a versão anterior está guardada em `plataforma-informatica/original-2026-11-20/`.

---

## 2. O que mudou, por item

### A. Correções que travavam o lançamento (🔴)
| # check-up | O que era | O que foi feito | Teste |
|---|---|---|---|
| 5 | Aula **4.5**: "centralizar a imagem" nunca concluía | A imagem entra numa linha nova **dentro** do parágrafo (como no Word). Clicar na imagem a escolhe (ganha borda azul) e o botão de alinhar passa a valer para ela | Passa de 3 jeitos: clicando na imagem, centralizando logo depois de inserir e usando as setas |
| 6 | Aula **5.5**: tarefas contraditórias | Sequência reescrita como uma história: Ana tem 6 figurinhas e Beto 4. (1) C2 `=A2+B2`; (2) D2 `=B2*2`; (3) mude A2 para 10 e veja C2 virar 14. As tarefas conferem a fórmula, não um número fixo, e **ficam marcadas depois de feitas** | Passa também fora de ordem (mudando A2 antes) |
| 7 | Excel perdia cliques e a digitação | A célula é escolhida no `mousedown` (antes de a tabela ser redesenhada). A tabela não é mais redesenhada quando nada mudou. O que se digita aparece na célula na hora. Tab anda para a direita, Esc desfaz | 0 cliques perdidos em todas as aulas de Excel, sem clicar de novo |

### B. Trilha Colônia (🔴)
- Botão **"Área da tutora"** (na tela de entrada e na trilha do aluno, nos dois artifacts; na gestão, também no
  perfil Tutor). Protegido por **PIN padrão `2501`** → **o Júnior deve trocar** em Área da tutora → Ajustes, em cada
  notebook (o PIN fica guardado no notebook). O PIN só impede clique de criança; não é segurança forte.
- Aba **Colônia**: ligar/desligar o Modo Colônia e marcar as missões liberadas. Mostra o roteiro do dia e o andamento
  de cada criança do notebook.
- Com o modo ligado, a criança vê só as **5 missões** (as aulas de sempre, reaproveitadas):

| Missão | Dia | Aulas principais | Bônus | Tempo estimado (principais) |
|---|---|---|---|---|
| 1. Computador e teclado | Segunda | 1.1, 1.2, 1.3, 1.4, 2.1 | 2.2 | ~23 min |
| 2. Word | Terça | 4.1, 4.2, 4.3, 4.4 | 4.5, 4.6 | ~24 min |
| 3. Internet segura | Quarta | 3.1 a 3.5 | — | ~18 min |
| 4. Excel | Quinta | 5.1, 5.2, 5.3, 5.4, 5.7 | 5.5, 5.6 | ~25 min |
| 5. Projeto final e Mostra | Sexta | 7.1, 7.2, 7.3 | 2.3, 5.8 | ~16 min |

- Fim de aula na Colônia: "Voltar à Colônia" e **"Próxima aula"** (também na trilha normal, para acelerar).
- Com as 5 missões cumpridas: **Certificado da Colônia** (nome, estrelas, tutora, data) com botão Imprimir.
- O progresso da Colônia conta na trilha normal (as aulas são as mesmas). Ao desligar o modo, a trilha travada volta.

### C. Cópia de segurança do progresso (🔴)
- **Aluno:** "Guardar meu progresso" (na trilha) baixa `progresso-<nome>-<data>.json` e mostra um **código** (texto)
  para copiar. "Trazer meu progresso" (tela de entrada) aceita o arquivo **ou** o código colado e entra direto no perfil.
- **Tutora:** aba "Cópia de segurança" → copia **todas as crianças do notebook** num arquivo; mostra a data da última
  cópia. Importar **soma** o progresso (aulas, estrelas, testes, adesivos): nunca apaga nada.
- **Limite do claude.ai:** dentro do claude.ai o navegador não deixa baixar arquivos (o artifact não tem a permissão
  de download, e a regra era não mudar as capacidades). Ali vale o **código**. Abrindo o HTML salvo no notebook
  (plano da Colônia), o arquivo baixa normalmente. A mensagem da tela explica isso.

### D. Tutora e gestão (🟡)
- "Tutora Marina" → **Giovana**, configurável em Ajustes (aparece no topo, nas liberações e no certificado).
- Tutor, Gestor e Pais mostram o aviso **"Dados de demonstração: os alunos desta tela são fictícios"**. Rodapé
  da gestão explica o mesmo; rodapé do aluno não fala mais em "versão de demonstração" (#20).
- **Gabaritos** (aba da tutora): para cada aula, todas as respostas (perguntas, ordens, frases de digitação, o que
  fazer em cada tarefa de Word, Excel e PowerPoint) + "onde costuma travar" + respostas dos bancos dos testes.
  Botão Imprimir.
- Demonstração da gestão com a **grade proposta** (Turma Manhã seg–qui 10h45 e sex 9h; Turma Tarde seg, ter, sex
  14h e 15h) e o polo de exemplo renomeado "Polo Exemplo (demonstração)" (#16). Na gestão já aberta antes, a troca
  é automática se só havia alunos fictícios.

### E. Conteúdo mais rico (🟡)
- **81 passos novos** (110 → 191; média 2,8 → 4,8 por aula), concentrados nos módulos 1 a 5 (Colônia e primeiros meses).
  Módulos 6 e 7 ficaram como estavam (uso a partir de agosto).
- Novos tipos de passo: **"Você sabia?"** (explicação curta), **atividades "no computador de verdade"** (abrir o Word,
  achar o touchpad, ver a tutora criar uma pasta) e **desafio bônus** em 23 aulas: opcional, botão "Pular desafio",
  vale +1 estrela e erro ali não tira estrela.
- Lacunas da ementa cobertas em parte (#11): botão direito e arrastar (1.3), notebook e touchpad (1.2), arquivos e
  pastas (1.4), números e símbolos (2.4), abas e botões do navegador (3.2), palavras-chave e correntes falsas (3.3),
  senha forte e golpes (3.4), cursor (4.1), sublinhado e cartaz (bônus do Word), MÍNIMO (bônus 5.6).
- 7 simuladores novos de bônus: cartão de aniversário e cartaz da festa (Word); caça às células, votação, tabela
  colorida, pontos do jogo e menor nota (Excel).
- Botão **"Ouvir"** em todos os balões: lê o texto com a voz do próprio Windows (pt-BR), sem internet e sem custo (#19).

### F. Correções menores (🟢 e 🟡) feitas
| # | Correção |
|---|---|
| 12 | Opções dos quizzes das aulas **embaralhadas** (a certa não fica mais sempre em 1º) |
| 13 | Teste de digitação do **módulo 1 só com minúsculas e sem acento**; aulas 2.1 a 2.3 sem maiúscula; aviso na hora: "segure Shift" / "aperte primeiro a tecla do acento" |
| 14 | Acentos do teclado ABNT2: a digitação agora também lê o fim da composição do acento (`compositionend`). **Precisa de teste no Windows real** |
| 15 | **Um código só** (`plataforma-informatica/atual/src/`) gera os dois artifacts. O "Aluno" deixou de ser uma versão atrasada |
| 20 | Textos de "versão de teste" trocados no artifact do aluno |
| 21 | Certificado da Colônia para imprimir |
| 22 | Com as aulas feitas e o teste pendente, o botão principal diz "Fazer o teste do módulo X" |
| 23 | Topo dos pais: "Família de Ana" no lugar de "Responsável: Responsável" |
| 24 | Campos da matrícula com estilo (e sem rolagem lateral no celular) |
| 25 | Excel aceita `=SOMA(B2;B3)`, vírgula decimal (`=3,5+1` = 4,5) e números negativos |
| 26 | Aquecimento com 4 frases seguidas (sem maiúscula antes da aula 2.4) |
| — | Presença no artifact do aluno: "ficou registrada neste computador" em vez de "aguarde o tutor confirmar" (que nunca acontecia) |

### G. Tempo por aula, antes × depois (estimativa por modelo, não medição)
Premissas em `plataforma-informatica/testes/tempo.js` (criança de 8 a 10 anos: leitura 70 palavras/min, digitação
~6 palavras/min, 90 s por tarefa de simulador etc.).

| | Antes | Depois (sem bônus) | Depois (com bônus) |
|---|---|---|---|
| Média por aula | 3,5 min | 4,4 min | 5,7 min |
| Módulo 1 (4 aulas) | 10 min | 17 min | 28 min |
| Módulo 2 (5 aulas) | 14 min | 23 min | 29 min |
| Módulo 3 (5 aulas) | 10 min | 18 min | 20 min |
| Módulo 4 (6 aulas) | 29 min | 37 min | 54 min |
| Módulo 5 (8 aulas) | 37 min | 43 min | 56 min |
| Curso todo (40 aulas) | 2 h 19 | 2 h 57 | 3 h 47 |

**Leitura honesta:** o conteúdo cresceu 30% a 60%, mas o ano ainda **não enche 40 horas**. Para a Colônia (35 a 40 min
de notebook por dia) está **na medida**. Para o contrato anual, continua o risco do check-up: é preciso cronometrar no
teste com crianças e seguir engrossando (prioridade: módulos 1 a 3 até fevereiro).

---

## 3. Bateria de testes (resultado)

`node plataforma-informatica/testes/bateria.js` → **100 verificações, 100 passaram, 0 falharam** (log completo em
`plataforma-informatica/testes/ultimo-resultado.txt`). Rodada de novo depois da última mudança, antes de publicar.

- **Ponta a ponta, sem modo demonstração, pelo caminho normal com travas** (aluno e gestão × 1366x768 e 390x844):
  40 de 40 aulas (fazendo também os desafios bônus), 7 de 7 testes, certificado, 0 cliques perdidos no Excel, 0 erros
  de console, sem rolagem lateral.
- **Um teste para cada correção:** 4.5 de 3 jeitos; 5.5 fora de ordem; 5 cliques seguidos no Excel sem Enter;
  fórmulas em português; quizzes embaralhados; minúsculas antes da 2.4 e no teste do módulo 1; aviso do Shift; pular
  bônus sem perder estrela; aquecimento; Giovana; avisos de demonstração; topo dos pais; campo da matrícula.
- **Colônia** (1366 e 390): PIN errado bloqueia; PIN 2501 entra; Word liberado sem teste; Excel travado até liberar;
  as 22 aulas principais das 5 missões concluem; certificado; gabaritos; troca de PIN e de nome.
- **Cópia de segurança:** arquivo e código do aluno; cópia de 2 crianças pela tutora; notebook novo recupera pelo
  arquivo; navegador limpo recupera pelo código; importação soma sem apagar; código inválido não quebra.
- **Dados antigos:** criança criada na versão publicada antes continua aparecendo, com o progresso.

---

## 4. O que foi publicado

| Artifact | Link | Version id antes | Version id depois |
|---|---|---|---|
| Inspirar Informática Aluno | https://claude.ai/artifact/NtDX66P8WJ6kbJ56KUNMrK | `1794597993-0e18` | `1795209280-c86d` (versão 5) |
| Inspirar Informática (gestão) | https://claude.ai/artifact/Gp9eDgd4BSG27DCupNSjDW | `1794751086-f20e` | `1795209281-424a` (versão 10) |

- Houve **2 recusas** de publicação em cada um (a sessão não tinha "visto" a versão ao vivo após a pausa). Conferi
  byte a byte (sha256) que a versão ao vivo era idêntica à cópia original guardada, ou seja, minha versão já continha
  tudo; a 3ª tentativa passou. Depois publiquei um ajuste pequeno de texto (aviso do código de backup), que passou
  direto. Mesmo título, mesmo ícone, capacidades não alteradas (nenhuma), nenhum artifact novo, nada apagado.
- O "Aluno" está compartilhado como "qualquer pessoa com o link"; o da gestão segue privado.
- **Para voltar atrás:** publicar `plataforma-informatica/original-2026-11-20/<aluno|gestao>/index.html` no mesmo link.
- Commits (sem push): `ffe17da` (cópia original), `1b7bdbf`, `e606217`, `9542220`.

---

## 5. O que o Júnior precisa testar no claude.ai e no notebook real

1. **Trocar o PIN** (Área da tutora → Ajustes) em cada notebook. PIN padrão: **2501**.
2. No claude.ai: "Guardar meu progresso" **não baixa arquivo** (limite do claude.ai); conferir que o **código** aparece
   e que "Copiar código" funciona; colar o código em outro navegador e trazer o progresso.
3. No claude.ai: botão **Imprimir** (certificado e gabaritos) e botão **Ouvir** podem ser bloqueados pelo quadro do
   artifact. No HTML salvo e aberto no Edge devem funcionar. Se "Imprimir" não abrir, usar Ctrl + P.
4. No **notebook HP com Windows 11 e teclado ABNT2**: aulas 2.4 e 2.5 (acentos ã, é, ç), o aviso do Shift, o botão
   Ouvir (voz "Maria") e o download do arquivo de cópia (pasta Downloads).
5. **Atalho de salvar no Word em português:** em algumas versões é **Ctrl + B** (e Ctrl + S vira sublinhado). Coloquei
   um "Você sabia?" na aula 4.2, mas o quiz ainda ensina Ctrl + S. Conferir no Office dos notebooks e me avisar para
   ajustar o conteúdo.
6. Fluxo da Colônia de ponta a ponta com a Giovana (ligar o modo, liberar missão, cópia no fim do dia, certificado).

---

## 6. O que ficou pendente e por quê

| Pendência | Por quê |
|---|---|
| Painel dos pais real, tutora vendo os alunos reais, login com senha (#1 a #3, #18) | Precisa de banco de dados e hospedagem (Supabase + Vercel), fora do escopo e com custo/contas. Nada foi prometido na tela |
| Download do arquivo **dentro** do claude.ai | Exigiria a capacidade de downloads do artifact; a regra era manter as capacidades. Existe o código como alternativa |
| Acentos ABNT2 (#14) | Corrigido no código, mas só se confirma no Windows real |
| Termo LGPD (#9) | Não é código; segue com Telchar → Orthanc → advogado |
| Conteúdo dos módulos 6 e 7, navegador simulado (#11) | Usados só a partir de agosto; priorizei Colônia e módulos 1 a 5 |
| Certificado em PDF com código conferível (#21) | Precisa de servidor; a Colônia usa o certificado impresso |
| Personagens e nome da plataforma (#27) | Decisão do Júnior |

---

## Alertas
- 🔴 **O "Aluno" é público (qualquer pessoa com o link) e agora mostra a Área da tutora.** O PIN padrão está neste
  relatório: **trocar antes de qualquer criança usar**. Os gabaritos ficam atrás do PIN.
- 🟡 **Cada notebook guarda os seus dados.** Liberação de missões, PIN e progresso são por notebook/navegador. A cópia
  de segurança no fim do dia é obrigatória na rotina da Giovana.
- 🟡 **Carga do conteúdo ainda curta para 12 meses** (estimativa de ~3 a 4 horas de atividade no ano). Continua o maior
  risco de negócio: vale validar com o Fíli o impacto de cancelamentos e cronometrar no teste com crianças até 12/12.
- 🟢 A gestão que o Júnior já tinha aberto troca sozinha para a demonstração nova (se só havia alunos fictícios).

## Próximas ações
1. **Júnior:** trocar o PIN, testar os 6 pontos da seção 5 (principalmente o código de backup no claude.ai). Até **27/11**.
2. **Júnior + Giovana:** teste com 2 ou 3 crianças no notebook real, cronometrando as missões. Até **12/12**.
3. **Telchar + Pelennor:** roteiro impresso da Giovana a partir dos gabaritos e do roteiro de cada missão. Até **18/12**.
4. **Telchar:** ajustar o atalho de salvar (Ctrl + S / Ctrl + B) assim que o Júnior confirmar o Office dos notebooks. Até **04/12**.
5. **Júnior:** decidir a hospedagem com banco de dados (pais e tutora reais). Até **04/12**.

— Telchar, Gestor da Inspirar Informática
