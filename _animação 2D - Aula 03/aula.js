/* selecionar o elemento no documento */
/* definir o contexto 2D*/
/* criando formas primitivas */
/* formas primitivas */
/* linhas */
/* arcos */
/* animando objetos */

/* selecionando meu elemento no arquivo HTML*/
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

ctx.fillRect(0,0, 100, 100);
ctx.fillRect(200,200, 30, 30);
ctx.strokeRect(300,300,50,50);

/* desenhar linha */
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 200);
ctx.lineTo(200, 200);
ctx.closePath();
ctx.stroke();

/* desenhar circulos */
ctx.beginPath();
ctx.arc(500,500, 30, 0, Math.PI * 2, false);
ctx.stroke();

/* animação */ 

function animate() {
	
	requestAnimationFrame(animate);

	ctx.beginPath();
	ctx.arc(200, 200, 30, 0, Math.PI, );
}

const imagem = new Image();

	imagem.src = 'img/ovni.png';

	imagem.onload = function() {
		// Aqui usaremos drawImage
	}


	/*
		INTRODUÇÃO A LÓGICA DE PROGRAMAÇÃO

		- declarações
		- tipos de dados
		- condicial
		- function - funções
		- elementos dom
		- operadores lógicos
		- operadores matemáticos
		- o elemento canvas
		- elemento context
		- formas primarias
		- desenho

	*/
