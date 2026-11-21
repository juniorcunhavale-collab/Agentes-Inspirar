/* ===== CONTEÚDO: módulos, aulas, bancos de questões ===== */
const MODS=[
 {n:1,name:'Conhecendo o computador',stage:'Explorador',aulas:['O que é um computador','As partes do computador','Mouse e teclado','Ligar, desligar e organizar pastas']},
 {n:2,name:'Digitação',stage:'Digitador',aulas:['Posição das mãos e fileira base','Fileira de cima','Fileira de baixo','Acentos, maiúsculas e pontuação','Frases e textos']},
 {n:3,name:'Internet e segurança',stage:'Navegador',aulas:['O que é a internet','Navegador e endereços','Pesquisar com cuidado','Segurança e senhas','Boa conduta e bullying']},
 {n:4,name:'Word',stage:'Escritor',aulas:['Conhecendo o Word','Digitar e salvar','Formatar o texto','Alinhar e fazer listas','Imagens e figuras','Meu primeiro documento']},
 {n:5,name:'Excel',stage:'Analista',aulas:['Planilhas e células','Digitar dados','Selecionar e formatar','Somar','Fórmulas simples','Média e contagem','Gráficos','Minha planilha']},
 {n:6,name:'PowerPoint',stage:'Criador',aulas:['Conhecendo os slides','Criar slides','Textos e temas','Imagens','Animações e transições','Apresentar','Ensaio geral']},
 {n:7,name:'Projeto final',stage:'Mestre Digital',aulas:['Escolher o tema','Planejar','Produzir texto e planilha','Produzir a apresentação','Apresentar para a turma']}
];
const SEM=[{id:1,mods:[1,2,3,4],nome:'1º semestre',aulas:20},{id:2,mods:[5,6,7],nome:'2º semestre',aulas:20}];
const MIN=70;
/* metas de digitação (estimativa inicial, ajustar após teste com as crianças) */
const META={y:{s1:{wpm:8,acc:90},s2:{wpm:15,acc:92}},o:{s1:{wpm:15,acc:92},s2:{wpm:25,acc:95}}};

const T=(y,o)=>({y,o});
const I=(title,y,o)=>({t:'info',title,x:T(y,o)});
const Q=(q,opts,a)=>({t:'quiz',q,opts,a});
const AN=(kind,title,y,o)=>({t:'anim',kind,title,x:T(y,o)});
const TYP=(text,title)=>({t:'type',text,title});
/* desafio bônus: passo opcional (pode pular; erros não tiram estrela; vale +1 estrela) */
const BON=st=>Object.assign({},st,{bonus:1});
const SABIA=(y,o)=>I('Você sabia?',y,o||y);

const LES={
'1.1':[
 I('Olá! Vamos começar?','Eu sou o seu parceiro de aventuras. O computador é uma máquina que ajuda a escrever, desenhar, jogar e aprender. Ele faz o que a gente manda, mas precisa de ordens claras!','O computador é uma máquina que recebe informações, processa e mostra um resultado. Ele só executa o que foi instruído a fazer.'),
 Q('O que o computador faz?',['Ajuda a escrever, desenhar e pesquisar','Pensa sozinho e decide tudo','Só serve para jogar'],0),
 I('Como ele funciona','Você dá uma ordem, o computador pensa e mostra a resposta na tela. É como pedir um desenho e receber o desenho pronto!','Entrada, processamento e saída: você envia dados (entrada), o computador processa e exibe o resultado (saída).'),
 Q('Você aperta uma tecla. O que acontece?',['Nada, o computador está de folga','O computador recebe a ordem e mostra o resultado','A tela desliga sozinha'],1),
 {t:'order',q:'Coloque em ordem: como o computador trabalha',items:['Você dá uma ordem (entrada)','O computador pensa (processamento)','A resposta aparece na tela (saída)']},
 SABIA('O primeiro computador era do tamanho de uma sala inteira! Hoje um celular faz muito mais coisas e cabe no bolso.','Os primeiros computadores ocupavam salas inteiras e pesavam toneladas. Hoje um celular é milhares de vezes mais potente.'),
 Q('Qual destes também é um computador?',['O celular','A cadeira','O lápis'],0),
 BON({t:'check',q:'Desafio bônus: olhe ao seu redor. O que você encontrou na sala?',items:['Encontrei um teclado','Encontrei uma tela','Encontrei um mouse ou um touchpad']})
],
'1.2':[
 I('As partes do computador','O computador tem partes que trabalham juntas: a tela (monitor), o teclado, o mouse e o gabinete, onde fica o "cérebro".','As partes principais são o monitor (saída de imagens), teclado e mouse (entrada de dados) e o gabinete, onde ficam o processador e a memória.'),
 {t:'hot',q:'Clique no teclado!',a:'teclado'},
 {t:'hot',q:'Agora clique no monitor (a tela)!',a:'monitor'},
 {t:'hot',q:'Clique no mouse!',a:'mouse'},
 {t:'hot',q:'Agora clique no gabinete, a caixa onde fica o "cérebro"!',a:'gabinete'},
 Q('Qual parte mostra as imagens e os textos?',['Teclado','Monitor','Mouse'],1),
 SABIA('O notebook é um computador que fecha como um caderno. A tela, o teclado e o "cérebro" ficam juntos. O touchpad é o mouse dele: você desliza o dedo para mover a setinha.','O notebook reúne monitor, teclado, gabinete e mouse em um só aparelho. O touchpad substitui o mouse: deslize o dedo para mover o ponteiro e toque para clicar.'),
 Q('No notebook, o que faz o papel do mouse?',['O touchpad','A tampa','A tela'],0),
 BON({t:'check',q:'Desafio bônus no notebook de verdade:',items:['Achei o touchpad','Achei a tecla de espaço, a mais comprida','Achei o botão de ligar (sem apertar!)']})
],
'1.3':[
 I('Mouse e teclado','O mouse move a setinha na tela. Um clique escolhe, dois cliques abrem. O teclado serve para escrever letras e números.','O mouse controla o ponteiro: clique simples seleciona e clique duplo abre. O teclado insere letras, números e comandos.'),
 AN('click','Como clicar','Mova o mouse até o ícone. Um clique escolhe, dois cliques bem rápidos abrem!','Posicione o ponteiro sobre o ícone. Um clique seleciona e o clique duplo abre o programa.'),
 {t:'targets',q:'Clique nas bolinhas laranja o mais rápido que conseguir!',n:6},
 {t:'order',q:'Coloque em ordem para abrir um programa:',items:['Mover o mouse até o ícone','Dar dois cliques no ícone','Esperar o programa abrir']},
 Q('Qual botão do mouse usamos para escolher?',['O botão esquerdo','Só a rodinha','Nenhum'],0),
 I('Botão direito e arrastar','O botão direito abre um menu com mais opções. Para arrastar, aperte o botão esquerdo, segure e mova. Depois é só soltar no lugar certo!','O botão direito abre o menu de contexto, com mais opções. Para arrastar, pressione o botão esquerdo, mantenha apertado, mova o ponteiro e solte no destino.'),
 Q('Para arrastar um ícone, você...',['Aperta, segura e move o mouse','Dá um clique só','Aperta a tecla Enter'],0),
 Q('O botão direito do mouse serve para...',['Abrir um menu com mais opções','Desligar o computador','Escrever letras'],0),
 BON({t:'targets',q:'Desafio bônus: 10 bolinhas! Seja rápido e certeiro.',n:10})
],
'1.4':[
 I('Ligar, desligar e organizar','Computador também precisa de cuidado: salvamos o trabalho, fechamos os programas e só então desligamos. Os arquivos ficam guardados em pastas, como gavetas organizadas.','Para desligar com segurança, salve o trabalho e feche os programas antes. Arquivos são organizados em pastas, o que facilita encontrá-los depois.'),
 {t:'order',q:'Coloque em ordem para desligar com segurança:',items:['Salvar o trabalho','Fechar os programas','Clicar em Desligar','Esperar a tela apagar']},
 Q('Onde guardamos os arquivos de forma organizada?',['Em pastas','Em cima do monitor','Dentro do mouse'],0),
 I('Arquivos e pastas','Um arquivo é um trabalho guardado: um texto, um desenho ou uma foto. A pasta junta vários arquivos, como uma gaveta. Use nomes fáceis, como "Meus desenhos".','Arquivo é qualquer trabalho salvo (texto, imagem, planilha). Pastas agrupam arquivos. Nomes claros, como "Trabalhos de ciências", facilitam encontrar tudo depois.'),
 Q('Qual é um bom nome para uma pasta com os seus textos?',['Meus textos','asdfgh','pasta nova 23'],0),
 Q('Por que salvamos antes de desligar?',['Para não perder o trabalho','Para o computador ficar mais leve','Porque a tela pede'],0),
 BON({t:'check',q:'Desafio bônus no computador de verdade, com a tutora:',items:['Abri o Explorador de Arquivos (a pastinha amarela)','Encontrei a pasta Documentos','Vi a tutora criar uma pasta nova']})
],
'2.1':[
 I('Mãos no lugar!','Deixe os dedos nas teclas A S D F (mão esquerda) e J K L (mão direita). Os dedos voltam sempre para essa fileira. Não vale olhar o teclado!','Posição base: A S D F na mão esquerda e J K L na direita. Os dedos retornam sempre à fileira base e os olhos ficam na tela.'),
 AN('hands','Onde ficam os dedos','Veja as teclas acendendo: A S D F na mão esquerda e J K L na direita.','Observe a fileira base: A S D F na mão esquerda e J K L na direita, com os indicadores em F e J.'),
 TYP('asdf jkl asdf jkl','Aquecimento das teclas'),
 TYP('sala dado fala lado gala salsa','Palavras da fileira base'),
 SABIA('As teclas F e J têm um risquinho em relevo. Os dedos indicadores sentem o risquinho e acham o lugar sem você olhar!'),
 TYP('a fada falsa da salada','Frase da fileira base'),
 BON(TYP('a gala da fada falha jaja','Desafio bônus: frase mais comprida'))
],
'2.2':[
 I('Fileira de cima','Agora os dedos sobem para a fileira de cima: Q W E R T Y U I O P. Depois de apertar, o dedo volta para o lugar de origem.','A fileira superior (Q a P) é alcançada pelo mesmo dedo da coluna correspondente. Depois de cada tecla o dedo retorna à base.'),
 TYP('quero pipa porto torre','Palavras da fileira de cima'),
 TYP('ela quer a pipa e o pote','Frase da fileira de cima'),
 I('Dica de ouro','Olhe para a tela, não para as mãos. Se errar, a letra fica vermelha: é só apertar a tecla certa. Devagar e sempre!','Mantenha os olhos na tela. Quando errar, a letra fica vermelha até você acertar. Precisão primeiro, velocidade depois.'),
 TYP('o pato tira a pipa','Palavras da fileira de cima e da base'),
 BON(TYP('a tia quer pera e torta','Desafio bônus'))
],
'2.3':[
 I('Fileira de baixo','Hora de descer: Z X C V B N M. Mantenha o ritmo e o cuidado. Errar faz parte de aprender!','A fileira inferior (Z a M) completa o alfabeto. Priorize a precisão antes da velocidade: o ritmo vem com a prática.'),
 TYP('vaca cama banana mala nave','Palavras da fileira de baixo'),
 TYP('a nova vaca come banana','Frase da fileira de baixo'),
 TYP('a zebra bebe na cama','Mais uma frase'),
 Q('As teclas Z X C V B N M ficam na fileira...',['De baixo','De cima','Do meio'],0),
 BON(TYP('o cavalo branco come capim','Desafio bônus'))
],
'2.4':[
 I('Acentos e maiúsculas','Para letra maiúscula, segure Shift. Para o til ou o acento, aperte a tecla do acento e depois a letra: ~ e depois a vira ã.','Maiúsculas exigem Shift. Acentos são teclas "mortas": aperte o acento e depois a letra para compor o caractere (por exemplo ~ e depois a resulta em ã).'),
 TYP('O avô comeu maçã no café.','Acentos e maiúscula'),
 Q('Para escrever ã, você aperta...',['A tecla do til (~) e depois a letra a','Só a letra a','A tecla Enter'],0),
 I('Números e símbolos','Os números ficam na fileira mais alta do teclado. Para o ponto de interrogação (?) segure Shift. A vírgula e o ponto ficam perto da letra M.','Os números ocupam a fileira superior. Símbolos como ? e ! exigem Shift. Vírgula e ponto ficam à direita da letra M.'),
 TYP('Eu tenho 9 anos.','Números'),
 TYP('Você gosta de maçã?','Pergunta com acento'),
 BON(TYP('Ana e João têm 10 lápis!','Desafio bônus'))
],
'2.5':[
 I('Frases completas','Digite frases inteiras com calma. Mantenha a postura: costas retas e pulsos relaxados.','Digitar frases exercita ritmo e atenção. Mantenha a postura e a precisão antes de acelerar.'),
 {t:'type',text:T('Hoje é dia de aula de informática.','A prática diária deixa a digitação mais rápida e mais precisa.'),title:'Aquecendo para a frase final'},
 {t:'type',text:T('Eu aprendo a digitar sem olhar para o teclado.','Digitar com dez dedos, sem olhar para o teclado, ajuda a trabalhar com mais rapidez e atenção.'),title:'Frase final do módulo'},
 Q('O que é mais importante quando estamos aprendendo a digitar?',['Acertar as teclas com calma','Digitar muito rápido e errar','Olhar sempre para o teclado'],0),
 BON({t:'type',text:T('Minha cidade tem praça, escola e muitas árvores.','Pinhão tem praças, escolas e muitas árvores, e eu gosto de morar aqui.'),title:'Desafio bônus'})
],
'3.1':[
 I('O que é a internet','A internet é uma enorme rede que liga computadores do mundo todo. Por ela, você vê vídeos, lê notícias e fala com pessoas.','A internet é uma rede mundial que conecta bilhões de dispositivos e permite acessar informações, serviços e comunicação em segundos.'),
 Q('A internet serve para...',['Conectar computadores e pessoas do mundo todo','Apenas ligar a luz','Só guardar fotos no gabinete'],0),
 SABIA('A internet passa por cabos enormes no fundo do mar! E chega até a sua casa por fio ou pelo ar, no Wi-Fi.','Grande parte da internet viaja por cabos submarinos entre os continentes. Em casa, chega por cabo ou pelo Wi-Fi, a conexão sem fio.'),
 Q('O Wi-Fi é...',['A internet sem fio','Um tipo de mouse','Um jogo de computador'],0),
 {t:'order',q:'Coloque em ordem: como uma mensagem chega ao seu amigo',items:['Você escreve e envia','A mensagem viaja pela internet','O aparelho do amigo recebe']},
 BON(Q('Desafio bônus: qual destas coisas NÃO precisa de internet?',['Desenhar no papel','Assistir a um vídeo online','Mandar uma mensagem para a vovó'],0))
],
'3.2':[
 I('Navegador e endereços','Para entrar em um site usamos um navegador, como o Chrome. Cada site tem um endereço, como www.escola.com.br. Você digita o endereço na barra do topo.','O navegador é o programa que abre sites. Cada site tem um endereço (URL) digitado na barra de endereços.'),
 {t:'order',q:'Coloque em ordem para pesquisar:',items:['Abrir o navegador','Clicar na barra de pesquisa','Digitar o que quer saber','Apertar Enter']},
 Q('Onde digitamos o endereço de um site?',['Na barra de endereços do navegador','No botão do mouse','Na tela desligada'],0),
 I('As partes do navegador','No alto do navegador ficam as abas (cada site aberto é uma aba), a barra de endereços e os botões de voltar e de atualizar a página.','No topo do navegador ficam as abas, a barra de endereços e os botões Voltar, Avançar e Atualizar. Cada aba mostra um site diferente.'),
 Q('Para deixar dois sites abertos ao mesmo tempo, usamos...',['Abas','Pastas','Células'],0),
 Q('Qual destes é um endereço de site?',['www.escola.com.br','Escola Legal 123','@escola'],0),
 BON({t:'order',q:'Desafio bônus: coloque em ordem para voltar à página anterior',items:['Olhar o alto do navegador','Achar a setinha de voltar','Clicar na setinha']})
],
'3.4':[
 I('Segurança e senhas','Senha é segredo! Nunca conte a ninguém, só aos seus responsáveis. Também não aceite conversar com estranhos na internet.','Senhas são pessoais e não devem ser compartilhadas, exceto com responsáveis. Evite falar com desconhecidos e nunca informe endereço ou dados pessoais online.'),
 Q('Posso contar minha senha para um amigo?',['Sim, se ele for legal','Não, senha é segredo','Sim, no recreio'],1),
 Q('Um desconhecido pede seu endereço pela internet. O que fazer?',['Não responder e avisar um adulto','Mandar rápido','Pedir o endereço dele também'],0),
 I('Senha forte','Uma senha forte é comprida e mistura letras, números e símbolos. Nada de 1234 ou só o seu nome!','Senhas fortes são longas e combinam letras maiúsculas e minúsculas, números e símbolos. Evite datas, nomes e sequências como 1234.'),
 Q('Qual senha é a mais forte?',['Gato!Azul27','1234','ana'],0),
 {t:'order',q:'Apareceu algo estranho na tela. Coloque em ordem o que fazer:',items:['Parar e não clicar','Chamar um adulto','Contar o que aconteceu']},
 BON(Q('Desafio bônus: um site promete um celular de graça se você digitar a senha do seu responsável. O que é isso?',['Um golpe: feche e avise um adulto','Um presente de verdade','Uma tarefa da escola'],0))
],
'4.1':[
 I('Conhecendo o Word','O Word é o programa para escrever textos: cartas, trabalhos de escola, convites. No topo ficam os botões de formatação e no meio fica a folha.','O Word é um editor de textos. A faixa de opções reúne os comandos de formatação e a área central é a página do documento.'),
 Q('Para que serve o Word?',['Escrever e formatar textos','Fazer cálculos','Navegar na internet'],0),
 I('O cursor','Na folha aparece uma barrinha piscando. Ela se chama cursor: é ali que a próxima letra vai aparecer. Clique em outro lugar do texto e o cursor vai junto.','A barra vertical que pisca é o cursor (ponto de inserção). O texto digitado aparece onde ele estiver; clique no texto para mudá-lo de lugar.'),
 Q('A barrinha que pisca na folha do Word se chama...',['Cursor','Célula','Mouse'],0),
 {t:'order',q:'Coloque em ordem para escrever um texto no Word:',items:['Abrir o Word','Clicar na folha','Digitar o texto','Salvar o arquivo']},
 TYP('eu estou aprendendo a usar o word','Primeira frase no Word'),
 BON({t:'check',q:'Desafio bônus no notebook de verdade, com a tutora:',items:['Abri o Word','Escrevi o meu nome na folha','Fechei o Word sem salvar (só treino)']})
],
'4.2':[
 Object.assign(I('Digitar e salvar','Digite o texto na folha. Para salvar, clique no ícone de salvar ou use Ctrl + S. Dê um nome fácil para achar depois.','Para salvar use o botão Salvar ou Ctrl + S e escolha um nome claro e uma pasta organizada.'),{atalho:'info'}),
 Object.assign(AN('save','Como salvar','Aperte Ctrl e S juntas e pronto: seu trabalho fica guardado!','O atalho Ctrl + S salva o documento sem precisar procurar o botão.'),{atalho:'anim'}),
 TYP('Meu animal favorito é o gato.','Digite no Word'),
 Object.assign(Q('Qual atalho salva o documento?',['Ctrl + S','Ctrl + Z','Alt + F4'],0),{atalho:'quiz'}),
 Object.assign(SABIA('Em alguns computadores com o Word em português, o atalho de salvar é Ctrl + B. Se o Ctrl + S não salvar, use o botão do disquete: ele sempre funciona!','No Word em português, o atalho de salvar pode ser Ctrl + B (e Ctrl + S vira sublinhado). O ícone de disquete funciona em qualquer versão.'),{atalho:'sabia'}),
 Q('Qual é um bom nome para o arquivo do seu texto sobre o gato?',['Meu gato','documento1','aaaa'],0),
 BON({t:'check',q:'Desafio bônus no Word de verdade:',items:['Escrevi uma frase','Salvei o arquivo com um nome fácil','Mostrei para a tutora onde o arquivo ficou']})
],
'4.3':[
 I('Formatar o texto','Vamos deixar o texto bonito! Selecione uma parte com o mouse (clique três vezes para marcar a linha) e use os botões N (negrito), I (itálico) e a cor.','Formatar é mudar a aparência do texto. Selecione o trecho e use negrito, itálico, sublinhado e cor. Clique três vezes para selecionar um parágrafo.'),
 {t:'word',sim:'format',title:'Hora de praticar no simulador de Word'},
 Q('Para deixar um texto em negrito, primeiro você...',['Seleciona o texto','Desliga o computador','Aperta Enter'],0),
 SABIA('Dá para selecionar uma palavra com dois cliques e uma linha inteira com três cliques. Experimente!'),
 BON({t:'word',sim:'format2',title:'Desafio bônus: cartão de aniversário'})
],
'4.4':[
 I('Alinhar e fazer listas','Alinhar é escolher onde o texto fica: esquerda, centro ou direita. Listas organizam ideias com marcadores.','O alinhamento define a posição do texto na página (esquerda, centro, direita ou justificado). Listas com marcadores organizam itens.'),
 {t:'word',sim:'align',title:'Alinhar e listar no simulador'},
 Q('Centralizar deixa o texto...',['No meio da linha','Do lado esquerdo','Apagado'],0),
 Q('Uma lista de compras fica mais fácil de ler com...',['Marcadores, um item em cada linha','Tudo numa linha só','Letras bem pequenas'],0),
 BON({t:'word',sim:'convite',title:'Desafio bônus: cartaz da festa'})
],
};

/* ===== simuladores de Word ===== */
const SIMS={
 format:{
  html:'<p id="w-t">Meu animal favorito</p><p id="w-p1">O gato é muito fofo e dorme o dia todo.</p><p id="w-p2">Escreva aqui outra frase sobre o animal.</p>',
  tasks:[
   {tx:'Selecione o título (clique 3 vezes nele) e clique em Negrito (N).',hint:'Clique três vezes rápido sobre "Meu animal favorito" e depois no botão N.',ok:d=>/<(b|strong)\b|font-weight/i.test(q(d,'w-t').innerHTML)},
   {tx:'Com o título selecionado, mude a cor do texto.',hint:'Selecione o título e clique em um dos quadradinhos de cor.',ok:d=>/color/i.test(q(d,'w-t').innerHTML)},
   {tx:'Selecione a frase do gato e deixe em Itálico (I).',hint:'Clique três vezes em "O gato é muito fofo..." e depois no botão I.',ok:d=>/<(i|em)\b|italic/i.test(q(d,'w-p1').innerHTML)},
   {tx:'Escreva uma frase nova no último parágrafo (com pelo menos 15 letras).',hint:'Clique no último parágrafo, apague o texto e escreva a sua frase.',ok:d=>{const t=q(d,'w-p2').textContent.trim();return t.length>=15&&!/^Escreva aqui/.test(t)}}
  ]},
 align:{
  html:'<p id="w-t">Festa na escola</p><p id="w-p1">Venha comemorar com a turma!</p><p id="w-p2">Traga um lanche</p><p id="w-p3">Traga um jogo</p><p id="w-p4">Traga um sorriso</p>',
  tasks:[
   {tx:'Selecione o título e centralize (botão do meio).',hint:'Clique 3 vezes em "Festa na escola" e clique no botão de centralizar.',ok:d=>getComputedStyle(q(d,'w-t')).textAlign==='center'},
   {tx:'Alinhe a frase "Venha comemorar..." à direita.',hint:'Selecione a frase e use o botão de alinhar à direita.',ok:d=>['right','end'].includes(getComputedStyle(q(d,'w-p1')).textAlign)},
   {tx:'Transforme os três itens (Traga...) em uma lista com marcadores.',hint:'Selecione do primeiro ao último "Traga" arrastando o mouse e clique no botão de lista.',ok:d=>d.querySelectorAll('li').length>=3}
  ]}
};
function q(d,id){return d.querySelector('#'+id)||document.createElement('div')}
/* imagem centralizada: algum bloco que contém a imagem, dentro da folha, está centralizado */
function imgCentered(svg){let el=svg.parentElement;while(el&&el.id!=='paper'){if(getComputedStyle(el).textAlign==='center')return true;if(/^(P|DIV|LI)$/.test(el.tagName)&&el.style.textAlign)return false;el=el.parentElement}return false}

