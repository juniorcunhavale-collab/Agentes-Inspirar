# Especificação técnica da versão Níveis (Bronze, Prata, Ouro)
**Data:** 2026-11-21 · **Autor:** Telchar (Gestor da Inspirar Informática) · **Status:** proposta para o Júnior revisar (nada foi construído nem publicado)
**Base:** currículo do Pelennor (`relatorios/2026-11-21-curriculo-anual-informatica.md`), plano de produção (`relatorios/2026-11-21-plano-producao-conteudo-informatica.md`, itens E1–E11), decisões D1–D6 (`relatorios/2026-11-21-decisoes-estrutura-plataforma.md`) e o código atual (`atual/src/app.js`).
**Legenda:** **fato** = está no código ou nos arquivos · **proposta** = decisão de desenho minha, a validar · **depende de Dn** = muda conforme a resposta do Júnior.

---

## 1. Resumo
1. **As 40 aulas atuais mantêm o mesmo código** (`1.1` … `7.5`) e as mesmas estrelas em `prog`. A versão Níveis só **acrescenta** uma camada por cima: **nível → módulo novo (B0…O4) → itens**. Nada do que existe é apagado ou renomeado.
2. **Os dados continuam no navegador** (mesma chave `trilha-digital-demo-v3`), com um campo `schema: 4`. A versão Colônia congelada consegue ler os dados da versão Níveis (ignora o que não conhece), então **voltar atrás não perde progresso**.
3. **A migração da Colônia é automática, idempotente e conservadora:** aula feita continua feita; teste aprovado vira **validação** das aulas-base do módulo; liberação da tutora vale para **destravar**, não para **validar**; e uma cópia do estado anterior é guardada antes de qualquer mudança.
4. **O modelo já nasce com a forma do banco (Supabase/Postgres):** cada coisa que a criança faz é um registro com identificador próprio, data e origem, que vira 1 linha de tabela. O painel dos pais (pendência 66) só lê o que já existe; nenhum campo novo precisa ser inventado depois.
5. **Esforço (estimativa, igual ao plano):** E1 níveis 3 sessões, E2 migração 1 sessão, E11 bateria e 3º alvo 1,5 sessão. Nada vai para os alunos antes de **25/01** e sem OK do Júnior.

---

## 2. Como está hoje (fato, `app.js` de 21/11)
| Parte | Onde | Forma |
|---|---|---|
| Módulos e aulas | `MODS` (7 módulos), `LES['m.l']` (passos de cada aula) | aula = lista de passos (`info`, `quiz`, `type`, `word`, `xl`, `ppt`, `form`, `check`…) |
| Semestres e certificado | `SEM` (1º: módulos 1–4; 2º: 5–7), `vCert()` | certificado por semestre |
| Testes por módulo | `BANK[m]` (questões), `modPassed(s,m)` | passa com `score ≥ 70` **e** `typOk`, ou com `release` da tutora |
| Desbloqueio | `modUnlocked`: módulo `m` abre se o `m−1` passou | sem limite de velocidade |
| Aluno (`DB.students[id]`) | `localStorage['trilha-digital-demo-v3']` | `{id, name, age, slot, polo, ch, prog{'1.1':estrelas}, tests{m:{score,tries,typOk,release{by,at,why}}}, typ[{wpm,acc,d}], hist[0/1], stk[], bonus, proj{tema,…}, tlog[]}` |
| Presença | `DB.presence['AAAA-MM-DD'][id] = {in:'hh:mm', ok}` | por notebook |
| Ajustes | `DB.config` | `polos, tutora, tutoraSet, pin, colonia{on,open[]}, lastBackup, atalho, tempoOff` |
| Cópia de segurança | `packData` / `importData` / `mergeStudent` | arquivo `.json` ou código `TD0.`/`TD1.`; `app:'inspirar-informatica', v:1` |
| Ids | alunos reais começam com `t` (criado no notebook) ou `m` (matriculado pelo gestor); demonstração usa nomes | `/^[tm]/` decide o que é real |

---

## 3. Catálogo de conteúdo (fica no código, não no banco do aluno)

