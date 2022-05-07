// Animação 2D - CANVAS
const canvas = document.querySelector("#canvas");
/* Esse método seleciona o elemento HTML canvas */

const ctx = canvas.getContext("2d");
/* Pega o contexto daquele elemento - a coisa sobre a qual o desenho será renderizado */

canvas.width = innerWidth;
canvas.height = innerHeight;
/* define o tamanho do canvas para o tamanho total da tela*/

ctx.fillStyle = "blue";    // define a cor da forma 
ctx.fillRect(100,100, 50, 50);

/* cria uma forma solida na posição x100 y100 e define o tamanho dele 50 largura, 50 altura 

ctx.strokeRect(200,200, 90, 75);*/

ctx.fillStyle = "red";
ctx.fillRect(100,100, 40,40);
ctx.strokeRect(200,200, 50,50);

/* criando linhas */
ctx.beginPath();    // começa um desenho
ctx.moveTo(300,300);
ctx.lineTo(900,300);
ctx.lineTo(900,0);
ctx.stroke();

/* como criar uma função */
var x = 100;
var y = 100;
var dx = 5;
var dy = 5;

function animate(){

	requestAnimationFrame(animate);
	ctx.clearRect(0,0,innerWidth,innerHeight);
	ctx.fillRect(x,y, 50,50);

	
	/* se largura for igual a posição do elemento*/
	if(x > innerWidth || x < 0){
		dx = -dx;
		ctx.fillStyle = "blue";
	}

	if(y > innerHeight || y < 0){
		dy = -dy;
	}
	x = x + dx;
	y = y + dy;

}

var x = 500;
var y = 500;

function moverElementos(x,y){
	/**/
	ctx.clearRect(0,0,innerWidth,innerHeight);
	ctx.fillStyle = "red";
	ctx.fillRect(x,y, 50,50);

	ctx.fillStyle = "purple";
	ctx.fillRect(0,0, 50,50);
}

moverElementos(x,y);

document.addEventListener('keypress', (e)=>{
	
	console.log(e);
	if(e.key === "w"){
		y = y-10;
		moverElementos(x,y);
	}

	if(e.key === "s"){
		y = y+10;
		moverElementos(x,y);
	}

})


