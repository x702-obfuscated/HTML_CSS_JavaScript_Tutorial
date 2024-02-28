class Platform{
  
  constructor(canvas){
    this.width = canvas.width/16;
    this.height = canvas.height/16;
    this.x = 0;
    this.y = canvas.height - this.height;
    this.color = '#0F0';
  }
}

export default Platform;