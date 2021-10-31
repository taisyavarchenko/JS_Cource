/*
1. Дана строка, изображающая целое число. Вывести сумму цифр этого числа.
*/

const getSum = str => {
    let b = 0;
    for(let i=0; i<str.length; i++){
        b += parseInt(str[i]);
    }
    return b;    
}

console.log('getSum: ' + getSum("1234"));