/* ===== bancos de questões do teste final (versão demo: 6 a 10 por módulo; versão real: ~20) ===== */
const BANK={
1:[['O computador recebe uma ordem e...',['mostra um resultado','vai embora','esquece'],0],['Qual parte mostra a imagem?',['Monitor','Mouse','Teclado'],0],['Qual parte usamos para escrever?',['Teclado','Monitor','Caixa de som'],0],['O mouse serve para...',['mover o ponteiro e escolher','escrever textos longos','ligar a internet'],0],['Antes de desligar, devemos...',['salvar e fechar os programas','puxar o cabo','bater na tela'],0],['Onde ficam os arquivos organizados?',['Em pastas','No teclado','Na tela'],0],['Dois cliques rápidos geralmente...',['abrem um item','desligam o computador','apagam a tela'],0],['O gabinete é...',['onde ficam o processador e a memória','a tela','o teclado'],0],['Entrada de dados é feita por...',['teclado e mouse','monitor','caixa de som'],0],['Computador faz o que...',['é instruído a fazer','quer sozinho','sonha'],0]],
2:[['Na fileira base, a mão esquerda começa em...',['A S D F','Q W E R','Z X C V'],0],['Devemos olhar para...',['a tela','o teclado o tempo todo','o teto'],0],['Para letra maiúscula usamos...',['Shift','Enter','Esc'],0],['O que vem primeiro: precisão ou velocidade?',['Precisão','Velocidade','Tanto faz'],0],['Depois de apertar uma tecla, o dedo...',['volta para a base','fica lá','sai da mesa'],0],['A fileira de baixo tem...',['Z X C V B N M','A S D F','Q W E R'],0],['Qual dedo descansa no F?',['O indicador esquerdo','O polegar','O mindinho'],0],['A tecla Espaço é apertada com...',['o polegar','o mindinho','o nariz'],0],['Ao errar uma tecla devemos...',['tentar de novo com calma','desistir','bater no teclado'],0],['Para o til (~) usamos...',['a tecla do acento e depois a letra','só a letra','o mouse'],0]],
3:[['A internet é...',['uma rede mundial de computadores','um tipo de mouse','um jogo'],0],['Para entrar em um site, usamos...',['o navegador','a impressora','o teclado numérico'],0],['Senha deve ser...',['secreta','compartilhada com todos','escrita na parede'],0],['Um desconhecido pede seus dados. Você...',['avisa um adulto','envia rápido','posta na rede'],0],['O endereço de um site fica...',['na barra de endereços','no mouse','na caixa de som'],0],['Bullying na internet...',['deve ser contado a um adulto','é brincadeira','é permitido'],0],['Para pesquisar, digitamos...',['o assunto na barra de pesquisa','o nome do computador','a senha de todos'],0],['Antes de acreditar numa informação...',['conferimos em fontes confiáveis','compartilhamos logo','ignoramos'],0],['Um site seguro costuma ter...',['cadeado no endereço','muitos anúncios piscando','pedido de senha por mensagem'],0],['Se algo na internet assustar você...',['conte a um adulto','esconda de todos','responda com raiva'],0]],
4:[['O Word serve para...',['escrever textos','calcular tabelas','fazer slides'],0],['O botão N faz...',['negrito','nada','sublinhado'],0],['Ctrl + S...',['salva o documento','apaga o texto','fecha o computador'],0],['Centralizar significa...',['deixar o texto no meio','deixar à esquerda','apagar'],0],['Para formatar um trecho, primeiro...',['selecionamos','desligamos','imprimimos'],0],['Listas com marcadores servem para...',['organizar itens','ligar a internet','mudar a cor da tela'],0],['O botão I faz...',['itálico','imagem','imprimir'],0],['Um documento precisa de...',['um nome fácil de achar','nenhum nome','só números'],0],['Para sublinhar usamos o botão...',['S','N','I'],0],['O botão de lista cria...',['marcadores','imagens','tabelas de cálculo'],0]],
5:[['O Excel serve para...',['planilhas e cálculos','escrever cartas','navegar'],0],['Uma célula é...',['o encontro de uma linha e uma coluna','um tipo de cabo','uma senha'],0],['Fórmulas começam com...',['=','#','@'],0],['A função SOMA...',['soma valores','apaga valores','muda a cor'],0],['Gráficos servem para...',['mostrar dados de forma visual','ligar o monitor','desligar a internet'],0],['Colunas são identificadas por...',['letras','cores','sons'],0],['Linhas são identificadas por...',['números','letras','desenhos'],0],['A fórmula =2+3 mostra...',['5','23','2+3'],0],['Para somar de A1 a A3 usamos...',['=SOMA(A1:A3)','=A1A3','SOMAR'],0],['A média mostra...',['o valor típico de um grupo de números','o maior número','o menor número'],0]],
6:[['O PowerPoint serve para...',['fazer apresentações','calcular médias','digitar rápido'],0],['Cada página da apresentação é um...',['slide','arquivo','cabo'],0],['Transições são...',['efeitos entre slides','tipos de mouse','senhas'],0],['Em um bom slide, o texto deve ser...',['curto e claro','enorme e confuso','invisível'],0],['Antes de apresentar devemos...',['ensaiar','desligar tudo','esconder os slides'],0],['O PowerPoint mostra ideias em...',['slides','planilhas','cartas'],0],['Para um slide ficar bonito usamos...',['poucas palavras e uma boa imagem','todo o texto do livro','letras minúsculas demais'],0],['Animações servem para...',['dar movimento aos elementos','desligar o computador','salvar o arquivo'],0],['Ao apresentar, olhamos para...',['quem está assistindo','só para a tela','para o chão'],0],['O modo apresentação mostra...',['os slides em tela cheia','o teclado','a lixeira'],0]],
7:[['Um projeto começa com...',['escolher o tema','apresentar sem planejar','desligar'],0],['Planejar ajuda a...',['organizar as etapas','esquecer o tema','trocar de computador'],0],['Num projeto usamos...',['Word, Excel e PowerPoint juntos','apenas o mouse','nenhum programa'],0],['Ao apresentar, devemos...',['falar com calma e clareza','falar baixo e rápido','virar de costas'],0],['Depois de pronto, devemos...',['revisar o trabalho','apagar tudo','esconder'],0],['Um bom projeto tem...',['começo, meio e fim','só o final','nenhum plano'],0],['Para montar a apresentação usamos...',['o PowerPoint','o mouse sozinho','a impressora'],0],['Para organizar números usamos...',['o Excel','o navegador','o relógio'],0],['Trabalhar em equipe ajuda a...',['dividir tarefas e ter mais ideias','fazer tudo mais devagar','esquecer o tema'],0],['No fim, apresentar o projeto serve para...',['mostrar o que aprendemos','esconder o trabalho','apagar tudo'],0]]
};

/* frases para o aquecimento diário de digitação (10 min na versão final) */
const WARM=[
 T('O sol brilha no céu azul','A tecnologia ajuda as pessoas a aprender e criar coisas novas.'),
 T('Eu gosto de aprender','Praticar todos os dias melhora a velocidade e a precisão.'),
 T('A casa tem uma sala','Digitar sem olhar para o teclado é uma habilidade muito útil.'),
 T('Nosso time é muito legal','Errar faz parte do aprendizado, o importante é tentar de novo.'),
 T('O gato pulou o muro','Quem treina um pouco todo dia digita cada vez melhor.'),
 T('A bola rolou na grama','Olhe para a tela e deixe os dedos encontrarem as teclas.'),
 T('Minha mãe faz bolo','Costas retas, pulsos relaxados e respiração tranquila.'),
 T('Hoje vai ter festa','Cada erro corrigido é um passo a mais no aprendizado.')
];
/* antes da aula 2.4 (Shift e acentos), o aquecimento usa só minúsculas e sem acento */
const easyTxt=t=>t.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();

/* ===== CONTEÚDO 2: módulos 3 a 7 (completa as aulas), simuladores de Excel e PowerPoint, bancos extras ===== */
const XL=(sim,title)=>({t:'xl',sim,title});
const PP=(sim,title)=>({t:'ppt',sim,title});
const FM=(title,fields,x)=>({t:'form',title,fields,x});
const CK=(q,items)=>({t:'check',q,items});

Object.assign(LES,{
'3.3':[
 I('Pesquisar com cuidado','Na internet tem muita coisa boa e também coisa errada. Antes de acreditar, pergunte: quem escreveu? É um site conhecido? Outro site diz o mesmo?','Nem toda informação online é verdadeira. Confira quem escreveu, se o site é conhecido e se outras fontes confiáveis dizem o mesmo.'),
 Q('Qual é um bom sinal de que um site é confiável?',['Ele mostra quem escreveu e de onde vêm as informações','Tem muitos anúncios piscando','Pede sua senha para você ler'],0),
 {t:'order',q:'Coloque em ordem os passos de uma boa pesquisa:',items:['Pensar no que quero descobrir','Digitar palavras-chave na pesquisa','Abrir mais de um resultado','Comparar as respostas']},
 Q('Dois sites dizem coisas diferentes. O que fazer?',['Procurar uma terceira fonte confiável e perguntar a um adulto','Escolher o mais colorido','Ficar com o primeiro que abriu'],0),
 I('Palavras-chave','Para pesquisar, use poucas palavras importantes. Em vez de "eu queria saber quanto pesa um elefante", digite: peso do elefante.','Pesquise com palavras-chave: poucas palavras que resumem a dúvida. Exemplo: "peso do elefante" em vez de uma frase inteira.'),
 Q('Qual é a melhor pesquisa para saber a altura da girafa?',['altura da girafa','eu quero saber uma coisa','girafa girafa girafa'],0),
 BON(Q('Desafio bônus: uma mensagem diz "compartilhe com 10 amigos ou algo ruim vai acontecer". Ela é...',['Uma corrente falsa: não compartilhe','Verdade, compartilhe rápido','Uma ordem da escola'],0))
],
'3.5':[
 I('Boa conduta e bullying','Na internet também precisamos ser gentis. Bullying é machucar alguém de propósito com palavras ou fotos. Se acontecer com você ou com um colega, conte a um adulto.','Respeito vale também no mundo digital. Bullying (ou cyberbullying) é ofender ou expor alguém repetidamente. Guarde as provas, não responda com raiva e avise um adulto de confiança.'),
 Q('Um colega postou uma foto engraçada e todos riem dele. O que é certo fazer?',['Não compartilhar e contar a um adulto','Compartilhar para todos verem','Fazer outro comentário engraçado'],0),
 Q('Alguém mandou uma mensagem maldosa para você. O que fazer?',['Não responder, guardar a mensagem e avisar um adulto','Responder com outra mensagem maldosa','Apagar e nunca contar'],0),
 Q('Antes de postar algo, devemos pensar...',['Se isso pode magoar alguém','Só em quantas curtidas vai ter','Se é rápido de fazer'],0),
 {t:'check',q:'Combinado da internet. Eu prometo:',items:['Ser gentil com as pessoas na internet','Não postar foto de colega sem permissão','Pedir ajuda a um adulto quando algo me incomodar']}
],
'4.5':[
 I('Imagens e figuras','Uma imagem deixa o texto mais bonito e fácil de entender. No Word, usamos o botão Imagem para colocar a figura dentro do documento.','Imagens ilustram e ajudam a explicar o texto. No Word, o comando Inserir Imagem adiciona a figura ao documento, e podemos alinhá-la como um texto.'),
 {t:'word',sim:'image',title:'Coloque uma figura no documento'},
 Q('Por que colocar uma imagem no texto?',['Para deixar mais bonito e fácil de entender','Para apagar o texto','Para salvar o arquivo'],0),
 SABIA('Para escolher uma imagem, clique nela. Depois os botões de alinhar funcionam com ela, igual funcionam com o texto.')
],
'4.6':[
 I('Meu primeiro documento','Hora de juntar tudo o que você aprendeu no Word: título bonito, texto, lista e uma imagem!','Aplique tudo o que aprendeu: título formatado e centralizado, texto com destaque, lista e imagem.'),
 {t:'word',sim:'final',title:'Monte o seu primeiro documento'},
 Object.assign(Q('Qual atalho salva o seu documento?',['Ctrl + S','Ctrl + P','Ctrl + Q'],0),{atalho:'quiz2'}),
 BON({t:'check',q:'Desafio bônus: revise como um escritor',items:['Li o meu texto do começo ao fim','O título está em destaque','Tem uma imagem que combina com o texto']})
],
'5.1':[
 I('Conhecendo a planilha','O Excel é uma folha cheia de quadradinhos chamados células. Cada célula tem um nome: a letra da coluna e o número da linha, como B2.','Uma planilha organiza dados em linhas (números) e colunas (letras). Cada célula tem um endereço, por exemplo C3: coluna C, linha 3.'),
 XL('cells','Encontre as células'),
 Q('A célula que fica na coluna C e na linha 3 se chama...',['C3','3C','CC3'],0),
 SABIA('É como no jogo de batalha naval: a letra mostra a coluna e o número mostra a linha. B2 é o quadradinho da coluna B com a linha 2.'),
 Q('A coluna B e a linha 4 formam a célula...',['B4','4B','BB'],0),
 BON(XL('cells2','Desafio bônus: caça às células'))
],
'5.2':[
 I('Digitar dados','Clique na célula, digite e aperte Enter para ir à célula de baixo. Texto e números podem ficar na mesma planilha.','Selecione a célula, digite o conteúdo e pressione Enter para confirmar e descer. Textos e números convivem na mesma planilha.'),
 XL('data','Monte a lista de compras'),
 Q('Depois de digitar na célula, para confirmar você aperta...',['Enter','Esc','O botão de desligar'],0),
 SABIA('Repare: texto fica do lado esquerdo da célula e número fica do lado direito. Assim você sabe se a planilha entendeu que é um número!'),
 BON(XL('data2','Desafio bônus: votação das brincadeiras'))
],
'5.3':[
 I('Selecionar e formatar','Dá para deixar a planilha bonita: negrito no título e cor de fundo nas células, como no Word.','Formatação melhora a leitura: negrito para títulos e cor de preenchimento para destacar células importantes.'),
 XL('format','Deixe a planilha mais bonita'),
 Q('Para que serve a cor de fundo numa célula?',['Para destacar uma informação importante','Para apagar o número','Para somar'],0),
 BON(XL('format2','Desafio bônus: tabela colorida'))
],
'5.4':[
 I('Somar','O Excel faz as contas para você! Escreva = e depois SOMA(B2:B4) para somar de B2 até B4. Os dois pontos significam "até".','A função SOMA adiciona valores: =SOMA(B2:B4) soma o intervalo de B2 até B4. O sinal de dois pontos indica um intervalo.'),
 XL('sum','Some os preços'),
 Q('Toda fórmula começa com...',['O sinal de igual (=)','Uma letra maiúscula','Um ponto final'],0),
 Q('Em =SOMA(B2:B4), os dois pontos querem dizer...',['De B2 até B4','Dividir','Multiplicar'],0),
 BON(XL('sum2','Desafio bônus: pontos do jogo'))
],
'5.5':[
 I('Fórmulas simples','Na fórmula, use os nomes das células: =A2+B2 soma e =B2*2 multiplica por 2. O * é o sinal de vezes. O mais legal: se você mudar um número, o resultado muda sozinho!','Fórmulas usam referências de célula e operadores: + soma, - subtrai, * multiplica e / divide. Ao alterar o valor de uma célula, todas as fórmulas que dependem dela são recalculadas.'),
 XL('formula','Crie suas fórmulas'),
 Q('Qual símbolo usamos para multiplicar no Excel?',['*','x','#'],0),
 Q('A célula C2 tem =A2+B2. Você muda A2. O que acontece com C2?',['Muda sozinha, com a conta nova','Fica igual para sempre','Apaga tudo'],0)
],
'5.6':[
 I('Média e maior valor','A média mostra o valor típico de um grupo de números. Use =MEDIA(B2:B5). Para o maior número, use =MAXIMO(B2:B5).','As funções MEDIA e MAXIMO resumem dados: =MEDIA(B2:B5) calcula a média e =MAXIMO(B2:B5) devolve o maior valor.'),
 XL('avg','Calcule a média das notas'),
 Q('A média de 6 e 10 é...',['8','16','4'],0),
 BON(XL('min','Desafio bônus: a menor nota'))
],
'5.7':[
 I('Gráficos','Um gráfico mostra os números em barras e fica mais fácil de comparar. Selecione os dados e clique em Gráfico.','Gráficos tornam comparações visuais. Selecione o intervalo de dados e use o comando Gráfico para gerar as colunas.'),
 XL('chart','Transforme números em barras'),
 Q('Para que serve um gráfico?',['Mostrar e comparar números de forma visual','Escrever textos longos','Desligar a planilha'],0),
 Q('No gráfico de barras, a barra mais alta mostra...',['O maior número','O menor número','O nome do time'],0)
],
'5.8':[
 I('Minha planilha','Vamos juntar tudo: números, uma soma, uma média e um gráfico. Capriche!','Desafio final do módulo: organizar dados, usar SOMA e MEDIA e criar um gráfico.'),
 XL('final','Planilha de pontos do campeonato'),
 Q('Qual fórmula calcula o total de B2 até B4?',['=SOMA(B2:B4)','=TOTAL','SOMA B2 B4'],0)
],
'6.1':[
 I('Conhecendo os slides','O PowerPoint serve para criar apresentações. Cada página se chama slide. À esquerda ficam os slides pequenos e no meio o slide que você está editando.','O PowerPoint cria apresentações compostas por slides. A barra lateral mostra as miniaturas e a área central mostra o slide em edição.'),
 Q('Cada página de uma apresentação se chama...',['Slide','Célula','Pasta'],0),
 Q('Onde vemos todos os slides pequenininhos?',['Na barra à esquerda','Dentro do mouse','Na caixa de som'],0)
],
'6.2':[
 I('Criar slides','Para ganhar mais um slide, clique em Novo slide. Escreva um título e um texto curto em cada um.','Use Novo slide para acrescentar páginas. Cada slide deve ter um título e pouco texto.'),
 PP('create','Crie seus primeiros slides')
],
'6.3':[
 I('Textos e temas','O tema muda as cores do slide. Escolha cores que deixem as letras fáceis de ler. Letra clara em fundo escuro ou o contrário.','Temas mudam o visual da apresentação. Mantenha bom contraste entre texto e fundo para facilitar a leitura.'),
 PP('theme','Escolha o tema do seu slide')
],
'6.4':[
 I('Imagens','Uma imagem conta mais que muitas palavras. Clique em Imagem e escolha uma figura para o slide.','Imagens reforçam a mensagem. Use o comando Imagem para inserir uma figura e prefira poucas e bem escolhidas.'),
 PP('image','Coloque uma imagem no slide')
],
'6.5':[
 I('Animações e transições','A transição é o efeito quando um slide muda para o outro, como esmaecer ou deslizar. Use com moderação para não distrair.','Transições definem como um slide dá lugar ao próximo. Use poucos efeitos para não tirar a atenção do conteúdo.'),
 PP('transition','Escolha uma transição')
],
'6.6':[
 I('Apresentar','Para apresentar, clique em Apresentar. Os slides ocupam a tela toda. Avance com o botão Próximo até o fim.','No modo apresentação os slides ocupam a tela inteira. Avance até o último slide para concluir.'),
 PP('present','Faça uma apresentação')
],
'6.7':[
 I('Ensaio geral','Antes de apresentar, ensaie! Fale devagar, olhe para quem está assistindo e não leia o slide palavra por palavra.','O ensaio melhora a segurança: fale com calma, mantenha contato visual e use o slide como apoio, não como roteiro.'),
 CK('Marque o que você vai fazer na apresentação:',['Falar devagar e com voz clara','Olhar para a turma','Usar o slide como apoio','Treinar antes com um colega']),
 Q('Qual é a melhor forma de apresentar?',['Falar com calma e olhar para a plateia','Ler o slide de costas para a turma','Falar bem baixinho e rápido'],0)
],
'7.1':[
 I('Escolher o tema','O projeto final junta tudo: texto, planilha e apresentação. Escolha um tema que você ama, como seu animal favorito, seu esporte ou um lugar que quer conhecer.','No projeto final você integra Word, Excel e PowerPoint em um mesmo tema. Escolha algo que o motive e possa ser pesquisado com facilidade.'),
 FM('Meu projeto',[['tema','Qual é o tema do meu projeto?'],['porque','Por que escolhi esse tema?']],T('Escreva com suas palavras.','Escreva com objetividade.'))
],
'7.2':[
 I('Planejar','Todo projeto precisa de um plano. Pense no que vai escrever, que números vai usar e quais slides vai fazer.','Um bom plano define o que será produzido em cada programa: texto, dados e apresentação.'),
 FM('Meu plano',[['texto','O que vou escrever no Word?'],['dados','Que números vou usar no Excel?'],['slides','O que vou mostrar nos slides?']],T('Anote uma ideia em cada campo.','Descreva uma entrega para cada programa.'))
],
'7.3':[
 I('Produzir texto e planilha','Hora de produzir! No Word, escreva o texto do projeto. No Excel, monte uma tabelinha com pelo menos três números e a soma deles.','Produza o texto no Word e a planilha no Excel, com dados do seu tema e um total calculado.'),
 {t:'word',sim:'proj',title:'Texto do projeto'},
 XL('proj','Planilha do projeto')
],
'7.4':[
 I('Produzir a apresentação','Agora crie os slides do projeto: uma capa com o título, um slide de conteúdo e um slide final.','Monte a apresentação com capa, conteúdo e encerramento, aplicando tema e imagem.'),
 PP('proj','Slides do projeto')
],
'7.5':[
 I('Apresentar para a turma','Chegou o grande dia! Apresente seu projeto para a turma e para o tutor. Respire, fale devagar e se divirta.','Apresente seu projeto à turma, destacando o tema, os dados e o que aprendeu.'),
 CK('Antes de apresentar, confira:',['Meu texto está salvo','Minha planilha tem a soma','Meus slides estão prontos','Ensaiei a minha fala']),
 I('Parabéns!','Você terminou o curso de informática! Passe no teste do módulo para ganhar o certificado do 2º semestre.','Você concluiu o curso. Faça o teste do módulo para receber o certificado do 2º semestre.')
]
});

