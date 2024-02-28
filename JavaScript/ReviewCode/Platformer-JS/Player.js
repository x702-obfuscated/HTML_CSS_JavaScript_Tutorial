
//Blueprint for players
//Defines what a player is (data)
//Defines what a player does (functions/methods)
class Player {
  //stores the keys being pressed
  static keys = {};

  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.width = 30;
    this.height = 30;
    this.color = "#00F";
    this.speed = 5;
    this.jumping = false;
    this.jumpHeight = 200;
    this.jumpSpeed = 25;
    this.jumpCount = 0;
    this.freeFall = true;
    
    //Listens for keys to be pressed, then addeds the key value pair to keys. 
    window.addEventListener("keydown", e => {Player.keys[e.key] = true;});
    window.addEventListener("keyup", e => {Player.keys[e.key] = false;});
  }

  //Change the position of the player based on what keys are pressed.
  move(){
    
    //check if the right keys is down, and the player x value is below the width of the canvas
    if (Player.keys['ArrowRight'] && this.x < this.canvas.width - this.width) {
      this.x += this.speed;
    }

    //check if the left key is down, and the player x value is above 0
    if (Player.keys['ArrowLeft'] && this.x > 0) {
      this.x -= this.speed;
    }


    // Simulate jumping
    if (Player.keys['ArrowUp'] && !this.freeFall) {
      this.jumping = true;
      this.freeFall = true;
      this.jumpCount = 0;
    }

    if (this.jumping) {
      this.y -= 7;
      this.jumpCount += 7;

      if (this.jumpCount >= this.jumpHeight) {
        this.jumping = false;
      }
    } 

  }

  //Draws the player on the screen
  draw(){
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x,this.y,this.width, this.height);

  }
}

export default Player