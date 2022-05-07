/* Animação 2D - CANVAS AULA 3 
	Objetivo: Objetivo: movimentar um círculo na tela, fazer ele bater e voltar
*/

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let x = 200; /* posição de x */
let y = 200; /* posição de y */
let dx = 4; /* deslocamento de x */
let dy = 4; /* deslocamento de y */
let raio = 30;
/* declarando as variáveis e suas atribuições */

function animate(){

	/* definição do elemento de animação */
	requestAnimationFrame(animate);
	/* limpando a tela*/
	ctx.clearRect(0,0, canvas.width, canvas.height);

	ctx.beginPath();
	ctx.arc(x, y, raio, 0, Math.PI * 2, false);
	ctx.stroke();
	ctx.closePath();
	/* desenhando o circulo */
	

	if(x + raio > innerWidth || x - raio < 0){
		dx = -dx;
	}
	/* se a posição x+raio for maior que o tamanho da tela 
	(ou seja, chegou ao final da tela) OU x+raio for menor que 0 
	(ou seja, chegou no inicio da tela): inverta o sinal do deslocamento
		se está somando, começa a subtrair 
	 */

	if(y + raio > innerHeight || y - raio < 0){
		dy = -dy;
	}

	x += dx;
	y += dy;
}

animate();
/* chama a função animate */







