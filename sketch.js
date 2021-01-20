const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var superhero1

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);

  superhero1 = new hero(500, 400, 80, 30);
  // create sprites here

  World.add(world);


  Engine.run(engine);
}

function draw() {
  background(0);

  superhero1.display()

}

