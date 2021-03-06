var angle
var game
var computer
var homescreen
var speed
var round1
var round2
var round3
var round4
var round5
var ad = true
var ac = true
var ab = true
var aa = true
var win = false
var ball_url = "https://WJohnson1.github.io/Olympics/Rugby/ball.png"
var ballimg;
var eimg;
var playerimg;
var player1img;
var player2img
var russiaimg;
var brazilimg;
var chinaimg;
var greatbimg;
function preload(){
	ballimg = loadImage(ball_url)
	eimg = loadImage("https://WJohnson1.github.io/Olympics/Rugby/e.png");
	playerimg = loadImage("https://WJohnson1.github.io/Olympics/Rugby/player.png");
	player1img = loadImage("https://WJohnson1.github.io/Olympics/Rugby/player1.png");
	player2img = loadImage("https://WJohnson1.github.io/Olympics/Rugby/player2.png");

}
function setup(){
	homescreen = true
	game = false
	round1 = true
	round2 = false
	round3 = false
	round4 = false
	round5 = false
	speed = 5
	score = 0 
	this.delay = 0
	this.choice = 5
	createCanvas(1350,600)
	background(0,255,0)
  	ball = createSprite(350,75,10,10)
  	//ball.shapeColor = color(102,51,0)
	ball.addImage(ballimg) 
	ball2 = createSprite(350,550,10,10)
  	//ball2.shapeColor = color(102,51,0)
	ball2.addImage(ballimg)   	
  	barrier1 = createSprite(350,550,50,50)
  	barrier1.shapeColor = color(123,183,166)
	ball3 = createSprite(150,500,10,10)
  	// ball3.shapeColor = color(102,51,0)
  	ball3.addImage(ballimg) 
  	barrier2 = createSprite(150,500,50,50)
  	barrier2.shapeColor = color(123,183,166)
	ball4 = createSprite(150,300,10,10)
  	// ball4.shapeColor = color(102,51,0)
  	ball4.addImage(ballimg) 
  	barrier3 = createSprite(150,300,50,50)
  	barrier3.shapeColor = color(123,183,166)
	ball5 = createSprite(50,25,10,10)
  	//ball5.shapeColor = color(102,51,0)
  	ball5.addImage(ballimg) 
  	barrier4 = createSprite(50,25,50,50)
  	barrier4.shapeColor = color(123,183,166)  	  		
	p1 = createSprite(1250,150,25,25)
  	p1.shapeColor= color(255,0,0)
  	p1.addImage(eimg)
	p2 = createSprite(1250,300,25,25)
  	p2.shapeColor= color(255,0,0)
  	p2.addImage(eimg)
	p3 = createSprite(1250,450,25,25)
  	p3.shapeColor= color(255,0,0)
  	p3.addImage(eimg)
	e1 = createSprite(1250,75,25,25)
  	e1.shapeColor= color(255,0,0)
  	e1.addImage(eimg)
	e2 = createSprite(1250,225,25,25)
  	e2.shapeColor= color(255,0,0)
  	e2.addImage(eimg) 
	e3 = createSprite(1250,375,25,25)
  	e3.shapeColor= color(255,0,0)
  	e3.addImage(eimg) 
	e4 = createSprite(1250,525,25,25)
  	e4.shapeColor= color(255,0,0)
  	e4.addImage(eimg) 
	goal2 = createSprite(1320,300,50,600)
  	goal2.shapeColor= color(123,183,166)  	
  	halfpoint = createSprite(675,300,35,600)
  	halfpoint.shapeColor = color(123,183,166)
	wall1 = createSprite(0,300,25,600)
  	wall1.shapeColor= color(123,183,166)
	wall2 = createSprite(675,0,1350,25)
  	wall2.shapeColor= color(123,183,166)  	
	wall3 = createSprite(1350,300,25,600)
  	wall3.shapeColor= color(123,183,166)
	wall4 = createSprite(675,600,1350,25)
  	wall4.shapeColor= color(123,183,166)
  	player = createSprite(300,75,25,25)
  	player.addImage(playerimg)
}
function draw(){
	if (homescreen === true) {
		background(123,183,166)
		textSize(50)
		fill(255,255,255)
		text("Are You Ready to Face the Best Rugby Team in the World", 25,100)
		text("Use WASD to Move",425,250)
		textSize(25)
		text("Take the Rugby Ball to the endzone",445,275)
		text("Do it 5 times and your team wins",455,350)
		textSize(50)
		text("Press Enter to Start",425,450)
		if (keyCode === ENTER){
			homescreen = false
			game = true
		}
	}
	if (game === true && homescreen === false){
		background(0,255,0)
		barrier1.shapeColor = color(0,255,0)
	  	barrier2.shapeColor = color(0,255,0)
	  	barrier3.shapeColor = color(0,255,0)
  	  	barrier4.shapeColor = color(0,255,0) 
  	  	goal2.shapeColor = color(255,255,0)
  	  	halfpoint.shapeColor = color(0,0,0) 
  	  	wall1.shapeColor= color(255,255,255)
  	  	wall2.shapeColor= color(255,255,255)
  	  	wall3.shapeColor= color(255,255,255)
  	  	wall4.shapeColor= color(255,255,255)	  		
		textSize(40)
		text(score, 250,100)
		text("Get to the End Zone with the ball", 50,200)
		textSize(25)	
		text("Without the Defenders Getting You", 125,275)
		if(aa=== true){
			player.overlap(ball,getBall)
		}
		else if (aa === false && ab === true) {
			player.overlap(ball2,getBall2)
		}
		else if (aa === false && ab === false && ac === true) {
			player.overlap(ball3,getBall3)
		}
		else if (aa === false && ab === false && ac === false && ad === true) {
			player.overlap(ball4,getBall4)
		}
		else if (aa === false && ab === false && ac === false && ad === false) {
			player.overlap(ball5,getBall5)
		}
		playerMovement()	
		boundary()
		computerMovement()
		halfway()
		goal()
		end()
		drawSprites()
	}
	if (game === false && homescreen === false) {
		textSize(40)
		if (win === true){
			text("5",250,100)
		}
		else if (win === false) {
			text(score,250,100)
		}
		textSize(50)
		text("Press Enter to Play Again",75,490)
		if (keyCode === ENTER) {
			if (win === true){
				e.remove()
			}
			location.reload();
		}
	}
}
function getBall(){
	ball.remove()
}
function getBall2(){
	ball2.remove()
	round2 = true
}
function getBall3(){
	ball3.remove()
	round3 = true
}
function getBall4(){
	ball4.remove()
	round4 = true
}
function getBall5(){
	ball5.remove()
	round5 = true
}

