// tipos primitivos

// boolean

/* var vouf = false;
console.log(vouf);
console.log(typeof(vouf));

// number

var numeroQualquer = 1;
console.log(numeroQualquer); //imprime o número setado no console.
console.log(typeof(numeroQualquer));

// string
var nome = 'diana';
console.log(nome);
console.log(typeof(nome));
*/
/*
var variavel = 'diana'
variavel = 'mudandoOnome'
console.log(variavel); //neste caso receberá o valor no console do último valor na variavel.

let variavel2 = 'kevyn'
variavel2 = 'gorito'
console.log(variavel2); //neste caso receberá o valor no console do último valor no let.

const constante = 3.141516
console.log(constante)
*/
// Variável global é vista por todo o código
var escopoGlobal = 'Global';
console.log(escopoGlobal);


/* para imprimir o console.log deve estar dentro da função e ao fechar a função
deverá o correr a chamada da função, para que o valor seja lido dentro do console */
/*
function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal (); //chama a função criada <<<
*/

/*
var atribuicao = 2;
console.log(atribuicao);

var comparacaoSimples = '0' == 0; //retorna true, pois compara os valores
console.log(comparacaoSimples);

var comparacaoIdentica = '5' === 5; //retorna flase, pois compara o valor e o tipo.
console.log(comparacaoIdentica);
*/

// adição
var adicao = 1 + 1;
console.log(adicao);

// subtração
var subtracao = 5 - 1;
console.log(subtracao);

// multiplicação
var multiplicacao = 5 * 3;
console.log(multiplicacao);

// divisão real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

// divisão Inteira ou resto da divisão
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// divisão potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);