const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(width/2,height-20,width,10)
    //leve1 of enemy house
    box1 = new Box(500,300,70,70);
    box2 = new Box(700,300,70,70);
    pig1 = new Pig(600,300)
    //PI =180 degree
    //90 = PI/2
    //30 = PI/6
    log1 = new Log(600,280,300,PI/2)

    //level 2 of enemy house
    box3 = new Box(500,200,70,70);
    box4 = new Box(700,200,70,70);
    pig2 = new Pig(600,200)
    log2 = new Log(600,180,300,PI/2)

    //level 3 - roof of enemy house
    log3 = new Log(650,90,190,PI/-2)
    log4 = new Log(550,90,190,PI/7)
    box5 = new Box(600,120,70,70);


    bird = new Bird(200,200)
}

function draw(){
    background(0);
    Engine.update(engine);
   // console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    log3.display();
    log4.display();
    box5.display()
    
    bird.display()
}