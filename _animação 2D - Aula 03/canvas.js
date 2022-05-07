/* Animação 2D - CANVAS AULA 3 

	Objetivo: Objetivo: movimentar um círculo na tela, fazer ele bater e voltar

*/

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

/* criando formas primitivas */
ctx.fillStyle = "red";
ctx.fillRect(10,10,20,20);
ctx.strokeRect(50,50,100,100);

/* linhas */
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(200,200);
ctx.lineTo(400,200);
ctx.stroke();
ctx.closePath();

/* criando arcos, circulos */
ctx.beginPath();
ctx.arc(100,100, 30, 0, Math.PI * 2, true);
ctx.stroke();
ctx.closePath();

/*animação 2d */

let x = 200;
let y = 200;
let dx = 4;
let dy = 4;
let raio = 30;

function animate(){

	/* definição do elemento de animação */
	requestAnimationFrame(animate);
	ctx.clearRect(0,0, canvas.width, canvas.height);

	ctx.beginPath();
	ctx.arc(x, y, raio, 0, Math.PI * 2, false);
	ctx.stroke();
	
	if(x + raio > innerWidth || x - raio < 0){
		dx = -dx;
	}

	if(y + raio > innerHeight || y - raio < 0){
		dy = -dy;
	}

	x += dx;
	y += dy;
}

animate();







