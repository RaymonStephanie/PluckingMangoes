class Tree {
  constructor(x, y, w, h) {
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.image = loadImage("images/tree.png");
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position
    scale(0.3);
    image(this.image, pos.x, pos.y);
  }
}