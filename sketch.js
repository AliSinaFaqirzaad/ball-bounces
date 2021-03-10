var canvas;
var music;
var block1, block2 ,block3, block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    block1 = createSprite(0,580,360,30); 
    block1.shapeColor = rgb(0,0,255);


    //create box sprite and give velocity
ball = createSprite(random(20,750),100, 40,40); 
ball.shapeColor = rgb(255,255,255); 
ball.velocityX = 4; 
ball.velocityY = 9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball) && ball.bounceOff(block1)){ 
        ball.shapeColor = rgb(0,0,255); }

        drawSprites();
}
