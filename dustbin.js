var paper,dustbin,ground
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2,

}
function setup() {
    createCanvas(800, 650);
    
    paperSprite=createSprite(width/2, 80, 10,10);
	paperSprite.scale=0.2

	dustbinSprite=createSprite(width/2, 200, 10,10);
	dustbinSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color(255)

    function draw() {
        rectMode(CENTER);
        background(0);
        drawSprites();

        function keyPressed() {
            if (keyCode === UP_ARROW) {

                Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
            }
        }