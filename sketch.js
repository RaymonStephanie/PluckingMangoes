const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mangoes;
var tree;
var boy;
var stone;
var band;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;

function setup() {
	mangoes = [];
	createCanvas(1800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	tree = new Tree(3500, 1100, 50, 50);
	boy = new Boy(3000, 7000, 20, 20);
	stone = new Stone(500, 7800, 20, 20);
	band = new Band(stone.body, {
		x: 3000,
		y: 7800
	});
	mango1 = new Mango(16000, 7000, 50);
	mango2 = new Mango(15500, 6000, 50);
	mango3 = new Mango(16500, 5500, 50);
	mango4 = new Mango(16300, 6300, 50);
	mango5 = new Mango(17000, 6300, 50);
	mango6 = new Mango(17700, 6700, 50);
	mangoes.push(mango1);
	mangoes.push(mango2);
	mangoes.push(mango3);
	mangoes.push(mango4);
	mangoes.push(mango5);
	mangoes.push(mango6);
}


function draw() {
	Engine.update(engine);
	background(72);
	tree.display();
	boy.display();
	stone.display();
	band.display();
	for (let i = 0; i < mangoes.length; i++) {
		mangoes[i].display();
	}
}

function mouseDragged() {
	Body.setPosition(stone.body, {
		x: mouseX,
		y: mouseY
	});
}

function mouseReleased() {
	band.fly();
}