/* ===== simuladores de Excel ===== */
const SIMX={
 cells:{cells:{A1:'Fruta',B1:'Preço'},tasks:[
  {tx:'Clique na célula C3.',hint:'Coluna C, linha 3: procure a letra C no alto e o número 3 ao lado.',ok:X=>X.hit('C3')},
  {tx:'Clique na célula B1.',hint:'Coluna B, linha 1.',ok:X=>X.hit('B1')},
  {tx:'Escreva seu nome na célula A5.',hint:'Clique em A5, digite seu nome e aperte Enter.',ok:X=>X.raw('A5').length>=2}]},
 data:{cells:{A1:'Item',B1:'Preço'},tasks:[
  {tx:'Escreva Maçã na célula A2 e Pão na A3.',hint:'Clique em A2, digite, Enter. A3 vem logo abaixo.',ok:X=>X.raw('A2')&&X.raw('A3')},
  {tx:'Escreva um preço (só números) em B2 e em B3.',hint:'Digite números como 5 ou 3,5. Não coloque letras.',ok:X=>!isNaN(X.num('B2'))&&!isNaN(X.num('B3'))&&X.raw('B2')!==''&&X.raw('B3')!==''}]},
 format:{cells:{A1:'Meus gastos',A2:'Lanche',B2:'8',A3:'Livro',B3:'25'},tasks:[
  {tx:'Selecione A1 e clique em Negrito (N).',hint:'Clique na célula A1 e depois no botão N.',ok:X=>X.bold('A1')},
  {tx:'Dê uma cor de fundo à célula A1.',hint:'Com A1 selecionada, clique em um quadradinho colorido.',ok:X=>!!X.fill('A1')},
  {tx:'Deixe a célula B3 em negrito.',hint:'Clique em B3 e depois em N.',ok:X=>X.bold('B3')}]},
 sum:{cells:{A1:'Item',B1:'Preço',A2:'Caderno',B2:'10',A3:'Lápis',B3:'3',A4:'Borracha',B4:'2',A5:'Total'},tasks:[
  {tx:'Na célula B5, escreva a fórmula =SOMA(B2:B4) e aperte Enter.',hint:'Clique em B5 e digite exatamente =SOMA(B2:B4).',ok:X=>X.val('B5')===15}]},
 formula:{cells:{A1:'Ana',B1:'Beto',C1:'Juntos',D1:'Dobro do Beto',A2:'6',B2:'4'},tasks:[
  {tx:'A Ana tem 6 figurinhas e o Beto tem 4. Em C2, some as duas com a fórmula =A2+B2.',hint:'Clique em C2, digite =A2+B2 e aperte Enter. Vai aparecer 10.',ok:X=>X.isF('C2')&&X.val('C2')===X.num('A2')+X.num('B2')},
  {tx:'Em D2, calcule o dobro das figurinhas do Beto com =B2*2.',hint:'O * é o sinal de vezes. Clique em D2, digite =B2*2 e Enter. Vai aparecer 8.',ok:X=>X.isF('D2')&&/\*/.test(X.raw('D2'))&&X.val('D2')===X.num('B2')*2},
  {tx:'A Ana ganhou mais figurinhas: mude A2 para 10 e veja o C2 mudar sozinho para 14.',hint:'Clique em A2, digite 10 e aperte Enter. Não precisa mexer na fórmula!',ok:X=>X.num('A2')===10&&X.isF('C2')&&X.val('C2')===10+X.num('B2')}]},
 avg:{cells:{A1:'Aluno',B1:'Nota',A2:'Ana',B2:'8',A3:'Beto',B3:'6',A4:'Cris',B4:'10',A5:'Duda',B5:'8',A6:'Média',A7:'Maior'},tasks:[
  {tx:'Em B6, calcule a média com =MEDIA(B2:B5).',hint:'Digite =MEDIA(B2:B5) na célula B6.',ok:X=>X.val('B6')===8},
  {tx:'Em B7, ache a maior nota com =MAXIMO(B2:B5).',hint:'Digite =MAXIMO(B2:B5) na célula B7.',ok:X=>X.val('B7')===10}]},
 chart:{cells:{A1:'Time',B1:'Pontos',A2:'Azul',B2:'12',A3:'Verde',B3:'9',A4:'Laranja',B4:'15'},chart:1,tasks:[
  {tx:'Clique em Gráfico para ver os pontos em barras.',hint:'O botão Gráfico fica acima da planilha.',ok:X=>X.charted()},
  {tx:'Mude os pontos do time Verde para 20 e veja a barra crescer.',hint:'Clique em B3, digite 20 e Enter.',ok:X=>X.num('B3')===20&&X.charted()}]},
 final:{cells:{A1:'Time',B1:'Pontos',A2:'Azul',B2:'12',A3:'Verde',B3:'9',A4:'Laranja',B4:'15',A5:'Total',A6:'Média'},chart:1,tasks:[
  {tx:'Calcule o Total em B5 com SOMA.',hint:'=SOMA(B2:B4)',ok:X=>X.val('B5')===36},
  {tx:'Calcule a Média em B6.',hint:'=MEDIA(B2:B4)',ok:X=>X.val('B6')===12},
  {tx:'Coloque o título A1 em negrito.',hint:'Clique em A1 e no botão N.',ok:X=>X.bold('A1')},
  {tx:'Mostre o gráfico.',hint:'Clique em Gráfico.',ok:X=>X.charted()}]},
 cells2:{cells:{A1:'Caça às células'},tasks:[
  {tx:'Clique na célula D6.',hint:'Coluna D, linha 6.',ok:X=>X.hit('D6')},
  {tx:'Clique na célula F1.',hint:'A última coluna, F, na primeira linha.',ok:X=>X.hit('F1')},
  {tx:'Escreva oi na célula A8.',hint:'Clique em A8, digite oi e aperte Enter.',ok:X=>X.raw('A8').trim().length>=2}]},
 data2:{cells:{A1:'Brincadeira',B1:'Votos'},tasks:[
  {tx:'Escreva três brincadeiras de que você gosta em A2, A3 e A4.',hint:'Exemplos: pega-pega, esconde-esconde, futebol.',ok:X=>['A2','A3','A4'].every(r=>X.raw(r).trim().length>=2)},
  {tx:'Escreva quantos votos cada uma ganhou em B2, B3 e B4 (só números).',hint:'Invente: 5, 3, 8...',ok:X=>['B2','B3','B4'].every(r=>X.raw(r)!==''&&!isNaN(X.num(r)))}]},
 format2:{cells:{A1:'Lanches da semana',A2:'Segunda',B2:'Fruta',A3:'Terça',B3:'Pão',A4:'Quarta',B4:'Bolo'},tasks:[
  {tx:'Deixe o título A1 em negrito.',hint:'Clique em A1 e no N.',ok:X=>X.bold('A1')},
  {tx:'Pinte A2, A3 e A4, cada uma com uma cor.',hint:'Clique na célula e depois em um quadradinho colorido.',ok:X=>['A2','A3','A4'].every(r=>!!X.fill(r))}]},
 sum2:{cells:{A1:'Jogo',B1:'Pontos',A2:'Jogo 1',B2:'7',A3:'Jogo 2',B3:'5',A4:'Jogo 3',B4:'9',A5:'Jogo 4',B5:'4',A6:'Total'},tasks:[
  {tx:'Em B6, some os pontos dos 4 jogos com =SOMA(B2:B5).',hint:'Atenção: agora vai até B5. O resultado é 25.',ok:X=>X.val('B6')===25&&/SOMA/i.test(X.raw('B6'))}]},
 min:{cells:{A1:'Aluno',B1:'Nota',A2:'Ana',B2:'8',A3:'Beto',B3:'6',A4:'Cris',B4:'10',A5:'Duda',B5:'7',A6:'Menor'},tasks:[
  {tx:'Em B6, ache a menor nota com =MINIMO(B2:B5).',hint:'Digite =MINIMO(B2:B5). O resultado é 6.',ok:X=>X.val('B6')===6}]},
 proj:{cells:{A1:'Meu projeto',A2:'Dado 1',A3:'Dado 2',A4:'Dado 3',A5:'Total'},tasks:[
  {tx:'Escreva um número em B2, B3 e B4.',hint:'Escolha números ligados ao seu tema.',ok:X=>[2,3,4].every(i=>X.raw('B'+i)!==''&&!isNaN(X.num('B'+i)))},
  {tx:'Calcule o total em B5 com =SOMA(B2:B4).',hint:'=SOMA(B2:B4)',ok:X=>/SOMA/i.test(X.raw('B5'))&&!isNaN(X.val('B5'))}]}
};
/* ===== simuladores de PowerPoint ===== */
const SIMP={
 create:{tasks:[
  {tx:'Escreva um título no slide 1 (pelo menos 3 letras).',hint:'Clique na caixa de título e digite.',ok:P=>P.slides[0].t.trim().length>=3},
  {tx:'Clique em Novo slide para criar o slide 2.',hint:'O botão Novo slide fica no topo.',ok:P=>P.slides.length>=2},
  {tx:'Escreva um título no slide 2.',hint:'Selecione o slide 2 na lateral e escreva o título.',ok:P=>P.slides[1]&&P.slides[1].t.trim().length>=3}]},
 theme:{tasks:[
  {tx:'Escolha um tema de cor diferente do branco.',hint:'Clique em um dos quadradinhos de tema.',ok:P=>P.slides[0].th>0},
  {tx:'Escreva um texto curto no corpo do slide.',hint:'Digite no espaço grande embaixo do título.',ok:P=>P.slides[0].b.trim().length>=5}]},
 image:{tasks:[
  {tx:'Insira uma imagem no slide.',hint:'Clique no botão Imagem.',ok:P=>P.slides[0].img}]},
 transition:{tasks:[
  {tx:'Crie o slide 2 e escolha uma transição para ele.',hint:'Novo slide, depois escolha Esmaecer ou Deslizar na lista.',ok:P=>P.slides.length>=2&&P.slides.some(s=>s.tr!=='nenhuma')}]},
 present:{tasks:[
  {tx:'Crie 2 slides e clique em Apresentar.',hint:'Use Novo slide e depois Apresentar.',ok:P=>P.slides.length>=2&&P.started},
  {tx:'Avance até o último slide.',hint:'Clique em Próximo até terminar.',ok:P=>P.reachedEnd}]},
 proj:{tasks:[
  {tx:'Faça a capa: escreva o título do projeto no slide 1.',hint:'Digite no título.',ok:P=>P.slides[0].t.trim().length>=3},
  {tx:'Crie 3 slides no total.',hint:'Clique duas vezes em Novo slide.',ok:P=>P.slides.length>=3},
  {tx:'Coloque uma imagem em algum slide e escolha um tema colorido.',hint:'Botão Imagem e quadradinhos de tema.',ok:P=>P.slides.some(s=>s.img)&&P.slides.some(s=>s.th>0)}]}
};
/* ===== simuladores de Word extras ===== */
Object.assign(SIMS,{
 image:{html:'<p id="w-t">Meu animal favorito</p><p id="w-p1">O gato gosta de dormir ao sol.</p>',tasks:[
  {tx:'Clique no fim da frase e use o botão Imagem para inserir uma figura.',hint:'Clique depois da frase e depois no botão Imagem.',ok:d=>!!d.querySelector('svg')},
  {tx:'Centralize a imagem.',hint:'Clique na imagem (ela fica com uma borda) e depois no botão de centralizar (≡).',ok:d=>[...d.querySelectorAll('svg')].some(imgCentered)}]},
 format2:{html:'<p id="w-t">Feliz aniversário</p><p id="w-p1">Que o seu dia seja cheio de alegria.</p><p id="w-p2">Com carinho, eu.</p>',tasks:[
  {tx:'Deixe o título em negrito e com uma cor.',hint:'Clique 3 vezes no título, aperte N e escolha uma cor.',ok:d=>/<(b|strong)\b|font-weight/i.test(q(d,'w-t').innerHTML)&&/color/i.test(q(d,'w-t').innerHTML)},
  {tx:'Sublinhe a frase "Com carinho, eu."',hint:'Selecione a última frase e clique em S.',ok:d=>/<u\b|underline/i.test(q(d,'w-p2').innerHTML)}]},
 convite:{html:'<p id="w-t">Festa do pijama</p><p id="w-p1">Sábado, às 19 horas</p><p id="w-p2">Leve o travesseiro</p><p id="w-p3">Leve um lanche</p>',tasks:[
  {tx:'Centralize o título e a frase do horário.',hint:'Selecione as duas primeiras linhas e clique em centralizar.',ok:d=>getComputedStyle(q(d,'w-t')).textAlign==='center'&&getComputedStyle(q(d,'w-p1')).textAlign==='center'},
  {tx:'Transforme os dois "Leve..." em uma lista.',hint:'Selecione os dois itens e clique em Lista.',ok:d=>d.querySelectorAll('li').length>=2},
  {tx:'Deixe o título com uma cor bem alegre.',hint:'Selecione o título e escolha uma cor.',ok:d=>/color/i.test(q(d,'w-t').innerHTML)}]},
 final:{html:'<p id="w-t">Título do documento</p><p id="w-p1">Escreva aqui um texto sobre o assunto.</p><p id="w-p2">Item um</p><p id="w-p3">Item dois</p>',tasks:[
  {tx:'Escreva um título novo e coloque em negrito.',hint:'Clique 3 vezes no título, digite e use N.',ok:d=>/<(b|strong)\b|font-weight/i.test(q(d,'w-t').innerHTML)&&q(d,'w-t').textContent.trim()!=='Título do documento'},
  {tx:'Centralize o título.',hint:'Botão de centralizar.',ok:d=>getComputedStyle(q(d,'w-t')).textAlign==='center'},
  {tx:'Escreva um texto no parágrafo e deixe uma palavra em itálico.',hint:'Selecione e use I.',ok:d=>/<(i|em)\b|italic/i.test(d.innerHTML)},
  {tx:'Transforme os dois itens em uma lista.',hint:'Selecione os dois e clique em Lista.',ok:d=>d.querySelectorAll('li').length>=2},
  {tx:'Insira uma imagem.',hint:'Botão Imagem.',ok:d=>!!d.querySelector('svg')}]},
 proj:{html:'<p id="w-t">Meu projeto</p><p id="w-p1">Escreva aqui o texto sobre o seu tema.</p>',tasks:[
  {tx:'Escreva o título do projeto e coloque em negrito.',hint:'Clique 3 vezes no título e use N.',ok:d=>/<(b|strong)\b|font-weight/i.test(q(d,'w-t').innerHTML)},
  {tx:'Escreva um texto com pelo menos 40 letras sobre o seu tema.',hint:'Apague a frase e escreva duas ou três frases.',ok:d=>{const t=q(d,'w-p1').textContent.trim();return t.length>=40&&!/^Escreva aqui/.test(t)}}]}
});

/* ===== bancos: 10 perguntas extras por módulo (total 20) ===== */
const B2=(q,o)=>[q,o.slice(0,3),0];
const MORE={
1:[B2('O que é um programa?',['Um conjunto de ordens para o computador','Um tipo de cabo','Uma caixa de som'],'Um desenho na tela'),
 B2('Para escrever um texto usamos...',['o teclado','o monitor desligado','a caixa de som'],'o gabinete'),
 B2('O computador mostra o resultado pelo...',['monitor','mouse','teclado'],'cabo de força'),
 B2('Quando clicamos duas vezes em um ícone...',['normalmente abrimos o item','desligamos o computador','apagamos o ícone'],'trocamos de usuário'),
 B2('Como se chama o lugar onde guardamos arquivos organizados?',['Pasta','Cabo','Tela'],'Tecla'),
 B2('Antes de tirar o pen drive devemos...',['fechar os arquivos e remover com segurança','puxar rápido','bater nele'],'ligar de novo'),
 B2('O ponteiro do mouse aparece...',['na tela','no gabinete','no teclado'],'na caixa de som'),
 B2('A tecla Enter serve para...',['confirmar ou descer uma linha','desligar o computador','abrir a internet'],'mudar a cor'),
 B2('O computador precisa de eletricidade para...',['funcionar','ficar bonito','ficar frio'],'ficar sem arquivos'),
 B2('Quem manda no computador?',['Quem o usa, dando ordens','Ele mesmo','Ninguém'],'O monitor')],
2:[B2('Qual dedo fica na tecla J?',['O indicador direito','O mindinho esquerdo','O polegar esquerdo'],0),
 B2('As teclas F e J têm uma marquinha para...',['guiar os dedos sem olhar','enfeitar','ligar o computador'],'trocar de letra'),
 B2('Digitar sem olhar ajuda a...',['ganhar velocidade e atenção','cansar os olhos','esquecer as letras'],'errar mais'),
 B2('Para o ponto final, usamos...',['a tecla do ponto','a tecla Enter','o mouse'],'a tecla Esc'),
 B2('A tecla Backspace serve para...',['apagar a letra anterior','abrir uma pasta','salvar'],'ligar o monitor'),
 B2('Ao digitar, o ideal é manter as costas...',['retas','curvadas','deitadas na mesa'],'viradas para trás'),
 B2('Quantas letras formam uma palavra na contagem de velocidade?',['5','1','20'],'100'),
 B2('O que mostra se você digita bem?',['Poucos erros e boa velocidade','Só a velocidade','Só a cor'],'Nenhuma coisa'),
 B2('A tecla Caps Lock...',['deixa as letras maiúsculas','apaga tudo','abre a internet'],'desliga o teclado'),
 B2('Para treinar digitação devemos praticar...',['um pouco todos os dias','só uma vez no mês','nunca'],'só antes da prova')],
3:[B2('Um navegador é...',['um programa para abrir sites','um tipo de teclado','uma caixa de som'],'um cabo'),
 B2('Wi-Fi serve para...',['conectar à internet sem fio','ligar a luz','carregar o mouse'],'esquentar a sala'),
 B2('Uma senha forte tem...',['letras, números e símbolos misturados','só o seu nome','só 1234'],'a data de aniversário'),
 B2('Quando vemos um aviso "ganhou um prêmio" do nada, o que fazer?',['Desconfiar e avisar um adulto','Clicar rápido','Passar para os amigos'],'Digitar a senha'),
 B2('Um e-mail serve para...',['enviar mensagens pela internet','imprimir fotos','ligar o computador'],'trocar o teclado'),
 B2('Fotos de outras pessoas devem ser postadas...',['só com permissão','sempre','escondidas'],'quando der vontade'),
 B2('O que é um link?',['Um endereço que leva a outra página','Um tipo de teclado','Um programa de desenho'],'Um cabo'),
 B2('Ao sair de um site com seu login, devemos...',['sair da conta','deixar aberto para todos','desligar a luz'],'apagar o teclado'),
 B2('Quem deve saber suas senhas?',['Você e seus responsáveis','Todos os colegas','Qualquer pessoa online'],'Os desconhecidos'),
 B2('Antes de baixar um arquivo, devemos...',['perguntar a um adulto','baixar tudo','clicar em qualquer botão'],'desligar o antivírus')],
4:[B2('O botão da letra S sublinhada faz...',['sublinhar o texto','apagar o texto','salvar'],'imprimir'),
 B2('Para voltar uma ação errada usamos...',['Ctrl + Z','Ctrl + S','Alt + F4'],'Ctrl + P'),
 B2('Para escolher a cor da letra usamos...',['o botão de cor','o mouse sem clicar','a tecla Esc'],'o gabinete'),
 B2('Alinhar à direita coloca o texto...',['do lado direito','no meio','em baixo'],'de ponta-cabeça'),
 B2('Para colocar uma figura no documento usamos...',['Inserir Imagem','Salvar','Fechar'],'Desligar'),
 B2('O título de um trabalho costuma ficar...',['no topo e destacado','no fim','escondido'],'sem letras'),
 B2('Um arquivo do Word guarda...',['textos e imagens','só sons','só números'],'só vídeos'),
 B2('Para selecionar um parágrafo clicamos...',['três vezes','zero vezes','dez vezes'],'só com o teclado'),
 B2('Negrito serve para...',['destacar o texto','apagar o texto','mudar de página'],'salvar'),
 B2('Antes de entregar um trabalho devemos...',['revisar os erros','apagar o título','fechar sem salvar'],'mudar o nome do aluno')],
5:[B2('Qual é o endereço da célula na coluna B, linha 4?',['B4','4B','BB4'],'44'),
 B2('=10-4 mostra...',['6','4','14'],'10'),
 B2('Para dividir usamos...',['/','x','&'],'%'),
 B2('=MAXIMO serve para achar...',['o maior valor','o menor valor','a média'],'a soma'),
 B2('O que acontece com a fórmula se mudarmos um número usado nela?',['O resultado é recalculado','Nada','O Excel fecha'],'A planilha apaga'),
 B2('Para ver barras com os dados usamos...',['um gráfico','uma senha','um atalho de teclado'],'o mouse sem clicar'),
 B2('Uma coluna na planilha é...',['uma fileira vertical','uma fileira horizontal','um tipo de gráfico'],'um programa'),
 B2('Uma linha na planilha é...',['uma fileira horizontal','uma fileira vertical','uma fórmula'],'uma cor'),
 B2('O símbolo : em B2:B5 significa...',['de B2 até B5','dividir','somar'],'apagar'),
 B2('Antes de fazer um gráfico devemos ter...',['dados na planilha','um vídeo','uma foto'],'uma senha')],
6:[B2('Qual botão cria um slide novo?',['Novo slide','Salvar','Fechar'],'Imprimir'),
 B2('O ideal é cada slide ter...',['uma ideia principal','muitas ideias','nenhuma ideia'],'só números'),
 B2('Contraste significa...',['diferença entre cor da letra e do fundo','apagar o slide','mudar o arquivo'],'trocar o teclado'),
 B2('Para ver a apresentação em tela cheia usamos...',['o modo Apresentar','o modo Dormir','a lixeira'],'o gabinete'),
 B2('Uma boa imagem em um slide...',['ajuda a explicar a ideia','precisa cobrir todo o texto','deve ser enorme e borrada'],'deve ficar escondida'),
 B2('Uma transição acontece...',['entre um slide e o próximo','dentro da caixa de som','na lixeira'],'no teclado'),
 B2('Quantos efeitos devemos usar?',['Poucos','Todos de uma vez','Nenhum slide'],'Mil'),
 B2('Ao apresentar, devemos...',['usar o slide como apoio','ler tudo de costas','falar sem parar'],'sair da sala'),
 B2('O título do slide mostra...',['do que ele trata','a hora','a senha'],'o preço'),
 B2('Para escolher a ordem dos slides usamos...',['a barra lateral','a caixa de som','o mouse desligado'],'o gabinete')],
7:[B2('O tema do projeto deve ser...',['algo que você gosta e pode pesquisar','impossível de achar','secreto'],'sem nenhum assunto'),
 B2('No projeto, o Excel serve para...',['organizar números e fazer contas','digitar o texto todo','fazer a capa'],'escolher o tema'),
 B2('No projeto, o Word serve para...',['escrever o texto','fazer o gráfico','fazer a transição'],'somar os números'),
 B2('Uma apresentação final costuma ter...',['capa, conteúdo e encerramento','só um slide vazio','nada'],'só imagens sem sentido'),
 B2('Antes de apresentar o projeto, fazemos...',['um ensaio','uma festa','nenhum teste'],'um desenho'),
 B2('Se algo der errado na apresentação...',['respiramos e continuamos','saímos correndo','apagamos tudo'],'culpamos o computador'),
 B2('Para ter um bom projeto precisamos...',['planejar as etapas','pular o plano','trocar de tema toda hora'],'esquecer o prazo'),
 B2('Revisar o projeto é...',['ler e corrigir erros antes de entregar','apagar tudo','esconder'],'imprimir sem ler'),
 B2('No fim do curso você mostra...',['o que aprendeu','só o teclado','um vídeo qualquer'],'nada'),
 B2('Pedir ajuda ao tutor quando travamos é...',['uma boa ideia','vergonhoso','proibido'],'perda de tempo')]
};

for(const m in MORE)BANK[m]=BANK[m].concat(MORE[m]);

/* ===== APP ===== */
const PATHS={
 star:'<polygon points="12 2.5 14.9 8.7 21.6 9.5 16.6 14.1 18 20.8 12 17.4 6 20.8 7.4 14.1 2.4 9.5 9.1 8.7"/>',
 lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
 check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 back:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
 kid:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4-6 8-6s7 1.5 8 6"/>',
 tutor:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
 chart:'<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
 home:'<path d="M3 11l9-8 9 8M5 10v10h14V10"/>',
 key:'<rect x="2.5" y="6" width="19" height="12" rx="2.5"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>',
 cap:'<path d="M2 9l10-5 10 5-10 5zM6 11.5V16c3 2.5 9 2.5 12 0v-4.5"/>',
 time:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 cert:'<rect x="3" y="4" width="18" height="13" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M9 21l3-3 3 3"/>',
 eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 undo:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5"/>',
 sound:'<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/>',
 save:'<path d="M5 3h11l3 3v15H5z"/><path d="M8 3v6h8V3M8 21v-7h8v7"/>',
 flag:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>'
};
const ic=(n,fill)=>`<svg class="i${fill?' fill':''}" viewBox="0 0 24 24" aria-hidden="true">${PATHS[n]}</svg>`;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const MCOL=n=>`var(--m${n})`;
const BR=window.__CHARS__;

/* ---------- dados (demonstração, salvos no navegador) ---------- */
const KEY='trilha-digital-demo-v3';
const dayKey=(d=new Date())=>d.toISOString().slice(0,10);
function mkStudent(id,name,age,slot,polo,ch,lessons,passed,wpm,hist){
  const prog={};let c=0;
  for(const m of MODS){for(let l=1;l<=m.aulas.length;l++){if(c<lessons){prog[m.n+'.'+l]=(c*7+id.length)%3+1;c++}}}
  const tests={};passed.forEach((m,i)=>tests[m]={score:80+((i*10)%20),tries:1+(i%2),typOk:true});
  const typ=wpm?[{wpm:Math.max(3,wpm-4),acc:88,d:'-'},{wpm:wpm,acc:92,d:'-'}]:[];
  return {id,name,age,slot,polo,ch,prog,tests,typ,hist,stk:passed.map(m=>'mod'+m),bonus:lessons*2};
}
function seed(){
  const h=(a)=>a.map(x=>x);
  const S=[
   mkStudent('ana','Ana Souza',9,'Ter 14h','Polo Pinhão','mia',9,[1],9,h([1,1,1,1,1,0,1,1])),
   mkStudent('bruno','Bruno Lima',11,'Ter 14h','Polo Pinhão','teo',3,[],16,h([1,1,0,1,1,1,1,1])),
   mkStudent('carla','Carla Dias',10,'Qua 10h45','Polo Pinhão','mia',13,[1],10,h([1,0,1,1,0,1,1,1])),
   mkStudent('davi','Davi Rocha',12,'Qua 10h45','Polo Pinhão','teo',0,[],0,h([1,1,1,1,1,1,1,1])),
   mkStudent('elisa','Elisa Prado',8,'Qui 10h45','Polo Pinhão','mia',5,[1],7,h([1,1,1,0,1,1,1,1])),
   mkStudent('felipe','Felipe Nunes',10,'Qui 10h45','Polo Pinhão','teo',14,[1],11,h([1,1,1,1,0,1,1,1])),
   mkStudent('gabi','Gabriela Melo',12,'Sex 14h','Polo Pinhão','mia',24,[1,2],19,h([1,1,1,1,1,1,1,1])),
   mkStudent('heitor','Heitor Alves',9,'Sex 14h','Polo Pinhão','teo',2,[],6,h([0,1,0,1,1,0,1,1])),
   mkStudent('iris','Íris Campos',11,'Seg 14h','Polo Pinhão','mia',10,[1],14,h([1,1,1,1,1,1,0,1])),
   mkStudent('joao','João Pedro',10,'Sáb 9h','Polo Exemplo (demonstração)','teo',6,[1],8,h([1,1,1,1,0,1,1,1])),
   mkStudent('kaue','Kauê Ramos',8,'Sáb 9h','Polo Exemplo (demonstração)','teo',1,[],5,h([1,0,1,1,1,0,1,1])),
   mkStudent('lia','Lia Torres',12,'Sáb 9h','Polo Exemplo (demonstração)','mia',8,[1],17,h([1,1,1,1,1,1,1,0]))
  ];
  const students={};S.forEach(s=>students[s.id]=s);
  const t=dayKey();
  const wd=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'][new Date().getDay()];
  const pres={};S.filter(x=>x.polo==='Polo Pinhão'&&x.slot.startsWith(wd)).forEach((x,i)=>{pres[x.id]={in:(i?'14:06':'14:03'),ok:i===0}});
  const presence={[t]:pres};
  /* grade proposta para fev/2027: Turma Manhã (seg-qui 10h45, sex 9h) e Turma Tarde (seg, ter, sex 14h e 15h) */
  const config={polos:{'Polo Pinhão':{pcs:2,slots:['Seg 10h45','Ter 10h45','Qua 10h45','Qui 10h45','Sex 9h','Seg 14h','Seg 15h','Ter 14h','Ter 15h','Sex 14h','Sex 15h']},'Polo Exemplo (demonstração)':{pcs:4,slots:['Sáb 9h','Sáb 14h']}},tutora:'Giovana'};
  return {students,presence,config,seedV:2};
}
let DB=null;
function load(){try{const r=localStorage.getItem(KEY);if(r)DB=JSON.parse(r)}catch(e){}if(!DB||!DB.config||!DB.students)DB=seed();
  /* atualização da versão de 20/11: se só há alunos fictícios, troca pela demonstração nova; alunos reais (t*, m*) são mantidos */
  if(!DB.seedV){const real=Object.values(DB.students).filter(x=>/^[tm]/.test(x.id));if(!real.length)DB=seed();else{DB.seedV=2;DB.config.tutora=DB.config.tutora||'Giovana'}save()}
  DB.config.tutora=DB.config.tutora||'Giovana'}
function save(){try{localStorage.setItem(KEY,JSON.stringify(DB))}catch(e){}}
const cfgP=p=>DB.config.polos[p]||{pcs:1,slots:[]};
const tutorName=()=>(DB.config&&DB.config.tutora)||'Giovana';
const occ=(p,sl)=>Object.values(DB.students).filter(s=>s.polo===p&&s.slot===sl).length;
const WD=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
const SKEY=KEY+'-sessao';
function saveSess(){try{if(!V.role){localStorage.removeItem(SKEY);return}const v=['lesson','test','lessonend','cert','tutora','colcert'].includes(V.view)?(V.view==='lesson'||V.view==='test'||V.view==='lessonend'?'module':'home'):V.view;localStorage.setItem(SKEY,JSON.stringify({role:V.role,sid:V.sid,parentSid:V.parentSid,view:v,mod:V.mod,tutorTurma:V.tutorTurma,poloSel:V.poloSel,demo:V.demo}))}catch(e){}}
function loadSess(){try{const r=JSON.parse(localStorage.getItem(SKEY)||'null');if(r&&r.role&&(r.role!=='aluno'||DB.students[r.sid])&&(r.role!=='pais'||DB.students[r.parentSid])){Object.assign(V,r);if(V.view==='module'&&!V.mod)V.view='home'}}catch(e){}}
/* ---------- atalho de salvar do Word (22/11): Ctrl + S (atalhos em inglês) ou Ctrl + B (Word em português) ----------
   '?' = ainda não conferido no Office dos notebooks: ensina o botão do disquete, que funciona em qualquer versão.
   Quando o Júnior confirmar, basta trocar ATALHO_PADRAO para 'S' ou 'B' (ou escolher em Área da tutora → Ajustes). */