function playerMovement(){
	if (keyDown(65)) {
		player.addImage(player2img)
		player.setSpeed(speed,180)
	}
	else if (keyDown(87)) {
		player.setSpeed(speed,270)
	}
	else if (keyDown(68)) {
		player.addImage(playerimg)
		player.setSpeed(speed,0)
	}
	else if (keyDown(83)) {
		player.setSpeed(speed,90)
	}
}
function computerMovement(){	
	if (game === true) {
	    if(millis() > this.delay){
        	this.choice = int(random(1,5))
        	this.delay = millis() + 500
    	}
    	if(this.choice === 1){
      		speed1 = 5
      		speed2 = 2.5
      		speed3 = 10
      		speed4 = 7.5
      		angle = 90
      		angle2 = 0
      		angle3 = 0
      		angle4 = 180
      		angle5 = 270
      		angle6 = 90
      		angle7 = 180
    	}
    	if(this.choice === 2){
		    speed1 = 2.5
      		speed2 = 5
      		speed3 = 7.5
      		speed4 = 10 
		    angle = 270
      		angle2 = 90
      		angle3 = 270
      		angle4 = 90
      		angle5 = 0
      		angle6 = 180
      		angle7 = 0
	    }
    	if(this.choice === 3){
		    speed1 = 7.5
      		speed2 = 10
      		speed3 = 2.5
      		speed4 = 5      		
      		angle = 0
      		angle2 = 180
      		angle3 = 90
      		angle4 = 0
      		angle5 = 180
      		angle6 = 270
      		angle7 = 90
    	}
   		if(this.choice === 4){
		    speed1 = 10
      		speed2 = 2.5
      		speed3 = 5
      		speed4 = 7.5
      		angle = 180
      		angle2 = 270
      		angle3 = 180
      		angle4 = 270
      		angle5 = 90
      		angle6 = 0
      		angle7 = 270
    	}
		p1.setSpeed(speed1,angle)
		p2.setSpeed(speed2,angle2)
		p3.setSpeed(speed3,angle3)
		e1.setSpeed(speed4,angle4)
		e2.setSpeed(speed1,angle5)
		e3.setSpeed(speed2,angle6)
		e4.setSpeed(speed3,angle7)
	}
}
function boundary(){
	if (player.collide(wall1)) {
		player.setSpeed(-1,180)
	}		
	if (player.collide(wall2)) {
		player.setSpeed(-1,270)
	}
	if (p1.collide(wall2)) {
		p1.setSpeed(-1,270)
	}
	if (p2.collide(wall2)) {
		p2.setSpeed(-1,270)
	}
	if (p3.collide(wall2)) {
		p3.setSpeed(-1,270)
	}
	if (e1.collide(wall2)) {
		e1.setSpeed(-1,270)
	}
	if (e2.collide(wall2)) {
		e2.setSpeed(-1,270)
	}
	if (e3.collide(wall2)) {
		e3.setSpeed(-1,270)
	}
	if (e4.collide(wall2)) {
		e4.setSpeed(-1,270)
	}
	if (player.collide(wall3)) {
		player.setSpeed(-1,0)
	}
	if (p1.collide(wall3)) {
		p1.setSpeed(-1,0)
	}
	if (p2.collide(wall3)) {
		p2.setSpeed(-1,0)
	}
	if (p3.collide(wall3)) {
		p3.setSpeed(-1,0)
	}
	if (e1.collide(wall3)) {
		e1.setSpeed(-1,0)
	}
	if (e2.collide(wall3)) {
		e2.setSpeed(-1,0)
	}
	if (e3.collide(wall3)) {
		e3.setSpeed(-1,0)
	}
	if (e4.collide(wall3)) {
		e4.setSpeed(-1,0)
	}
	if (player.collide(wall4)) {
		player.setSpeed(-1,90)
	}
	if (p1.collide(wall4)) {
		p1.setSpeed(-1,90)
	}
	if (p2.collide(wall4)) {
		p2.setSpeed(-1,90)
	}
	if (p3.collide(wall4)) {
		p3.setSpeed(-1,90)
	}
	if (e1.collide(wall4)) {
		e1.setSpeed(-1,90)
	}
	if (e2.collide(wall4)) {
		e2.setSpeed(-1,90)
	}
	if (e3.collide(wall4)) {
		e3.setSpeed(-1,90)
	}
	if (e4.collide(wall4)) {
		e4.setSpeed(-1,90)
	}

}
function halfway(){
	if (p1.collide(halfpoint)) {
		p1.setSpeed(0,180)
	}
	if (p2.collide(halfpoint)) {
		p2.setSpeed(0,180)
	}
	if (p3.collide(halfpoint)) {
		p3.setSpeed(0,180)
	}
	if (e1.collide(halfpoint)) {
		e1.setSpeed(0,180)
	}
	if (e2.collide(halfpoint)) {
		e2.setSpeed(0,180)
	}
	if (e3.collide(halfpoint)) {
		e3.setSpeed(0,180)
	}					
	if (e4.collide(halfpoint)) {
		e4.setSpeed(0,180)
	}
}
function goal(){
	if (p1.collide(goal2)) {
		p1.setSpeed(0,0)
	}
	if (p2.collide(goal2)) {
		p2.setSpeed(0,0)
	}
	if (p3.collide(goal2)) {
		p3.setSpeed(0,0)
	}
	if (e1.collide(goal2)) {
		e1.setSpeed(0,0)
	}
	if (e2.collide(goal2)) {
		e2.setSpeed(0,0)
	}
	if (e3.collide(goal2)) {
		e3.setSpeed(0,0)
	}					
	if (e4.collide(goal2)) {
		e4.setSpeed(0,0)
	}
}
function end(){
	fill(0)
	textSize(50)
	if (player.collide(p1)) {
		game = false
		text("Game Over", 200,390)	
	}
	if (player.collide(p2)) {
		game =false
		text("Game Over", 200,390)
	}
	if (player.collide(p3)) {
		game = false
		text("Game Over", 200,390)
	}
	if (player.collide(e1)) {
		game = false
		text("Game Over", 200,390) 
	}
	if (player.collide(e2)) {
		game =false
		text("Game Over", 200,390)
	}
	if (player.collide(e3)) {
		game = false
		text("Game Over", 200,390)
	}
	if (player.collide(e4)) {
		game = false
		text("Game Over", 200,390)
	}
	if (player.collide(goal2)) {
		if (round1 === true && aa === true){
			score = score + 1
			round1 = false
			aa = false
			barrier1.remove()
		}	
		if (round2 === true && ab === true){
			score = score + 1
			round2 = false
			ab = false
			barrier2.remove()
		}	
		if (round3 === true && ac === true){
			score = score + 1
			round3 = false
			ac = false
			barrier3.remove()
		}	
		if (round4 === true && ad === true){
			score = score + 1
			round4 = false
			ad = false
			barrier4.remove()
		}
		if (round5 === true && round4 === false){
			score = score + 1
			round5 = false
			youWin()
		}	
	}
}
function youWin(){
	score = score + 1
	game = false
	win = true
	e = createSprite(250,100,50,50)
  	e.shapeColor = color(0,255,0)

	text("You Win", 200,390)
}
$('body').toggleClass('loaded');
$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 1000);
});