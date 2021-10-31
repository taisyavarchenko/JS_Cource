/*
3. Построить объект студент:
- свойства: Имя, Фамилия, Возраст, Интересы (в виде
массива), Место обучения.
- метод объекта выводящий в консоль
биографическую справку в виде, например:
«Иван Петров. 21 год. Интересы: программирование,
музыка, аниме. Учится в ГУАП

*/

const Studend = {
    name: 'Иван',
    surname: 'Иванов',
    age: '21',
    hobbys: ['programming', 'sport', 'films'],
    university: 'SUAI',
    getInfo: function () {
        console.log(this.name, this.surname+".", this.age, "год.", "Интересы:", this.hobbys.join(", ")+".", "Учится в", this.university);
    }
}

Studend.getInfo();