// Animação 2D - CANVAS

const canvas = document.querySelector("#canvas");
/* Esse método seleciona o elemento HTML canvas */

const ctx = canvas.getContext("2d");
/* Pega o contexto daquele elemento - a coisa sobre a qual o desenho será renderizado */

canvas.width = innerWidth;
canvas.height = innerHeight;
/* define o tamanho do canvas para o tamanho total da tela*/

ctx.fillRect(100,100, 50, 50);
/* cria uma forma solida na posição x100 y100 e define o tamanho dele 50 largura, 50 altura */

ctx.fillStyle = "red";    // define a cor da forma 
ctx.beginPath();          // começa um desenho
ctx.moveTo(100,100);      // posição inicial do traço
ctx.lineTo(200,200);      // próxima posição
ctx.stroke();             // cria o traçado


