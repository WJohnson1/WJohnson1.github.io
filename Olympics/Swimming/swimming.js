var player
var x
var d_player
var d_opponent
var d_opponent1
var d_opponent2
var d_opponent3
var d_opponent4
var d_opponent5
var d_opponent6
var homescreen
var game
var movement
var countrymenu
function setup(){
	x = 0
	game = false
	movement = true
    countrymenu = true
	homescreen = false
	createCanvas(1350,590)
  	player = createSprite(25,35,25,25)
  	player.shapeColor= color(255,255,255)
    player.addImage(loadImage("https://wjohnson1.github.io/Olympics/Swimming/swimmer.png"))     
  	opponent = createSprite(25,110,25,25)
  	opponent.shapeColor= color(255,255,255)
    opponent.addImage(loadImage("https://wjohnson1.github.io/Olympics/Swimming/swimmer.png"))
  	opponent1 = createSprite(25,185,25,25)
  	opponent1.shapeColor= color(255,255,255)
    opponent1.addImage(loadImage("https://wjohnson1.github.io/Olympics/Swimming/swimmer.png"))
  	opponent2 = createSprite(25,260,25,25)
  	opponent2.shapeColor= color(255,255,255)
    opponent2.addImage(loadImage("https://wjohnson1.github.io/Olympics/Swimming/swimmer.png"))
  	opponent3 = createSprite(25,335,25,25)
  	opponent3.shapeColor= color(255,255,255)
    opponent3.addImage(loadImage("https://wjohnson1.github.io/Olympics/Swimming/swimmer.png"))
  	opponent4 = createSprite(25,410,25,25)
  	opponent4.shapeColor= color(255,255,255)
    opponent4.addImage(loadImage("https://wjohnson1.github.io/Olympics/Swimming/swimmer.png"))
  	opponent5 = createSprite(25,485,25,25)
  	opponent5.shapeColor= color(255,255,255)
    opponent5.addImage(loadImage("https://wjohnson1.github.io/Olympics/Swimming/swimmer.png"))
  	opponent6 = createSprite(25,560,25,25)
  	opponent6.shapeColor= color(255,255,255)
    opponent6.addImage(loadImage("https://wjohnson1.github.io/Olympics/Swimming/swimmer.png"))
  	wall1 = createSprite(0,0,2700, 10)
  	wall1.shapeColor = color(255,0,0)
  	wall2 = createSprite(0,75,2700, 10)
  	wall2.shapeColor = color(255,0,0)
  	wall3 = createSprite(0,150,2700, 10)
  	wall3.shapeColor = color(255,0,0)
  	wall4 = createSprite(0,225,2700, 10)
  	wall4.shapeColor = color(255,0,0)  		
  	wall5 = createSprite(0,300,2700, 10)
  	wall5.shapeColor = color(255,0,0)
  	wall6 = createSprite(0,375,2700, 10)
  	wall6.shapeColor = color(255,0,0)
  	wall7 = createSprite(0,450,2700, 10)
  	wall7.shapeColor = color(255,0,0)
  	wall8 = createSprite(0,525,2700, 10)
  	wall8.shapeColor = color(255,0,0)
  	wall9 = createSprite(0,600,2700, 10)
  	wall9.shapeColor = color(255,0,0)
  	end = createSprite(1300,0,10, 1200)
  	end.shapeColor = color(255,0,0)
}
function draw(){
	if (countrymenu === true) {
        background(123,183,166)
    }
    if (homescreen === true && countrymenu  === false) {
		background(123,183,166)
		textSize(50)
		fill(255,255,255)
		text("Are You Ready to Face the Best Swimmers in the World", 75,100)
		text("Press Spacebar to move",375,250)
		textSize(25)
		text("(the faster you press it the faster you go)",425,275)
		textSize(50)
		text("Press Enter to Start",425,450)
		if (keyCode === ENTER){
			homescreen = false
			game = true
		}
	}
	if (homescreen === false && game === true) {
		background(0,0,255)
		fill(255,255,0)
		textSize(50)
		text("Your Lane", 360,60)
		playerMovement()
		dplayer()
		dopponent()
		dopponent1()
		dopponent2()
		dopponent3()
		dopponent4()
		dopponent5()
		dopponent6()                                                    
		drawSprites();
	} 
	if (game === false) {
		textSize(50)
		text("Do you want to play again?",300,280)
		textSize(25)
		text("Press Enter to Start a New Game",360,350)
		if (keyCode === ENTER) {
			setup()
		}
	}
}	
function playerMovement(){
	if (movement === true ){ 
	if (keyDown(32)){
		player.setSpeed(x+1,0)
		x = x + .1	
	}
	if (keyDown(32)){
		opponent.setSpeed(random(3,6),0)
    }
    if (keyDown(32)){
 	opponent1.setSpeed(random(3,6),0)
    }
    if (keyDown(32)){
 	opponent2.setSpeed(random(3,6),0)
    }
    if (keyDown(32)){
 	opponent3.setSpeed(random(3,6),0)
    }
    if (keyDown(32)){
 	opponent4.setSpeed(random(3,6),0)
    }
    if (keyDown(32)){
 	opponent5.setSpeed(random(3,6),0)
    }
	if (keyDown(32)){
		opponent6.setSpeed(random(3,6),0)
    }
}
}
function dplayer(){
if (player.collide(end)){
    	d_player = end.position.x - player.position.x
    	d_opponent = end.position.x - opponent.position.x
    	d_opponent1 = end.position.x - opponent1.position.x
    	d_opponent2 = end.position.x - opponent2.position.x
    	d_opponent3 = end.position.x - opponent3.position.x
    	d_opponent4 = end.position.x - opponent4.position.x
    	d_opponent5 = end.position.x - opponent5.position.x
    	d_opponent6 = end.position.x - opponent6.position.x
    	game = false
    	if (d_player <= 32){
    		text("1",1320,55)
    	}
    	if (d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent < d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent5 && d_opponent < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,130)
    	 	fill(153,76,0)
    	 	if (d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent2 && d_opponent3<d_opponent1 && d_opponent3<d_opponent4 && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}    	
    	 	if (d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_opponent1 && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_opponent1 && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_opponent1){
    	 		text("3",1320,580)
    	 	}    	 	    	 	    	
    	}
    	if (d_opponent1<d_opponent && d_opponent1<d_opponent2 && d_opponent1 < d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,205)
    	 	fill(153,76,0)
    	 	if (d_opponent<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent5 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}
    	 	if (d_opponent2<d_opponent && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent2 && d_opponent3<d_opponent && d_opponent3<d_opponent4 && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}    	
    	 	if (d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_opponent && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_opponent && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_opponent){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent2<d_opponent1 && d_opponent2<d_opponent && d_opponent2 < d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent5 && d_opponent2 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,280)
    	 	fill(153,76,0)
    	 	if (d_opponent<d_opponent1 && d_opponent<d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent5 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}
    	 	if (d_opponent1<d_opponent && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent3<d_opponent1 && d_opponent3<d_opponent && d_opponent3<d_opponent4 && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}    	
    	 	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent3 && d_opponent4<d_opponent && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_opponent && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_opponent){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3 < d_opponent && d_opponent3<d_opponent4 && d_opponent3<d_opponent5 && d_opponent3 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,355)
    	 	fill(153,76,0)
    	 	if (d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent4 && d_opponent<d_opponent5 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}
    	 	if (d_opponent1<d_opponent && d_opponent1<d_opponent2 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_opponent && d_opponent2<d_opponent4 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_opponent && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5<d_opponent4 && d_opponent5<d_opponent && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_opponent){
    	 		text("3",1320,580)
    	 	}    	 	
     	}
    	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4 < d_opponent3 && d_opponent4<d_opponent && d_opponent4<d_opponent5 && d_opponent4 < d_opponent6){
    		fill(160,160,160)
    		text("2",1320,430)
    		fill(153,76,0)
    	 	if (d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent5 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}
    	 	if (d_opponent1<d_opponent && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_opponent && d_opponent2<d_opponent3 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_opponent && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_opponent && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent5 && d_opponent6<d_opponent){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5 < d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_opponent && d_opponent5 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,505)
    	 	fill(153,76,0)
    	 	if (d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}
    	 	if (d_opponent1<d_opponent && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_opponent && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_opponent && d_opponent3<d_opponent4 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_opponent && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent){
    	 		text("3",1320,580)
    	 	}    	 	
    	}
    	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6 < d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6 < d_opponent){
    	 	fill(160,160,160)
    	 	text("2",1320,580)
    	 	fill(153,76,0)
    	 	if (d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent5){
    	 		text("3",1320,130)
    	 	}
    	 	if (d_opponent1<d_opponent && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_opponent && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent5){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_opponent && d_opponent3<d_opponent4 && d_opponent3<d_opponent5){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_opponent && d_opponent4<d_opponent5){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent6<d_opponent5 && d_opponent5<d_opponent5 && d_opponent5<d_opponent){
    	 		text("3",1320,505)
    	 	}    	 	    	
    	}    	    	    	    	    	    	
    }	
}
function dopponent(){
if (opponent.collide(end)){    	
    	d_player = end.position.x - player.position.x
    	d_opponent = end.position.x - opponent.position.x
    	d_opponent1 = end.position.x - opponent1.position.x
    	d_opponent2 = end.position.x - opponent2.position.x
    	d_opponent3 = end.position.x - opponent3.position.x
    	d_opponent4 = end.position.x - opponent4.position.x
    	d_opponent5 = end.position.x - opponent5.position.x
    	d_opponent6 = end.position.x - opponent6.position.x
    	game = false
    	if (d_opponent <= 32){
    		text("1",1320,130)
    	}
    	if (d_player<d_opponent1 && d_player<d_opponent2 && d_player < d_opponent3 && d_player<d_opponent4 && d_player<d_opponent5 && d_player < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,55)
    	 	fill(153,76,0)
    	 	if (d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent2 && d_opponent3<d_opponent1 && d_opponent3<d_opponent4 && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}    	
    	 	if (d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_opponent1 && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_opponent1 && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_opponent1){
    	 		text("3",1320,580)
    	 	}    	 	    	 	    	
    	}
    	if (d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1 < d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,205)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent4 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}    	
    	 	if (d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2 < d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent5 && d_opponent2 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,280)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent1 && d_player<d_opponent3 && d_player<d_opponent4 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent1<d_player && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent3<d_opponent1 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}    	
    	 	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3 < d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent5 && d_opponent3 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,355)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent4 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent4 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_player && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5<d_opponent4 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	 	
     	}
    	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4 < d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent5 && d_opponent4 < d_opponent6){
    		fill(160,160,160)
    		text("2",1320,430)
    		fill(153,76,0)
    	 	if (d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5 < d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_player && d_opponent5 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,505)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent4 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	 	
    	}
    	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6 < d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6 < d_player){
    	 	fill(160,160,160)
    	 	text("2",1320,580)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent4 && d_player<d_opponent5){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent5){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent5){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent5){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent6<d_opponent5 && d_opponent5<d_opponent5 && d_opponent5<d_player){
    	 		text("3",1320,505)
    	 	}    	 	    	
    	}    	
    }	
}
function dopponent1(){
if (opponent1.collide(end)){
	   	d_player = end.position.x - player.position.x
    	d_opponent = end.position.x - opponent.position.x
    	d_opponent1 = end.position.x - opponent1.position.x
    	d_opponent2 = end.position.x - opponent2.position.x
    	d_opponent3 = end.position.x - opponent3.position.x
    	d_opponent4 = end.position.x - opponent4.position.x
    	d_opponent5 = end.position.x - opponent5.position.x
    	d_opponent6 = end.position.x - opponent6.position.x
    	game = false
    	if (d_opponent1 <= 32){
    		text("1",1320,205)	
    	}
       	if (d_player<d_opponent && d_player<d_opponent2 && d_player < d_opponent3 && d_player<d_opponent4 && d_player<d_opponent5 && d_player < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,55)
    	 	fill(153,76,0)
    	 	if (d_opponent<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent5 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}
    	 	if (d_opponent2<d_opponent && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent2 && d_opponent3<d_opponent && d_opponent3<d_opponent4 && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}    	
    	 	if (d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_opponent && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_opponent && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_opponent){
    	 		text("3",1320,580)
    	 	}    	 	    	 	    	
    	}
    	if (d_opponent<d_player && d_opponent<d_opponent2 && d_opponent < d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent5 && d_opponent < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,130)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent4 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}    	
    	 	if (d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent2<d_opponent && d_opponent2<d_player && d_opponent2 < d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent5 && d_opponent2 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,280)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent3 && d_player<d_opponent4 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent3<d_opponent && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}    	
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent3<d_opponent && d_opponent3<d_opponent2 && d_opponent3 < d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent5 && d_opponent3 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,355)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent2 && d_player<d_opponent4 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent2 && d_opponent<d_opponent4 && d_opponent<d_opponent5 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_player && d_opponent2<d_opponent4 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent2 && d_opponent4<d_player && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent2 && d_opponent5<d_opponent4 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent2 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	 	
     	}
    	if (d_opponent4<d_opponent && d_opponent4<d_opponent2 && d_opponent4 < d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent5 && d_opponent4 < d_opponent6){
    		fill(160,160,160)
    		text("2",1320,430)
    		fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent5 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent5<d_opponent && d_opponent5<d_opponent2 && d_opponent5 < d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_player && d_opponent5 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,505)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent4 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent1<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	 	
    	}
    	if (d_opponent6<d_opponent && d_opponent6<d_opponent2 && d_opponent6 < d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6 < d_player){
    	 	fill(160,160,160)
    	 	text("2",1320,580)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent4 && d_player<d_opponent5){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent5){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent5){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent5){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent5){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_player){
    	 		text("3",1320,505)
    	 	}    	 	    	
    	}
    }	
}
function dopponent2(){
    if (opponent2.collide(end)){
    	d_player = end.position.x - player.position.x
    	d_opponent = end.position.x - opponent.position.x
    	d_opponent1 = end.position.x - opponent1.position.x
    	d_opponent2 = end.position.x - opponent2.position.x
    	d_opponent3 = end.position.x - opponent3.position.x
    	d_opponent4 = end.position.x - opponent4.position.x
    	d_opponent5 = end.position.x - opponent5.position.x
    	d_opponent6 = end.position.x - opponent6.position.x
    	game = false
    	if (d_opponent2 <= 32){
    		text("1",1320,280)
    	}
       	if (d_player<d_opponent && d_player<d_opponent1 && d_player < d_opponent3 && d_player<d_opponent4 && d_player<d_opponent5 && d_player < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,55)
    	 	fill(153,76,0)
    	 	if (d_opponent<d_opponent1 && d_opponent<d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent5 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}
    	 	if (d_opponent1<d_opponent && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent3<d_opponent1 && d_opponent3<d_opponent && d_opponent3<d_opponent4 && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}    	
    	 	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent3 && d_opponent4<d_opponent && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_opponent && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_opponent){
    	 		text("3",1320,580)
    	 	}    	 	    	 	    	
    	}
    	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent < d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent5 && d_opponent < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,130)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent1 && d_player<d_opponent3 && d_player<d_opponent4 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent1<d_player && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent3<d_opponent1 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}    	
    	 	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1 < d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,205)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent3 && d_player<d_opponent4 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent3<d_opponent && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}    	
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent3<d_opponent && d_opponent3<d_opponent1 && d_opponent3 < d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent5 && d_opponent3 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,355)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent4 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent<d_opponent4 && d_opponent<d_opponent5 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent1 && d_opponent4<d_player && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent1 && d_opponent5<d_opponent4 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent1 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	 	
     	}
    	if (d_opponent4<d_opponent && d_opponent4<d_opponent1 && d_opponent4 < d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent5 && d_opponent4 < d_opponent6){
    		fill(160,160,160)
    		text("2",1320,430)
    		fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent3 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent<d_opponent3 && d_opponent<d_opponent5 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent3 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent1 && d_opponent3<d_player && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent1 && d_opponent5<d_opponent3 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent1 && d_opponent6<d_opponent3 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent5<d_opponent && d_opponent5<d_opponent1 && d_opponent5 < d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_player && d_opponent5 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,505)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent3 && d_player<d_opponent4 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent1<d_opponent1 && d_opponent<d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent1 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent1 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent1 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	 	
    	}
    	if (d_opponent6<d_opponent && d_opponent6<d_opponent1 && d_opponent6 < d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6 < d_player){
    	 	fill(160,160,160)
    	 	text("2",1320,580)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent3 && d_player<d_opponent4 && d_player<d_opponent5){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent<d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent5){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent1 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent5){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent1 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent5){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent1 && d_opponent6<d_opponent5 && d_opponent5<d_opponent5 && d_opponent5<d_player){
    	 		text("3",1320,505)
    	 	}    	 	    	
    	}    	    	
    }	
}
function dopponent3(){
    if (opponent3.collide(end)){
    	d_player = end.position.x - player.position.x
    	d_opponent = end.position.x - opponent.position.x
    	d_opponent1 = end.position.x - opponent1.position.x
    	d_opponent2 = end.position.x - opponent2.position.x
    	d_opponent3 = end.position.x - opponent3.position.x
    	d_opponent4 = end.position.x - opponent4.position.x
    	d_opponent5 = end.position.x - opponent5.position.x
    	d_opponent6 = end.position.x - opponent6.position.x
    	game = false
    	if (d_opponent3 <= 32){
    		text("1",1320,355)
    	}
       	if (d_player<d_opponent && d_player<d_opponent1 && d_player < d_opponent2 && d_player<d_opponent4 && d_player<d_opponent5 && d_player < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,55)
    	 	fill(153,76,0)
    	 	if (d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent4 && d_opponent<d_opponent5 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}
    	 	if (d_opponent1<d_opponent && d_opponent1<d_opponent2 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_opponent && d_opponent2<d_opponent4 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_opponent && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5<d_opponent4 && d_opponent5<d_opponent && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_opponent){
    	 		text("3",1320,580)
    	 	}    	 	    	 	    	    	 	
    	}
    	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent < d_opponent2 && d_opponent<d_opponent4 && d_opponent<d_opponent5 && d_opponent < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,130)
    	 	fill(153,76,0)
			if (d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent4 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent4 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_player && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5<d_opponent4 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	 	
    	}
    	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1 < d_opponent2 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,205)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent2 && d_player<d_opponent4 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent2 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_player && d_opponent2<d_opponent4 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent2 && d_opponent4<d_player && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent2 && d_opponent5<d_opponent4 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent2 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	    	
    	}
    	if (d_opponent2<d_opponent && d_opponent2<d_opponent1 && d_opponent2 < d_player && d_opponent2<d_opponent4 && d_opponent2<d_opponent5 && d_opponent2 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,280)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent4 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent<d_opponent4 && d_opponent<d_opponent5 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent4 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent1 && d_opponent4<d_player && d_opponent4<d_opponent5 && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent1 && d_opponent5<d_opponent4 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent1 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	 	     	
     	}
    	if (d_opponent4<d_opponent && d_opponent4<d_opponent1 && d_opponent4 < d_opponent2 && d_opponent4<d_player && d_opponent4<d_opponent5 && d_opponent4 < d_opponent6){
    		fill(160,160,160)
    		text("2",1320,430)
    		fill(153,76,0)
			if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent5 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent5<d_opponent && d_opponent5<d_opponent1 && d_opponent5 < d_opponent2 && d_opponent5<d_opponent4 && d_opponent5<d_player && d_opponent5 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,505)
    	 	fill(153,76,0)
			if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent4 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent1<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent4 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent4 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent4 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_player && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent4 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent6<d_opponent && d_opponent6<d_opponent1 && d_opponent6 < d_opponent2 && d_opponent6<d_opponent4 && d_opponent6<d_opponent5 && d_opponent6 < d_player){
    	 	fill(160,160,160)
    	 	text("2",1320,580)
    	 	fill(153,76,0)
    		if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent4 && d_player<d_opponent5){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent4 && d_opponent<d_opponent5){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent4 && d_opponent2<d_opponent5){
    	 		text("3",1320,280)
    	 	}
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_player && d_opponent4<d_opponent5){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5<d_opponent4 && d_opponent5<d_player){
    	 		text("3",1320,505)
    	 	}
    	} 	 	    	    	
    }
}
function dopponent4(){
    if (opponent4.collide(end)){
    	d_player = end.position.x - player.position.x
    	d_opponent = end.position.x - opponent.position.x
    	d_opponent1 = end.position.x - opponent1.position.x
    	d_opponent2 = end.position.x - opponent2.position.x
    	d_opponent3 = end.position.x - opponent3.position.x
    	d_opponent4 = end.position.x - opponent4.position.x
    	d_opponent5 = end.position.x - opponent5.position.x
    	d_opponent6 = end.position.x - opponent6.position.x
    	game = false
    	if (d_opponent4 <= 32){
    		text("1",1320,430)
    	}
    	if (d_player<d_opponent && d_player<d_opponent1 && d_player < d_opponent2 && d_player<d_opponent3 && d_player<d_opponent5 && d_player < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,55)
    	 	fill(153,76,0)
    	 	if (d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent5 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}
    	 	if (d_opponent1<d_opponent && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_opponent && d_opponent2<d_opponent3 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_opponent && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_opponent && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent5 && d_opponent6<d_opponent){
    	 		text("3",1320,580)
    	 	}    	 	    	 	    	    	 	
    	}
    	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent < d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent5 && d_opponent < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,130)
    	 	fill(153,76,0)
			if (d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	 	
    	}
    	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1 < d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent5 && d_opponent1 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,205)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	    	
    	}
    	if (d_opponent2<d_opponent && d_opponent2<d_opponent1 && d_opponent2 < d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent5 && d_opponent2 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,280)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent3 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent<d_opponent3 && d_opponent<d_opponent5 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent3 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent1 && d_opponent3<d_player && d_opponent3<d_opponent5 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent1 && d_opponent5<d_opponent3 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent1 && d_opponent6<d_opponent3 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	 	     	
     	}
    	if (d_opponent3<d_opponent && d_opponent3<d_opponent1 && d_opponent3 < d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent5 && d_opponent3 < d_opponent6){
    		fill(160,160,160)
    		text("2",1320,355)
    		fill(153,76,0)
			if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent5 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent5 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent5 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5<d_player && d_opponent5<d_opponent6){
    	 		text("3",1320,505)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent5 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent5<d_opponent && d_opponent5<d_opponent1 && d_opponent5 < d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_player && d_opponent5 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,505)
    	 	fill(153,76,0)
			if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent1<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent6<d_opponent && d_opponent6<d_opponent1 && d_opponent6 < d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent5 && d_opponent6 < d_player){
    	 	fill(160,160,160)
    	 	text("2",1320,580)
    	 	fill(153,76,0)
    		if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent5){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent5){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent5){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent5){
    	 		text("3",1320,280)
    	 	}
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent5){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_player){
    	 		text("3",1320,505)
    	 	}
    	}    	
    }	
}
function dopponent5(){
    if (opponent5.collide(end)){
    	d_player = end.position.x - player.position.x
    	d_opponent = end.position.x - opponent.position.x
    	d_opponent1 = end.position.x - opponent1.position.x
    	d_opponent2 = end.position.x - opponent2.position.x
    	d_opponent3 = end.position.x - opponent3.position.x
    	d_opponent4 = end.position.x - opponent4.position.x
    	d_opponent5 = end.position.x - opponent5.position.x
    	d_opponent6 = end.position.x - opponent6.position.x
    	game = false
    	if (d_opponent5 <= 32){
    		text("1",1320,505)
    	}
    	if (d_player<d_opponent && d_player<d_opponent1 && d_player < d_opponent2 && d_player<d_opponent3 && d_player<d_opponent4 && d_player < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,55)
    	 	fill(153,76,0)
    	 	if (d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}
    	 	if (d_opponent1<d_opponent && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_opponent && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_opponent && d_opponent3<d_opponent4 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_opponent && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_opponent){
    	 		text("3",1320,580)
    	 	}    	 	    	 	    	    	 	
    	}
    	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent < d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent4 && d_opponent < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,130)
    	 	fill(153,76,0)
			if (d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent4 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	 	
    	}
    	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1 < d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,205)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent5 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	    	
    	}
    	if (d_opponent2<d_opponent && d_opponent2<d_opponent1 && d_opponent2 < d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,280)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent3 && d_player<d_opponent4 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent<d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent1 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent1 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent1 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	 	     	
     	}
    	if (d_opponent3<d_opponent && d_opponent3<d_opponent1 && d_opponent3 < d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3 < d_opponent6){
    		fill(160,160,160)
    		text("2",1320,355)
    		fill(153,76,0)
			if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent4 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent4 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent4 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent4 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_player && d_opponent4<d_opponent6){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent4 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent4<d_opponent && d_opponent4<d_opponent1 && d_opponent4 < d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4 < d_opponent6){
    	 	fill(160,160,160)
    	 	text("2",1320,430)
    	 	fill(153,76,0)
			if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent6){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent1<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent6){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent6){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent6){
    	 		text("3",1320,280)
    	 	}
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent6){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent6<d_opponent && d_opponent6<d_opponent1 && d_opponent6<d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_player){
    	 		text("3",1320,580)
    	 	}    	
    	}
    	if (d_opponent6<d_opponent && d_opponent6<d_opponent1 && d_opponent6 < d_opponent2 && d_opponent6<d_opponent3 && d_opponent6<d_opponent4 && d_opponent6 < d_player){
    	 	fill(160,160,160)
    	 	text("2",1320,580)
    	 	fill(153,76,0)
    		if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent4){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent4){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent4){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent4){
    	 		text("3",1320,280)
    	 	}
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent4){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_player){
    	 		text("3",1320,430)
    	 	}
    	}    	    	
    }	
}
function dopponent6(){
    if (opponent6.collide(end)){
    	d_player = end.position.x - player.position.x
    	d_opponent = end.position.x - opponent.position.x
    	d_opponent1 = end.position.x - opponent1.position.x
    	d_opponent2 = end.position.x - opponent2.position.x
    	d_opponent3 = end.position.x - opponent3.position.x
    	d_opponent4 = end.position.x - opponent4.position.x
    	d_opponent5 = end.position.x - opponent5.position.x
    	d_opponent6 = end.position.x - opponent6.position.x
    	game = false
    	if (d_opponent6 <= 32){
    		text("1",1320,580)
    	}
    	if (d_player<d_opponent && d_player<d_opponent1 && d_player < d_opponent2 && d_player<d_opponent3 && d_player<d_opponent4 && d_player < d_opponent5){
    	 	fill(160,160,160)
    	 	text("2",1320,55)
    	 	fill(153,76,0)
    	 	if (d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent5){
    	 		text("3",1320,130)
    	 	}
    	 	if (d_opponent1<d_opponent && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_opponent && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent5){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_opponent && d_opponent3<d_opponent4 && d_opponent3<d_opponent5){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_opponent && d_opponent4<d_opponent5){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_opponent){
    	 		text("3",1320,505)
    	 	}    	 	    	 	    	    	 	
    	}
    	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent < d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent4 && d_opponent < d_opponent5){
    	 	fill(160,160,160)
    	 	text("2",1320,130)
    	 	fill(153,76,0)
			if (d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent4 && d_player<d_opponent5){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent5){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent5){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent5){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_player){
    	 		text("3",1320,505)
    	 	}    	 	
    	}
    	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1 < d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1 < d_opponent5){
    	 	fill(160,160,160)
    	 	text("2",1320,205)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent5 && d_player<d_opponent5){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2<d_opponent5){
    	 		text("3",1320,280)
    	 	}    	
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent5){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent5){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_player){
    	 		text("3",1320,505)
    	 	}    	    	
    	}
    	if (d_opponent2<d_opponent && d_opponent2<d_opponent1 && d_opponent2 < d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent4 && d_opponent2 < d_opponent5){
    	 	fill(160,160,160)
    	 	text("2",1320,280)
    	 	fill(153,76,0)
    	 	if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent3 && d_player<d_opponent4 && d_player<d_opponent5){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent<d_opponent3 && d_opponent<d_opponent4 && d_opponent<d_opponent5){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent3 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent1 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3<d_opponent5){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent1 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4<d_opponent5){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent1 && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5<d_player){
    	 		text("3",1320,505)
    	 	}    	 	     	
     	}
    	if (d_opponent3<d_opponent && d_opponent3<d_opponent1 && d_opponent3 < d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent4 && d_opponent3 < d_opponent5){
    		fill(160,160,160)
    		text("2",1320,355)
    		fill(153,76,0)
			if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent4 && d_player<d_opponent5){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent4 && d_opponent<d_opponent5){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent4 && d_opponent1<d_opponent5){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent4 && d_opponent2<d_opponent5){
    	 		text("3",1320,280)
    	 	}
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_player && d_opponent4<d_opponent5){
    	 		text("3",1320,430)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5<d_opponent4 && d_opponent5<d_player){
    	 		text("3",1320,505)
    	 	}    	
    	}
    	if (d_opponent4<d_opponent && d_opponent4<d_opponent1 && d_opponent4 < d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_player && d_opponent4 < d_opponent5){
    	 	fill(160,160,160)
    	 	text("2",1320,430)
    	 	fill(153,76,0)
			if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent5){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent1<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent5){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent5){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent5){
    	 		text("3",1320,280)
    	 	}
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent5){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent5<d_opponent && d_opponent5<d_opponent1 && d_opponent5<d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_player){
    	 		text("3",1320,505)
    	 	}    	
    	}
    	if (d_opponent5<d_opponent && d_opponent5<d_opponent1 && d_opponent5 < d_opponent2 && d_opponent5<d_opponent3 && d_opponent5<d_opponent4 && d_opponent5 < d_player){
    	 	fill(160,160,160)
    	 	text("2",1320,505)
    		fill(153,76,0)
    		if (d_player<d_opponent && d_player<d_opponent1 && d_player<d_opponent2 && d_player<d_opponent3 && d_player<d_opponent4){
    	 		text("3",1320,55)
    	 	}
    	 	if (d_opponent<d_player && d_opponent<d_opponent1 && d_opponent<d_opponent2 && d_opponent<d_opponent3 && d_opponent<d_opponent4){
    	 		text("3",1320,130)
    	 	}    	
    	 	if (d_opponent1<d_opponent && d_opponent1<d_player && d_opponent1<d_opponent2 && d_opponent1<d_opponent3 && d_opponent1<d_opponent4){
    	 		text("3",1320,205)
    	 	}    	
    	 	if (d_opponent2<d_opponent && d_opponent2<d_opponent1 && d_opponent2<d_player && d_opponent2<d_opponent3 && d_opponent2<d_opponent4){
    	 		text("3",1320,280)
    	 	}
    	 	if (d_opponent3<d_opponent && d_opponent3<d_opponent1 && d_opponent3<d_opponent2 && d_opponent3<d_player && d_opponent3<d_opponent4){
    	 		text("3",1320,355)
    	 	}
    	 	if (d_opponent4<d_opponent && d_opponent4<d_opponent1 && d_opponent4<d_opponent2 && d_opponent4<d_opponent3 && d_opponent4<d_player){
    	 		text("3",1320,430)
    	 	}
    	}    	    	
    }	
}
$('body').toggleClass('loaded');
$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
 
});