const ATALHO_PADRAO='?';
const atalhoCfg=()=>{const a=DB&&DB.config&&DB.config.atalho;return a==='S'||a==='B'?a:a==='?'?'?':ATALHO_PADRAO};
const atalhoLetra=()=>{const a=atalhoCfg();return a==='?'?'':a};
function applyAtalho(){const L=atalhoLetra(),K='Ctrl + '+L;
  const tx={
   info:L?T(`Digite o texto na folha. Para salvar, clique no ícone de salvar (o disquete) ou use ${K}. Dê um nome fácil para achar depois.`,`Para salvar use o botão Salvar (disquete) ou ${K} e escolha um nome claro e uma pasta organizada.`)
     :T('Digite o texto na folha. Para salvar, clique no botão do disquete, lá em cima. Dê um nome fácil para achar depois.','Para salvar use o botão Salvar (o disquete), que funciona em qualquer versão do Word, e escolha um nome claro e uma pasta organizada.'),
   anim:L?T(`Aperte Ctrl e ${L} juntas e pronto: seu trabalho fica guardado!`,`O atalho ${K} salva o documento sem precisar procurar o botão.`)
     :T('Clique no botão do disquete e pronto: seu trabalho fica guardado!','O botão do disquete salva o documento em qualquer versão do Word.'),
   sabia:L==='B'?T('No Word em português, o atalho de salvar é Ctrl + B. Cuidado: Ctrl + S faz sublinhado! O botão do disquete sempre funciona.','No Word em português, Ctrl + B salva e Ctrl + S sublinha. Em Words com atalhos em inglês é o contrário: Ctrl + S salva. O disquete funciona em qualquer versão.')
     :L==='S'?T('Em alguns computadores com o Word em português, o atalho de salvar é Ctrl + B. Aqui é Ctrl + S. E o botão do disquete sempre funciona!','No Word em português, o atalho de salvar pode ser Ctrl + B (e Ctrl + S vira sublinhado). Nestes notebooks é Ctrl + S. O disquete funciona em qualquer versão.')
     :T('O atalho do teclado para salvar muda de um Word para outro: pode ser Ctrl + S ou Ctrl + B. Por isso o botão do disquete é o mais seguro: ele sempre funciona!','O atalho de salvar depende do Word: Ctrl + S (atalhos em inglês) ou Ctrl + B (Word em português, onde Ctrl + S sublinha). O ícone de disquete funciona em qualquer versão.')};
  for(const k of ['4.2','4.6'])for(const st of LES[k]){const a=st.atalho;if(!a)continue;
    if(a==='info'||a==='anim'||a==='sabia')st.x=tx[a];
    if(a==='quiz'){if(L){st.q='Qual atalho salva o documento?';st.opts=[K,'Ctrl + Z','Alt + F4']}else{st.q='Qual botão salva o documento em qualquer Word?';st.opts=['O botão do disquete','O botão de imprimir','O X de fechar']}st.a=0}
    if(a==='quiz2'){if(L){st.q='Qual atalho salva o seu documento?';st.opts=[K,'Ctrl + P','Ctrl + Q']}else{st.q='Como você salva o seu documento?';st.opts=['Clicando no disquete','Clicando no X','Desligando o computador']}st.a=0}}
  const b=BANK[4].find(x=>/^(Ctrl \+ [SB]|O botão do disquete)\.\.\.$/.test(x[0]));if(b)b[0]=L?K+'...':'O botão do disquete...';}

/* ---------- registro de tempo por passo (22/11, para o teste com crianças de dezembro) ----------
   Grava, para cada passo concluído: aula, passo, tipo, início, segundos, erros, dicas e "ouvir".
   Fica dentro do aluno (s.tlog), então vai junto na cópia de segurança. A tutora vê e exporta em Área da tutora → Tempos. */
const TLOG_MAX=3000,TLOG_PAUSA=15*60;
const tempoOn=()=>!(DB.config&&DB.config.tempoOff);
const nowS=()=>Math.round(Date.now()/1000);
function logStep(cur,flags){const s=V.sid&&me();if(!s||!cur||!tempoOn()||!V.st||!V.st.t0)return;
  const ms=Date.now()-V.st.t0;s.tlog=s.tlog||[];
  s.tlog.push({k:V.mod+'.'+V.les,r:V.run||Math.round(V.st.t0/1000),p:V.step,t:cur.t,i:Math.round(V.st.t0/1000),s:Math.max(0,Math.round(ms/1000)),e:Math.max(0,V.errs-(V.st.e0||0)),h:(WS&&WS.hints)||0,o:V.st.ouv||0,b:cur.bonus?1:0,x:flags&&flags.x?1:0,l:flags&&flags.l?1:0,m:(()=>{try{return Math.round(modelSec(cur))}catch(e){return null}})()});
  if(s.tlog.length>TLOG_MAX)s.tlog=s.tlog.slice(-TLOG_MAX);V.st.t0=0;save()}
/* tempo-modelo do passo (mesmas premissas de testes/tempo.js; hipótese, não medição) */
function modelSec(st){const words=t=>String(t||'').split(/\s+/).filter(Boolean).length,y=x=>typeof x==='string'?x:(x&&x.y)||'';
  const real=it=>/verdade|tutora|Explorador|Word de verdade|notebook/i.test(it);
  switch(st.t){case 'info':return 20+words(y(st.x))/70*60;case 'anim':return 50+words(y(st.x))/70*60;case 'quiz':return 30;case 'order':return 15*st.items.length;case 'hot':return 20;case 'targets':return 5*st.n;
   case 'type':return y(st.text).length/30*60*1.3;case 'word':return 90*SIMS[st.sim].tasks.length;case 'xl':return 90*SIMX[st.sim].tasks.length;case 'ppt':return 70*SIMP[st.sim].tasks.length;
   case 'form':return 90*st.fields.length;case 'check':return st.items.reduce((a,it)=>a+(real(st.q+it)?90:20),0)}return 30}
