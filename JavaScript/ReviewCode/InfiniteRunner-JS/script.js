//Single Line comment

/* 
  Multi
  Line
  Comment
*/

/** JSDoc comment 
 * JSDoc comments provide a way to document the purpose and usage of 
 * functions, parameters, and return values in a standardized manner.
 */


/* 
  Define variables with var, let, or const
  var is old and replaced with let
  const is for a constant (a variable that will not change)
*/

//Variables

//board
let board; 
let boardWidth = 800;
let boardHeight = 300;
let context;

//dino
let dinoWidth = 88;
let dinoHeight = 94;
let dinoX = 50;
let dinoY = boardHeight - dinoHeight;
let dinoImg;

//cactus
let cactusArray = [];
let cactus1Width = 34;
let cactus2Width = 69;
let cactus3Width = 102;
let cactusHeight = 70;

let cactusX = 700;
let cactusY =  boardHeight - cactusHeight;

// let cactus1Img;
// let cactus2Img;
// let cactus3Img;


//physics
let xVel = -8; //cactus moving left speed
let yVel =  0; 
let g = .4;

let gameOver = false;
let score = 0;


/* 
  Defining an object called dino
  Objects store 2 things data and functions that operate on that data
*/

//Dino Object
let dino = {
  x : dinoX,
  y : dinoY,
  width : dinoWidth,
  height : dinoHeight,

  draw : drawDino,
}
/////////////////////////////////////////////////////////////////////

//Cactus 1 Object
let cactus1 = {
  x : cactusX,
  y : cactusY,
  width: cactus1Width,
  height: cactusHeight,

  draw : drawCactus1
}

let cactus2 = {
  x : cactusX,
  y : cactusY,
  width: cactus2Width,
  height: cactusHeight,

  draw : drawCactus2
}

let cactus3 = {
  x : cactusX,
  y : cactusY,
  width: cactus3Width,
  height: cactusHeight,

  draw : drawCactus3
}





/** Defining the window.onload() function (this action is performed when the window loads) */
window.onload = function() {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;

  context = board.getContext("2d"); //used for drawing on the the board

  //Calling the drawDino function (acting the computer to drawDino())
  drawDino();

  requestAnimationFrame(update);
  setInterval(placeCactus, 1000); // 1000 milliseconds = 1 second
  document.addEventListener("keydown", moveDino);
}
//////////////////////////////////////////////////////////////////////


/** Defining a function (teaching the computer how to drawDino()) */
function drawDino(){
  context.fillStyle = "blue";
  context.fillRect(dino.x,dino.y,dino.width,dino.height);

  //dinoImg = new Image();
  //dinoImg.src = "./img/dino.png";
  // dinoImg.onload = function(){
  //   context.drawImage(dinoImg, dino.x, dino.y,dino.width,dino.height);
  // }
  
}

function drawCactus1(){
  context.fillStyle = "green";
  context.fillRect(cactus1.x,cactus1.y,cactus1.width,cactus1.height);

  //cactus1Img = new Image();
  //cactus1Img.src = "./img/cactus1.png";
}

function drawCactus2(){
  context.fillStyle = "green";
  context.fillRect(cactus2.x,cactus2.y,cactus2.width,cactus2.height);

  //cactus2Img = new Image();
  //cactus2Img.src = "./img/cactus2.png";
}

function drawCactus3(){
  context.fillStyle = "green";
  context.fillRect(cactus3.x,cactus3.y,cactus3.width,cactus3.height);

  //cactus3Img = new Image();
  //cactus3Img.src = "./img/cactus3.png";  
}

function drawScore(){
  context.fillStyle = "black";
  context.font = "20px courier";
  score ++;
  context.fillText(score, 5, 20)

}


function update(){
  requestAnimationFrame(update);
  
  if(gameOver){
    return;
  }

  yVel += g;
  dino.y = Math.min(dino.y + yVel, dinoY); //apply gravity to current dino.y, making sure it doesn't exceed the ground.  
  context.clearRect(0,0,board.width,board.height);


  // context.drawImage(dinoImg,dino.x,dino.y,dino.width,dino.height);
  drawDino();

  //cactus
  for(let i = 0; i < cactusArray.length; i++){
    cactus1.x += xVel;
    drawCactus1();

    // let cactus = cactusArray[i];
    // cactus.x += xVel;
    // cactus.drawImage(cactus.img, cactus.x, cactus.y,cactus.width,cactus.height);
    
    if(checkCollision(dino, cactus1)){
      gameOver = true;
      // dinoImg.src = "./img/dino-dead.png";
      // dinoImg.onload = function(){
      //   context.drawImage(dinoImg,dino.x,dino.y,dino.width,dino.height);
      // }

    }

    drawScore();
  }
}

function moveDino(e){  
  if(gameOver){
    return;
  }

  if((e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyW") && dino.y == dinoY){
    yVel = -10;
  }
  

}

function placeCactus(){

  let cactus = {
    img : null,
    x : cactusX,
    y : cactusY,
    width : null,
    height: cactusHeight,

  }

  let placeCactusChance = Math.random();// 0 - 0.9999....

  if(placeCactusChance > .90){ //10% chance of cactus3
    // cactus.img = cactus3Img;
    cactus.width = cactus3.width;
    cactusArray.push(cactus);
  }
  else if(placeCactusChance > .70){//30% chance of cactus2
    // cactus.img = cactus2Img;
    cactus.width = cactus2.width;
    cactusArray.push(cactus);
  }
  else if(placeCactusChance > .50){// 50% chance of cactus1
    // cactus.img = cactus1Img;
    cactus.width = cactus1.width;
    cactusArray.push(cactus);
  }

  if(cactusArray.length > 5){
    cactus.Array.shift(); // remove the 1st elem from the array to the array doesn't constantly grow
    //this frees up computer memory. 
  }
}

function checkCollision(a,b){
  return a.x < b.x + b.width && //a's top left corner doesn't reach b's top right corner
         a.x + a.width > b.x && //a's top right corner passes b's top left corner
         a.y < b.y + b.height && //a's top left corner doesn't reach b's bottom left corner
         a.y + a.height > b.y; // a's bottom left corner passes b's top left corner
}



