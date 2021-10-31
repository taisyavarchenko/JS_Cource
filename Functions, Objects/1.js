/*
1. Написать функцию сравнения двух массивов. Функция принимает на вход два массива, сравнивает их и
возвращает true, если массивы равны и false, если не равны.
*/

let compare = (a, b) => {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

console.log(compare([1,2,3], [2,3,4])); //false
console.log(compare([1,2,3], [1,2,3])); //true