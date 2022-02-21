let bullets = [];
let inimigos = [];
let score = 0;

function fase_um() {
  maquina_de_escrever.stop();

  background(cumulos);
  rectMode(CENTER);

  image(P47, mouseX, height - 100, 70, 70);

  for (let i = 0; i <1; i++) {
    let enemy = {
      x: random(0, width),
      y: random(-800, 0),
    };
    inimigos.push(enemy);
  }

  //----------------jogar as balas---
  for (let bullet of bullets) {
    image(bala, bullet.x, bullet.y, 20, 20);
    bullet.y -= 7;
  }
  //-----------------inimigos--------------
  for (let enemy of inimigos) {
    enemy.y += 2;
    image(BF, enemy.x, enemy.y, 70, 70);
    if (enemy.y > height ){
     noLoop()
      
    }
  }
  //-----------colisão-------------------------------------
  for (let enemy of inimigos) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
        inimigos.splice(inimigos.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        let novoEnemy = {
          x: random(0, width),
          y: random(-800, 0),
        };
        inimigos.push(novoEnemy);

        score += 1;
      }
    }
  }

  text(score, 25, 25);
}

function mousePressed() {
  //-----------cria as balas-----------
  let bullet = {
    x: mouseX,
    y: height - 50,
  };
  bullets.push(bullet);

  //------------ir para jogar--------------------------------
  if (
    tela == 0 &&
    mouseX >= 20 &&
    mouseX <= 220 &&
    mouseY >= 480 &&
    mouseY <= 580
  ) {
    tela = 3;
    clik.play();
    clik.volume(0.3);
    return false;
  }
  // ----------------------jogar1 para jogar 2---------------------------------------

  if (
    tela == 3 &&
    mouseX >= 730 &&
    mouseX <= 780 &&
    mouseY >= 20 &&
    mouseY <= 70
  ) {
    tela = 4;
    clik.play();
    clik.volume(0.3);
    return false;
  }

  //------------voltar para o menu se tiver em jogar---------------
  if (
    tela == 3 &&
    mouseX >= 20 &&
    mouseX <= 70 &&
    mouseY >= 20 &&
    mouseY <= 70
  ) {
    tela = 0;
    clik.play();
    clik.volume(0.3);
    return false;
  }

  //--------------------------- ir para dicas---------------------------

  if (
    tela == 0 &&
    mouseX >= 230 &&
    mouseX <= 430 &&
    mouseY >= 480 &&
    mouseY <= 580
  ) {
    tela = 1;
    clik.play();
    clik.volume(0.3);
    return false;
  }
  //---------------------------voltar para o menu se tiver em dicas----------------

  if (
    tela == 1 &&
    mouseX >= 20 &&
    mouseX <= 70 &&
    mouseY >= 20 &&
    mouseY <= 70
  ) {
    tela = 0;
    clik.play();
    clik.volume(0.3);
    return false;
  }

  //------------------------ir para creditos---------------------------------------
  if (
    tela == 0 &&
    mouseX >= 440 &&
    mouseX <= 640 &&
    mouseY >= 480 &&
    mouseY <= 580
  ) {
    tela = 2;
    clik.play();
    clik.volume(0.3);
    return false;
  }
  //-------------------------voltar para o menu se tiver em Creditos---------------

  if (
    tela == 2 &&
    mouseX >= 20 &&
    mouseX <= 70 &&
    mouseY >= 20 &&
    mouseY <= 70
  ) {
    tela = 0;
    clik.play();
    clik.volume(0.3);
    return false;
  }
  //---------------------------tela cheia BETA---------------------------------------
  if (
    tela == 0 &&
    mouseX > 730 &&
    mouseX < 780 &&
    mouseY > 50 &&
    mouseY < 100
  ) {
    let fs = fullscreen();
    fullscreen(!fs);
  }

  //------------voltar para o Jogar1 se tiver em jogar2---------------
  if (
    tela == 4 &&
    mouseX >= 20 &&
    mouseX <= 70 &&
    mouseY >= 20 &&
    mouseY <= 70
  ) {
    tela = 3;
    clik.play();
    clik.volume(0.3);
    return false;
  }

  // ----------------------jogar2 para fase_um------------------------------

  if (
    tela == 4 &&
    mouseX >= 730 &&
    mouseX <= 780 &&
    mouseY >= 20 &&
    mouseY <= 70
  ) {
    tela = 5;
    clik.play();
    clik.volume(0.3);
    return false;
  }
  //---------------------------tela de 50 para menu--------------------------------
  
   if (
    tela == 6 &&
    mouseX >= 20 &&
    mouseX <= 70 &&
    mouseY >= 20 &&
    mouseY <= 70
  ) {
    tela = 0;
    clik.play();
    clik.volume(0.3);
    return false;
  }
  
    //---------------------------tela de 100 para menu--------------------------------
  
   if (
    tela == 7 &&
    mouseX >= 20 &&
    mouseX <= 70 &&
    mouseY >= 20 &&
    mouseY <= 70
  ) {
    tela = 0;
    clik.play();
    clik.volume(0.3);
    return false;
  }
  
  
    //---------------------------tela de 150 para menu--------------------------------
  
   if (
    tela == 8 &&
    mouseX >= 20 &&
    mouseX <= 70 &&
    mouseY >= 20 &&
    mouseY <= 70
  ) {
    tela = 0;
    clik.play();
    clik.volume(0.3);
    return false;
  }
  
    //---------------------------tela de 200 para menu--------------------------------
  
   if (
    tela == 9 &&
    mouseX >= 20 &&
    mouseX <= 70 &&
    mouseY >= 20 &&
    mouseY <= 70
  ) {
    tela = 0;
    clik.play();
    clik.volume(0.3);
    return false;
  }
  
  
}
