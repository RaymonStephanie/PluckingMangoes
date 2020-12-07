class Boy {
  constructor(x,y,w,h) {
    var options = {
      isStatic : true
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.image = loadImage("images/boy.png");
    World.add(world, this.body);
  }

  display() {
    imageMode(CENTER);
    var pos = this.body.position;
    scale(0.3);
    image(this.image,pos.x,pos.y);
  }

}