const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var s1, s2;
var g1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    g1 = new Ground();
    s1 = new stick(220,200,50,50);
    s2 = new stick(240,100,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    s1.display();
    s2.display();
    g1.display();
   
}