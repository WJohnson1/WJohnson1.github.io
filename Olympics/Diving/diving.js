var count
var homescreen
var game
var jumping
var x_score
var y_score
var avg_score
var first_score
var second_score
var third_score
var hello
var diver_image
var j = false
function setup(){
	count = 0
	countrymenu = true
	homescreen = false
	game = false
	hello = false
	jumping = false
	this.delay = 0
	this.num = 2
	limit = 10
	gravity = .9
	createCanvas(1350,600)
	background(0,0,255)
	b = createSprite(675,250, 1350,500)
	b.shapeColor=color(0,255,0)
	b.addImage(loadImage("https://wjohnson1.github.io/Olympics/Diving/Crowd.png")) 
	p = createSprite(675,550,1350,100)
	p.shapeColor = color(0,0,255)
	board = createSprite(50,292,100,10)
	board.shapeColor = color(0,0,0)
	endofboard = createSprite(105,292,25,10)
	endofboard.shapeColor = color(255,0,0)
	wall = createSprite(1375,300,50,600)
	wall.shapeColor = color(255,255,255)
	target = createSprite(random(200,1200),500,100,35)
	target.shapeColor = color(255,255,0)
	target.addImage(loadImage("https://wjohnson1.github.io/Olympics/Diving/target.png")) 
	player = createSprite(25,250,25,25)
	player.shapeColor = color(255,0,255)
	player.velocity.y = 0
	player.velocity.x = 0
	player.addImage(loadImage("https://wjohnson1.github.io/Olympics/Diving/swimmer1.png"))
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
	if (homescreen === true) {
		background(123,183,166)
		textSize(50)
		fill(255,255,255)
		text("Can You Get A Perfect Score", 300,100)
		text("Press Enter to Dive",475,250)
		textSize(25)
		text("(Aim for the target)",525,275)
		textSize(50)
		text("Press Spacebar to Start",425,450)
		if (keyCode === 32){
			homescreen = false
			game = true
		}
	}
	if (game === true) {
		background(0,0,255)
		fill(255)
		if (keyDown(74)){
			player.velocity.y = -1
			player.velocity.x = 0.3
        	player.addImage(loadImage("https://wjohnson1.github.io/Olympics/Diving/swimmer3.png"))
        }	
		jump()	
		drawSprites()
		textSize(25)
		text("Press J to Start",25,50)
		end()
	}
	restart()
}	
function jump(){
	if (jumping === false && player.position.y >= 275 && j === true) {
		player.velocity.y = -1
		player.velocity.x = .5	
	}
	if (jumping === false && player.position.y <=150) {
		player.velocity.y = player.velocity.y + 3;
		player.velocity.x = 10
		player.addImage(loadImage("https://wjohnson1.github.io/Olympics/Diving/swimmer.png"))
		console.log(player.velocity.y)
		console.log(player.velocity.x)
	}
	if (player.velocity.y === 2) {
		if (keyCode === ENTER){
			player.addImage(loadImage("https://wjohnson1.github.io/Olympics/Diving/swimmer2.png"))
			player.velocity.x = 0
			player.velocity.y = 10
		}
	}
}
function end(){
	fill(255,0,0)
	textSize(100)															
	if (player.collide(target)) {
		player.velocity.y = 0
		game = false
		x_score = target.position.x - player.position.x 
		console.log(x_score)
		y_score = target.position.y - player.position.y
		console.log(y_score)
		if (y_score === 52){
			second_score = 10
			console.log(second_score)
		}
		if (x_score < 5 && x_score > -5){
			first_score = 10
			console.log(first_score)
			avg_score = (first_score + second_score)/2
			console.log(avg_score)
			text(first_score,425,123)
			text(second_score,625,123)
			text(avg_score,825,123)
		}
		if ((x_score < 10 && x_score > 5) | (x_score > -10 && x_score < -5)){
			first_score = 9
			console.log(first_score)
			avg_score = (first_score + second_score)/2
			console.log(avg_score)
			text(first_score,425,123)
			text(second_score,625,123)
			text(avg_score,825,123)			
		}
		if ((x_score < 20 && x_score > 10) | (x_score > -20 && x_score < -10)){
			first_score = 8
			console.log(first_score)
			text(second_score,625,123)
			avg_score = (first_score + second_score)/2
			console.log(avg_score)
			text(first_score,425,123)
			text(avg_score,825,123)
		}
		if ((x_score < 30 && x_score > 20) | (x_score > -30 && x_score < -20)){
			first_score = 7
			console.log(first_score)
			avg_score = (first_score + second_score)/2
			console.log(avg_score)
			text(first_score,425,123)
			text(second_score,625,123)
			text(avg_score,825,123)
		}				
		if ((x_score < 40 && x_score > 30) | (x_score > -40 && x_score < -30)){
			first_score = 6
			console.log(first_score)		
			avg_score = (first_score + second_score)/2
			console.log(avg_score)
			text(first_score,425,123)
			text(second_score,625,123)
			text(avg_score,825,123)		
		}
		if ((x_score < 56 && x_score > 40) | (x_score > -56 && x_score < -40)){
			first_score = 0
			second_score = 0
			console.log(first_score)
			avg_score = 0
			console.log(avg_score)
			text(first_score,425,123)
			text(second_score,625,123)
			text(avg_score,825,123)
		}
		if ((x_score < 70 && x_score > 56) | (x_score > -70 && x_score < -56)){
			first_score = 0
			second_score = 0
			console.log(first_score)
			avg_score = (first_score + second_score)/2
			console.log(avg_score)
			text(first_score,425,123)
			text(second_score,625,123)
			text(avg_score,825,123)					
		}
		if ((x_score < 85 && x_score > 70) | (x_score > -85 && x_score < -70)){
			first_score = 0
			second_score = 0
			console.log(first_score)
			avg_score = (first_score + second_score)/2
			console.log(avg_score)
			text(first_score,425,123)
			text(second_score,625,123)
			text(avg_score,825,123)					
		}
		if ((x_score < 100 && x_score > 85) | (x_score > -100 && x_score < -85)){
			first_score = 0
			second_score = 0
			console.log(first_score)
			avg_score = (first_score + second_score)/2
			console.log(avg_score)
			text(first_score,425,123)
			text(second_score,625,123)
			text(avg_score,825,123)					
		}
		if ((x_score < 115 && x_score > 100) | (x_score > -115 && x_score < -100)){
			first_score = 0
			second_score = 0
			console.log(first_score)
			avg_score = (first_score + second_score)/2
			console.log(avg_score)
			text(first_score,425,123)
			text(second_score,625,123)
			text(avg_score,825,123)					
		}				
	}		
	if (player.collide(p)) {
		game = false
		player.velocity.y = 0
		x_score = target.position.x - player.position.x
		console.log(x_score)
		y_score = target.position.y - player.position.y
		console.log(y_score)
		first_score = 0
		console.log(first_score)
		second_score = 0
		console.log(second_score)
		avg_score = 0	
		console.log(avg_score)
		text(first_score,425,123)
		text(second_score,625,123)
		text(avg_score,825,123)
	}
	if(player.collide(wall)){
		player.velocity.x = 0
		player.velocity.y = 0
		text("0",425,123)
		text("0",625,123)
		text("0",825,123)
		game = false
	}	
}
function restart(){
	if (game===false && homescreen===false) {
		fill(0)
		textSize(50)
		text("Do you want to play again?",400,280)
		textSize(25)
		text("Press R to Restart",600,550)
		if (keyCode === 82){
			player.remove()
			target.remove()
			setup()
			homescreen = false
			game = true
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