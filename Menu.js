

function Menu(){
  background(imgM) 
  
  image(confi, 730, 20, 50, 50)
  image(titulo, 10, 0, 380, 230)
    
  
     Canção.loop()
  Canção.volume(0.2)
  maquina_de_escrever.stop()
  
  if(mouseX >= 20 && mouseX <= 220 && mouseY >= 480 && mouseY <= 580){
    image(jogar_clicado,20,480,200,100)
   
    
  }
  else{
    image(jogar,20,480,200,100)
  }
  
//---------------------Dicas-over----------------------------
 
  if(mouseX >= 230 && mouseX <= 430 && mouseY >= 480 && mouseY <= 580){
    image(Dicas_clicado,230,480,200,100)
  }
  else{
    image(Dicas,230,480,200,100)
  }
  
//---------------------Creditos-over-------------------------
  
  if(mouseX >= 440 && mouseX <= 640 && mouseY >= 480 && mouseY <= 580){
    image(Creditos_clicado,440,480,200,100)
  }
  else{
    image(Creditos,440,480,200,100)
  }

}

