var tela = 0




function setup() {
  createCanvas(800, 600);
  


 
}

//---------------------------------------
function draw() {
  textFont(Typewriter)
  
  if(tela == 0){
    Menu();
  }
  if(tela == 1){
    dicas()
  }
  if(tela == 2){
    creditos()
  }
  if(tela == 3){
    Jogar()
  }
  if(tela == 4){
    Jogar_2()
  }
  if(tela ==5){
    fase_um()
  }
  if (tela == 6){
    pontos1()
  }
  if (tela == 7){
    pontos2()
  }
  if (tela == 8){
    pontos3()
  }
  if (tela == 9){
    pontos4()
  }

  
}
  
 