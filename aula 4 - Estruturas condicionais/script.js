/*

var jogador1 = 1;
var jogador2= 0;
var placar;


   
//If ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') :
console.log ('Jogadores Inválidos');

//Usando if
if(jogador1 > 0 && jogador2 == 0){
        console.log('O jogador 1 marcou ponto!');
        placar = jogador1 > jogador2;
    
//Usando else if
}else if(jogador2 > 0 && jogador1 == 0){
        console.log('O jogador 2 marcou ponto!');
        placar = jogador2 > jogador1;
    }

//Usando else
    else {
        console.log ('O jogo está empatado!');
    
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log ('O vencedor foi o jogador 1');
        break;
    case placar = jogador2 > jogador1:
        console.log ('O vencedor foi o jogador 2');
        break;
    default:
        console.log ('O jogo terminou empatado!');
}
*/

let array = ['v1','v2','v3','v4','v5'];

let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}
/*   
// for executa uma instrução até que ela seja falsa
for (indice = 0; indice < array.length ; indice++) {
    console.log(indice);
}

// for/in executa repetição a partir de uma propriedade
// com array
for (let i in array) {
    console.log(i);
}

// com object
// cria a variável i pois o JS compreende que é uma variável de estado
for (i in object) {
    console.log(i);
} */

/*
// For/of - executa repetição a partir de um valor
// com array
for (i of array){
    console.log(i);
}
// com object (não usar object com for/of pois separa as letras em linhas)
for (i of object.propriedade1) {
    console.log(i);
} */

// While

var a = 0;
while ( a < 10) {
    a++;
    console.log(a);
}

var a = 0;
do {
    a++;
    console.log(a);
} while(a < 5)