const TIPO={info:'leitura',anim:'animação',quiz:'pergunta',order:'ordenar',hot:'clicar na figura',targets:'bolinhas',type:'digitação',word:'Word',xl:'Excel',ppt:'PowerPoint',form:'formulário',check:'lista de marcar'};
function tlogModel(e){if(e.m!=null)return e.m;const st=(LES[e.k]||[])[e.p];return st&&st.t===e.t?modelSec(st):null}
function aulaNome(k){if(k==='2.0')return 'Aquecimento de digitação';const [m,l]=kOf(k);return (MODS[m-1]&&MODS[m-1].aulas[l-1])||k}
function tempoRows(){const out=[];for(const s of realStudents())for(const e of (s.tlog||[]))out.push([s,e]);return out.sort((a,b)=>a[1].i-b[1].i)}
function tempoCsv(){const f=n=>String(n).replace('.',','),hh=t=>{const d=new Date(t*1000);return [dayKey(d),String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')+':'+String(d.getSeconds()).padStart(2,'0')]};
  const head=['crianca','idade','data','hora_inicio','aula','titulo_aula','tentativa','passo','tipo_passo','bonus','pulou_bonus','saiu_da_aula','seg_real','seg_modelo','erros','dicas','ouvir'];
  const q=v=>/[;"\n]/.test(String(v))?'"'+String(v).replace(/"/g,'""')+'"':String(v);
  return '﻿'+[head.join(';')].concat(tempoRows().map(([s,e])=>{const [d,h]=hh(e.i),m=tlogModel(e);return [s.name.split(' ')[0],s.age,d,h,e.k==='2.0'?'aquecimento':e.k,aulaNome(e.k),hh(e.r)[1],e.p+1,TIPO[e.t]||e.t,e.b?'sim':'nao',e.x?'sim':'nao',e.l?'sim':'nao',e.s,m==null?'':f(Math.round(m)),e.e,e.h,e.o].map(q).join(';')})).join('\r\n')+'\r\n'}
function tempoResumo(){const A={},P={};let pausas=0;
  for(const [s,e] of tempoRows()){if(e.x)continue;if(e.s>TLOG_PAUSA){pausas++;continue}const m=tlogModel(e);
    const a=A[e.k]||(A[e.k]={kids:new Set(),runs:new Set(),real:0,mod:0,e:0,h:0,o:0,l:0});a.kids.add(s.id);a.runs.add(s.id+'|'+e.r);a.real+=e.s;a.mod+=m||0;a.e+=e.e;a.h+=e.h;a.o+=e.o;a.l+=e.l;
    if(m!=null&&!e.l){const t=TIPO[e.t]||e.t,p=P[t]||(P[t]={n:0,real:0,mod:0});p.n++;p.real+=e.s;p.mod+=m}}
  return {A,P,pausas}}
function vTempos(){const R=tempoResumo(),rows=Object.entries(R.A).sort((a,b)=>{const x=kOf(a[0]),y=kOf(b[0]);return x[0]-y[0]||x[1]-y[1]});
  const mn=x=>(x/60).toFixed(1).replace('.',','),fx=(r,m)=>m?(r/m).toFixed(1).replace('.',','):'-';
  const tR=rows.reduce((a,[,x])=>a+x.real,0),tM=rows.reduce((a,[,x])=>a+x.mod,0),n=tempoRows().length;
  return `<div class="card"><div class="row"><div class="grow"><h2>Tempos por aula e por passo</h2><p class="muted">O tempo de cada passo é gravado sozinho neste computador quando a criança aperta Continuar. Serve para o teste com crianças: compara o tempo real com o tempo-modelo (fator F). Passos com mais de 15 minutos contam como pausa e ficam fora da conta.</p></div>
     <button class="btn ${tempoOn()?'good':''}" data-act="tempoTog">${tempoOn()?'Registro ligado: clique para desligar':'Ligar o registro de tempo'}</button></div>
    <div class="tiles" style="margin-top:12px"><div class="tile"><b>${n}</b><span>passos registrados</span></div><div class="tile"><b>${mn(tR)} min</b><span>tempo real somado</span></div><div class="tile"><b>${mn(tM)} min</b><span>tempo-modelo das mesmas aulas</span></div><div class="tile"><b>${fx(tR,tM)}</b><span>fator F (real ÷ modelo)</span></div></div>
    <div class="row" style="margin-top:12px"><button class="btn" data-act="tempoCsv" ${n?'':'disabled'}>${ic('save')} Baixar a tabela (Excel)</button><button class="btn ghost" data-act="tempoCopy" ${n?'':'disabled'}>Copiar a tabela</button><span class="grow"></span>${V.tclr?`<button class="btn ghost sm" data-act="tempoClrNo">Cancelar</button><button class="btn sm" data-act="tempoClrYes">Sim, apagar os tempos</button>`:`<button class="btn ghost sm" data-act="tempoClr" ${n?'':'disabled'}>Apagar os tempos</button>`}</div>
    ${R.pausas?`<p class="muted" style="margin-top:8px">${R.pausas} passo(s) acima de 15 minutos ficaram fora da conta (pausa ou criança longe do computador).</p>`:''}</div>
   <div class="card"><h2 style="margin-bottom:8px">Por aula</h2>${rows.length?`<div class="tblwrap"><table class="tbl"><thead><tr><th>Aula</th><th>Crianças</th><th>Vezes</th><th>Min. real (média)</th><th>Min. modelo</th><th>F</th><th>Erros</th><th>Dicas</th><th>Ouvir</th><th>Saídas</th></tr></thead><tbody>${rows.map(([k,a])=>{const v=a.runs.size;return `<tr><td><b>${k==='2.0'?'Aquecimento':k}</b><br><span class="muted" style="font-size:.85rem">${esc(aulaNome(k))}</span></td><td>${a.kids.size}</td><td>${v}</td><td>${mn(a.real/v)}</td><td>${mn(a.mod/v)}</td><td>${fx(a.real,a.mod)}</td><td>${a.e}</td><td>${a.h}</td><td>${a.o}</td><td>${a.l}</td></tr>`}).join('')}</tbody></table></div>`:'<p class="muted">Nenhum tempo registrado ainda. Os tempos aparecem aqui assim que uma criança fizer uma aula neste computador.</p>'}</div>
   <div class="card"><h2 style="margin-bottom:8px">Por tipo de passo</h2>${Object.keys(R.P).length?`<div class="tblwrap"><table class="tbl"><thead><tr><th>Tipo</th><th>Passos</th><th>Seg. real (média)</th><th>Seg. modelo (média)</th><th>F</th></tr></thead><tbody>${Object.entries(R.P).sort((a,b)=>b[1].real-a[1].real).map(([t,p])=>`<tr><td><b>${esc(t)}</b></td><td>${p.n}</td><td>${Math.round(p.real/p.n)}</td><td>${Math.round(p.mod/p.n)}</td><td>${fx(p.real,p.mod)}</td></tr>`).join('')}</tbody></table></div>`:'<p class="muted">Sem dados ainda.</p>'}</div>`}
load();applyAtalho();

/* ---------- estado de tela ---------- */
let V={st:{},view:'login',role:null,sid:null,mod:null,les:null,step:0,errs:0,tutorSlot:null,poloSel:null,parentSid:null,tabMgr:'resumo'};
const app=document.getElementById('app');
const me=()=>DB.students[V.sid];
const grp=s=>s.age<=10?'y':'o';
const tx=(v,s)=>typeof v==='string'?v:v[grp(s||me())];
const lessonDone=(s,m,l)=>!!s.prog[m+'.'+l];
const modLessonsDone=(s,m)=>MODS[m-1].aulas.filter((_,i)=>lessonDone(s,m,i+1)).length;
const modComplete=(s,m)=>modLessonsDone(s,m)===MODS[m-1].aulas.length;
const modPassed=(s,m)=>{const t=s.tests[m];return !!(t&&(t.release||(t.score>=MIN&&t.typOk)))};
const quizOk=(s,m)=>!!(s.tests[m]&&s.tests[m].score>=MIN);
const typOk=(s,m)=>!!(s.tests[m]&&s.tests[m].typOk);
const METAM={y:[4,8,10,12,13,14,15],o:[8,15,17,19,21,23,25]},ACCM={y:[85,88,90,90,92,92,92],o:[88,90,92,92,94,95,95]};
const TESTL={y:['Eu gosto de aprender com o computador e descobrir coisas novas todos os dias','A minha aula é muito legal e eu me divirto na aula de informática','O gato dorme na sala e o cachorro brinca com a bola no jardim','Hoje eu vou digitar com calma, sem olhar para o teclado e sem pressa','A escola tem uma biblioteca grande e eu adoro ler histórias de aventura'],
 o:['Praticar a digitação todos os dias ajuda a escrever com mais rapidez, atenção e precisão no computador.','A internet permite pesquisar, aprender e conversar, mas é preciso ter cuidado com as informações e com a segurança.','Trabalhar em equipe é importante: cada pessoa tem ideias diferentes e juntas elas criam projetos incríveis.','Uma planilha organiza números em linhas e colunas e faz cálculos automáticos que economizam muito tempo.','Uma boa apresentação tem poucas palavras, imagens bem escolhidas e uma fala tranquila e clara.']};
/* módulo 1: a criança ainda não aprendeu Shift e acentos, então a frase é só em minúsculas e sem acento */
const TESTL1={y:['o gato bebe leite na cozinha','a casa tem uma sala grande','eu gosto de jogar bola','a fada mora perto do lago','o sapo pula na lagoa'],
 o:['eu gosto de aprender coisas novas no computador','o computador ajuda a escrever e a pesquisar','a turma vai fazer um projeto muito legal','o mouse e o teclado mandam ordens para o computador']};
const pickTest=(s,m)=>{const l=(m===1?TESTL1:TESTL)[grp(s)];return l[Math.floor(Math.random()*l.length)]};
const MHEX=['#3a86ff','#1fb5a3','#8a5cf6','#ff7a45','#17935a','#ff6fa5','#e8a400'];
function stkInfo(id){let m;if(id==='seq')return {name:'3 acertos seguidos',c:'#ff7a45'};if(m=/^dig(\d)/.exec(id))return {name:'Meta de digitação do módulo '+m[1],c:MHEX[m[1]-1]};m=/^mod(\d)/.exec(id);return {name:'Módulo '+m[1]+' concluído',c:MHEX[m[1]-1]}}
function stkSvg(id,big){const i=stkInfo(id);return `<span class="stk" title="${i.name}"><svg viewBox="0 0 48 48" width="${big?56:42}" height="${big?56:42}" role="img" aria-label="${i.name}"><circle cx="24" cy="24" r="22" fill="${i.c}"/><circle cx="24" cy="24" r="22" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="3 3"/><g transform="translate(10 10) scale(1.17)" fill="#fff"><polygon points="12 2.5 14.9 8.7 21.6 9.5 16.6 14.1 18 20.8 12 17.4 6 20.8 7.4 14.1 2.4 9.5 9.1 8.7"/></g></svg></span>`}
function award(s,id){s.stk=s.stk||[];if(s.stk.includes(id))return false;s.stk.push(id);save();toast('Novo adesivo: '+stkInfo(id).name,'stk',id);return true}
function toast(txt,kind,id){const d=document.createElement('div');d.className='toast';d.setAttribute('role','status');d.innerHTML=(kind==='stk'?stkSvg(id,1):ic('star',1))+'<span>'+txt+'</span>';document.body.appendChild(d);setTimeout(()=>d.remove(),2600)}
const modUnlocked=(s,m)=>m===1||modPassed(s,m-1)||V.demo;
const lessonUnlocked=(s,m,l)=>modUnlocked(s,m)&&(l===1||lessonDone(s,m,l-1)||V.demo);
const starsTotal=s=>Object.values(s.prog).reduce((a,b)=>a+b,0)+(s.bonus||0);
const passedCount=s=>MODS.filter(m=>modPassed(s,m.n)).length;
const lessonsCount=s=>Object.keys(s.prog).length;
const bestWpm=s=>s.typ.reduce((a,b)=>Math.max(a,b.wpm),0);
const lastTyp=s=>s.typ[s.typ.length-1];
function curMod(s){for(const m of MODS){if(!modPassed(s,m.n))return m.n}return 7}
function today(){return DB.presence[dayKey()]||(DB.presence[dayKey()]={})}
function stars(n,max=3){let o='';for(let i=1;i<=max;i++)o+=`<span class="${i<=n?'':'off'}">${ic('star',1)}</span>`;return `<span class="stars" role="img" aria-label="${n} de ${max} estrelas">${o}</span>`}
function ch(s,mode){const k=s.ch+(grp(s)==='y'?'y':'o');return BR[k]}
function stageOf(s){return passedCount(s)}
function metaFor(s,m){const g=grp(s),i=(m||curMod(s))-1;return {wpm:METAM[g][i],acc:ACCM[g][i]}}
const attendance=s=>{const hs=s.hist;const t=today()[s.id];const list=[...hs,t&&t.ok?1:0];return Math.round(list.reduce((a,b)=>a+b,0)/list.length*100)};

/* ---------- componentes ---------- */
function topbar(){
  const u=V.role==='aluno'?me().name:V.role==='tutor'?tutorName():V.role==='gestor'?'Gestão':'';
  const rl={aluno:'Aluno',tutor:'Tutora',gestor:'Gestor'}[V.role]||'';
  const lab=V.role==='pais'?'Família de '+((DB.students[V.parentSid]||{name:''}).name.split(' ')[0]):rl+': '+u;
  return `<header class="top"><div class="wrap">
   <div class="brand"><img src="${window.__LOGO__}" alt="Inspirar Informática" class="brandlogo"></div>
   <span class="grow"></span>
   ${V.role==='aluno'&&!window.__ALUNO__?`<label class="chip"><input type="checkbox" id="demo" data-act="demo" ${V.demo?'checked':''}> Modo demonstração: destravar tudo</label>`:''}
   ${V.role?`<span class="chip">${esc(lab)}</span><button class="btn ghost sm" data-act="logout">Sair</button>`:''}
  </div></header>`;
}
const foot=window.__ALUNO__?`<footer class="wrap">Inspirar Informática · O seu progresso fica guardado neste computador. A tutora faz a cópia de segurança.</footer>`:`<footer class="wrap">Inspirar Informática · Versão de demonstração da gestão: os alunos que aparecem em Tutora, Gestor e Pais são fictícios. Os dados ficam apenas neste navegador.</footer>`;
const demoNote=()=>`<div class="note demo-note"><b>Dados de demonstração.</b> Os alunos desta tela são fictícios e ficam só neste navegador. Os alunos reais aparecerão aqui quando a plataforma tiver banco de dados (previsto para fevereiro).</div>`;

/* ---------- LOGIN ---------- */
function vLoginAluno(){
  const mine=Object.values(DB.students).filter(s=>s.id.startsWith('t'));
  return `${topbar()}<main class="wrap"><section class="hero"><div>
   <img src="${window.__LOGO__}" alt="Inspirar Informática" class="logobig">
   <h1>Vamos começar a aventura?</h1>
   <p class="muted" style="margin-top:10px;font-size:1.1rem">Conte quem você é para criar o seu perfil e começar a trilha de informática.</p>
   <div class="card" style="margin-top:18px"><div class="stack">
    <label style="font-weight:800" for="nn">Seu nome<input id="nn" class="sel" maxlength="30" autocomplete="off"></label>
    <label style="font-weight:800" for="na">Sua idade<select id="na" class="sel">${[8,9,10,11,12].map(x=>`<option>${x}</option>`).join('')}</select></label>
    <div><b>Escolha seu parceiro</b><div class="row" style="margin-top:8px;gap:10px"><label class="pick" style="display:flex;gap:8px;align-items:center"><input type="radio" name="nc" value="mia" checked> Mia</label><label class="pick" style="display:flex;gap:8px;align-items:center"><input type="radio" name="nc" value="teo"> Teo</label></div></div>
    <div class="feed no" id="nerr" role="status"></div>
    <button class="btn" data-act="newstudent">Começar ${ic('arrow')}</button></div></div>
   ${mine.length?`<h3 style="margin-top:18px">Já tem perfil neste computador?</h3><div class="picker" style="margin-top:10px">${mine.map(s=>`<button class="pick" data-act="pick" data-id="${s.id}"><b>${esc(s.name)}</b><br><span class="muted">${s.age} anos</span></button>`).join('')}</div>`:''}
  </div>
  <div class="chars"><div>${BR.miay}</div><div>${BR.teoy}</div></div></section>
  <div class="note row" style="margin-top:16px"><span class="grow">O seu progresso fica salvo neste computador. Vai usar outro computador? Traga o seu progresso.</span><button class="btn ghost sm" data-act="restore">${ic('save')} Trazer meu progresso</button><button class="btn ghost sm" data-act="tutora">${ic('tutor')} Área da tutora</button></div></main>${foot}`;
}
function vLogin(){if(window.__ALUNO__)return vLoginAluno();
  const kids=Object.values(DB.students).filter(s=>s.polo==='Polo Pinhão');
  return `${topbar()}<main class="wrap">
  <section class="hero"><div>
   <img src="${window.__LOGO__}" alt="Inspirar Informática" class="logobig">
   <h1>Aprender informática é uma aventura!</h1>
   <p class="muted" style="margin-top:10px;font-size:1.1rem">Plataforma do curso de informática básica para 8 a 12 anos: computador, digitação, internet, Word, Excel e PowerPoint, no seu ritmo, com um tutor ao lado.</p>
   <div class="note" style="margin-top:14px">Versão de demonstração. Escolha um perfil para explorar. No sistema real, cada pessoa entra com código e senha.</div>
  </div>
  <div class="chars"><div>${BR.miay}</div><div>${BR.teoy}</div></div></section>
  <h2 style="margin-top:8px">Quem vai entrar?</h2>
  <div class="roles">
   <button class="role" data-act="roleAluno"><span class="ico" style="background:var(--m1)">${ic('kid')}</span><h3>Aluno</h3><span class="muted">Trilha, aulas, digitação e testes</span></button>
   <button class="role" data-act="roleTutor"><span class="ico" style="background:var(--m2)">${ic('tutor')}</span><h3>Tutor</h3><span class="muted">Presença e acompanhamento da sala</span></button>
   <button class="role" data-act="roleGestor"><span class="ico" style="background:var(--m4)">${ic('chart')}</span><h3>Gestor</h3><span class="muted">Horários, computadores e polos</span></button>
   <button class="role" data-act="rolePais"><span class="ico" style="background:var(--m3)">${ic('eye')}</span><h3>Pais e responsáveis</h3><span class="muted">Presença, progresso e notas, sem atividades</span></button>
  </div>
  ${V.pickFor?`<div class="card" style="margin-top:18px"><h3>${V.pickFor==='aluno'?'Qual aluno de demonstração?':'Qual filho(a)?'}</h3><div class="picker" style="margin-top:12px">${kids.map(s=>`<button class="pick" data-act="pick" data-id="${s.id}"><b>${esc(s.name)}</b><br><span class="muted">${s.age} anos</span></button>`).join('')}</div></div>`:''}
  <p style="margin-top:20px" class="row"><button class="btn ghost sm" data-act="reset">${ic('undo')} Reiniciar dados de demonstração</button><button class="btn ghost sm" data-act="restore">${ic('save')} Trazer progresso de um aluno</button><button class="btn ghost sm" data-act="tutora">${ic('tutor')} Área da tutora</button></p>
  </main>${foot}`;
}

/* ---------- ALUNO: início / trilha ---------- */
function vHome(){
  const s=me(),st=stageOf(s),m=MODS[Math.min(st,6)];
  const meta=metaFor(s),lt=lastTyp(s);
  const nextIdx=(()=>{const c=curMod(s);for(let l=1;l<=MODS[c-1].aulas.length;l++)if(!lessonDone(s,c,l))return [c,l];return [c,0]})();
  const colN=colOn()?colNext(s):null;
  const contBtn=colOn()?(colN?`<button class="btn" data-act="openLes" data-m="${colN[0]}" data-l="${colN[1]}">Continuar a missão: ${esc(MODS[colN[0]-1].aulas[colN[1]-1])} ${ic('arrow')}</button>`:''):
    nextIdx[1]===0?(modPassed(s,nextIdx[0])?'':`<button class="btn" data-act="test" data-m="${nextIdx[0]}">Fazer o teste do módulo ${nextIdx[0]} ${ic('arrow')}</button>`):
    `<button class="btn" data-act="openLes" data-m="${nextIdx[0]}" data-l="${nextIdx[1]}">Continuar: aula ${nextIdx[1]}, ${MODS[nextIdx[0]-1].name} ${ic('arrow')}</button>`;
  const bg=['#fff1c9','#d8f3ee','#e4dcff','#ffe3d6','#dff3e6','#ffe0ee','#fff0b8'][st];
  const nodes=MODS.map(mm=>{
    const un=modUnlocked(s,mm.n),d=modLessonsDone(s,mm.n),tot=mm.aulas.length,pass=modPassed(s,mm.n);
    const state=pass?'done':un?'open':'locked';
    const inner=`<h3>${mm.name}</h3><div class="muted" style="font-weight:700">${tot} aulas · ${mm.n<=4?'1º':'2º'} semestre</div>
      <div class="meta">${pass?`<span class="pill ok">${ic('check')} Concluído${s.tests[mm.n].release?' pelo tutor':' · nota '+s.tests[mm.n].score}</span>`:un?`<span class="pill">${d} de ${tot} aulas</span>${d===tot?`<span class="pill warn">Teste liberado</span>`:''}`:`<span class="pill">${ic('lock')} Termine o teste do módulo ${mm.n-1}</span>`}</div>
      ${un?`<div class="bar"><i style="width:${d/tot*100}%"></i></div>`:''}`;
    return `<div class="node ${state}" style="--c:${MCOL(mm.n)}"><div class="spine"><div class="dot">${un?mm.n:ic('lock')}</div><div class="line"></div></div>
      ${un?`<button class="mcard" data-act="openMod" data-m="${mm.n}">${inner}</button>`:`<div class="mcard">${inner}</div>`}</div>`;
  }).join('');
  const sem1=[1,2,3,4].every(x=>modPassed(s,x)),sem2=[5,6,7].every(x=>modPassed(s,x));
  return `${topbar()}<main class="wrap"><div class="home">
   <aside class="card hero-card">
     <div class="chip sun">Nível ${st+1}: ${m.stage}</div>
     <div class="stagebg" style="background:${bg}"><div class="fig">${ch(s)}</div></div>
     <div class="stagebar" aria-label="Evolução do personagem">${MODS.map((_,i)=>`<i class="${i<st?'on':''}"></i>`).join('')}</div>
     <p class="muted" style="font-size:.9rem">${st<7?`Passe no teste do módulo ${st+1} para evoluir`:'Você chegou ao topo!'}</p>
     <div class="stats">
      <div class="stat"><b>${starsTotal(s)}</b><span>estrelas</span></div>
      <div class="stat"><b>${lessonsCount(s)}/40</b><span>aulas</span></div>
      <div class="stat"><b>${bestWpm(s)}</b><span>melhor: palavras/min</span></div>
      <div class="stat"><b>${lt?lt.acc+'%':'-'}</b><span>precisão recente</span></div>
     </div>
     <div class="bag"><b>Mochila de adesivos</b> <span class="muted">${(s.stk||[]).length} de 15</span><div class="stkrow">${(s.stk||[]).length?(s.stk||[]).map(x=>stkSvg(x)).join(''):'<span class="muted" style="font-size:.85rem">Seus adesivos aparecem aqui.</span>'}</div></div>
     <p style="margin-top:14px"><button class="btn good" style="width:100%" data-act="warm">${ic('key')} Aquecer na digitação</button></p>
     <p class="muted" style="font-size:.85rem;margin-top:8px">Meta do módulo ${curMod(s)}: ${meta.wpm} palavras/min com ${meta.acc}% de precisão</p>
     <p style="margin-top:10px"><button class="btn ghost sm" data-act="swapch">Trocar de personagem</button></p>
   </aside>
   <section class="stack">
    <div class="card"><div class="row"><div class="grow"><h2>Olá, ${esc(s.name.split(' ')[0])}!</h2><p class="muted">${(today()[s.id]||{}).ok?'Sua presença de hoje foi confirmada pela tutora.':window.__ALUNO__?'Sua presença de hoje ficou registrada neste computador.':'Sua presença foi enviada. Aguarde a tutora confirmar.'}</p></div>
      ${contBtn}</div></div>
    ${colOn()?vColTrail(s):''}
    ${!colOn()&&(sem1||sem2)?`<div class="card" style="border-color:var(--sun)"><div class="row"><div class="grow"><h3>Certificado disponível</h3><p class="muted">Você concluiu os módulos do ${sem2?'2º':'1º'} semestre.</p></div><button class="btn" data-act="cert" data-sem="${sem2?2:1}">${ic('cert')} Ver certificado</button></div></div>`:''}
    ${colOn()?'':`<div class="trail">${nodes}</div>`}
    <div class="row" style="justify-content:flex-end"><button class="btn ghost sm" data-act="mybackup">${ic('save')} Guardar meu progresso</button><button class="btn ghost sm" data-act="tutora">${ic('tutor')} Área da tutora</button></div>
   </section></div></main>${foot}`;
}

function vModule(){
  const s=me(),mm=MODS[V.mod-1],tot=mm.aulas.length,all=modComplete(s,mm.n);
  const les=mm.aulas.map((t,i)=>{const l=i+1,done=lessonDone(s,mm.n,l),un=lessonUnlocked(s,mm.n,l),real=!!LES[mm.n+'.'+l];
    const inner=`<span class="n">${un?l:ic('lock')}</span><span class="grow"><b>${t}</b><br><span class="muted" style="font-size:.88rem">${real?'Aula pronta':'Conteúdo em produção'}</span></span>${done?stars(s.prog[mm.n+'.'+l]):''}`;
    return un?`<button class="les" data-act="openLes" data-m="${mm.n}" data-l="${l}">${inner}</button>`:`<div class="les locked">${inner}</div>`}).join('');
  const t=s.tests[mm.n];
  return `${topbar()}<main class="wrap" style="--c:${MCOL(mm.n)}">
   <div class="crumb"><button data-act="home">${ic('back')} Trilha</button> / Módulo ${mm.n}</div>
   <div class="card"><h1>${mm.name}</h1><p class="muted">${modLessonsDone(s,mm.n)} de ${tot} aulas feitas</p>
    <div class="lessons">${les}</div></div>
   <div class="card" style="margin-top:16px"><div class="row"><div class="grow"><h2>Teste do módulo</h2>
     <p class="muted">Duas partes: 10 perguntas (mínimo ${MIN} pontos) e um teste de digitação com meta de ${metaFor(s,mm.n).wpm} palavras/min e ${metaFor(s,mm.n).acc}% de precisão. Pode repetir cada parte quantas vezes quiser.</p>
     ${t?`<p style="margin-top:6px"><span class="pill ${quizOk(s,mm.n)?'ok':'bad'}">Perguntas: ${t.score||0} pts</span> <span class="pill ${t.typOk?'ok':'bad'}">Digitação ${t.typOk?'na meta':'abaixo da meta'}</span> ${t.release?'<span class="pill warn">Liberado pelo tutor</span>':''}</p>`:''}</div>
     <button class="btn ${all||V.demo?'':'ghost'}" data-act="test" ${all||V.demo?'':'disabled'}>${all||V.demo?'Ir para o teste':'Termine as aulas primeiro'}</button></div></div>
  </main>${foot}`;
}

/* ---------- AULA ---------- */
function steps(m,l){return LES[m+'.'+l]||[{t:'info',title:'Aula em produção',x:{y:'Esta aula ainda está sendo preparada. Na versão de demonstração você pode marcar como concluída para ver a trilha avançar.',o:'Esta aula ainda está em produção. Na demonstração você pode concluí-la para ver a trilha avançar.'},stub:1}]}
function vLesson(){
  const s=me(),st=steps(V.mod,V.les),stp=st[V.step],mm=MODS[V.mod-1];
  const prog=st.map((_,i)=>`<i class="${i<V.step?'on':i===V.step?'now':''}"></i>`).join('');
  const head=`${topbar()}<main class="wrap"><div class="player" style="--c:${MCOL(V.mod)}">
   <div class="crumb">${V.les===0?`<button data-act="home">${ic('back')} Trilha</button> / Aquecimento de digitação`:`${colOn()&&colHas(V.mod+'.'+V.les)?`<button data-act="home">${ic('back')} Colônia Digital</button>`:`<button data-act="openMod" data-m="${V.mod}">${ic('back')} ${mm.name}</button>`} / Aula ${V.mod}.${V.les}: ${mm.aulas[V.les-1]}`}</div><div class="prog">${prog}</div><div class="card step" id="stepbox">`;
  const tail=`</div></div></main>`;
  let body='';
  const talk=(inner)=>`<div class="talk"><div class="fig">${ch(s)}</div><div class="bubble">${inner}${canSay()?`<button class="btn ghost sm say" data-act="say" aria-label="Ouvir o texto">${ic('sound')} Ouvir</button>`:''}</div></div>`;
  if(stp.bonus&&V.st.errs0===undefined)V.st.errs0=V.errs;
  const bon=stp.bonus?`<div class="bonusbar"><span class="pill warn">${ic('star',1)} Desafio bônus</span><span class="muted grow">É opcional. Vale 1 estrela extra e erros aqui não tiram estrela.</span><button class="btn ghost sm" data-act="skipbonus">Pular desafio</button></div>`:'';
  if(stp.t==='info'){
    body=talk(`<h2>${stp.title}</h2><p>${tx(stp.x)}</p>`)+`<p style="margin-top:18px;text-align:right"><button class="btn" data-act="next">${stp.stub?'Marcar como concluída (demo)':'Entendi!'} ${ic('arrow')}</button></p>`;
  }else if(stp.t==='anim'){
    body=talk(`<h2>${stp.title}</h2><p>${tx(stp.x)}</p>`)+`<div class="scene">${animSvg(stp.kind)}</div><p style="margin-top:18px;text-align:right"><button class="btn" data-act="next">Entendi! ${ic('arrow')}</button></p>`;
  }else if(stp.t==='quiz'){
    const ord=V.st.qo||(V.st.qo=shuffle(stp.opts.map((_,i)=>i))); /* opções embaralhadas: a certa não fica sempre em 1º */
    body=talk(`<h2>${stp.q}</h2>`)+`<div class="opts">${ord.map(i=>`<button class="opt" data-act="ans" data-i="${i}">${stp.opts[i]}</button>`).join('')}</div><div class="feed" id="feed" role="status"></div>`;
  }else if(stp.t==='hot'){
    body=talk(`<h2>${stp.q}</h2>`)+`<div class="scene"><svg viewBox="0 0 420 260" role="img" aria-label="Computador com monitor, teclado, mouse e gabinete">
      <g data-part="gabinete"><rect x="320" y="90" width="70" height="140" rx="8" fill="#6c78b8"/><rect x="332" y="104" width="46" height="8" rx="4" fill="#3a4580"/><circle cx="355" cy="205" r="8" fill="#ffc43d"/></g>
      <g data-part="monitor"><rect x="50" y="20" width="240" height="150" rx="12" fill="#2b3566"/><rect x="62" y="32" width="216" height="126" rx="6" fill="#9fd6ff"/><rect x="150" y="170" width="40" height="22" fill="#4a5594"/><rect x="120" y="190" width="100" height="10" rx="5" fill="#4a5594"/></g>
      <g data-part="teclado"><rect x="50" y="208" width="200" height="36" rx="8" fill="#e9ecfb" stroke="#8a93c8" stroke-width="3"/><path d="M62 220h176M62 232h176" stroke="#b6bde6" stroke-width="6" stroke-dasharray="12 5"/></g>
      <g data-part="mouse"><ellipse cx="285" cy="228" rx="16" ry="21" fill="#ff7a45"/><path d="M285 207v16" stroke="#fff" stroke-width="3"/></g></svg></div><div class="feed" id="feed" role="status"></div>`;
  }else if(stp.t==='targets'){
    body=talk(`<h2>${stp.q}</h2>`)+`<div class="arena" id="arena"></div><div class="feed" id="feed" role="status">Acertos: 0 de ${stp.n}</div>`;
  }else if(stp.t==='order'){
    body=talk(`<h2>${stp.q}</h2>`)+`<div class="ordlist" id="ordlist"></div><div class="ordbox" id="ordbox">${shuffle(stp.items.map((x,i)=>[x,i])).map(([x,i])=>`<button class="opt" data-act="ord" data-i="${i}">${x}</button>`).join('')}</div><div class="feed" id="feed" role="status"></div>`;
  }else if(stp.t==='type'){
    body=talk(`<h2>${stp.title||'Digite o texto'}</h2><p>Clique na caixa e digite. Acertar a tecla faz o cursor andar.</p>`)+typeBox(tx(stp.text),true);
  }else if(stp.t==='word'){
    body=talk(`<h2>${stp.title}</h2><p>Siga as missões. Os botões ficam acima da folha.</p>`)+wordSim(stp.sim);
  }else if(stp.t==='xl'){
    body=talk(`<h2>${stp.title}</h2><p>Clique numa célula, digite na barra e aperte Enter.</p>`)+xlSim(stp.sim);
  }else if(stp.t==='ppt'){
    body=talk(`<h2>${stp.title}</h2><p>Siga as missões usando os botões acima do slide.</p>`)+pptSim(stp.sim);
  }else if(stp.t==='form'){
    const pr=me().proj||{};
    body=talk(`<h2>${stp.title}</h2><p>${tx(stp.x)}</p>`)+`<div class="stack" style="margin-top:14px">${stp.fields.map(([k,l])=>`<label style="font-weight:800" for="f_${k}">${l}<input id="f_${k}" class="sel" value="${esc(pr[k]||'')}" autocomplete="off"></label>`).join('')}</div><div class="feed" id="feed" role="status"></div><p style="margin-top:14px;text-align:right"><button class="btn" data-act="formok">Salvar e continuar ${ic('arrow')}</button></p>`;
  }else if(stp.t==='check'){
    body=talk(`<h2>${stp.q}</h2>`)+`<div class="stack" style="margin-top:14px">${stp.items.map((x,i)=>`<label class="task" style="cursor:pointer"><input type="checkbox" data-ck="1" id="ck${i}"> ${x}</label>`).join('')}</div><p style="margin-top:14px;text-align:right"><button class="btn" id="ckbtn" data-act="next" disabled>Continuar ${ic('arrow')}</button></p>`;
  }
  return head+bon+body+tail+(V.leave?leaveModal():'');
}
function animSvg(k){
 if(k==='click')return `<svg viewBox="0 0 420 240" role="img" aria-label="Animação: o cursor vai até o ícone e clica duas vezes para abrir"><rect x="10" y="10" width="400" height="220" rx="14" fill="#9fd6ff"/><g><rect x="60" y="70" width="64" height="64" rx="14" fill="#ffc43d"/><rect x="74" y="86" width="36" height="8" rx="4" fill="#fff"/><rect x="74" y="102" width="26" height="8" rx="4" fill="#fff"/><text x="92" y="156" text-anchor="middle" font-size="14" font-weight="800" fill="#1c2452">Meu texto</text></g>
  <g class="a-ring"><circle cx="92" cy="102" r="12" fill="none" stroke="#3a4fd8" stroke-width="4"/></g><g class="a-win"><rect x="170" y="40" width="210" height="150" rx="12" fill="#fff"/><rect x="170" y="40" width="210" height="26" rx="12" fill="#3a4fd8"/><text x="275" y="125" text-anchor="middle" font-size="16" font-weight="800" fill="#1c2452">Abriu!</text></g>
  <g class="a-cur"><path d="M0 0L0 26L7 20L12 32L17 30L12 18L21 18Z" fill="#1c2452" stroke="#fff" stroke-width="2"/></g><text x="210" y="222" text-anchor="middle" font-size="14" font-weight="800" fill="#1c2452">1 clique escolhe · 2 cliques abrem</text></svg>`;
 if(k==='hands'){const L='asdf jkl',F=['mindinho','anelar','médio','indicador','','indicador','médio','anelar'];
  return `<svg viewBox="0 0 420 220" role="img" aria-label="Animação: as teclas A S D F J K L se acendem em sequência"><rect x="10" y="30" width="400" height="140" rx="18" fill="#e9ecfb"/>${[...L].map((ch,i)=>ch===' '?'':`<g class="a-key" style="animation-delay:${i*.45}s"><rect x="${24+i*48}" y="70" width="42" height="46" rx="9" fill="#fff" stroke="#8a93c8" stroke-width="3"/><text x="${45+i*48}" y="100" text-anchor="middle" font-size="22" font-weight="800" fill="#1c2452">${ch.toUpperCase()}</text><text x="${45+i*48}" y="140" text-anchor="middle" font-size="9" font-weight="700" fill="#5d668f">${F[i]}</text></g>`).join('')}<text x="210" y="205" text-anchor="middle" font-size="14" font-weight="800" fill="#1c2452">Os dedos descansam aqui e voltam sempre</text></svg>`}
 const L=atalhoLetra();
 if(!L)return `<svg viewBox="0 0 420 220" role="img" aria-label="Animação: clicar no botão do disquete salva o documento"><rect x="10" y="10" width="400" height="200" rx="14" fill="#eef1ff"/><g class="a-key"><rect x="150" y="40" width="76" height="76" rx="12" fill="#fff" stroke="#8a93c8" stroke-width="3"/><rect x="166" y="54" width="44" height="50" rx="5" fill="#3a4fd8"/><rect x="176" y="54" width="24" height="16" fill="#fff"/><rect x="174" y="82" width="28" height="18" rx="2" fill="#9fd6ff"/></g><g class="a-ok"><circle cx="290" cy="78" r="26" fill="#17935a"/><path d="M278 78l9 9 17-18" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="210" y="160" text-anchor="middle" font-size="16" font-weight="800" fill="#1c2452">Clique no disquete. Salvo!</text></svg>`;
 return `<svg viewBox="0 0 420 220" role="img" aria-label="Animação: apertar Ctrl e ${L} salva o documento"><rect x="10" y="10" width="400" height="200" rx="14" fill="#eef1ff"/><g class="a-key"><rect x="70" y="50" width="100" height="56" rx="12" fill="#fff" stroke="#8a93c8" stroke-width="3"/><text x="120" y="86" text-anchor="middle" font-size="22" font-weight="800" fill="#1c2452">Ctrl</text></g><text x="198" y="88" font-size="28" font-weight="800" fill="#1c2452">+</text><g class="a-key"><rect x="230" y="50" width="56" height="56" rx="12" fill="#fff" stroke="#8a93c8" stroke-width="3"/><text x="258" y="88" text-anchor="middle" font-size="26" font-weight="800" fill="#1c2452">${L}</text></g><g class="a-ok"><circle cx="350" cy="78" r="26" fill="#17935a"/><path d="M338 78l9 9 17-18" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="210" y="160" text-anchor="middle" font-size="16" font-weight="800" fill="#1c2452">Salvo! O trabalho fica guardado.</text></svg>`}
function leaveModal(){return `<div class="modal" role="dialog" aria-modal="true" aria-labelledby="lt"><div class="card" style="max-width:440px;width:100%"><h2 id="lt">Sair da aula agora?</h2><p class="muted" style="margin:8px 0">Se você sair, esta aula começa de novo quando você voltar. As estrelas já ganhas ficam guardadas.</p><div class="row" style="margin-top:14px;justify-content:flex-end"><button class="btn" data-act="leaveno">Continuar na aula</button><button class="btn ghost" data-act="leaveyes">Sair</button></div></div></div>`}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
const KB=['qwertyuiop','asdfghjklç','zxcvbnm'];
function typeBox(text,showKb){
  return `<div class="typebox" id="tbox" tabindex="0" data-text="${esc(text)}" role="textbox" aria-label="Área de digitação"></div>
   <input id="tin" autocomplete="off" autocapitalize="off" spellcheck="false" style="position:absolute;opacity:0;left:-999px" aria-label="Campo de digitação">
   <div class="live"><span class="pill" id="lw">0 palavras/min</span><span class="pill" id="la">100% precisão</span><span class="pill warn" id="lm"></span></div>
   ${showKb?`<div class="kb" id="kb" aria-hidden="true">${KB.map(r=>`<div>${[...r].map(c=>`<span data-k="${c}">${c}</span>`).join('')}</div>`).join('')}<div><span class="mod" data-k="shift">Shift</span><span class="sp" data-k=" ">espaço</span><span class="mod" data-k="acento">´ ~ ^</span></div></div>`:''}
   <div class="feed" id="feed" role="status"></div>`;
}

/* ---------- lógica da digitação ---------- */
let TY=null;
function tasksHtml(tasks){return `<div class="tasks" id="tasks">${tasks.map((t,i)=>`<div class="task" id="task${i}"><span>${ic('check')}</span><div>${t.tx}<div class="hint" id="hint${i}"></div></div><button class="btn ghost sm" data-act="hint" data-i="${i}" style="margin-left:auto">Dica</button></div>`).join('')}</div><div class="feed" id="feed" role="status"></div>`}
function runTasks(arg){let all=true;WS.okd=WS.okd||{};WS.sim.tasks.forEach((t,i)=>{let ok=!!WS.okd[i];if(!ok){try{ok=!!t.ok(arg)}catch(e){}if(ok)WS.okd[i]=1}const el=document.getElementById('task'+i);if(el)el.classList.toggle('done',ok);if(!ok)all=false});
  if(all&&!WS.done){WS.done=true;V.errs+=WS.hints>2?2:WS.hints>0?1:0;const f=document.getElementById('feed');f.className='feed ok';f.textContent='Missão cumprida!';addNext(f)}}
/* ---------- simulador de Excel ---------- */
const XC=['A','B','C','D','E','F'],XR=8;let XS=null;
function xlSim(key){const cfg=SIMX[key];
  return `<div class="word"><div class="wtitle" style="background:#1d6f42">${ic('chart')} Pasta1 - Excel (simulador)</div>
   <div class="ribbon" id="xrib"><button data-xb="bold" aria-label="Negrito"><b>N</b></button>${['#ffd966','#a9e5b8','#9fd6ff','#ffb3c1'].map(c=>`<button data-xf="${c}" aria-label="Cor de fundo" style="background:${c};min-width:30px"></button>`).join('')}${cfg.chart?'<button data-xchart="1">Gráfico</button>':''}</div>
   <div class="xbar"><span class="xref" id="xref">A1</span><span class="fx">fx</span><input id="xin" aria-label="Barra de fórmulas" autocomplete="off"></div>
   <div class="xwrap"><table class="xl" id="xl"></table></div><div id="xchart"></div></div>`+tasksHtml(cfg.tasks)}
function xlRaw(r){return (XS.cells[r]||{}).raw||''}
function xlNum(r){const v=xlRaw(r);return v===''?NaN:Number(String(v).replace(',','.'))}
function xlRange(a,b){const [c1,r1]=[a[0],+a.slice(1)],[c2,r2]=[b[0],+b.slice(1)],o=[];for(let c=XC.indexOf(c1);c<=XC.indexOf(c2);c++)for(let r=r1;r<=r2;r++)o.push(XC[c]+r);return o}
function xlVal(r,d=0){const raw=xlRaw(r);if(raw==='')return '';if(raw[0]!=='='){const n=Number(String(raw).replace(',','.'));return isNaN(n)?raw:n}
  if(d>8)return '#ERRO';
  try{let e=raw.slice(1).toUpperCase().replace(/M[ÉE]DIA/g,'F.M').replace(/SOMA/g,'F.S').replace(/M[ÁA]XIMO/g,'F.X').replace(/M[ÍI]NIMO/g,'F.N')
     .replace(/(\d),(\d)/g,'$1.$2').replace(/;/g,','); /* vírgula decimal e ; como separador (Excel em português) */
   const nv=x=>{const v=xlVal(x,d+1);return typeof v==='number'?v:0};
   e=e.replace(/([A-F]\d):([A-F]\d)/g,(m,a,b)=>'['+xlRange(a,b).map(nv).join(',')+']').replace(/\b([A-F]\d)\b/g,(m,x)=>'('+nv(x)+')');
   if(!/^[0-9+\-*/().,\[\]\sFSMXN]*$/.test(e))return '#ERRO';
   const fl=a=>a.flat(),F={S:(...a)=>fl(a).reduce((x,y)=>x+y,0),M:(...a)=>fl(a).reduce((x,y)=>x+y,0)/fl(a).length,X:(...a)=>Math.max(...fl(a)),N:(...a)=>Math.min(...fl(a))};
   const v=new Function('F','return '+e)(F);return isFinite(v)?Math.round(v*100)/100:'#ERRO'}catch(err){return '#ERRO'}}
function startXl(key){const cfg=SIMX[key];WS={sim:cfg,hints:0,done:false};
  XS={cells:{},sel:'A1',hit:new Set(['A1']),charted:false,cfg};
  for(const [k,v] of Object.entries(cfg.cells))XS.cells[k]={raw:v};
  const X={hit:r=>XS.hit.has(r),raw:r=>xlRaw(r),val:r=>xlVal(r),num:r=>xlNum(r),isF:r=>/^=/.test(xlRaw(r))&&typeof xlVal(r)==='number',bold:r=>!!(XS.cells[r]||{}).bold,fill:r=>(XS.cells[r]||{}).fill,charted:()=>XS.charted};
  const tbl=document.getElementById('xl'),inp=document.getElementById('xin'),ref=document.getElementById('xref');
  const fmt=v=>typeof v==='number'?String(v).replace('.',','):String(v);
  const paint=()=>{let h='<tr><th></th>'+XC.map(c=>`<th>${c}</th>`).join('')+'</tr>';
    for(let r=1;r<=XR;r++){h+=`<tr><th>${r}</th>`+XC.map(c=>{const k=c+r,cl=XS.cells[k]||{},v=xlVal(k);return `<td data-ref="${k}" class="${XS.sel===k?'sel':''}" style="${cl.bold?'font-weight:800;':''}${cl.fill?'background:'+cl.fill+';':''}${typeof v==='number'?'text-align:right':''}">${esc(fmt(v))}</td>`}).join('')+'</tr>'}
    tbl.innerHTML=h;ref.textContent=XS.sel;
    const box=document.getElementById('xchart');
    if(XS.charted){const rows=[];for(let r=2;r<=XR;r++){const n=xlNum('B'+r);if(!isNaN(n)&&xlRaw('A'+r)&&/^\d+(,\d+)?$|^[0-9.]+$/.test(String(xlRaw('B'+r)).replace(/\s/g,'')))rows.push([xlRaw('A'+r),n])}
      const mx=Math.max(...rows.map(x=>x[1]),1);
      box.innerHTML=`<div class="xchartbox"><b>Gráfico</b><svg viewBox="0 0 ${rows.length*90+20} 170" width="100%" style="max-width:${rows.length*90+20}px" role="img" aria-label="Gráfico de barras">${rows.map((x,i)=>`<rect x="${20+i*90}" y="${140-x[1]/mx*110}" width="60" height="${x[1]/mx*110}" rx="6" fill="${MHEX[i%7]}"/><text x="${50+i*90}" y="${132-x[1]/mx*110}" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">${x[1]}</text><text x="${50+i*90}" y="160" text-anchor="middle" font-size="12" fill="currentColor">${esc(x[0])}</text>`).join('')}</svg></div>`}
    else box.innerHTML='';
    runTasks(X)};
  const commit=()=>{const c=XS.cells[XS.sel]||(XS.cells[XS.sel]={});if(c.raw!==inp.value){c.raw=inp.value}};
  const select=r=>{commit();XS.sel=r;XS.hit.add(r);inp.value=xlRaw(r);paint();inp.focus();inp.select()};
  /* correção do clique perdido: a célula é escolhida no mousedown (antes do blur redesenhar a tabela) */
  tbl.addEventListener('mousedown',e=>{const td=e.target.closest('td');if(!td)return;e.preventDefault();select(td.dataset.ref)});
  tbl.addEventListener('click',e=>{const td=e.target.closest('td');if(td&&td.dataset.ref!==XS.sel)select(td.dataset.ref)});
  const move=(dc,dr)=>{commit();const ci=XC.indexOf(XS.sel[0]),r=+XS.sel.slice(1);XS.sel=XC[Math.max(0,Math.min(XC.length-1,ci+dc))]+Math.max(1,Math.min(XR,r+dr));XS.hit.add(XS.sel);inp.value=xlRaw(XS.sel);paint();inp.focus();inp.select()};
  inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();move(0,1)}else if(e.key==='Tab'){e.preventDefault();move(e.shiftKey?-1:1,0)}else if(e.key==='Escape'){inp.value=xlRaw(XS.sel)}});
  inp.addEventListener('input',()=>{const td=tbl.querySelector('td[data-ref="'+XS.sel+'"]');if(td)td.textContent=inp.value});
  inp.addEventListener('blur',()=>{if(xlRaw(XS.sel)!==inp.value){commit();paint()}});
  document.getElementById('xrib').addEventListener('mousedown',e=>e.preventDefault());
  document.getElementById('xrib').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;commit();const c=XS.cells[XS.sel]||(XS.cells[XS.sel]={raw:''});
    if(b.dataset.xb)c.bold=!c.bold;if(b.dataset.xf)c.fill=b.dataset.xf;if(b.dataset.xchart)XS.charted=true;paint()});
  inp.value=xlRaw('A1');paint();
}
/* ---------- simulador de PowerPoint ---------- */
const PTH=[{bg:'#ffffff',fg:'#1c2452'},{bg:'#3a4fd8',fg:'#ffffff'},{bg:'#ffc43d',fg:'#1c2452'},{bg:'#17935a',fg:'#ffffff'}];let PS=null;
function pptSim(key){const cfg=SIMP[key];
  return `<div class="word" id="ppt"><div class="wtitle" style="background:#c43e1c">${ic('tutor')} Apresentação1 - PowerPoint (simulador)</div>
   <div class="ribbon" id="prib"><button data-pb="new">+ Novo slide</button>${PTH.map((t,i)=>`<button data-pth="${i}" aria-label="Tema ${i+1}" style="background:${t.bg};min-width:30px;border-color:#8a93c8"></button>`).join('')}<button data-pb="img">Imagem</button>
    <label style="display:inline-flex;gap:6px;align-items:center;font-weight:800">Transição <select id="ptr" class="sel" style="width:auto;margin:0;padding:6px"><option value="nenhuma">Nenhuma</option><option value="esmaecer">Esmaecer</option><option value="deslizar">Deslizar</option></select></label><button data-pb="play" style="background:#c43e1c;color:#fff;border-color:#c43e1c">Apresentar</button></div>
   <div class="pwrap"><div class="pthumbs" id="pthumbs"></div><div class="pmain" id="pmain"></div></div></div>`+tasksHtml(cfg.tasks)}
