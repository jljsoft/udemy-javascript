'use strict'

// function logger(){
//     console.log("João Lucas de Jesus");
// }

// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)

//Função de declaração
// function calcAge1(brithYeah){
//     return 2022 - brithYeah;
// }

// const age1 = calcAge1(1998);

// //Função de Expressão
// const calcAge2 = function (brithYeah){
//     return 2022 - brithYeah
// }

// const age2 = calcAge2(1998)

// console.log(age1, age2);

const calcAge3 = brithYeah => 2022 - brithYeah;
const alge3 = calcAge3(1998)
console.log(alge3);

const yearsUnitlRetirement = (brithYeah, fistName) => {
    const age = 2022 - brithYeah;
    const retirement = 65 - age;
    return `${fistName} retires in ${retirement} years`;
}

console.log(yearsUnitlRetirement(1998, 'João Lucas'));


