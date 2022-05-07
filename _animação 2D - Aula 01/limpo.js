const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

ctx.fillRect(100,100, 50, 50);

ctx.fillStyle = "red";    
ctx.beginPath();         
ctx.moveTo(100,100);     
ctx.lineTo(200,200);     
ctx.stroke();            

