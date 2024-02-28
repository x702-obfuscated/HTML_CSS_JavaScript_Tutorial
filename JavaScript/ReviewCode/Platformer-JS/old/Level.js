import Platform from './Platform.js';
import Player from './Player.js';

class Level{
  //Physics Constants
  static g = 5;


  static applyGravity(object){
    object += Level.g;
  }

  constructor(canvas){
    this.canvas = canvas;
    this.platforms = [];
    this.level = 1;
    this.create();

  }
  checkLevel(){
    switch(this.level){
      case 1:
        return Level.one;
      case 2:
        return Level.two;
      case 3:
        return Level.three;
      default:
        console.log("checkLevel error this.level =" + this.level)
        return Level.one;
    }

  }

  create(){
    const level = this.checkLevel();
    //Add platforms to the level
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
          const player = new Player(this.canvas);
          player.x = col * platform.width;
          player.y = row * platform.height;
        }

      }
    }
  }

  draw(ctx){
    //Draw all platforms on the canvas
    this.platforms.forEach(platform => {
      ctx.fillStyle = platform.color;
      ctx.fillRect(platform.x,platform.y,platform.width,platform.height);
    });
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