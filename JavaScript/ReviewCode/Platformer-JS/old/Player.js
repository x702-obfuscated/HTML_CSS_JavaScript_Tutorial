import  Level  from './Level.js';

class Player {
  
  static keys = {};

  constructor(canvas){
    this.canvas = canvas;
    this.x = 0;
    this.y = 0;
    this.width = 30,
    this.height = 30;
    this.color = '#00F';
    this.speed = 5;
    this.jumpHeight = 200;
    this.jumpSpeed = 25;
    this.jumpCount = 0;
    this.freeFall = false;

    window.addEventListener('keydown', e => {Player.keys[e.key] = true;});
    window.addEventListener('keyup', (e) => {Player.keys[e.key] = false;});
  }

  draw(ctx){
      // Draw player
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  move(){
    // Move player
    if (Player.keys['ArrowRight'] && this.x < this.canvas.width - this.width) {
      this.x += this.speed;
    }

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
    else if (this.y < this.canvas.height - this.height) {
      Level.applyGravity(this.y);
  }

  }


}

export default Player;


