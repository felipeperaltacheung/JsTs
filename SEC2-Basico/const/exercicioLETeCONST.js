/* 
Luiz Otavio, has  30 year old, weighs 84, 
has 1.8 height, and 
his IMC is  25.925925925925924.
Luiz was born in 1992
*/

const name = 'Luiz';
const middleName = 'Otavio';
const age = 30;
const weigh = 84;
const height = 1.80;
let imc = weigh / (height * height);
let birthDay = 2022 - age;

console.log(name + "", middleName + ", has ", + age + " year old," + " weighs", + weigh + ", "
+ "has", + height + "", "height, and his IMC is ", imc + ". ", name + " was born in", birthDay);

//template string abaixo

console.log(`${name} ${middleName}, has  ${age} year old, weighs ${weigh}, has ${height} height,
 and his IMC is  ${imc} Luiz was born in ${birthDay}`);