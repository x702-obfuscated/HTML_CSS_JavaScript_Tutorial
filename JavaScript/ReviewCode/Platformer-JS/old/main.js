import  Player from './Player.js';
import  Level  from './Level.js';

// Get the canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.height = 800;
canvas.width = 800;
console.log('Canvas Width', canvas.width);
console.log('Convas Height', canvas.height);

//Physics Properties
// g = 5;


// Player properties
// const player = new Player(canvas);

// const player = {
//   x: 50,
//   y: 300,
//   width: 30,
//   height: 30,
//   color: '#00F',
//   speed: 5,
//   falling: false,
//   jumpHeight: 200,
//   jumpSpeed:25,
//   jumpcount: 0,
//   freeFall : false,
// };


// Platform properties
const level = new Level(canvas);
// const platform = {
//   width: 50,
//   height: 50,
//   x: 0,
//   y: 0,

//   color: '#0F0',
// };Level.one = [
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

// platform.y = canvas.height - platform.height;

// Handle keyboard input
// const keys = {};
// window.addEventListener('keydown', e => {keys[e.key] = true;});

// window.addEventListener('keyup', (e) => {keys[e.key] = false;});

// function move(){
// // Move player
//   if (keys['ArrowRight'] && player.x < canvas.width - player.width) {
//     player.x += player.speed;
//   }

//   if (keys['ArrowLeft'] && player.x > 0) {
//     player.x -= player.speed;
//   }


//   // Simulate jumping
//   if (keys['ArrowUp'] && !player.freeFall) {
//     player.jumping = true;
//     player.freeFall = true;
//     player.jumpCount = 0;
//   }

//   if (player.jumping) {
//     player.y -= 7;
//     player.jumpCount += 7;

//     if (player.jumpCount >= player.jumpHeight) {
//       player.jumping = false;
//     }
//   } 
//   else if (player.y < canvas.height - player.height) {
//     applyGravity()
//   }

// } 

// function applyGravity(){
//   player.y += g;
// }

function checkPlatformCollisions(){
  level.platforms.forEach(platform => {
    // Check for collision with each platform
    if (
      player.x < platform.x + platform.width &&
      player.x + player.width > platform.x &&
      player.y + player.height > platform.y 
    ) {
      player.y = platform.y - player.height;
      player.freeFall = false;
    }

  }); 
}

// function drawPlatform(){
//   // Draw platform
//   ctx.fillStyle = platform.color;
//   ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
// }

// function drawPlayer(){
//   // Draw player
//   ctx.fillStyle = player.color;
//   ctx.fillRect(player.x, player.y, player.width, player.height);
// }

function clearCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Update function
function update() {
// move();
// checkPlatformCollisions();
// clearCanvas()
// drawPlatform()
// drawPlayer()
player.move();
checkPlatformCollisions();
clearCanvas()
level.draw(ctx);
player.draw(ctx);


// Request next animation frame
requestAnimationFrame(update);
/*
By calling requestAnimationFrame(update);, you are essentially saying, 
"Hey browser, when you're ready to repaint, please call my update function 
so I can update the game state and redraw the screen."
*/
}

// Start the game loop
update();


