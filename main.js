canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

carw=100;
carh=110;
carx=10;
cary=10;

function add() {
	background_img=new Image();
	background_img.onload=uploadBackground;
	background_img.src=background_image;
	car_img=new Image();
	car_img.onload=uploadgreencar;
	car_img.src=greencar_image;

}

function uploadBackground() {
	ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car_img, carx, cary, carw, carh);

	
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (cary>10) {
		cary-=10
		uploadBackground();
		uploadgreencar();

	
	}
}

function down()
{
	if (cary<=500) {
		cary+=10;
		uploadBackground();
		uploadgreencar();

	}
}

function left()
{
	if (carx>10) {
		carx-=10;
		uploadBackground();
		uploadgreencar();

	}
}

function right()
{
	if (carx<=690) {
		carx+=10;
		uploadBackground();
		uploadgreencar();

	}
}
