/**
 *  REVISÃO ANIMAÇÃO 2D
 */

/* Declarações de variáveis  */
/* tipos de dados */
// const, var e let

let nome = "João"; // texto - String
nome = "Maria";

var verdade = true; // booleano (verdadeiro/ falso)
var ano = 1990; // numérico

/** obs: não é necessária a definição do tipo de dado a ser armazenado em uma variável; */
  
/* saída de dados */
alert("Isso é uma saida de dados");
console.log("Isso é uma saída de dado");

/* função sem parâmetro*/
function soma(){
    var num1, num2;
    num1 = 20;
    num2 = 30;
    alert(num1 + num2);
}
/* função com parâmetro */
function somaAB(num1, num2){
    alert(num1 + num2);
}


/* estrutura condicional  */
if(1 == 1){
    alert("1 é igual a 1");
} else {
    alert("É falso");
}

/* comparação lógica */
1 == 1; // true
2 > 4; // false

/* laço de repetição */
for(var i = 1; i <= 4; i++){
    console.log(i)
}

/* CANVAS */
// fillRect