function startPpt(key){const cfg=SIMP[key];WS={sim:cfg,hints:0,done:false};
  PS={slides:[{t:'',b:'',th:0,img:false,tr:'nenhuma'}],cur:0,started:false,reachedEnd:false,present:false,pi:0};
  const root=document.getElementById('ppt');
  const slideHtml=(s,big)=>{const th=PTH[s.th];return `<div class="pslide ${big?'big':''}" style="background:${th.bg};color:${th.fg}">${big?'':''}<div class="pt">${esc(s.t)||'<span style="opacity:.5">Título</span>'}</div><div class="pb">${esc(s.b).replace(/\n/g,'<br>')}</div>${s.img?'<svg class="pimg" viewBox="0 0 120 80" role="img" aria-label="Figura"><rect width="120" height="80" rx="8" fill="#9fd6ff"/><circle cx="90" cy="24" r="12" fill="#ffc43d"/><path d="M0 80V56c20-18 40-18 60 0s40 14 60-4v28z" fill="#17935a"/></svg>':''}</div>`};
  const paint=(keepFocus)=>{const s=PS.slides[PS.cur];
    document.getElementById('pthumbs').innerHTML=PS.slides.map((x,i)=>`<button class="pth ${i===PS.cur?'on':''}" data-pi="${i}" aria-label="Slide ${i+1}"><span>${i+1}</span>${slideHtml(x)}</button>`).join('');
    if(PS.present){const s2=PS.slides[PS.pi];document.getElementById('pmain').innerHTML=`<div class="pplay"><div class="${s2.tr==='esmaecer'?'fadein':s2.tr==='deslizar'?'slidein':''}" id="pplay" style="width:100%">${slideHtml(s2,1)}</div><div class="row" style="justify-content:center;margin-top:10px"><span class="pill">${PS.pi+1} de ${PS.slides.length}</span><button class="btn sm" data-pb="next">${PS.pi<PS.slides.length-1?'Próximo':'Terminar'}</button><button class="btn ghost sm" data-pb="exit">Sair</button></div></div>`;
    }else if(!keepFocus){
      document.getElementById('pmain').innerHTML=`<div class="pslide big edit" style="background:${PTH[s.th].bg};color:${PTH[s.th].fg}"><input id="pt" class="pin pt" placeholder="Clique para adicionar título" value="${esc(s.t)}" aria-label="Título do slide"><textarea id="pb" class="pin pb" placeholder="Clique para adicionar texto" aria-label="Texto do slide">${esc(s.b)}</textarea>${s.img?'<svg class="pimg" viewBox="0 0 120 80" role="img" aria-label="Figura"><rect width="120" height="80" rx="8" fill="#9fd6ff"/><circle cx="90" cy="24" r="12" fill="#ffc43d"/><path d="M0 80V56c20-18 40-18 60 0s40 14 60-4v28z" fill="#17935a"/></svg>':''}</div>`;
      document.getElementById('ptr').value=s.tr}
    runTasks(PS)};
  root.addEventListener('input',e=>{const s=PS.slides[PS.cur];if(e.target.id==='pt')s.t=e.target.value;if(e.target.id==='pb')s.b=e.target.value;paint(true)});
  root.addEventListener('change',e=>{if(e.target.id==='ptr'){PS.slides[PS.cur].tr=e.target.value;paint(true)}});
  root.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const s=PS.slides[PS.cur];
    if(b.dataset.pi){PS.cur=+b.dataset.pi;paint();return}
    if(b.dataset.pth!==undefined){s.th=+b.dataset.pth;paint();return}
    const k=b.dataset.pb;
    if(k==='new'){PS.slides.push({t:'',b:'',th:s.th,img:false,tr:'nenhuma'});PS.cur=PS.slides.length-1;paint()}
    if(k==='img'){s.img=true;paint()}
    if(k==='play'){PS.present=true;PS.started=true;PS.pi=0;if(PS.slides.length===1)PS.reachedEnd=true;paint()}
    if(k==='next'){if(PS.pi<PS.slides.length-1){PS.pi++;if(PS.pi===PS.slides.length-1)PS.reachedEnd=true}else{PS.reachedEnd=true;PS.present=false}paint()}
    if(k==='exit'){PS.present=false;paint()}});
  paint();
}
function startTyping(onDone){
  const box=document.getElementById('tbox');if(!box)return;
  const inp=document.getElementById('tin');
  TY={text:box.dataset.text,pos:0,ok:0,bad:0,t0:0,done:false,onDone};
  paintType();
  const focus=()=>{inp.focus();box.classList.add('focus')};
  box.addEventListener('click',focus);inp.addEventListener('blur',()=>box.classList.remove('focus'));
  const proc=()=>{
    const v=inp.value;inp.value='';if(!v||!TY||TY.done)return;
    const f=document.getElementById('feed');
    for(const c of v){ if(TY.done)break;
      if(!TY.t0)TY.t0=performance.now();
      const ex=TY.text[TY.pos]||'';
      if(c===ex){TY.pos++;TY.ok++;box.classList.remove('err');if(TY.hint&&f){f.textContent='';TY.hint=0}}
      else{TY.bad++;box.classList.add('err');
        const nf=ex.normalize('NFD');let h='';
        if(ex!==ex.toLowerCase()&&c===ex.toLowerCase())h='Essa letra é maiúscula: segure a tecla Shift e aperte a letra.';
        else if(nf.length>1&&nf[0]===c&&ex!=='ç')h='Essa letra tem acento: aperte primeiro a tecla do acento e depois a letra.';
        else if(c!==c.toLowerCase()&&ex===c.toLowerCase())h='Essa letra é minúscula: solte o Shift (ou desligue o Caps Lock).';
        if(h&&f){f.className='feed no';f.textContent=h;TY.hint=1}}
      if(TY.pos>=TY.text.length){finishType();break}
    }
    paintType();
  };
  inp.addEventListener('input',e=>{if(e.isComposing||!TY||TY.done)return;proc()});
  inp.addEventListener('compositionend',()=>setTimeout(proc,0)); /* teclas "mortas" de acento (ABNT2) */
  setTimeout(focus,50);
}
function paintType(){
  const box=document.getElementById('tbox');if(!box||!TY)return;
  const t=TY.text,p=TY.pos;
  box.innerHTML=`<span class="ok">${esc(t.slice(0,p))}</span><span class="cur">${esc(t[p]===' '?' ':(t[p]||''))}</span><span class="nx">${esc(t.slice(p+1))}</span>`;
  const mins=TY.t0?Math.max((performance.now()-TY.t0)/60000,1/600):0;
  const wpm=mins?Math.round(TY.ok/5/mins):0,tot=TY.ok+TY.bad,acc=tot?Math.round(TY.ok/tot*100):100;
  const lw=document.getElementById('lw'),la=document.getElementById('la');
  if(lw)lw.textContent=wpm+' palavras/min';if(la)la.textContent=acc+'% precisão';
  const c=t[p]||'';let base=c.toLowerCase(),sh=c!==base,ac=false;const nf=base.normalize('NFD');
  if(base!=='ç'&&nf.length>1&&/[\u0300-\u036f]/.test(nf[1])){base=nf[0];ac=true}
  document.querySelectorAll('#kb span').forEach(k=>{const d=k.dataset.k;k.classList.toggle('hl',!TY.done&&c!==''&&(d===base||(d==='shift'&&sh)||(d==='acento'&&ac)))});
}
function finishType(){
  TY.done=true;
  const mins=Math.max((performance.now()-TY.t0)/60000,1/600);
  const wpm=Math.round(TY.ok/5/mins),tot=TY.ok+TY.bad,acc=Math.round(TY.ok/tot*100);
  const s=me(),meta=metaFor(s,V.mod||curMod(s));
  if(V.view==='test'){
    const ok=wpm>=meta.wpm&&acc>=meta.acc,t=s.tests[V.mod]||(s.tests[V.mod]={score:0,tries:0});
    const b=t.typBest;if(!b||wpm>b.wpm)t.typBest={wpm,acc};
    if(ok){t.typOk=true;award(s,'dig'+V.mod);if(modPassed(s,V.mod))award(s,'mod'+V.mod)}
    s.typ.push({wpm,acc,d:dayKey()});save();V.tres={wpm,acc,ok};setTimeout(render,700);return;
  }
  s.typ.push({wpm,acc,d:dayKey()});save();
  const feed=document.getElementById('feed');
  const good=acc>=meta.acc;
  feed.className='feed '+(good?'ok':'no');
  feed.innerHTML=`${good?'Muito bem!':'Quase lá!'} ${wpm} palavras por minuto com ${acc}% de precisão. ${wpm>=meta.wpm?'Você bateu a meta de velocidade!':'A meta é '+meta.wpm+' palavras/min, continue treinando.'}`;
  const fn=TY.onDone;TY.result={wpm,acc,good};
  const bx=document.getElementById('tbox');
  const b=document.createElement('p');b.style.cssText='margin-top:16px;text-align:right';
  b.innerHTML=`<button class="btn" data-act="typedone">${ic('arrow')} Continuar</button>`;
  bx.parentNode.appendChild(b);
  if(!good)V.errs+=1;
  if(good&&wpm>=meta.wpm&&V.les>0){toast('Meta de digitação batida!');award(s,'dig'+V.mod)}
}

/* ---------- simulador de Word ---------- */
function wordSim(key){
  const sim=SIMS[key];
  return `<div class="word"><div class="wtitle">${ic('cap')} Documento1 - Word (simulador)</div>
   <div class="ribbon" id="ribbon">
    <button data-cmd="bold" title="Negrito" aria-label="Negrito"><b>N</b></button>
    <button data-cmd="italic" title="Itálico" aria-label="Itálico"><i>I</i></button>
    <button data-cmd="underline" title="Sublinhado" aria-label="Sublinhado"><u>S</u></button>
    <span class="sep"></span>
    <button data-cmd="justifyLeft" title="Alinhar à esquerda" aria-label="Alinhar à esquerda">&#8676;</button>
    <button data-cmd="justifyCenter" title="Centralizar" aria-label="Centralizar">&#8801;</button>
    <button data-cmd="justifyRight" title="Alinhar à direita" aria-label="Alinhar à direita">&#8677;</button>
    <button data-cmd="insertUnorderedList" title="Lista com marcadores" aria-label="Lista com marcadores">&#8226; Lista</button>
    <button data-img="1" title="Inserir imagem" aria-label="Inserir imagem">Imagem</button>
    <span class="sep"></span>
    ${['#d6435a','#3a4fd8','#17935a','#e8a400'].map(c=>`<button data-color="${c}" aria-label="Cor ${c}" title="Cor do texto" style="background:${c};border-color:${c};min-width:30px"></button>`).join('')}
   </div>
   <div class="sheet"><div class="paper" id="paper" contenteditable="true" spellcheck="false">${sim.html}</div></div></div>
   <div class="tasks" id="tasks">${sim.tasks.map((t,i)=>`<div class="task" id="task${i}"><span>${ic('check')}</span><div>${t.tx}<div class="hint" id="hint${i}"></div></div><button class="btn ghost sm" data-act="hint" data-i="${i}" style="margin-left:auto">Dica</button></div>`).join('')}</div>
   <div class="feed" id="feed" role="status"></div>`;
}
let WS=null;
function selImg(sv){document.querySelectorAll('#paper svg.wsel').forEach(x=>x.classList.remove('wsel'));if(WS)WS.img=sv||null;if(sv)sv.classList.add('wsel')}
function startWord(key){
  const paper=document.getElementById('paper');if(!paper)return;
  const sim=SIMS[key];WS={sim,hints:0,done:false};
  try{document.execCommand('styleWithCSS',false,true)}catch(e){}
  const check=()=>{
    let all=true;
    WS.okd=WS.okd||{};sim.tasks.forEach((t,i)=>{let ok=!!WS.okd[i];if(!ok){try{ok=!!t.ok(paper)}catch(e){}if(ok)WS.okd[i]=1}const el=document.getElementById('task'+i);if(el)el.classList.toggle('done',ok);if(!ok)all=false});
    if(all&&!WS.done){WS.done=true;V.errs+=Math.min(2,WS.hints>2?2:WS.hints>0?1:0);
      const f=document.getElementById('feed');f.className='feed ok';f.innerHTML='Missão cumprida!';
      const p=document.createElement('p');p.style.cssText='margin-top:14px;text-align:right';p.innerHTML=`<button class="btn" data-act="next">${ic('arrow')} Continuar</button>`;f.after(p)}
  };
  WS.check=check;
  const rb=document.getElementById('ribbon');
  rb.addEventListener('mousedown',e=>e.preventDefault());
  rb.addEventListener('click',e=>{
    const b=e.target.closest('button');if(!b)return;
    paper.focus();
    const img=WS.img&&paper.contains(WS.img)?WS.img:null;
    if(b.dataset.img){
      /* a imagem entra numa linha nova DENTRO do parágrafo (como no Word) e fica escolhida: alinhar o parágrafo alinha a imagem */
      document.execCommand('insertHTML',false,'<br><svg viewBox="0 0 120 80" width="120" height="80" role="img" aria-label="Figura de um sol sobre a colina"><rect width="120" height="80" rx="8" fill="#9fd6ff"/><circle cx="90" cy="24" r="12" fill="#ffc43d"/><path d="M0 80V56c20-18 40-18 60 0s40 14 60-4v28z" fill="#17935a"/></svg>');
      /* o navegador às vezes coloca a imagem fora do parágrafo: junta a imagem ao parágrafo de cima */
      paper.querySelectorAll(':scope > svg').forEach(sv=>{let pr=sv.previousSibling;while(pr&&(pr.nodeName==='BR'||(pr.nodeType===3&&!pr.textContent.trim()))){const x=pr.previousSibling;pr.remove();pr=x}
        let blk=pr&&pr.nodeType===1&&/^(P|DIV|LI|UL|OL)$/.test(pr.nodeName)?pr:null;if(blk&&/^(UL|OL)$/.test(blk.nodeName))blk=blk.lastElementChild||blk;
        if(!blk){blk=document.createElement('p');sv.before(blk)}blk.append(document.createElement('br'),sv)});
      const all=paper.querySelectorAll('svg'),last=all[all.length-1];selImg(last);
      if(last){const r=document.createRange();r.setStartAfter(last);r.collapse(true);const sl=getSelection();sl.removeAllRanges();sl.addRange(r)}}
    else if(img&&/^justify/.test(b.dataset.cmd||'')){const bl=img.closest('p,div,li');if(bl&&bl!==paper)bl.style.textAlign={justifyCenter:'center',justifyRight:'right',justifyLeft:'left'}[b.dataset.cmd]||''}
    else if(b.dataset.cmd){document.execCommand(b.dataset.cmd,false,null)}
    else if(b.dataset.color){document.execCommand('foreColor',false,b.dataset.color)}
    check();
  });
  paper.addEventListener('input',check);paper.addEventListener('keyup',check);
  paper.addEventListener('mousedown',e=>{const sv=e.target.closest&&e.target.closest('svg');selImg(sv&&paper.contains(sv)?sv:null)});
  paper.addEventListener('keydown',()=>selImg(null));
  check();
}

/* ---------- jogos ---------- */
function startTargets(n){
  const ar=document.getElementById('arena');if(!ar)return;
  let hit=0;const feed=document.getElementById('feed');
  const spawn=()=>{
    ar.innerHTML='';const b=document.createElement('button');b.className='target';b.setAttribute('aria-label','Bolinha');
    b.style.left=Math.random()*(ar.clientWidth-70)+4+'px';b.style.top=Math.random()*(ar.clientHeight-70)+4+'px';
    b.onclick=()=>{hit++;feed.textContent=`Acertos: ${hit} de ${n}`;if(hit>=n){ar.innerHTML='';feed.className='feed ok';feed.innerHTML='Você tem mão rápida!';addNext(feed)}else spawn()};
    ar.appendChild(b);
  };
  ar.addEventListener('click',e=>{if(e.target===ar){V.errs++;feed.className='feed no';feed.textContent='Quase! Clique dentro da bolinha laranja.';}});
  spawn();
}
function addNext(after){const p=document.createElement('p');p.style.cssText='margin-top:14px;text-align:right';p.innerHTML=`<button class="btn" data-act="next">${ic('arrow')} Continuar</button>`;after.after(p)}

/* ---------- TESTE ---------- */
let TQ=null;
function vTest(){
  const s=me(),mm=MODS[V.mod-1],t=s.tests[V.mod]||{},meta=metaFor(s,V.mod);
  const hdr=`${topbar()}<main class="wrap"><div class="player" style="--c:${MCOL(V.mod)}">`,end=`</div></main>${foot}`;
  const back=`<div class="crumb"><button data-act="${V.tpart?'test':'openMod'}" data-m="${V.mod}">${ic('back')} ${V.tpart?'Teste do módulo':mm.name}</button> / Teste do módulo ${mm.n}</div>`;
  if(!V.tpart){
    const pass=modPassed(s,V.mod);
    return hdr+back+`<div class="card step"><h1>Teste do módulo ${mm.n}: ${mm.name}</h1>
     <p class="muted" style="margin-top:6px">Para passar você precisa das duas partes. Se uma delas já estiver certa, repita só a outra.</p>
     <div class="stack" style="margin-top:16px">
      <div class="card"><div class="row"><div class="grow"><h3>Parte 1: perguntas</h3><p class="muted">10 perguntas sorteadas. Mínimo ${MIN} pontos de 100.</p>
        <p style="margin-top:6px">${t.tries?`<span class="pill ${quizOk(s,V.mod)?'ok':'bad'}">${quizOk(s,V.mod)?ic('check')+' Aprovado':'Ainda não'} · melhor ${t.score} pts</span>`:'<span class="pill">Ainda não feita</span>'}</p></div>
        <button class="btn ${quizOk(s,V.mod)?'ghost':''}" data-act="tpart" data-p="quiz">${quizOk(s,V.mod)?'Refazer':'Começar'}</button></div></div>
      <div class="card"><div class="row"><div class="grow"><h3>Parte 2: digitação</h3><p class="muted">Meta: ${meta.wpm} palavras por minuto com ${meta.acc}% de precisão.</p>
        <p style="margin-top:6px">${t.typOk?`<span class="pill ok">${ic('check')} Meta batida</span>`:t.typBest?`<span class="pill bad">Melhor: ${t.typBest.wpm} ppm · ${t.typBest.acc}%</span>`:'<span class="pill">Ainda não feita</span>'}</p></div>
        <button class="btn ${t.typOk?'ghost':''}" data-act="tpart" data-p="type">${t.typOk?'Refazer':'Começar'}</button></div></div>
     </div>
     ${pass?`<div class="note" style="margin-top:16px;background:var(--good-bg)">${t.release?'Módulo liberado pelo tutor.':'Módulo concluído! O próximo está liberado.'}</div><p style="margin-top:14px"><button class="btn" data-act="home">Voltar à trilha</button></p>`:''}
    </div>`+end;
  }
  if(V.tpart==='type'){
    if(V.tres){const r=V.tres,ok=r.ok;
      return hdr+back+`<div class="card step" style="text-align:center"><div class="score" style="color:${ok?'var(--good)':'var(--bad)'}">${r.wpm}</div><p class="muted">palavras por minuto · ${r.acc}% de precisão</p>
       <h2 style="margin:12px 0">${ok?'Meta batida!':'Quase lá!'}</h2>
       <p class="muted">${ok?'Você alcançou a meta de digitação deste módulo.':`A meta é ${meta.wpm} palavras/min com ${meta.acc}% de precisão. ${r.wpm<meta.wpm?'Faltaram '+(meta.wpm-r.wpm)+' palavras por minuto. ':''}${r.acc<meta.acc?'A precisão ficou abaixo da meta. ':''}Tente de novo.`}</p>
       <div class="row" style="justify-content:center;margin-top:18px"><button class="btn" data-act="${ok?'test':'tpart'}" data-p="type">${ok?'Voltar ao teste':'Tentar de novo'}</button></div></div>`+end}
    return hdr+back+`<div class="card step"><h2>Teste de digitação</h2><p class="muted">Meta: ${meta.wpm} palavras por minuto com ${meta.acc}% de precisão. Clique na caixa e digite.</p>${typeBox(V.ttext||(V.ttext=pickTest(s,V.mod)),true)}</div>`+end;
  }
  // perguntas
  if(!TQ){const bank=BANK[V.mod];TQ={qs:shuffle(bank).slice(0,10).map(([q,o,a_])=>{const idx=shuffle(o.map((x,i)=>i));return {q,opts:idx.map(i=>o[i]),a:idx.indexOf(a_)}}),ans:[],i:0,done:false}}
  const tq=TQ,bar=tq.qs.map((_,i)=>`<i class="${i<tq.i?'on':i===tq.i?'now':''}"></i>`).join('');
  if(tq.done){
    const c=tq.ans.filter((x,i)=>x===tq.qs[i].a).length,score=c*10,pass=score>=MIN;
    return hdr+back+`<div class="card step" style="text-align:center">
     <div class="score" style="color:${pass?'var(--good)':'var(--bad)'}">${score}</div><p class="muted">pontos de 100 · mínimo ${MIN}</p>
     <h2 style="margin:12px 0">${pass?'Você passou nas perguntas!':'Ainda não foi desta vez. Tente de novo!'}</h2>
     <p class="muted">${c} de 10 respostas certas. ${pass?(typOk(s,V.mod)?'Módulo concluído!':'Falta só a parte de digitação.'):'As perguntas mudam a cada tentativa.'}</p>
     <div class="row" style="justify-content:center;margin-top:18px"><button class="btn" data-act="test">${pass?'Continuar':'Voltar ao teste'}</button>${pass?'':`<button class="btn ghost" data-act="openMod" data-m="${V.mod}">Rever as aulas</button>`}</div></div>`+end;
  }
  const q=tq.qs[tq.i];
  return hdr+back+`<div class="prog">${bar}</div><div class="card step"><h2>${tq.i+1}. ${q.q}</h2><div class="opts">${q.opts.map((o,i)=>`<button class="opt" data-act="tans" data-i="${i}">${o}</button>`).join('')}</div></div>`+end;
}

/* ---------- CERTIFICADO ---------- */
function vCert(){
  const s=me(),sem=SEM[V.sem-1];
  const code='TD-'+V.sem+'-'+s.id.toUpperCase().slice(0,3)+'-'+(s.name.length*37+starsTotal(s)).toString(36).toUpperCase();
  return `${topbar()}<main class="wrap"><div class="crumb"><button data-act="home">${ic('back')} Trilha</button> / Certificado</div>
   <div class="cert"><div style="letter-spacing:.2em;font-weight:800">INSPIRAR INFORMÁTICA · CURSO DE INFORMÁTICA BÁSICA</div>
    <h2 style="margin-top:10px">Certificado de Conclusão</h2><p style="margin-top:12px">Certificamos que</p>
    <div class="name">${esc(s.name)}</div>
    <p>concluiu com aproveitamento o <b>${sem.nome}</b> do curso, módulos ${sem.mods.map(m=>MODS[m-1].name).join(', ')}, com carga de ${sem.aulas} horas-aula.</p>
    <p style="margin-top:14px;font-size:.9rem">${s.polo} · ${new Date().toLocaleDateString('pt-BR')} · Código de verificação ${code}</p></div>
   <p class="muted" style="text-align:center;margin-top:12px">Na versão final o certificado poderá ser baixado em PDF e conferido pelo código.</p></main>${foot}`;
}

