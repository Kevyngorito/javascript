// O que são vetores ou arrays
/*como declarar 
let array = ['string',1,true];
console.log(array); */

// pode guardar vários tipos de dados

let array = ['string',1,true,['array1'],['array2'],['array3'],['array4']];
/*console.log(array); /*

/* Manipulando Arrays forEach() 
array.forEach(function(item, index){console.log(item,index)}); */

/* array.push('novo item'); //empurra um novo dado para o final do array
console.log(array); */

//Remove o último item do array
/*
array.pop();
console.log(array); */

//Remove o primeiro item do array

/* array.shift();
console.log(array); */

//Insere um novo item no início do array
/*
array.unshift('novo item no inicio');
console.log(array); */

//Retorna o índice de um item dentro de um array
/*
console.log(array.indexOf(true)); */

//precisa de um valor inicial e de um final, este remove os itens do valor inicial até o final
/* array.splice(0, 3);
    console.log(array); */

    //Retorna uma parte de um array já existente, tendo início e fim no slice
    /*
    let novoArray = array.slice(0, 3);
    console.log(novoArray); */
    
        //objetos
     let object = { String: 'string', Number: 1, boolean: true, array:["array1"], objectInterno: { objectInterno: 'objeto interno'}};
    

        //desestruturação do objeto primeira forma

var string = object.String; // <<- acessa o objeto pegando o valor de String, e atribui a nova variável
// console.log(string); 

var arrayInterno = object.array; //entra na variável objeto e procura o que tem dentro do array e atribui o valor para o arrayInterno
//console.log(arrayInterno);

        //desestruturação do objeto segunda forma

var { Number, boolean, objectInterno} = object; //varivável recebe valor do objeto criado acima, dentro das chaves setar o parâmetro que deseja recolher o valor. 
console.log(Number, boolean, objectInterno);

