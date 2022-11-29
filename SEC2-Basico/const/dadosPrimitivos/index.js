// TIPO PRIMIVO x TIPO PASSADO POR REFERENCIA

const name = 'Luiz';
const name1 = "Luiz"; 
const name2 = `Luiz`;

const num = 10; // number
const num1 = 10.1234; //number

let nomeAluno; // undefined
const sobrenomeAluno = null;
const aprovado = false 


let z = 2;
const y = z;
console.log(z, y); // 2 2 

z = 3;
console.log(z, y); //3

// valor de referencia com push 
const a = [1, 2]; //array
const b = a;

console.log(a, b); // [ 1, 2 ] [ 1, 2 ]

b.push(3);
console.log(a, b); //[ 1, 2, 3 ] [ 1, 2, 3 ] 


