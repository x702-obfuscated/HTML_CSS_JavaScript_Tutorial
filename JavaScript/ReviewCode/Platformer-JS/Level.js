import Player from "./Player.js";
import Platform from "./Platform.js";

//Level Class Information
//Get the canvas and context
class Level{

  constructor(){
    //Get the canvas and context
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d")
    this.canvas.height = 800; console.log("canvas.height", this.canvas.height);
    this.canvas.width = 800; console.log("canvas.width", this.canvas.width);
    
    //array of platforms to be placed on screen
    this.platforms = [];

    //array of players and enemies
    this.entities = [];


    //curent level being played
    this.currentLevel = 1;

    //Physics
    this.g = 5

    this.update = this.update.bind(this);

    this.build();
  }

  build(){
    const level = this.checkLevel();
    //add platforms to the platforms array
    for(let row = 0; row < level.length; row++ ){
      for(let col = 0; col < level[row].length; col++){

        if(level[row][col] == 1){
          const platform = new Platform(this.canvas);
          platform.x = col * platform.width;
          platform.y = row * platform.height;
          this.platforms.push(platform);
        }

        if(level[row][col] == 2){
          const platform = new Platform(this.canvas)
          const player = new Player(this.canvas,this.ctx);
          player.x = col * platform.width;
          player.y = row * platform.height;
          this.entities.push(player);
        }

      }
    }


    

  }

  draw(){
    this.platforms.forEach(platform => {
      this.ctx.fillStyle = platform.color;
      this.ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    })

  }

  update(){
    this.entities.forEach(entity => {
      entity.move()
      this.checkPlatformCollisions();
      this.applyGravity();
    });

    this.clearCanvas();
    this.draw();

    this.entities.forEach(entity => {
      entity.draw();
    })
  
    requestAnimationFrame(this.update);
  }

  checkLevel(){
    switch(this.currentLevel){
      case 1:
        return Level.one;
      case 2:
        return Level.two;
      case 3:
        return Level.three;
      default:
        console.log("Check Level Error: level = ", this.level);
    }
  }

  checkPlatformCollisions(){
    this.entities.forEach(entity => {
      this.platforms.forEach(platform => {
        if(
          entity.x < platform.x + platform.width &&
          entity.x + entity.width > platform.x &&
          entity.y + entity.height > platform.y
        ){
          entity.y = platform.y - entity.height;
          entity.freeFall = false;
        }
        else if (!entity.jumping) {
          entity.freeFall = true;
        }
      });
    });
  }

  applyGravity(){
    this.entities.forEach(entity => {
      if(entity.freeFall){
        if(entity.y < this.canvas.height - entity.height) {
          entity.y += this.g;
        }
      }
    })
  }

  clearCanvas(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  }
}


Level.one = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//1
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//2
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//3
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//4
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//5
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//6
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//7
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//8
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//9
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//10
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//11
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//12
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//13
  [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],//14
  [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//15
  [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],//16
];

Level.two = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//1
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//2
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//3
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//4
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//5
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//6
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//7
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//8
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//9
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//10
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//11
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//12
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//13
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//14
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//15
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],//16
];

Level.three = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//1
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//2
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//3
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//4
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//5
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//6
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//7
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//8
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//9
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//10
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//11
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//12
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//13
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//14
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//15
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],//16
];

export default Level;



