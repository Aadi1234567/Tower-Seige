const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2;
var ball;
var pollyimg,slingshot,engine,world;


function preload(){
pollyimg =loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,900);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground1 = new Ground(865,350,400,20);
    ground2 = new Ground(550,785,400,20);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingshot = new SlingShot(this.ball,{x:200,y:350});

    //LEVEL 1 GROUND 1
    box1 = new Box(760,320,30,40);
    box2 = new Box(795,320,30,40);
    box3 = new Box(830,320,30,40);
    box4 = new Box(865,320,30,40);
    box5 = new Box(900,320,30,40);
    box6 = new Box(935,320,30,40);
    box7 = new Box(970,320,30,40);
    //LEVEL 2 GROUND 1
    box8 = new Box(795,280,30,40);
    box9 = new Box(830,280,30,40);
    box10 = new Box(865,280,30,40);
    box11 = new Box(900,280,30,40);
    box12 = new Box(935,280,30,40);
    //LEVEL 3 GROUND 1
    box13 = new Box(830,240,30,40);
    box14 = new Box(865,240,30,40);
    box15 = new Box(900,240,30,40);
    //LEVEL 4 GROUND 1
    box16 = new Box(865,200,30,40);
    //LEVEL 1 GROUND 2
    box17 = new Box(450,755,30,40);
    box18 = new Box(485,755,30,40);
    box19 = new Box(520,755,30,40);
    box20 = new Box(555,755,30,40);
    box21 = new Box(590,755,30,40);
    box22 = new Box(625,755,30,40);
    box23 = new Box(660,755,30,40);
    //LEVEL 2 GROUND 2
    box24 = new Box(485,715,30,40);
    box25 = new Box(520,715,30,40);
    box26 = new Box(555,715,30,40);
    box27 = new Box(590,715,30,40);
    box28 = new Box(620,715,30,40);
     //LEVEL 4 GROUND 2
     box29 = new Box(520,675,30,40);
     box30 = new Box(555,675,30,40);
     box31 = new Box(590,675,30,40);
     //LEVEL 5 GROUND 2
     box32 = new Box(555,635,30,40);
}

function draw(){
    background("gray")
    ground1.display();
    ground2.display();

    fill("gold");
    imageMode(CENTER);
    
    image(pollyimg,ball.position.x,ball.position.y,40,40);

    slingshot.display();


    fill("black");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("red");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("black");
    box13.display();
    box14.display();
    box15.display();
    fill("red");
    box16.display();
    fill("black");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    fill("lime");
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    fill("black")
    box29.display();
    box30.display();
    box31.display();
    fill("lime");
    box32.display();
  

    
}

function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    slingshot.fly();
}