### 3.1 Identificadores (proposta; **imutáveis depois de publicados**)
| Tipo de item | Padrão do id | Exemplo | Quem marca como feito |
|---|---|---|---|
| Aula-base (atual) | `m.l` | `4.2` | a plataforma (estrelas em `prog`) |
| Aula nova na plataforma | `<MÓD>.n<k>` | `B1.n1` (simulador de pastas) | a plataforma |
| Projeto com produto | `<MÓD>.p` | `B5.p` (cartão de aniversário) | a plataforma salva o produto; a tutora dá a rubrica |
| Atividade fora da plataforma | `<MÓD>.c<k>` caderno · `.s<k>` Scratch · `.l<k>` LibreOffice | `B4.c1` (robô humano) | a tutora, com o PIN |
| Missão Extra (★) | `<MÓD>.x<k>` | `B2.x1` | a plataforma |
| Missão Reforço | `<MÓD>.r<k>` | `B2.r1` | a plataforma |
| Prova de validação (teste atual do módulo) | `v<m>` | `v4` = teste do módulo 4 | a plataforma (D3) |
| Teste de nível | `BT.t`, `PT.t`, `OT.t` | `BT.t` | a plataforma + tarefas práticas confirmadas pela tutora |
| Mini-Mostra | `BT.m`, `PT.m`, `OT.m` | `BT.m` | a tutora |

### 3.2 Estrutura no código (proposta)
```js
const NIVEIS=[
 {id:'BR',nome:'Bronze',sub:'Explorador Digital',ch:14,mods:['B0','B1','B2','B3','B4','B5','BT']},
 {id:'PR',nome:'Prata', sub:'Criador Digital',   ch:13,mods:['P1','P2','P3','P4','PT']},
 {id:'OU',nome:'Ouro',  sub:'Programador Digital',ch:13,mods:['O1','O2','O3','O4','OT']}]; // nomes e ch: D1 e D2
const MODN={
 B1:{nome:'Meu computador e minhas pastas',nivel:'BR',enc:[2,3],flex:[],base:['1.1','1.2','1.3','1.4'],val:'v1',
     itens:['1.1','1.2','1.3','1.4','B1.n1','B1.n2','B1.c1'],obrig:['B1.n1','B1.n2','B1.c1'],extras:['B1.x1','B1.x2'],reforco:['B1.r1'],
     produto:null,insignia:'Explorador'}, /* … */ };
const ITENS={'B1.n1':{tipo:'aula',titulo:'Minhas pastas',passos:[/* igual a LES */]},'B4.c1':{tipo:'fora',onde:'caderno',titulo:'Robô humano'}, /* … */};
```
- **Aulas novas usam o mesmo formato de passos de `LES`** (o motor de aula não muda; ganha só os simuladores novos).
- `base` = aulas-base do módulo; `obrig` = o que é novo e obrigatório; a conclusão do módulo exige `base` (feitas **ou** validadas) + `obrig` (feitos) + `produto` entregue (se houver).
- `enc` = encontros do plano (usado pelo limite de 1 módulo à frente, D4). `flex` = encontros F.
- O catálogo ganha um número de versão (`CAT_V`); cada registro do aluno guarda o id do item, nunca a posição.

---

## 4. Mapa aula-base → módulo novo (as 40 aulas e os 7 testes)
Fonte: matriz do Pelennor (seção 2.2). A divisão das aulas dos módulos 4 a 7 entre módulos novos é estimativa dele; mantive.

