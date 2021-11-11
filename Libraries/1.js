/*
1. Написать свою подключаемую js библиотеку для работы с массивом, хранящим целые числа. Библиотека должна 
обладать следующими методами:
- поиск минимального элемента в переданном массиве;
- поиск максимально элемента в переданном массиве;
- расчет среднего арифметического значения элементов переданного массива;
- создание копии (клонирование) переданного массива
*/

import {ArrayLib} from "./1_custom_lib.js"


let array = [1,2,3,4,5,6,7,8,9];

console.log(ArrayLib.getMin(array))
console.log(ArrayLib.getMax(array))
console.log(ArrayLib.getAvg(array))
let copy = ArrayLib.getCopy(array);
array[0] = -1;
console.log("Orig:", array , "\nCopy", copy);
