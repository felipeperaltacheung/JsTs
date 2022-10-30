//Nao pode criar constantes com palavar reservada -> Ex: const if;
//Constantes precisam ter nomes significativos -> Ex: const nameClient;
//Nao pode comecar o nome de constante com um numero -> Ex: const 1name;
//Nao pode conter espacos ou tracos -> Ex: const name-Cliente ou name Client;
//Utilizar camelCase -> Ex: const fullName;
//Case-sensitive
//NAO PODE MODIFICAR O VALOR DE UMA CONSTANTE


const name = "Otavio White";

//Posso pegar o valor de uma variavel ou constante e atribuir a outra variavel ou constante

const firstNumber = '5';
const secondNumber = 10;
const result = firstNumber * secondNumber;
const resultDuplicado = result * 2;
let resutTriplicado = result * 3;
resutTriplicado += 5; //155


console.log(firstNumber + secondNumber); //510

console.log(typeof(resutTriplicado)); //number

oqueSera = firstNumber + secondNumber;

console.log(typeof(oqueSera));