| Nível | Módulo novo | Encontros | Aulas-base (código atual) | Prova de validação | Insígnia (proposta) |
|---|---|---|---|---|---|
| Bronze | **B0** Boas-vindas e nivelamento | E1 | — | — | Cartão do Explorador (produto) |
| Bronze | **B1** Meu computador e minhas pastas | E2–E3 | 1.1 O que é um computador · 1.2 As partes do computador · 1.3 Mouse e teclado · 1.4 Ligar, desligar e organizar pastas | `v1` | Explorador |
| Bronze | **B2** Teclado ninja | E4–E6 | 2.1 Posição das mãos · 2.2 Fileira de cima · 2.3 Fileira de baixo · 2.4 Acentos, maiúsculas e pontuação · 2.5 Frases e textos | `v2` | Digitador |
| Bronze | **B3** Internet segura I | E7–E9 | 3.1 O que é a internet · 3.2 Navegador e endereços · 3.3 Pesquisar com cuidado · 3.4 Segurança e senhas · 3.5 Boa conduta e bullying | `v3` | Navegador |
| Bronze | **B4** Pensamento computacional desplugado I | E10–E11 (E11 F) | — | — | Pensador |
| Bronze | **B5** Word I: cartão de aniversário | E12–E13 | 4.1 Conhecendo o Word · 4.2 Digitar e salvar · 4.3 Formatar o texto · 4.4 Alinhar e fazer listas | `v4` (vale para B5 e P1) | Escritor Bronze |
| Bronze | **BT** Revisão + Teste Bronze + mini-Mostra | E14 | — (sorteio de `BANK[1..3]` + 2 tarefas práticas) | — | **Certificado Bronze** |
| Prata | **P1** Word II: Meu livrinho | E15–E18 | 4.5 Imagens e figuras · 4.6 Meu primeiro documento | `v4` | Escritor Prata |
| Prata | **P2** Excel I: Minha coleção | E19–E21 (E21 F) | 5.1 Planilhas e células · 5.2 Digitar dados · 5.3 Selecionar e formatar · 5.4 Somar | `v5` (vale para P2 e P3) | Analista |
| Prata | **P3** Excel II: Mesada inteligente | E22–E24 (E24 F) | 5.5 Fórmulas simples · 5.6 Média e contagem · 5.7 Gráficos · 5.8 Minha planilha | `v5` | Analista Prata |
| Prata | **P4** Internet II | E25–E26 (E26 F) | — | — | Navegador Prata |
| Prata | **PT** Revisão + Teste Prata + mini-Mostra | E27 | — (`BANK[4..5]` + tarefas) | — | **Certificado Prata** |
| Ouro | **O1** Apresentações | E28–E30 (E30 F) | 6.1 Conhecendo os slides · 6.2 Criar slides · 6.3 Textos e temas · 6.4 Imagens · 6.5 Animações e transições · 6.6 Apresentar · 6.7 Ensaio geral | `v6` | Criador |
| Ouro | **O2** Desplugado II → Scratch | E31–E34 | — | — | Programador |
| Ouro | **O3** LibreOffice | E35–E36 (E36 F) | — | — | Selo "usei programa de verdade" |
| Ouro | **O4** Projeto final do ano | E37–E39 | 7.1 Escolher o tema · 7.2 Planejar · 7.3 Produzir texto e planilha · 7.4 Produzir a apresentação · 7.5 Apresentar para a turma | `v7` | Mestre Digital (D1) |
| Ouro | **OT** Mostra Digital + Teste Ouro | E40 | — (`BANK[6..7]` + prática) | — | **Certificado Ouro** |

**Conferência:** 4 + 5 + 5 + 4 + 2 + 4 + 4 + 7 + 5 = **40 aulas-base**, todas mapeadas uma única vez. Os 7 testes viram 7 provas de validação; `v4` e `v5` cobrem dois módulos cada (o teste atual do módulo 4 já pergunta de 4.1 a 4.6; o do 5, de 5.1 a 5.8).
**Os 23 desafios bônus atuais** continuam dentro das aulas-base e contam como a 1ª Missão Extra do módulo (o plano: "os 23 bônus cobrem metade").

---

## 5. Modelo de dados

### 5.1 No navegador (versão Níveis, `schema: 4`)
Princípio: **só acrescentar**. Os campos atuais (`prog`, `tests`, `typ`, `hist`, `stk`, `bonus`, `proj`, `tlog`) ficam como estão e continuam sendo a fonte das aulas-base.

```js
DB = {
  schema: 4, cat: 1,                          // versão do formato e do catálogo
  students: { [id]: Aluno }, presence: { … },  // presence igual a hoje
  config: { …atual, niveis: { limite: 1, modo: 'duro' },  // D4
            dispositivo: 'nb-<aleatório>' }     // identifica o notebook (para o banco)
}
Aluno = { …campos atuais,
  ano_nasc: 2017,                              // opcional; idade muda no ano (hoje só 'age')
  val:   { '4.1': { por: 'v4' | 'migracao', em: '2027-01-11' } },   // aulas-base validadas (sem estrelas)
  itens: { 'B1.n1': { st: 'feito', estrelas: 3, em, por: 'aluno' },
           'B4.c1': { st: 'confirmado', em, por: 'tutora' } },       // tudo que não é aula-base
  enc:   [ { n: 7, data: '2027-02-17', ini: '14:02', fim: '14:58',
             aquec: { wpm: 9, acc: 91 }, diario: { txt: 'Hoje eu aprendi a…', cara: 1|2|3 } } ],
  prod:  { 'B5.p': { tipo: 'word', conteudo: { html: '…' } , em,
                     rub: { soz: 1-3, fer: 1-3, cap: 1-3, exp: 1-3, total: 4-12, por: 'Giovana', em } } },
  provas: { v4: { score, typOk, em, presenca_tutora: true } },        // D3
  testesN:{ BT: { score, tries, typOk, praticas: { BT.t1: true, BT.t2: false }, em } },
  certs:  { BR: { em, por, criterios: { modulos, teste, digitacao, portfolio }, ch: 14 },
            colonia: { em: null, origem: 'migracao' } },
  libs:   [ { tipo: 'frente' | 'modulo' | 'teste', alvo: 'P2', por, em, motivo } ],
  migr:   { de: 3, em, resumo: { feitas: 12, validadas: 5 } }
}
```
**Regras de forma (para o banco depois):** cada registro tem **data** (`em`) e **origem** (`por`); nada depende da ordem do array; texto livre da criança fica só em `diario.txt`, `proj` e `prod` (limite de 280 caracteres no diário).

