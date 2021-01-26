var canvas, music;
var block1,block2,block3,block4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(100,550,150,40);
    block1.shapeColor="red";

    block2 = createSprite(300,550,150,40);
    block2.shapeColor="orange";

    block3 = createSprite(500,550,150,40);
    block3.shapeColor="yellow";

    block4 = createSprite(700,550,150,40);
    block4.shapeColor="limeGreen";

    //create ball sprite and give velocity
    ball = createSprite(random(70,730),400,50,50);
    ball.shapeColor="white";
}

function draw() {
    background("lightBlue");

    //move ball
    if (keyDown(LEFT_ARROW)) {
        ball.x-=9;
    }

    if (keyDown(RIGHT_ARROW)) {
        ball.x+=9;
    }

    ball.velocityY+=2;

    //add condition to check if box touching surface and make it box
    if (ball.x>775) {
        ball.x=775;
    }

    if (ball.x<25) {
        ball.x=25;
    }
    
    if (isTouching(ball,block1)) {
        ball.velocityY=-30;
        ball.shapeColor="red";
    }

    if (isTouching(ball,block2)) {
        ball.velocityY=-30;
        ball.shapeColor="orange";
    }

    if (isTouching(ball,block3)) {
        ball.velocityY=-30;
        ball.shapeColor="yellow";
    }

    if (isTouching(ball,block4)) {
        ball.velocityY=-30;
        ball.shapeColor="limeGreen";
    }

    drawSprites();
}
