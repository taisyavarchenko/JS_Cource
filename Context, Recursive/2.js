/*
2. Сделайте функцию, каждый вызов который будет
генерировать одно случайное число от 1 до 100, но
так, чтобы оно не повторялось, пока не будут
перебраны все числа из этого промежутка. Решите
задачу через замыкания - в замыкании должен
хранится массив чисел, которые уже были
сгенерированы функцией.
*/

let generate = () => {
    let used = [];
    return () => {
        let number;
        do
        {
            number = Math.round(Math.random()*99+1);
        }
        while(used.some(value => value==number));
        used.push(number);
        return number;
    }
}

let getNum = generate();

console.log(getNum());
console.log(getNum());