### 5.2 No banco (Supabase / Postgres), quando a hospedagem for decidida
Esboço das tabelas. Uma linha por fato; o navegador continua funcionando sem internet e sincroniza depois (seção 7).

| Tabela | Colunas principais | De onde vem no navegador |
|---|---|---|
| `polos` | id, nome, computadores | `config.polos` |
| `horarios` | id, polo_id, dia_semana, hora | `config.polos[].slots` |
| `alunos` | id uuid, codigo_local (`t…`/`m…`, único), primeiro_nome, ano_nasc, polo_id, horario_id, personagem, criado_em | `students[id]` |
| `responsaveis` / `aluno_responsavel` | id, nome, contato, user_id (login do painel) | novo (painel dos pais) |
| `tutores` | id, nome, user_id, polo_id | `config.tutora` |
| `catalogo_itens` | id (`4.2`, `B1.n1`…), modulo, nivel, tipo, versao_cat | código (`NIVEIS`, `MODN`, `ITENS`) |
| `progresso` | aluno_id, item_id, status (`feito`/`validado`/`confirmado`), estrelas, origem, em, dispositivo · **PK (aluno_id, item_id)** | `prog` + `val` + `itens` |
| `provas` e `testes_nivel` | aluno_id, teste_id (`v4`, `BT`), score, typ_ok, tentativas, praticas jsonb, em | `tests`, `provas`, `testesN` |
| `digitacao` | aluno_id, wpm, acc, origem (`aquec`/`teste`/`aula`), em | `typ`, `enc[].aquec` |
| `encontros` | id, aluno_id, n, data, inicio, fim, presenca_ok, confirmado_por | `enc`, `presence` |
| `diario` | encontro_id, texto, carinha | `enc[].diario` |
| `produtos` / `rubricas` | id, aluno_id, item_id, tipo, conteudo jsonb, em / produto_id, 4 critérios, total, tutor_id, em | `prod` |
| `liberacoes` | aluno_id, tipo, alvo, motivo, tutor_id, em | `tests[m].release`, `libs` |
| `certificados` | aluno_id, nivel, emitido_em, criterios jsonb, carga_horaria, codigo_verificacao | `certs` |
| `tempos_passo` (opcional) | aluno_id, item_id, tentativa, passo, tipo, inicio, segundos, erros, dicas, ouvir, flags | `tlog` |
| `insignias` | aluno_id, insignia, em | `stk` |

```sql
-- esboço; revisar com o Júnior antes de criar (nada foi criado)
create table progresso (
  aluno_id uuid references alunos(id) on delete cascade,
  item_id text references catalogo_itens(id),
  status text check (status in ('feito','validado','confirmado')),
  estrelas smallint check (estrelas between 0 and 3),
  origem text not null,            -- aluno | tutora | prova:v4 | migracao | liberacao
  em timestamptz not null default now(),
  dispositivo text,
  primary key (aluno_id, item_id));
create table rubricas (
  produto_id uuid primary key references produtos(id) on delete cascade,
  sozinho smallint, ferramenta smallint, capricho smallint, explica smallint,
  total smallint generated always as (sozinho+ferramenta+capricho+explica) stored,
  tutor_id uuid references tutores(id), em timestamptz default now());
```
**Acesso (RLS, proposta):** tutora lê e escreve alunos do seu polo; responsável lê **só** os filhos vinculados, e só as tabelas `diario`, `produtos`, `rubricas` (sem o texto da rubrica, só "aceito no portfólio"), `certificados`, `insignias` e um resumo de `progresso`; criança não tem login (perfil local no notebook, como hoje). **LGPD:** primeiro nome + ano de nascimento bastam; sem CPF, foto ou endereço da criança (Orthanc confere no termo).

---

