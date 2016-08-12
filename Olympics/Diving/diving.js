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
function preLoad(){
	diver_image = loadImage("WJohnson1.github.io/Olympics/Diving/diver.png")
}
function setup(){
	count = 0
	homescreen = true
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
	player.velocity.y = -1
	player.velocity.x = .3
	player.addImage(loadImage("https://wjohnson1.github.io/Olympics/Diving/swimmer.png"))
}
function draw(){
	if (homescreen === true) {
		background(128,188,163)
		textSize(50)
		fill(255,255,255)
		text("Can You Get A Perfect Score", 250,100)
		text("Press Enter to Dive",400,250)
		textSize(25)
		text("(Aim for the target)",450,275)
		textSize(50)
		text("Press Spacebar to Start",425,450)
		if (keyCode === 32){
			homescreen = false
			game = true
		}
	}
	if (game === true) {
		background(0,0,255)
		setTimeout(rotate,1000)
		jump()
		drawSprites()
		end()
	}
	restart()
}	
function jump(){
	if (jumping === false && keyDown(37) && player.position.y >= 275) {
		player.velocity.y = -1
		player.velocity.x = .5	
		jumping = true
		console.log(player.velocity.y)
		if (jumping === true && player.position.y-limit > 0) {
			player.velocity.y = player.velocity.y - gravity/0.25;
			console.log(player.velocity.y)
		}
	}	
	if (player.position.y-limit < 0 && jumping === true) {
		jumping = false
		player.velocity.y = 0
		player.velocity.x = player.velocity.x + 100
		console.log(player.velocity.y)
		console.log(player.velocity.x)
		hello = true
	}
	if (jumping === false && player.position.y <=150) {
		player.velocity.y = player.velocity.y + 3;
		player.velocity.x = 10
		console.log(player.velocity.y)
		console.log(player.velocity.x)
	}
	if (player.velocity.y === 2) {
		if (keyCode === ENTER){
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
		x_score = target.position.x - player.position.x - 37.5
		console.log(x_score)
		y_score = target.position.y - player.position.y
		console.log(y_score)
		if (y_score === 58.5){
			second_score = 10
			console.log(second_score)
			text(second_score,625,123)
		}
		if (x_score < 5 && x_score > -5){
			first_score = 10
			console.log(first_score)
			avg_score = (first_score + second_score)/2
			console.log(avg_score)
			text(first_score,425,123)
			text(avg_score,825,123)
		}
		if ((x_score < 10 && x_score > 5) | (x_score > -10 && x_score < -5)){
			first_score = 9
			console.log(first_score)
			avg_score = (first_score + second_score)/2
			console.log(avg_score)
			text(first_score,425,123)
			text(avg_score,825,123)			
		}
		if ((x_score < 20 && x_score > 10) | (x_score > -20 && x_score < -10)){
			first_score = 8
			console.log(first_score)
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
			text(avg_score,825,123)
		}				
		if ((x_score < 40 && x_score > 30) | (x_score > -40 && x_score < -30)){
			first_score = 6
			console.log(first_score)		
			avg_score = (first_score + second_score)/2
			console.log(avg_score)
			text(first_score,425,123)
			text(avg_score,825,123)		
		}
		if ((x_score < 55 && x_score > 40) | (x_score > -50 && x_score < -40)){
			first_score = 5
			console.log(first_score)
			avg_score = (first_score + second_score)/2
			console.log(avg_score)
			text(first_score,425,123)
			text(avg_score,825,123)
		}
		if ((x_score < 70 && x_score > 55) | (x_score > -70 && x_score < -55)){
			first_score = 4
			console.log(first_score)
			avg_score = (first_score + second_score)/2
			console.log(avg_score)
			text(first_score,425,123)
			text(avg_score,825,123)					
		}
		if ((x_score < 85 && x_score > 70) | (x_score > -85 && x_score < -70)){
			first_score = 3
			console.log(first_score)
			avg_score = (first_score + second_score)/2
			console.log(avg_score)
			text(first_score,425,123)
			text(avg_score,825,123)					
		}
		if ((x_score < 100 && x_score > 85) | (x_score > -100 && x_score < -85)){
			first_score = 2
			console.log(first_score)
			avg_score = (first_score + second_score)/2
			console.log(avg_score)
			text(first_score,425,123)
			text(avg_score,825,123)					
		}
		if ((x_score < 115 && x_score > 100) | (x_score > -115 && x_score < -100)){
			first_score = 1
			console.log(first_score)
			avg_score = (first_score + second_score)/2
			console.log(avg_score)					
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