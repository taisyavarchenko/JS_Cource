/*
 Задан массив - [12,4,3,10,1,20]. Удалить из него наименьшее и наибольшее значение.
*/

let numbers = [12,4,3,10,1,20];

let min = Math.min(...numbers);
let max = Math.max(...numbers);
numbers.filter(value => value != min && value != max);
console.log(numbers);