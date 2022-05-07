/*
	Animação 2D: Aula 02 - CANVAS
	-- Objetivo: movimentar elementos na tela com evento de escuta do javascript
*/

const canvas = document.querySelector("#canvas");
/* buscando pelo elemento #canvas na página */
const ctx = canvas.getContext("2d");
/* pegando o contexto gráfico do canvas*/

canvas.width = innerWidth;
canvas.height = innerHeight;
/* adicionando o mesmo tamanho da tela para o tamanho do canvas */

var xAlvo = 500;
var yAlvo = 200;
/* declaração de duas variáveis para a posição do alvo*/

var xJogador = 0;
var yJogador = 0;
/* declaração de duas variáveis para a posição do jogador*/

function alvo(){
	ctx.beginPath();
	ctx.fillStyle = "blue";
	ctx.fillRect(xAlvo,yAlvo,50,50);
	ctx.closePath();
	/* definindo a cor da forma e a posição*/
}
/* declaração da função alvo */


function jogador(){
	ctx.beginPath();
	ctx.fillStyle = "red";
	ctx.fillRect(xJogador,yJogador,50,50);
	ctx.closePath();
}
/* declaração da função jogador */

function controle(e){
	/* o elemento "e" é um evento que ocorre quando a escuta é ativada  */

	if(e.key == "w"){
		yJogador -= 5;
		jogo();
	}
	/* se dentro da escuta [key] a tecla "w" for presionada */

	if(e.key == "s"){
		yJogador += 5;
		jogo();
	}
	/* se dentro da escuta [key] a tecla "s" for presionada */

	if(e.key == "a"){
		xJogador -= 5;
		jogo();
	}
	/* se dentro da escuta [key] a tecla "a" for presionada */

	if(e.key == "d"){
		xJogador += 5;
		jogo();
	}
	/* se dentro da escuta [key] a tecla "d" for presionada */
}
/* declaração da função controle */


function jogo(){
	ctx.clearRect(0,0,canvas.width, canvas.height);
	/* chama a função jogador */
	alvo();
	/* limpar a tela*/
	jogador();


	if(xAlvo == xJogador && yAlvo == yJogador){
		alert("Você ganhou");
		/* se a posição do alvo x,y for a mesma do jogador fim de jogo */
	} 
}
/* declaração da função jogo */
jogo();

/*
CRIAR UM EVENTO DE ESCUTA - 
	PARA QUANDO O USUÁRIO PRESSIONAR AS TECLAS w,a,s,d
*/

document.addEventListener("keypress", controle);
/* adcionando um evento de escuta : keypress. 
Sempre que uma tevla é pressionada chama a função controle */