## 6. Regras de negócio da versão Níveis
1. **Item feito:** aula (base ou nova) com estrelas; atividade fora confirmada pela tutora; produto salvo. **Item validado:** aula-base coberta por prova aprovada ou pela migração.
2. **Prova de validação (D3):** disponível **só antes** de começar o módulo (nenhuma aula-base dele feita), com o PIN da tutora (prova de que ela está presente). Passa com `score ≥ 70` **e** meta de digitação do módulo (`METAM`/`ACCM`, iguais a hoje). Passou: as aulas-base do módulo vão para `val`; não ganha as estrelas dessas aulas. Não passou: segue o módulo normalmente (sem penalidade). 2ª tentativa só com liberação da tutora.
3. **Módulo concluído:** `base` (feitas ou validadas) + `obrig` (feitos) + `produto` salvo. **Rubrica < 6 não trava o módulo**: sugere a Missão Reforço e **segura o certificado** até refazer.
4. **Desbloqueio:** o módulo seguinte abre quando o anterior conclui. **Limite de velocidade (D4):** a criança abre no máximo o módulo do plano + 1. Módulo do plano = o módulo cujo intervalo `enc` contém o próximo encontro (contado pelo número de encontros com diário registrado). Aulas-base já feitas (ex.: vindas da Colônia) **não contam** contra o limite. A tutora pode liberar com motivo (`libs`, tipo `frente`).
5. **Certificado de nível (4 critérios, Pelennor):** (1) todos os módulos do nível concluídos; (2) teste de nível ≥ 70; (3) meta de digitação do nível (Bronze = meta `s1`, Ouro = `s2`, Prata = ponto médio; hipótese a recalibrar em dezembro); (4) produtos do nível com rubrica ≥ 6. Carga horária: D2.
6. **Encontro:** começa com "Começar o encontro" (aquecimento), termina com o diário. Sem diário, conta como encontro quando houver presença confirmada pela tutora.
7. **Sinais para o Sam (área da tutora):** frequência < 75% no mês; 2 encontros seguidos sem concluir a missão do dia; teste de nível < 70 duas vezes; carinha "difícil" 3 vezes seguidas.
8. **Compatibilidade:** `modPassed(s,m)` continua existindo (a versão Colônia usa); na versão Níveis, a trilha passa a usar `modNConcluido(s,'B1')`.

---

## 7. Migração do progresso (versão Colônia → versão Níveis)

### 7.1 Quando e como roda
1. Ao abrir a versão Níveis, se `DB.schema` não existe ou é menor que 4: **antes de tudo**, grava uma cópia do texto original em `localStorage['trilha-digital-demo-v3-antes-niveis']` (só se ainda não existir) e mostra à tutora o botão "Baixar a cópia de antes da atualização".
2. Roda `migrar(aluno)` para cada aluno real (`/^[tm]/`). Alunos de demonstração são recriados.
3. Grava `schema: 4` e `migr` no aluno. **Idempotente:** rodar de novo não muda nada (cada regra só preenche o que está vazio).
4. **Também roda na importação:** uma cópia de segurança antiga (`v:1`) trazida para a versão Níveis passa por `mergeStudent` (igual a hoje) e depois por `migrar`.

### 7.2 Regras por campo (aluno a aluno)
| Dado antigo | Vira na versão Níveis | Observação |
|---|---|---|
| `prog['m.l']` (estrelas) | **continua igual**; a aula conta como feita no módulo novo do mapa (seção 4) | Fonte única das aulas-base. Nada é copiado para `itens` |
| `tests[m]` com `score ≥ 70` e `typOk` | `provas['v'+m]` + `val` para as aulas-base **não feitas** dos módulos que `v<m>` cobre (`v4` → B5 e P1; `v5` → P2 e P3) | Quem passou no teste já mostrou o conteúdo |
| `tests[m].release` (liberação da tutora) | `libs` com `tipo:'modulo'`, mesmo autor, data e motivo | **Destrava** o módulo seguinte, **não valida** as aulas não feitas |
| `tests[m]` sem aprovação | fica em `tests` (histórico); sem efeito | — |
| Aulas feitas no **Modo Colônia** (fora de ordem, sem teste) | continuam feitas; quando a criança chegar ao módulo novo, essas aulas já aparecem concluídas e ela faz só o que é novo | É o "ganha 2–3 encontros" do Pelennor |
| `proj` (projeto da Colônia: tema, plano…) | `prod['colonia.p']` com `tipo:'colonia'`, **sem rubrica** | Aparece em "Meu portfólio" |
| Todas as missões da Colônia cumpridas | `certs.colonia = { origem:'migracao' }` | O certificado da Colônia já foi impresso; só registra |
| `typ` | continua; o melhor registro vira o "ponto de partida" do Cartão do Explorador se B0 ainda não foi feito | — |
| `stk` (adesivos `mod1`…`mod7`, `dig1`…, `seq`) | continua; `mod1` mostra também a insígnia Explorador, `mod2` Digitador, e assim por diante | Nada some da mochila |
| `bonus`, `hist`, `tlog`, `presence` | continuam iguais | — |
| (novo) nível atual | **Bronze** para todos | B0 (nivelamento) é feito por todos, inclusive quem veio da Colônia |
| (novo) encontros | **0** | Os dias da Colônia não contam como encontros do contrato anual |

