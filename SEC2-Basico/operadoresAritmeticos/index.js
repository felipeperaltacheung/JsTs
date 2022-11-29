
// incremento = ++
// decremento = --

// ++pre = Primeiro incrementa o valor, depois executa a acao
// pos++ =  Executa a acao primeiro, depois incrementa

let contador = 1;
++contador; //2
++contador; //3
++contador; //4
console.log(contador); //4

/////////////////////////////////////////////////////////////////////////

let contador2 = 1;

contador2++; //2
contador2++; //3
contador2++; //4
console.log(contador2); // 4

/////////////////////////////////////////////////////////////////////////

let contador3 = 1;
console.log(contador3++); //1

let contador4 = 1;
console.log(++contador4); //2
console.log("//////////////////")

/////////////////////////////////////////////////////////////////////////

//incremento com mais de um valor
//operadores de atribuicao
const passo = 2;
let contador5 = 0;
contador5 += passo;
console.log(contador5); //2

contador5 += passo;
console.log(contador5); //4

contador5 += passo;
console.log(contador5); //6
console.log("//////////////////")

/////////////////////////////////////////////////////////////////////////

let contador6 = 2;
contador6 **= 10;
console.log(contador6); //1024
console.log("//////////////////")

/////////////////////////////////////////////////////////////////////////

const num1 = 10;
const num2 = 'luiz';
console.log(num1 * num2); //NaN -> Not a Number
console.log("//////////////////")

/////////////////////////////////////////////////////////////////////////

// Converter Tipo -> Casting
const num3 = 10;
const num4 = parseInt('6');
console.log(num3 + num4); // 16
console.log(typeof num4); // number

//parseInt
//parteFloat
//Number