/* ---------- TUTOR ---------- */
function vTutor(){
  const pr0=today(),pol='Polo Pinhão',slots=cfgP(pol).slots,wd=WD[new Date().getDay()];
  const sl=V.tutorSlot||slots.find(x=>x.startsWith(wd))||slots[0];
  const list=Object.values(DB.students).filter(s=>s.polo===pol&&s.slot===sl);
  const extra=Object.values(DB.students).filter(s=>s.polo===pol&&s.slot!==sl&&pr0[s.id]);
  list.push(...extra.filter(s=>!list.includes(s)));
  const pr=today(),entered=list.filter(s=>pr[s.id]),conf=list.filter(s=>pr[s.id]&&pr[s.id].ok);
  const rows=list.map(s=>{
    const p=pr[s.id],c=curMod(s),d=modLessonsDone(s,c),tot=MODS[c-1].aulas.length,lt=lastTyp(s);
    const stuck=s.age&&lessonsCount(s)<4&&s.hist.filter(x=>!x).length>=2;
    return `<tr><td><b>${esc(s.name)}</b><br><span class="muted" style="font-size:.85rem">${s.age} anos${s.slot!==sl?' · horário '+esc(s.slot):''}</span></td>
     <td>${p?(p.ok?`<span class="pill ok">${ic('check')} Confirmada ${p.in}</span>`:`<span class="pill warn">Entrou às ${p.in}</span>`):`<span class="pill">Ainda não entrou</span>`}</td>
     <td>Módulo ${c}: ${MODS[c-1].name}<div class="bar" style="--c:${MCOL(c)}"><i style="width:${d/tot*100}%"></i></div></td>
     <td>${lt?lt.wpm+' ppm · '+lt.acc+'%':'-'}</td>
     <td>${s.tests[c]?`${s.tests[c].score||0} pts · ${s.tests[c].typOk?'digitação ok':'digitação pendente'}`:'-'}</td>
     <td>${stuck?`<span class="pill bad">Precisa de apoio</span>`:''}</td>
     <td><div class="row" style="gap:6px">${p&&!p.ok?`<button class="btn sm" data-act="confirm" data-id="${s.id}">Confirmar</button>`:!p?`<button class="btn ghost sm" data-act="confirm" data-id="${s.id}">Marcar presente</button>`:''}${!modPassed(s,c)&&modComplete(s,c)?`<button class="btn ghost sm" data-act="relopen" data-id="${s.id}">Liberar módulo</button>`:''}</div></td></tr>`}).join('');
  return `${topbar()}<main class="wrap" style="padding-top:20px;padding-bottom:30px"><div class="stack">
   ${demoNote()}
   <div class="row"><button class="btn sm" data-act="tutora">${ic('tutor')} Área da tutora: Colônia, cópia de segurança e gabaritos</button></div>
   <div class="row"><h1 class="grow">Sala hoje · ${sl}</h1><div class="seg">${slots.map(t=>`<button class="${t===sl?'on':''}" data-act="slot" data-t="${t}">${t}</button>`).join('')}</div></div>
   <div class="tiles"><div class="tile"><b>${entered.length}/${cfgP(pol).pcs}</b><span>computadores em uso (${list.length} no horário)</span></div><div class="tile"><b>${conf.length}</b><span>presenças confirmadas</span></div><div class="tile"><b>${list.filter(s=>lessonsCount(s)<4&&s.hist.filter(x=>!x).length>=2).length}</b><span>alunos para observar</span></div></div>
   <div class="card"><p class="muted" style="margin-bottom:10px">Cada aluno segue o seu ritmo, de qualquer idade e em qualquer ponto do curso. A presença nasce quando ele entra; você confirma que está na sala.</p>
   <div class="tblwrap"><table class="tbl"><thead><tr><th>Aluno</th><th>Presença</th><th>Onde está</th><th>Digitação</th><th>Nota</th><th>Atenção</th><th></th></tr></thead><tbody>${rows}</tbody></table></div></div>
  </div>${V.rel?relModal():''}</main>${foot}`;
}
function relModal(){const s=DB.students[V.rel],c=curMod(s),t=s.tests[c]||{};
  return `<div class="modal" role="dialog" aria-modal="true" aria-labelledby="mt"><div class="card" style="max-width:460px;width:100%"><h2 id="mt">Liberar o módulo ${c} para ${esc(s.name.split(' ')[0])}?</h2>
   <p class="muted" style="margin:8px 0">Situação: perguntas ${t.score||0} pts, digitação ${t.typOk?'na meta':'abaixo da meta'}. A liberação fica registrada com seu nome e o motivo.</p>
   <label for="why" style="font-weight:800">Motivo</label>
   <select id="why" class="sel"><option>Faltou muito pouco para a nota</option><option>Faltou muito pouco para a meta de digitação</option><option>Está há muito tempo neste módulo</option><option>Outro motivo (conversei com a família)</option></select>
   <div class="row" style="margin-top:16px;justify-content:flex-end"><button class="btn ghost" data-act="relno">Cancelar</button><button class="btn" data-act="reldo">Liberar módulo</button></div></div></div>`}

/* ---------- GESTOR ---------- */
function vGestor(){
  const all=Object.values(DB.students),polos=[...new Set(all.map(s=>s.polo))],pol=V.poloSel||'todos';
  const list=pol==='todos'?all:all.filter(s=>s.polo===pol);
  const avg=(a,f)=>a.length?Math.round(a.reduce((x,y)=>x+f(y),0)/a.length):0;
  const pls=pol==='todos'?polos:[pol],pcsT=pls.reduce((n,p)=>n+cfgP(p).pcs,0);
  const rows=pls.flatMap(p=>cfgP(p).slots.map(t=>{const l=list.filter(s=>s.polo===p&&s.slot===t),n=l.length,pcs=cfgP(p).pcs,full=n>=pcs;
    const pc=avg(l,s=>attendance(s)),done=avg(l,s=>lessonsCount(s)/40*100),w=avg(l,bestWpm);
    return `<tr><td><b>${t}</b><br><span class="muted" style="font-size:.85rem">${p}</span></td>
     <td style="min-width:130px">${n}/${pcs} ${full?'<span class="pill warn">lotado</span>':''}<div class="bar" style="--c:${full?'var(--bad)':'var(--good)'}"><i style="width:${Math.min(100,n/pcs*100)}%"></i></div></td>
     <td>${n?pc+'%':'-'}</td><td>${n?done+'% do curso':'-'}</td><td>${n?w+' ppm':'-'}</td><td>${l.map(s=>esc(s.name.split(' ')[0])+' ('+s.age+')').join(', ')||'<span class="muted">livre</span>'}</td></tr>`})).join('');
  const dist=MODS.map(m=>`<div class="tile"><b>${list.filter(s=>curMod(s)===m.n).length}</b><span>no módulo ${m.n}</span></div>`).join('');
  const opts=pls.flatMap(p=>cfgP(p).slots.map(t=>({p,t,full:occ(p,t)>=cfgP(p).pcs})));
  const pcsCtl=pls.map(p=>`<div class="row" style="padding:6px 0;border-bottom:1px solid var(--line)"><b class="grow">${p}</b><button class="btn ghost sm" data-act="pcs" data-p="${p}" data-d="-1" aria-label="Menos um computador">−</button><b>${cfgP(p).pcs} computadores</b><button class="btn ghost sm" data-act="pcs" data-p="${p}" data-d="1" aria-label="Mais um computador">+</button></div>`).join('');
  const risk=list.filter(s=>attendance(s)<75||(lessonsCount(s)<3&&s.hist.filter(x=>!x).length>=2));
  return `${topbar()}<main class="wrap" style="padding-top:20px;padding-bottom:30px"><div class="stack">
   ${demoNote()}
   <div class="row"><h1 class="grow">Visão geral</h1><div class="seg"><button class="${pol==='todos'?'on':''}" data-act="polo" data-p="todos">Todos os polos</button>${polos.map(p=>`<button class="${p===pol?'on':''}" data-act="polo" data-p="${p}">${p}</button>`).join('')}</div></div>
   <div class="tiles"><div class="tile"><b>${list.length}</b><span>alunos</span></div><div class="tile"><b>${pcsT}</b><span>computadores</span></div><div class="tile"><b>${avg(list,attendance)}%</b><span>presença média</span></div><div class="tile"><b>${avg(list,s=>lessonsCount(s)/40*100)}%</b><span>avanço médio no curso</span></div><div class="tile"><b>${risk.length}</b><span>alunos em atenção</span></div></div>
   <div class="card"><h2 style="margin-bottom:6px">Horários e computadores</h2><p class="muted" style="margin-bottom:10px">Sem turmas fixas: cada aluno começa do zero, no seu ritmo, com idades misturadas. O limite de cada horário é o número de computadores.</p><div class="tblwrap"><table class="tbl"><thead><tr><th>Horário</th><th>Computadores</th><th>Presença</th><th>Avanço</th><th>Digitação</th><th>Alunos</th></tr></thead><tbody>${rows}</tbody></table></div></div>
   <div class="card"><h2 style="margin-bottom:10px">Onde os alunos estão no curso</h2><div class="tiles">${dist}</div></div>
   <div class="card"><h2 style="margin-bottom:10px">Matricular aluno</h2><p class="muted" style="margin-bottom:10px">O aluno entra no módulo 1, aula 1, e pode começar em qualquer semana.</p>
    <div class="row" style="gap:10px;flex-wrap:wrap"><input id="en" class="sel" placeholder="Nome do aluno" aria-label="Nome do aluno" style="flex:1;min-width:160px;width:auto;margin:0"><input id="ea" class="sel" type="number" min="8" max="12" value="9" style="width:90px;margin:0" aria-label="Idade"><select id="es" class="sel" aria-label="Horário" style="flex:1 1 180px;width:auto;min-width:0;max-width:100%;margin:0">${opts.map(o=>`<option value="${o.p}|${o.t}" ${o.full?'disabled':''}>${pls.length>1?o.p+' · ':''}${o.t}${o.full?' (lotado)':''}</option>`).join('')}</select><button class="btn" data-act="enroll">Matricular</button></div><div id="eerr" class="muted" style="margin-top:6px" role="status"></div></div>
   <div class="card"><h2 style="margin-bottom:6px">Computadores por polo</h2>${pcsCtl}</div>
   <div class="card"><h2 style="margin-bottom:10px">Liberações feitas pelos tutores</h2>${(()=>{const L=[];list.forEach(s=>Object.entries(s.tests).forEach(([m,t])=>{if(t.release)L.push([s,m,t.release])}));return L.length?L.map(([s,m,r])=>`<div class="row" style="padding:6px 0;border-bottom:1px solid var(--line)"><b class="grow">${esc(s.name)} <span class="muted">· módulo ${m}</span></b><span class="pill warn">${esc(r.why)}</span><span class="muted">${r.by}, ${r.at}</span></div>`).join(''):'<p class="muted">Nenhuma liberação até agora.</p>'})()}</div>
   <div class="card"><h2 style="margin-bottom:10px">Alunos em atenção</h2>${risk.length?risk.map(s=>`<div class="row" style="padding:6px 0;border-bottom:1px solid var(--line)"><b class="grow">${esc(s.name)} <span class="muted">· ${s.slot}</span></b><span class="pill bad">Presença ${attendance(s)}%</span><span class="pill">${lessonsCount(s)} aulas</span></div>`).join(''):'<p class="muted">Nenhum aluno em atenção.</p>'}</div>
   <div class="note">Na versão final: cadastro de polos, horários e tutores, importação de alunos e relatórios por período.</div>
  </div></main>${foot}`;
}

/* ---------- PAIS ---------- */
function vPais(){
  const s=DB.students[V.parentSid];
  const base=new Date();
  const hist=s.hist.map((p,i)=>{const d=new Date(base.getTime()-(s.hist.length-i)*7*864e5);return `<span class="pill ${p?'ok':'bad'}" title="${p?'Presente':'Faltou'}">${d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'})} ${p?'presente':'faltou'}</span>`}).join(' ');
  const mods=MODS.map(m=>{const d=modLessonsDone(s,m.n),t=s.tests[m.n];
    return `<tr><td><b>${m.n}. ${m.name}</b></td><td>${d}/${m.aulas.length}<div class="bar" style="--c:${MCOL(m.n)}"><i style="width:${d/m.aulas.length*100}%"></i></div></td><td>${t?`<span class="pill ${t.score>=MIN?'ok':'bad'}">${t.score||0} pts</span> <span class="pill ${t.typOk?'ok':'bad'}">${t.typOk?'digitação na meta':'digitação pendente'}</span> ${t.release?'<span class="pill warn">liberado pelo tutor</span>':''}`:'<span class="muted">Ainda não fez</span>'}</td></tr>`}).join('');
  return `${topbar()}<main class="wrap" style="padding-top:20px;padding-bottom:30px"><div class="stack">
   ${demoNote()}
   <div class="row"><h1 class="grow">Acompanhamento de ${esc(s.name.split(' ')[0])}</h1><span class="chip">${s.slot}</span></div>
   <div class="tiles"><div class="tile"><b>${attendance(s)}%</b><span>presença</span></div><div class="tile"><b>${lessonsCount(s)}/40</b><span>aulas concluídas</span></div><div class="tile"><b>${passedCount(s)}/7</b><span>módulos aprovados</span></div><div class="tile"><b>${bestWpm(s)}</b><span>melhor digitação (palavras/min)</span></div></div>
   <div class="card"><h2 style="margin-bottom:10px">Presença nas últimas semanas</h2><div class="row" style="gap:8px">${hist}</div></div>
   <div class="card"><h2 style="margin-bottom:10px">Módulos e notas</h2><div class="tblwrap"><table class="tbl"><thead><tr><th>Módulo</th><th>Aulas</th><th>Teste</th></tr></thead><tbody>${mods}</tbody></table></div></div>
   <div class="card"><h2 style="margin-bottom:10px">Evolução na digitação</h2>${s.typ.length?s.typ.map(x=>`<span class="pill" style="margin:2px">${x.wpm} ppm · ${x.acc}%</span>`).join(' '):'<span class="muted">Ainda sem registros.</span>'}</div>
   <div class="note">Esta área mostra somente o acompanhamento. As atividades ficam disponíveis apenas para o aluno, na sala de aula.</div>
  </div></main>${foot}`;
}

/* ===================================================================================
   COLÔNIA DIGITAL, ÁREA DA TUTORA, CÓPIA DE SEGURANÇA E GABARITOS (versão 20/11/2026)
   Tudo funciona só no navegador (sem servidor). O PIN protege a área da tutora contra
   cliques das crianças; não é uma senha de segurança forte.
   =================================================================================== */
const PIN_PADRAO='2501';
const COL=[
 {n:1,name:'Computador e teclado',dia:'Segunda',c:1,main:['1.1','1.2','1.3','1.4','2.1'],bonus:['2.2']},
 {n:2,name:'Word',dia:'Terça',c:4,main:['4.1','4.2','4.3','4.4'],bonus:['4.5','4.6']},
 {n:3,name:'Internet segura',dia:'Quarta',c:3,main:['3.1','3.2','3.3','3.4','3.5'],bonus:[]},
 {n:4,name:'Excel',dia:'Quinta',c:5,main:['5.1','5.2','5.3','5.4','5.7'],bonus:['5.5','5.6']},
 {n:5,name:'Projeto final e Mostra',dia:'Sexta',c:7,main:['7.1','7.2','7.3'],bonus:['2.3','5.8']}
];
const ROTEIRO={1:'Ligar os notebooks e abrir a plataforma. Cada criança cria o perfil (só o primeiro nome). Mostrar o touchpad e a posição das mãos. Bônus: digitação da fileira de cima.',
 2:'Liberar a Missão 2. Lembrar: clicar 3 vezes seleciona a linha. Se sobrar tempo, as aulas bônus 4.5 (imagem) e 4.6 (documento completo).',
 3:'Liberar a Missão 3. Conversar em roda sobre senhas e estranhos antes do notebook. Combinado da internet no fim.',
 4:'Liberar a Missão 4. No Excel, digitar na barra e apertar Enter. Bônus: fórmulas (5.5) e média (5.6).',
 5:'Liberar a Missão 5. Projeto: tema, plano, texto e planilha. Fazer a cópia de segurança antes da Mostra e mostrar o certificado da Colônia.'};
const TRAVA={'1.3':'Duplo clique: algumas crianças clicam devagar demais. Mostrar o ritmo "tum-tum".','2.1':'Olham para o teclado. Cobrir as mãos com um pano ajuda.','2.4':'Acentos: no teclado ABNT2, aperta-se o acento, solta, e depois a letra.',
 '4.3':'Selecionar o texto antes de clicar no botão (3 cliques seguidos).','4.4':'Para a lista, arrastar do 1º ao último item antes de clicar em Lista.','4.5':'Clicar na imagem (ganha borda) e depois em centralizar.',
 '5.2':'Esquecem o Enter para confirmar a célula.','5.4':'Escrevem SOMA sem o sinal de igual (=).','5.5':'Usar * para multiplicar (não x).','7.3':'Texto com menos de 40 letras não conta: pedir duas ou três frases.'};
const colCfg=()=>DB.config.colonia||(DB.config.colonia={on:false,open:[]});
const colOn=()=>!!colCfg().on;
const colHas=k=>COL.some(m=>m.main.includes(k)||m.bonus.includes(k));
const colOpen=n=>colCfg().open.includes(n);
const kOf=k=>k.split('.').map(Number);
const colDone=(s,m)=>m.main.filter(k=>s.prog[k]).length;
function colNext(s){for(const m of COL)if(colOpen(m.n))for(const k of m.main)if(!s.prog[k])return kOf(k);for(const m of COL)if(colOpen(m.n))for(const k of m.bonus)if(!s.prog[k])return kOf(k);return null}
function vColTrail(s){
  const all=COL.every(m=>colDone(s,m)===m.main.length);
  const cards=COL.map(m=>{const op=colOpen(m.n),d=colDone(s,m),tot=m.main.length,ok=d===tot;
    const les=(ks,b)=>ks.map(k=>{const [mm,l]=kOf(k);return `<button class="les" data-act="openLes" data-m="${mm}" data-l="${l}" style="--c:${MCOL(mm)}"><span class="n">${mm}.${l}</span><span class="grow"><b>${MODS[mm-1].aulas[l-1]}</b>${b?' <span class="pill warn">bônus</span>':''}</span>${s.prog[k]?stars(s.prog[k]):''}</button>`}).join('');
    return `<div class="node ${ok?'done':op?'open':'locked'}" style="--c:${MCOL(m.c)}"><div class="spine"><div class="dot">${op?m.n:ic('lock')}</div><div class="line"></div></div>
     <div class="mcard"><h3>Missão ${m.n}: ${m.name}</h3><div class="muted" style="font-weight:700">${m.dia}</div>
      <div class="meta">${ok?`<span class="pill ok">${ic('check')} Missão cumprida</span>`:op?`<span class="pill">${d} de ${tot} aulas</span>`:`<span class="pill">${ic('lock')} A tutora libera esta missão</span>`}</div>
      ${op?`<div class="bar"><i style="width:${d/tot*100}%"></i></div><div class="lessons">${les(m.main)}${les(m.bonus,1)}</div>`:''}</div></div>`}).join('');
  return `<div class="card" style="border-color:var(--sun)"><div class="row"><div class="grow"><h2>${ic('flag')} Colônia Digital</h2><p class="muted">Uma missão por dia. A tutora libera a missão de hoje.</p></div>${all?`<button class="btn" data-act="colcert">${ic('cert')} Certificado da Colônia</button>`:''}</div></div><div class="trail">${cards}</div>`;
}
function vColCert(){const s=me();
  return `${topbar()}<main class="wrap"><div class="crumb noprint"><button data-act="home">${ic('back')} Colônia</button> / Certificado</div>
   <div class="cert"><div style="letter-spacing:.2em;font-weight:800">INSPIRAR INFORMÁTICA · COLÔNIA DIGITAL</div>
    <h2 style="margin-top:10px">Certificado de Participação</h2><p style="margin-top:12px">Certificamos que</p>
    <div class="name">${esc(s.name)}</div>
    <p>participou da <b>Colônia Digital</b> e cumpriu as missões ${COL.map(m=>m.name).join(', ')}.</p>
    <p style="margin-top:10px">${stars(3)} ${starsTotal(s)} estrelas conquistadas</p>
    <p style="margin-top:14px;font-size:.9rem">Pinhão, ${new Date().toLocaleDateString('pt-BR')} · Tutora ${esc(tutorName())}</p></div>
   <p class="noprint" style="text-align:center;margin-top:14px"><button class="btn" data-act="print">Imprimir</button></p></main>`;
}
/* ---------- cópia de segurança (arquivo JSON e código para copiar e colar) ---------- */
const realStudents=()=>Object.values(DB.students).filter(x=>/^[tm]/.test(x.id));
function packData(tipo,list){const ids=list.map(x=>x.id),pres={};
  for(const [d,o] of Object.entries(DB.presence||{}))for(const id of ids)if(o[id]){(pres[d]=pres[d]||{})[id]=o[id]}
  const o={app:'inspirar-informatica',v:1,tipo,em:new Date().toISOString(),students:Object.fromEntries(list.map(x=>[x.id,x])),presence:pres};
  if(tipo==='computador')o.config={colonia:colCfg(),tutora:tutorName(),atalho:DB.config.atalho};return o}
async function toCode(obj){const j=JSON.stringify(obj);
  try{if(window.CompressionStream){const cs=new Blob([j]).stream().pipeThrough(new CompressionStream('deflate-raw'));const b=new Uint8Array(await new Response(cs).arrayBuffer());let bin='';b.forEach(x=>bin+=String.fromCharCode(x));return 'TD1.'+btoa(bin)}}catch(e){}
  return 'TD0.'+btoa(unescape(encodeURIComponent(j)))}
async function fromText(t){t=String(t||'').trim();
  if(t.startsWith('{'))return JSON.parse(t);
  const c=t.replace(/\s+/g,'');
  if(c.startsWith('TD0.'))return JSON.parse(decodeURIComponent(escape(atob(c.slice(4)))));
  if(c.startsWith('TD1.')){const bin=atob(c.slice(4)),b=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)b[i]=bin.charCodeAt(i);
    const ds=new Blob([b]).stream().pipeThrough(new DecompressionStream('deflate-raw'));return JSON.parse(await new Response(ds).text())}
  throw new Error('formato')}
function mergeStudent(a,b){if(!a)return b;const o=Object.assign({},a);
  o.prog=Object.assign({},a.prog);for(const [k,v] of Object.entries(b.prog||{}))o.prog[k]=Math.max(o.prog[k]||0,v);
  o.tests=Object.assign({},a.tests);for(const [m,t] of Object.entries(b.tests||{})){const x=o.tests[m];o.tests[m]=!x?t:Object.assign({},x,t,{score:Math.max(x.score||0,t.score||0),tries:Math.max(x.tries||0,t.tries||0),typOk:!!(x.typOk||t.typOk),release:x.release||t.release})}
  const seen=new Set((a.typ||[]).map(x=>JSON.stringify(x)));o.typ=(a.typ||[]).concat((b.typ||[]).filter(x=>!seen.has(JSON.stringify(x))));
  if(a.tlog||b.tlog){const kk=e=>e.k+'|'+e.r+'|'+e.p+'|'+e.i,sn=new Set((a.tlog||[]).map(kk));o.tlog=(a.tlog||[]).concat((b.tlog||[]).filter(e=>!sn.has(kk(e)))).sort((x,y)=>x.i-y.i).slice(-TLOG_MAX)}
  o.stk=[...new Set([...(a.stk||[]),...(b.stk||[])])];o.bonus=Math.max(a.bonus||0,b.bonus||0);o.proj=Object.assign({},b.proj||{},a.proj||{});return o}
function importData(o){if(!o||o.app!=='inspirar-informatica'||!o.students)throw new Error('arquivo');let n=0;
  for(const [id,st] of Object.entries(o.students)){if(!/^[tm]/.test(id)||!st||!st.prog)continue;DB.students[id]=mergeStudent(DB.students[id],st);n++}
  for(const [d,ob] of Object.entries(o.presence||{})){const t=DB.presence[d]||(DB.presence[d]={});for(const [id,p] of Object.entries(ob))if(!t[id])t[id]=p}
  if(o.config&&o.config.tutora&&!DB.config.tutoraSet)DB.config.tutora=o.config.tutora;
  if(o.config&&o.config.atalho&&!DB.config.atalho){DB.config.atalho=o.config.atalho;applyAtalho()}
  save();return n}