### 7.3 Ida e volta
- **Voltar para a versão Colônia** (publicar de novo a versão congelada): ela lê `prog`, `tests`, `typ`, `stk`, `proj` normalmente e ignora o resto. O que foi feito **só** na versão Níveis (aulas novas, diário, produtos) fica guardado e reaparece quando a versão Níveis voltar.
- **Cópia feita na versão Níveis importada na versão Colônia:** funciona para as aulas-base (o `importData` antigo aceita; aluno novo entra inteiro, aluno existente soma só os campos antigos).
- **Mesma criança em 2 notebooks:** a junção continua sendo pelo id (`t…`). Dois perfis com o mesmo nome e ids diferentes **não são juntados sozinhos** (risco de juntar crianças diferentes); a tutora escolhe "juntar perfis" (item novo da área da tutora, E9).

### 7.4 Como provamos que nada se perde (bateria, E11)
1. Gerar com a **versão Colônia** (arquivo congelado em `versoes/2026-12-27-colonia/`) crianças com: Missões 1 a 5 completas; só Missão 1; teste do módulo 1 aprovado; liberação da tutora; projeto da Colônia preenchido.
2. Abrir a versão Níveis sobre o mesmo armazenamento e conferir, criança a criança: mesmas estrelas, mesmos adesivos, mesmas digitações, validações esperadas, nenhuma aula não feita marcada como feita sem prova.
3. Repetir pela importação do arquivo `.json` e do código `TD1.`.
4. Abrir de novo a versão Colônia sobre os dados migrados: nada quebra, progresso igual.
5. **Com dados reais:** importar as cópias de segurança da Colônia (11–15/01) no artifact de teste entre **18 e 22/01** e conferir com a tutora.

---

## 8. Build, versões e testes
- `atual/build.py` ganha o 3º alvo **`teste/`** (artifact "Inspirar Informática Teste", D6): faixa "VERSÃO DE TESTE" e chave de dados separada (`inspirar-informatica-teste-v4`), para nunca misturar com os dados das crianças.
- Antes de cada versão ir para os alunos: cópia em `versoes/AAAA-MM-DD-<nome>/`, etiqueta no git (`plat-AAAA-MM-DD-<nome>`) e linha no `CHANGELOG.md`.
- Bateria: percorre os níveis B0–O4 com as travas reais, nos 3 alvos, em 1366x768 e 390x844; um "resolvedor" por simulador novo; regras novas (limite à frente, prova de validação, rubrica, certificado, diário); migração (seção 7.4); conferência de texto (versões 8–9 e 10–12 anos, balão 8–9 com até 40 palavras, sem maiúscula ou acento antes da 2.4).

---

## 9. O que ainda depende de decisão ou de dado
| Item | Depende de | Efeito se não vier |
|---|---|---|
| Nomes, subtítulos, "Mestre Digital" | D1 | Uso a recomendação (A), editável em 1 lugar (`NIVEIS`) |
| Carga horária no certificado | D2 | Uso "carga horária de referência" (A) |
| Prova de validação | D3 | Construo com a regra A; desligável por ajuste |
| Limite à frente duro ou flexível | D4 | Construo duro (A), com `config.niveis.modo` para trocar |
| Artifact de teste e distribuição | D6 | Sem artifact de teste, a revisão é só pelo arquivo no notebook do Júnior |
| Hospedagem e contas do Supabase | Júnior (pendência 66) | O modelo local já fica pronto; a sincronização entra quando houver conta |
| Metas de digitação por nível | Teste com crianças (até 12/12) | Fico com as do código (`META`) e o ponto médio para Prata |
| Ano de nascimento em vez de idade | Júnior + Orthanc | Continua `age`; o banco aceita os dois |

— Telchar, Gestor da Inspirar Informática
