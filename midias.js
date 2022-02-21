//-------------fontes

var Typewriter

//----------imagens
var BF
var Menu
var imgM
var jogar
var jogar_clicado
var Dicas
var Dicas_clicado
var Creditos
var Creditos_clicado
var Voltar
var OK
var confi
var p47
var bala
var cumulos
var mesa_fase_1
var jogar_fundo
var felipe
var eu
var creditos_tela
var titulo
var dicas_tela
var pontosbaixos
var fimdojogo
var pontoscen
var pontoscentocinquenta
//------------------audio----------------------
var clik
var Canção
var maquina_de_escrever
var carnavaldeveneza

function preload(){
  
  P47 = loadImage("Imagens/P_47.png")
  bala = loadImage("Imagens/bala.gif")
  BF = loadImage("Imagens/BF_109.png")
  imgM = loadImage("Imagens/imgM.jpg")
  jogar = loadImage("Imagens/jogar.png")
  jogar_clicado = loadImage("Imagens/jogar_clicado.png")
  Dicas = loadImage("Imagens/Dicas.png")
  Dicas_clicado = loadImage("Imagens/Dicas_clicado.png")
  Creditos = loadImage("Imagens/Creditos.png")
  Creditos_clicado = loadImage("Imagens/Creditos_clicado.png")
  Voltar = loadImage("Imagens/Voltar.png")
  OK = loadImage("Imagens/OK.png")
  confi = loadImage("Imagens/confi.png")
  mesa_fase_1 = loadImage("Imagens/mesa_fase_1.png")
  jogar_fundo = loadImage("Imagens/jogar_fundo.png")
  felipe = loadImage("Imagens/felipe.png")
  eu = loadImage("Imagens/eu.png")
  creditos_tela = loadImage("Imagens/creditos.jpg")
  titulo = loadImage("Imagens/titulo.PNG")
  dicas_tela= loadImage("Imagens/dicas_tela.jpg")
  
  fimdojogo= loadImage("Imagens/fimdojogo.png")
  pontosbaixos= loadImage("Imagens/pontosbaixos.png")
  pontoscen= loadImage("Imagens/pontoscen.png")
  pontoscentocinquenta= loadImage("Imagens/pontoscentocinquenta.png")
  
  cumulos = loadImage("Imagens/Cumulus.jpg")
  
 //--------------audio------------
  clik = createAudio('Sons/clik.mp3')
  Canção= createAudio('Sons/Canção.mp3')
  maquina_de_escrever = createAudio('Sons/maquina_de_escrever.mp3')
  carnavaldeveneza = createAudio('Sons/carnavaldeveneza.mp3')
  
//----------------fontes
Typewriter = loadFont("Imagens/Typewriter.otf")   
  
  
  
  
}