function download(name,text,type){try{const b=new Blob([text],{type:type||'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1500);return true}catch(e){return false}}
const slug=t=>easyTxt(t).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'aluno';
async function doBackup(tipo){const list=tipo==='aluno'?[me()]:realStudents();const o=packData(tipo,list);
  const name=(tipo==='aluno'?'progresso-'+slug(me().name):'copia-computador')+'-'+dayKey()+'.json';
  const ok=download(name,JSON.stringify(o));const code=await toCode(o);
  if(tipo==='computador'){DB.config.lastBackup=new Date().toLocaleString('pt-BR');save()}
  V.modal={kind:'code',title:tipo==='aluno'?'Progresso guardado':'Cópia de segurança deste computador',file:ok?name:'',code,n:list.length};render()}
function modalHtml(){const m=V.modal;let inner='';
  if(m.kind==='code')inner=`<h2 id="mdt">${esc(m.title)}</h2>
    <p class="muted" style="margin:8px 0">${m.file?`O arquivo <b>${esc(m.file)}</b> foi enviado para a pasta Downloads. Guarde num pen drive ou na pasta da Colônia.`:'Este navegador não deixou baixar o arquivo.'} ${m.n} aluno(s). <b>Se o arquivo não aparecer em Downloads</b> (por exemplo, quando a plataforma está aberta dentro do claude.ai), copie o código abaixo e guarde, por exemplo mandando para você mesma no WhatsApp.</p>
    <textarea id="codeout" class="sel" readonly rows="5" style="font-family:monospace;font-size:.8rem">${esc(m.code)}</textarea>
    <div class="row" style="margin-top:12px;justify-content:flex-end"><button class="btn ghost" data-act="copycode">Copiar código</button><button class="btn" data-act="modalx">Fechar</button></div>`;
  if(m.kind==='tabela')inner=`<h2 id="mdt">Tabela de tempos</h2>
    <p class="muted" style="margin:8px 0">${m.file?`O arquivo <b>${esc(m.file)}</b> foi para a pasta Downloads e abre no Excel.`:'Copie a tabela abaixo e cole no Excel (ou mande para você mesma no WhatsApp).'} Uma linha por passo, separada por ponto e vírgula.</p>
    <textarea id="codeout" class="sel" readonly rows="6" style="font-family:monospace;font-size:.75rem">${esc(m.code)}</textarea>
    <div class="row" style="margin-top:12px;justify-content:flex-end"><button class="btn ghost" data-act="copycode">Copiar a tabela</button><button class="btn" data-act="modalx">Fechar</button></div>`;
  if(m.kind==='restore')inner=`<h2 id="mdt">Trazer progresso</h2>
    <p class="muted" style="margin:8px 0">Escolha o arquivo de progresso (.json) ou cole o código. O progresso é somado ao que já existe neste computador: nada é apagado.</p>
    <label style="font-weight:800">Arquivo<input type="file" id="rfile" accept=".json,.txt,application/json,text/plain" class="sel"></label>
    <label style="font-weight:800;display:block;margin-top:10px">ou código<textarea id="rcode" class="sel" rows="4" style="font-family:monospace;font-size:.8rem" placeholder="TD1..."></textarea></label>
    <div class="feed" id="rmsg" role="status">${esc(m.msg||'')}</div>
    <div class="row" style="margin-top:8px;justify-content:flex-end"><button class="btn ghost" data-act="modalx">Fechar</button><button class="btn" data-act="restoredo">Trazer</button></div>`;
  return `<div class="modal" role="dialog" aria-modal="true" aria-labelledby="mdt"><div class="card" style="max-width:560px;width:100%">${inner}</div></div>`}
async function doRestore(){const f=document.getElementById('rfile'),c=document.getElementById('rcode').value,msg=document.getElementById('rmsg');
  try{let t=c;if(f.files&&f.files[0])t=await f.files[0].text();if(!String(t).trim()){msg.className='feed no';msg.textContent='Escolha um arquivo ou cole um código.';return}
    const o=await fromText(t),n=importData(o);msg.className='feed ok';msg.textContent=n?`Pronto! ${n} aluno(s) trazido(s) para este computador.`:'O arquivo não tinha alunos.';
    const ids=Object.keys(o.students).filter(x=>/^[tm]/.test(x));
    if(n===1&&window.__ALUNO__&&!V.role){V.modal=null;enter('aluno',ids[0]);return}
    setTimeout(()=>{if(V.modal&&V.modal.kind==='restore'){V.modal=null;render()}},1400)}
  catch(e){msg.className='feed no';msg.textContent='Não consegui ler. Confira se é o arquivo ou o código certo da Inspirar Informática.'}}
/* ---------- ler em voz alta (voz do próprio computador, sem internet e sem custo) ---------- */
function canSay(){try{return 'speechSynthesis' in window&&!!window.SpeechSynthesisUtterance}catch(e){return false}}
function say(t){try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='pt-BR';u.rate=.95;const vs=speechSynthesis.getVoices().filter(v=>/^pt(-|_)BR/i.test(v.lang));const v=vs.find(v=>v.localService)||vs[0];if(v)u.voice=v;speechSynthesis.speak(u)}catch(e){}}
/* ---------- gabaritos para a tutora (gerados das próprias aulas) ---------- */
function gabStep(p){
  if(p.t==='quiz')return 'Pergunta: '+p.q+' Resposta: '+p.opts[p.a];
  if(p.t==='order')return 'Ordem certa: '+p.items.join(' → ');
  if(p.t==='hot')return 'Clicar na figura: '+p.a;
  if(p.t==='targets')return 'Clicar em '+p.n+' bolinhas';
  if(p.t==='type')return 'Digitar: "'+(typeof p.text==='string'?p.text:p.text.y+'" (8 a 10 anos) ou "'+p.text.o+'" (11 e 12 anos)')+(typeof p.text==='string'?'"':'');
  if(p.t==='word'||p.t==='xl'||p.t==='ppt'){const sim=(p.t==='word'?SIMS:p.t==='xl'?SIMX:SIMP)[p.sim];return (p.t==='word'?'Word':p.t==='xl'?'Excel':'PowerPoint')+': '+sim.tasks.map((t,i)=>(i+1)+') '+t.tx+' Como: '+t.hint).join(' ')}
  if(p.t==='check')return 'Marcar: '+p.items.join('; ');
  if(p.t==='form')return 'Resposta livre (mínimo 3 letras por campo): '+p.fields.map(f=>f[1]).join(' / ');
  return 'Leitura: '+(p.title||'');
}
function gabHtml(m){const mm=MODS[m-1];return `<h2 style="margin:10px 0">Módulo ${m}: ${mm.name}</h2>`+mm.aulas.map((t,i)=>{const k=m+'.'+(i+1);
  return `<div class="card gab" style="margin-top:10px"><h3>Aula ${k}: ${t}</h3>${TRAVA[k]?`<p class="note" style="margin-top:6px"><b>Onde costuma travar:</b> ${esc(TRAVA[k])}</p>`:''}<ol style="margin:8px 0 0 18px;padding:0">${steps(m,i+1).map(p=>`<li>${p.bonus?'<b>[bônus]</b> ':''}${esc(gabStep(p))}</li>`).join('')}</ol></div>`}).join('')+
  `<div class="card gab" style="margin-top:10px"><h3>Teste do módulo ${m}</h3><p class="muted">10 de ${BANK[m].length} perguntas sorteadas (opções embaralhadas). Respostas:</p><ol style="margin:8px 0 0 18px;padding:0">${BANK[m].map(([q,o,a])=>`<li>${esc(q)} <b>${esc(o[a])}</b></li>`).join('')}</ol></div>`}
/* ---------- área da tutora ---------- */
function vTutora(){
  const back=`<button class="btn ghost sm" data-act="tutorax">${ic('back')} Sair da área da tutora</button>`;
  if(!V.tutOk)return `${topbar()}<main class="wrap" style="padding-top:24px"><div class="card" style="max-width:420px;margin:0 auto"><h2>Área da tutora</h2>
    <p class="muted" style="margin:8px 0">Digite o PIN da tutora.</p><input id="pin" class="sel" type="password" inputmode="numeric" autocomplete="off" maxlength="8" aria-label="PIN da tutora">
    <div class="feed no" id="pinerr" role="status"></div><div class="row" style="margin-top:10px;justify-content:space-between">${back}<button class="btn" data-act="pinok">Entrar</button></div></div></main>`;
  const tab=V.tabT||'colonia',cfg=colCfg(),kids=realStudents();
  const tabs=[['colonia','Colônia'],['backup','Cópia de segurança'],['gabarito','Gabaritos'],['tempos','Tempos'],['config','Ajustes']].map(([k,l])=>`<button class="${k===tab?'on':''}" data-act="tabT" data-t="${k}">${l}</button>`).join('');
  let body='';
  if(tab==='colonia')body=`<div class="card"><div class="row"><div class="grow"><h2>Modo Colônia neste computador</h2><p class="muted">Ligado: as crianças veem só as 5 missões e não precisam dos testes de digitação para chegar ao Word e ao Excel.</p></div>
     <button class="btn ${cfg.on?'good':''}" data-act="colon">${cfg.on?'Ligado: clique para desligar':'Ligar o Modo Colônia'}</button></div></div>
    <div class="card"><h2 style="margin-bottom:8px">Missões liberadas</h2>${COL.map(m=>`<label class="task" style="cursor:pointer;margin-top:8px"><input type="checkbox" data-act="colmis" data-n="${m.n}" ${colOpen(m.n)?'checked':''}> <span class="grow"><b>Missão ${m.n} (${m.dia}): ${m.name}</b><br><span class="muted" style="font-size:.88rem">Aulas ${m.main.join(', ')}${m.bonus.length?' · bônus '+m.bonus.join(', '):''}</span><br><span class="hint">${esc(ROTEIRO[m.n])}</span></span></label>`).join('')}</div>
    <div class="card"><h2 style="margin-bottom:8px">Crianças neste computador</h2>${kids.length?`<div class="tblwrap"><table class="tbl"><thead><tr><th>Criança</th>${COL.map(m=>`<th>M${m.n}</th>`).join('')}<th>Estrelas</th></tr></thead><tbody>${kids.map(k=>`<tr><td><b>${esc(k.name)}</b></td>${COL.map(m=>`<td>${colDone(k,m)}/${m.main.length}</td>`).join('')}<td>${starsTotal(k)}</td></tr>`).join('')}</tbody></table></div>`:'<p class="muted">Nenhuma criança cadastrada neste computador ainda.</p>'}</div>`;
  if(tab==='backup')body=`<div class="card"><h2>Cópia de segurança</h2><p class="muted" style="margin:6px 0 12px">Faça no fim de cada dia. Guarda o progresso de todas as crianças deste computador num arquivo. Se o navegador for limpo ou a criança trocar de notebook, é só trazer o arquivo de volta.</p>
     <div class="row"><button class="btn" data-act="bkall">${ic('save')} Fazer a cópia de todas as crianças (${kids.length})</button><button class="btn ghost" data-act="restore">Trazer de um arquivo ou código</button></div>
     <p class="muted" style="margin-top:10px">Última cópia feita aqui: ${esc(DB.config.lastBackup||'nunca')}</p></div>`;
  if(tab==='gabarito'){const m=V.gabM||1;body=`<div class="card noprint"><div class="row"><div class="seg">${MODS.map(x=>`<button class="${x.n===m?'on':''}" data-act="gabM" data-m="${x.n}">${x.n}</button>`).join('')}</div><span class="grow"></span><button class="btn ghost sm" data-act="print">Imprimir</button></div></div>${gabHtml(m)}`}
  if(tab==='tempos')body=vTempos();
  if(tab==='config')body=`<div class="card"><h2>Ajustes</h2><div class="stack" style="margin-top:10px">
     <label style="font-weight:800">Nome da tutora (aparece no certificado e nas liberações)<input id="tname" class="sel" value="${esc(tutorName())}" maxlength="30"></label>
     <label style="font-weight:800">Novo PIN (4 a 8 números; deixe em branco para manter)<input id="tpin" class="sel" inputmode="numeric" maxlength="8" autocomplete="off"></label>
     <label style="font-weight:800">Atalho de salvar no Word deste notebook<select id="tatalho" class="sel">${[['?','Ainda não conferi: ensinar o botão do disquete'],['S','Ctrl + S (Word com atalhos em inglês)'],['B','Ctrl + B (Word em português)']].map(([v,l])=>`<option value="${v}" ${atalhoCfg()===v?'selected':''}>${l}</option>`).join('')}</select></label>
     <p class="muted" style="font-size:.88rem;margin-top:-4px">Como conferir: abra o Word, digite uma palavra e aperte Ctrl + B. Se abrir a janela de salvar, escolha Ctrl + B. Se a palavra ficar em negrito, escolha Ctrl + S. As aulas 4.2 e 4.6, o teste do módulo 4 e os gabaritos mudam sozinhos.</p>
     <div class="feed" id="cfgmsg" role="status"></div><div><button class="btn" data-act="cfgsave">Salvar</button></div>
     <p class="muted" style="font-size:.88rem">O PIN fica guardado só neste computador. Troque o PIN em cada notebook.</p></div></div>`;
  return `${topbar()}<main class="wrap" style="padding-top:20px;padding-bottom:30px"><div class="stack"><div class="row noprint"><h1 class="grow">Área da tutora ${esc(tutorName())}</h1>${back}</div><div class="seg noprint">${tabs}</div>${body}</div></main>`;
}

/* ---------- render e eventos ---------- */
function render(){
  const v=V.view;
  try{speechSynthesis.cancel()}catch(e){}
  app.innerHTML=({login:vLogin,home:vHome,module:vModule,lesson:vLesson,test:vTest,cert:vCert,tutor:vTutor,gestor:vGestor,pais:vPais,tutora:vTutora,colcert:vColCert}[v]||vLogin)()+(V.modal?modalHtml():'');
  TY=null;WS=null;
  if(v==='lesson'){
    const stp=steps(V.mod,V.les)[V.step];
    if(!V.st.t0){V.st.t0=Date.now();V.st.e0=V.errs}
    if(stp.t==='type')startTyping();
    if(stp.t==='word')startWord(stp.sim);
    if(stp.t==='xl')startXl(stp.sim);
    if(stp.t==='ppt')startPpt(stp.sim);
    if(stp.t==='targets')startTargets(stp.n);
  }
  if(v==='test'&&V.tpart==='type'&&!V.tres)startTyping();
  saveSess();window.scrollTo(0,0);
}
function enter(role,sid){
  V.role=role;
  if(role==='aluno'){V.sid=sid;V.view='home';const p=today();if(!p[sid]){const d=new Date();p[sid]={in:String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0'),ok:false};save()}}
  if(role==='tutor')V.view='tutor';
  if(role==='gestor')V.view='gestor';
  if(role==='pais'){V.parentSid=sid;V.view='pais'}
  V.pickFor=null;render();
}
function newStudent(){const n=document.getElementById('nn').value.trim();if(n.length<2){document.getElementById('nerr').textContent='Escreva o seu nome.';return}
  const id='t'+Date.now().toString(36);DB.students[id]={id,name:n,age:+document.getElementById('na').value,slot:'Sem horário (teste)',polo:'Polo Pinhão',ch:document.querySelector('input[name=nc]:checked').value,prog:{},tests:{},typ:[],hist:[],stk:[],bonus:0};save();enter('aluno',id)}
function finishStep(){
  const st=steps(V.mod,V.les),cur=st[V.step];
  logStep(cur,{x:cur&&cur.bonus&&V.st.skipped});
  if(cur&&cur.bonus){if(V.st.errs0!==undefined)V.errs=V.st.errs0;if(!V.st.skipped&&V.sid&&me()){me().bonus=(me().bonus||0)+1;save()}}
  if(V.step<st.length-1){V.step++;V.st={};render();return}
  if(V.les===0){V.view='home';render();return}
  const s=me(),stars_=V.errs===0?3:V.errs<=2?2:1;
  const k=V.mod+'.'+V.les;s.prog[k]=Math.max(s.prog[k]||0,stars_);save();
  V.view='lessonend';
  app.innerHTML=`${topbar()}<main class="wrap"><div class="player" style="--c:${MCOL(V.mod)}"><div class="card step" style="text-align:center">
    <div class="fig" style="width:130px">${ch(s)}</div><h2 style="margin-top:8px">Aula concluída!</h2><div style="font-size:2rem;margin:8px 0">${stars(stars_)}</div>
    <p class="muted">${stars_===3?'Sem nenhum erro. Incrível!':'Você pode refazer a aula para ganhar mais estrelas.'}</p>
    <div class="row" style="justify-content:center;margin-top:18px">${(()=>{const inCol=colOn()&&colHas(k);const nx=inCol?colNext(s):(V.les<MODS[V.mod-1].aulas.length?[V.mod,V.les+1]:null);
      return (inCol?`<button class="btn ghost" data-act="home">Voltar à Colônia</button>`:`<button class="btn ghost" data-act="openMod" data-m="${V.mod}">Voltar ao módulo</button>`)+(nx?`<button class="btn" data-act="openLes" data-m="${nx[0]}" data-l="${nx[1]}">Próxima aula ${ic('arrow')}</button>`:'')})()}</div></div></div></main>${foot}`;
}
let warmI=0;
function award_s(st,id){st.stk=st.stk||[];if(!st.stk.includes(id))st.stk.push(id)}
function correct(){const s=me();s.bonus=(s.bonus||0)+1;V.streak=(V.streak||0)+1;save();if(V.streak>=3&&award(s,'seq'))return;toast('+1 estrela')}
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-act]');
  const part=e.target.closest('[data-part]');
  if(part&&V.view==='lesson'){
    const stp=steps(V.mod,V.les)[V.step],f=document.getElementById('feed');
    if(stp&&stp.t==='hot'&&!V.st.done){
      if(part.dataset.part===stp.a){V.st.done=1;correct();f.className='feed ok';f.textContent='Isso mesmo!';addNext(f)}
      else{V.errs++;f.className='feed no';f.textContent='Não é essa. Tente outra parte!'}
    }return;
  }
  if(!el)return;
  const a=el.dataset.act,s=V.sid?me():null;
  switch(a){
   case 'roleAluno':V.pickFor='aluno';render();break;
   case 'rolePais':V.pickFor='pais';render();break;
   case 'roleTutor':enter('tutor');break;
   case 'roleGestor':enter('gestor');break;
   case 'pick':enter(window.__ALUNO__?'aluno':V.pickFor,el.dataset.id);break;
   case 'newstudent':newStudent();break;
   case 'reset':DB=seed();save();V={st:{},view:'login'};render();break;
   case 'logout':V={st:{},view:'login',role:null};render();break;
   case 'demo':V.demo=el.checked;render();break;
   case 'home':if(V.view==='lesson'&&V.step>0&&!V.leaveOk){V.leave={m:V.mod,home:1};render();break}V.leaveOk=false;V.view='home';TQ=null;render();break;
   case 'swapch':s.ch=s.ch==='mia'?'teo':'mia';save();render();break;
   case 'openMod':if(V.view==='lesson'&&V.step>0&&!V.leaveOk){V.leave={m:el.dataset.m};render();break}V.leaveOk=false;V.mod=+el.dataset.m;V.view='module';render();break;
   case 'leaveno':V.leave=null;render();break;
   case 'leaveyes':{logStep(steps(V.mod,V.les)[V.step],{l:1});const h=V.leave.home;V.mod=+V.leave.m;V.leave=null;V.view=h?'home':'module';render();break}
   case 'openLes':V.mod=+el.dataset.m;V.les=+el.dataset.l;V.step=0;V.st={};V.errs=0;V.run=nowS();V.view='lesson';render();break;
   case 'next':finishStep();break;
   case 'typedone':finishStep();break;
   case 'ans':{const stp=steps(V.mod,V.les)[V.step],i=+el.dataset.i,f=document.getElementById('feed');
     if(i===stp.a){correct();el.classList.add('right');f.className='feed ok';f.textContent='Muito bem!';document.querySelectorAll('.opt').forEach(o=>o.disabled=true);addNext(f)}
     else{if(!el.classList.contains('wrong'))V.errs++;V.streak=0;el.classList.add('wrong','shake');f.className='feed no';f.textContent='Quase! Tente outra opção.';setTimeout(()=>el.classList.remove('shake'),400)}break}
   case 'ord':{const stp=steps(V.mod,V.les)[V.step];V.st.n=V.st.n||0;const i=+el.dataset.i,f=document.getElementById('feed');
     if(i===V.st.n){V.st.n++;el.remove();document.getElementById('ordlist').insertAdjacentHTML('beforeend',`<div>${esc(stp.items[i])}</div>`);f.textContent='';
       if(V.st.n>=stp.items.length){f.className='feed ok';f.textContent='Na ordem certa!';addNext(f)}}
     else{V.errs++;el.classList.add('shake');f.className='feed no';f.textContent='Ainda não é esse. Pense no que vem primeiro.';setTimeout(()=>el.classList.remove('shake'),400)}break}
   case 'hint':{const i=+el.dataset.i;document.getElementById('hint'+i).textContent=WS.sim.tasks[i].hint;WS.hints++;break}
   case 'test':if(el.dataset.m&&V.view!=='test')V.mod=+el.dataset.m;TQ=null;V.tpart=null;V.tres=null;V.view='test';render();break;
   case 'tpart':V.tpart=el.dataset.p;V.tres=null;V.ttext=null;TQ=null;render();break;
   case 'tans':{const i=+el.dataset.i;TQ.ans.push(i);TQ.i++;
     if(TQ.i>=TQ.qs.length){TQ.done=true;const c=TQ.ans.filter((x,j)=>x===TQ.qs[j].a).length,sc=c*10;const t=s.tests[V.mod]||(s.tests[V.mod]={score:0,tries:0});
       t.score=Math.max(sc,t.score||0);t.tries=(t.tries||0)+1;if(sc>=MIN&&modPassed(s,V.mod)){award(s,'mod'+V.mod)}save()}
     render();break}
   case 'cert':V.sem=+el.dataset.sem;V.view='cert';render();break;
   case 'warm':{V.view='lesson';V.mod=2;V.les=0;V.step=0;V.st={};V.errs=0;V.run=nowS();
     const ez=!lessonDone(s,2,4);LES['2.0']=[0,1,2,3].map(i=>{const w=WARM[(warmI+i)%WARM.length];return {t:'type',text:ez?T(easyTxt(w.y),easyTxt(w.o)):w,title:'Aquecimento do dia: frase '+(i+1)+' de 4'}});warmI+=4;render();break}
   case 'confirm':{const p=today();const id=el.dataset.id;if(!p[id])p[id]={in:'-',ok:true};else p[id].ok=true;save();render();break}
   case 'relopen':V.rel=el.dataset.id;render();break;
   case 'relno':V.rel=null;render();break;
   case 'reldo':{const st=DB.students[V.rel],c=curMod(st);const t=st.tests[c]||(st.tests[c]={score:0,tries:0});
     t.release={by:'Tutora '+tutorName(),at:dayKey(),why:document.getElementById('why').value};award_s(st,'mod'+c);save();V.rel=null;render();break}
   case 'formok':{const stp=steps(V.mod,V.les)[V.step],pr=s.proj||(s.proj={});let ok=true;stp.fields.forEach(([k])=>{const v=document.getElementById('f_'+k).value.trim();if(v.length<3)ok=false;else pr[k]=v});
     const f=document.getElementById('feed');if(!ok){f.className='feed no';f.textContent='Escreva pelo menos uma frasezinha em cada campo.';break}save();finishStep();break}
   case 'slot':V.tutorSlot=el.dataset.t;render();break;
   case 'pcs':{const c=cfgP(el.dataset.p);c.pcs=Math.max(Math.max(1,...c.slots.map(t=>occ(el.dataset.p,t))),c.pcs+ +el.dataset.d);save();render();break}
   case 'enroll':{const n=document.getElementById('en').value.trim(),age=+document.getElementById('ea').value,[p,t]=(document.getElementById('es').value||'|').split('|'),e=document.getElementById('eerr');
     if(n.length<2||!(age>=8&&age<=12)||!p){e.textContent='Preencha nome, idade (8 a 12) e um horário com vaga.';break}
     if(occ(p,t)>=cfgP(p).pcs){e.textContent='Esse horário está lotado.';break}
     const id='m'+Date.now().toString(36);DB.students[id]={id,name:n,age,slot:t,polo:p,ch:age%2?'teo':'mia',prog:{},tests:{},typ:[],hist:[],stk:[],bonus:0};save();render();break}
   case 'polo':V.poloSel=el.dataset.p;render();break;
   case 'say':{if(V.view==='lesson'&&V.st)V.st.ouv=(V.st.ouv||0)+1;const bb=el.closest('.bubble');if(bb)say([...bb.childNodes].filter(n=>n!==el).map(n=>n.textContent).join('. '));break}
   case 'skipbonus':V.st.skipped=1;finishStep();break;
   case 'colcert':V.view='colcert';render();break;
   case 'print':try{window.print()}catch(e){}break;
   case 'mybackup':doBackup('aluno');break;
   case 'bkall':doBackup('computador');break;
   case 'restore':V.modal={kind:'restore'};render();break;
   case 'restoredo':doRestore();break;
   case 'modalx':V.modal=null;render();break;
   case 'copycode':{const t=document.getElementById('codeout');t.select();try{navigator.clipboard.writeText(t.value).catch(()=>document.execCommand('copy'))}catch(e){try{document.execCommand('copy')}catch(_){}}el.textContent='Copiado!';break}
   case 'tutora':V.prevView=V.view;V.view='tutora';render();break;
   case 'tutorax':V.tutOk=false;V.view=V.prevView&&V.prevView!=='tutora'?V.prevView:(V.role==='aluno'?'home':V.role==='tutor'?'tutor':'login');if(V.view==='lesson')V.view='home';render();break;
   case 'pinok':{const v=document.getElementById('pin').value.trim();if(v===(DB.config.pin||PIN_PADRAO)){V.tutOk=true;render()}else{document.getElementById('pinerr').textContent='PIN errado.'}break}
   case 'tabT':V.tabT=el.dataset.t;render();break;
   case 'gabM':V.gabM=+el.dataset.m;render();break;
   case 'tempoTog':DB.config.tempoOff=tempoOn()?1:0;save();render();break;
   case 'tempoCsv':{const t=tempoCsv(),name='tempos-'+dayKey()+'.csv',ok=download(name,t,'text/csv;charset=utf-8');V.modal={kind:'tabela',file:ok?name:'',code:t.replace(/^\ufeff/,'')};render();break}
   case 'tempoCopy':V.modal={kind:'tabela',file:'',code:tempoCsv().replace(/^\ufeff/,'')};render();break;
   case 'tempoClr':V.tclr=1;render();break;
   case 'tempoClrNo':V.tclr=0;render();break;
   case 'tempoClrYes':realStudents().forEach(x=>{x.tlog=[]});V.tclr=0;save();render();break;
   case 'colon':{const c=colCfg();c.on=!c.on;if(c.on&&!c.open.length)c.open=[1];save();render();break}
   case 'colmis':{const c=colCfg(),n=+el.dataset.n;c.open=el.checked?[...new Set([...c.open,n])].sort():c.open.filter(x=>x!==n);save();break}
   case 'cfgsave':{const n=document.getElementById('tname').value.trim(),pn=document.getElementById('tpin').value.trim(),m=document.getElementById('cfgmsg');
     if(pn&&!/^\d{4,8}$/.test(pn)){m.className='feed no';m.textContent='O PIN precisa ter de 4 a 8 números.';break}
     if(n.length>=2){DB.config.tutora=n;DB.config.tutoraSet=1}if(pn)DB.config.pin=pn;const at=document.getElementById('tatalho');if(at){DB.config.atalho=at.value;applyAtalho()}save();m.className='feed ok';m.textContent='Salvo.';break}
  }
});
document.addEventListener('change',e=>{if(e.target.dataset&&e.target.dataset.ck){const all=[...document.querySelectorAll('[data-ck]')].every(x=>x.checked);document.getElementById('ckbtn').disabled=!all}});
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target&&e.target.id==='pin'){const b=document.querySelector('[data-act=pinok]');if(b)b.click()}});
loadSess();render();
