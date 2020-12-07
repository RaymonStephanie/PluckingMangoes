class Band {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 10
    }
    this.pointB = pointB;
    this.band = Constraint.create(options);
    World.add(world, this.band);
  }

  fly() {
    this.band.bodyA = null;
  }

  display() {
    if (this.band.bodyA) {
      var pointA = this.band.bodyA.position;
      var pointB = this.pointB;
      stroke(255, 255, 255);
      strokeWeight(180);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}