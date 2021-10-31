/*
3. Построить объект студент со свойствами: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
Написать отдельную функцию, которой передается объект студент, а она выводит его содержимое.
*/

const Studend = {
    name: 'Иван',
    surname: 'Иванов',
    age: '21',
    hobbys: ['programming', 'sport', 'films'],
    university: 'SUAI'
}

const getInfoObject = (obj) => {
    Object.keys(obj).forEach((value)=> console.log("key:", value, "value:", obj[value]));
}

getInfoObject(Studend);