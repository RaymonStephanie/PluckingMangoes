class Stone {
  constructor(x, y, w, h) {
    var options = {
      isStatic: false,
      restitution: 0,
      friction: 1,
      density: 1.2
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.image = loadImage("images/stone.png");
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position
    scale(0.8);
    image(this.image, pos.x, pos.y);
  }
}