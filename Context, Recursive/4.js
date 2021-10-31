/*
4. Написать функцию вычисляющую факториал числа с
использованием рекурсии. Факториал числа - это
число, умноженное на себя минус один, затем на себя
минус два и так далее, до единицы. Обозначается n!
Определение факториала можно записать как: n! = n *
(n - 1) * (n - 2) * ...*1
*/

let factorial = (number) => {
    if(number == 1)
        return number;
    return number*factorial(number-1);
}

console.log(factorial(5));