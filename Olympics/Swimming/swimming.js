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
var yourteam
function setup(){
	x = 0
	game = false
	movement = true
    countrymenu = true
	homescreen = false
	createCanvas(1350,590)
  	player = createSprite(25,35,25,25)
  	player.shapeColor= color(123,183,166)
  	opponent = createSprite(25,110,25,25)
  	opponent.shapeColor= color(123,183,166)
  	opponent1 = createSprite(25,185,25,25)
  	opponent1.shapeColor= color(123,183,166)
  	opponent2 = createSprite(25,260,25,25)
  	opponent2.shapeColor= color(123,183,166)
    opponent3 = createSprite(25,335,25,25)
  	opponent3.shapeColor= color(123,183,166)
    opponent4 = createSprite(25,410,25,25)
  	opponent4.shapeColor= color(123,183,166)
   	opponent5 = createSprite(25,485,25,25)
  	opponent5.shapeColor= color(123,183,166)
 	opponent6 = createSprite(25,560,25,25)
  	opponent6.shapeColor= color(123,183,166)
    player.addImage(loadImage("https://wjohnson1.github.io/Olympics/Swimming/swimmer.png"))     
    opponent.addImage(loadImage("https://wjohnson1.github.io/Olympics/Swimming/swimmer.png"))
    opponent1.addImage(loadImage("https://wjohnson1.github.io/Olympics/Swimming/swimmer.png"))    
    opponent2.addImage(loadImage("https://wjohnson1.github.io/Olympics/Swimming/swimmer.png"))
    opponent3.addImage(loadImage("https://wjohnson1.github.io/Olympics/Swimming/swimmer.png"))
    opponent4.addImage(loadImage("https://wjohnson1.github.io/Olympics/Swimming/swimmer.png"))
    opponent5.addImage(loadImage("https://wjohnson1.github.io/Olympics/Swimming/swimmer.png"))
    opponent6.addImage(loadImage("https://wjohnson1.github.io/Olympics/Swimming/swimmer.png"))
    wall1 = createSprite(0,0,2700, 10)
  	wall1.shapeColor = color(123,183,166)
  	wall2 = createSprite(0,75,2700, 10)
  	wall2.shapeColor = color(123,183,166)
  	wall3 = createSprite(0,150,2700, 10)
  	wall3.shapeColor = color(123,183,166)
  	wall4 = createSprite(0,225,2700, 10)
  	wall4.shapeColor = color(123,183,166)  		
  	wall5 = createSprite(0,300,2700, 10)
  	wall5.shapeColor = color(123,183,166)
  	wall6 = createSprite(0,375,2700, 10)
  	wall6.shapeColor = color(123,183,166)
  	wall7 = createSprite(0,450,2700, 10)
  	wall7.shapeColor = color(123,183,166)
  	wall8 = createSprite(0,525,2700, 10)
  	wall8.shapeColor = color(123,183,166)
  	wall9 = createSprite(0,600,2700, 10)
  	wall9.shapeColor = color(123,183,166)
  	end = createSprite(1300,0,10, 1200)
  	end.shapeColor = color(123,183,166)
    border = createSprite(32.5,350,70,700)
    border.shapeColor = color(123,183,166)
    banner = createSprite(675,25,1350,65)
    banner.shapeColor = color(123,183,166)
    usa = createSprite(325,175,25,25)
    usa.addImage(loadImage("https://wjohnson1.github.io/Olympics/usa.png"))
    russia = createSprite(650,175,25,25)
    russia.addImage(loadImage("https://wjohnson1.github.io/Olympics/russia.png"))
    brazil = createSprite(975,175,25,25)
    brazil.addImage(loadImage("https://wjohnson1.github.io/Olympics/brazil.png"))
    china = createSprite(270,325,25,25)
    china.addImage(loadImage("https://wjohnson1.github.io/Olympics/china.png"))
    australia = createSprite(540,325,25,25)
    australia.addImage(loadImage("https://wjohnson1.github.io/Olympics/australia.png"))
    france = createSprite(810,325,25,25)
    france.addImage(loadImage("https://wjohnson1.github.io/Olympics/france.png"))
    germany = createSprite(1080,325,25,25)
    germany.addImage(loadImage("https://wjohnson1.github.io/Olympics/germany.png"))
    greatb = createSprite(325,500,25,25)
    greatb.addImage(loadImage("https://wjohnson1.github.io/Olympics/greatb.png"))
    italy = createSprite(650,500,25,25)
    italy.addImage(loadImage("https://wjohnson1.github.io/Olympics/italy.png")) 
    mexico = createSprite(975,500,25,25)
    mexico.addImage(loadImage("https://wjohnson1.github.io/Olympics/mexico.png")) 
}
function draw(){
	if (countrymenu === true) {
        background(123,183,166)
        drawSprites()
        textSize(50)
        text("Press the key under the country you want to play as",70,50)
        textSize(25)
        text("0",320,225)
        text("1",645,225)
        text("2",970,225)
        text("3",265,375)
        text("4",535,375)
        text("5",805,375)
        text("6",1075,375)
        text("7",320,550)
        text("8",645,550)
        text("9",970,550)
        if (keyDown(48)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://wjohnson1.github.io/Olympics/usa.png"
        }
        if (keyDown(49)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://wjohnson1.github.io/Olympics/russia.png"
        }
        if (keyDown(50)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://wjohnson1.github.io/Olympics/brazil.png"
        }
        if (keyDown(51)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://wjohnson1.github.io/Olympics/china.png"
        }
        if (keyDown(52)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://wjohnson1.github.io/Olympics/australia.png"
        }
        if (keyDown(53)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://wjohnson1.github.io/Olympics/france.png"
        }
        if (keyDown(54)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://wjohnson1.github.io/Olympics/germany.png"
        }
        if (keyDown(55)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://wjohnson1.github.io/Olympics/greatb.png"
        }
        if (keyDown(56)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://wjohnson1.github.io/Olympics/italy.png"
        }
        if (keyDown(57)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://wjohnson1.github.io/Olympics/mexico.png"
        }                                                                        
    }
    if (homescreen === true && countrymenu  === false) {
		usa.remove()
        russia.remove()
        brazil.remove()
        china.remove()
        australia.remove()
        france.remove()
        germany.remove()
        greatb.remove()
        italy.remove()
        mexico.remove()
        border.remove()
        banner.remove()
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
	if (homescreen === false && game === true && countrymenu === false) {
		background(0,0,255)
        wall1.shapeColor = color(255,0,0)
        wall2.shapeColor = color(255,0,0)
        wall3.shapeColor = color(255,0,0)
        wall4.shapeColor = color(255,0,0)
        wall5.shapeColor = color(255,0,0)
        wall6.shapeColor = color(255,0,0)
        wall7.shapeColor = color(255,0,0)
        wall8.shapeColor = color(255,0,0)
        wall9.shapeColor = color(255,0,0)
        end.shapeColor = color(255,0,0)
        fill(255,255,0)
		textSize(50)
        team = createSprite(260,40,25,25)
        team.addImage(loadImage(yourteam))
        playerMovement()
		dplayer()
		dopponent()
		dopponent1()
		dopponent2()
		dopponent3()
		dopponent4()
		dopponent5()
		dopponent6()
        drawSprites()                                                    
	} 
	if (game === false && homescreen === false && countrymenu === false) {
		textSize(50)
		text("Do you want to play again?",300,280)
		textSize(25)
		text("Press Enter to Start a New Game",360,350)
		if (keyCode === ENTER) {
            setup()
            draw()
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
function bg(){
    background(0)
}