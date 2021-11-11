/*
4. Написать функцию, которая будет осуществлять сортировку таблицы из предыдущего задания (1.4) по значениям 
столбца при нажатии на название этого столбца.
*/

/*
4. Дан массив с объектами, где каждый объект описывает книгу: артикул, автор, название, описание. 
Сформировать функцию, которой передаётся массив книг, и которая создаст и внесёт все необходимые 
html элементы, стили, и содержание для отображения всей информации о книгах в виду таблицы.
*/
let objectBooksInfo = [{
    article: "484845",
    title: "Война и мир",
    author: "Л.Н. Толстой",
    description: "Роман-эпопея Льва Николаевича Толстого, описывающий русское общество в эпоху войн против Наполеона в 1805—1812 годах. Эпилог романа доводит повествование до 1820 года.",
},
{
    article: "484455",
    title: "Остров сокровищ",
    author: "С.Р. Льюис",
    description: "Этот роман Стивенсона, принесший ему известность, переведен на множество языков, а счет его экранизациям идет на десятки. Это рассказ о том, как однажды в темную бурную ночь на пороге трактира «Адмирал Бенбоу» появился старый пират Билли Бонс. В результате зловещих и странных событий молодой Джим Гокинс, сын хозяйки трактира, становится обладателем карты сокровищ капитана Флинта. В сопровождении друзей и целой команды пиратов он отправляется в путь...",
}]

let createBooksInfo = (Books) => {
    let table = document.createElement('table');
    let header = document.createElement('tr');
    header.innerHTML = `
        <th class="article">Артикул</th>
        <th class="title">Название</th>
        <th class="author">Автор</th>
        <th class="description">Описание</th>
    `
    table.append(header);
    table.setAttribute('border', "1");
    Books.forEach(element => {
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${element.article}</td>
        <td>${element.title}</td>
        <td>${element.author}</td>
        <td>${element.description}</td>
        `
        table.append(row);
    });
    document.querySelector('body').append(table);
}



let sortArray = (property) => {
    objectBooksInfo.sort(function (a, b) {
        if (a[property] > b[property]) {
          return 1;
        }
        if (a[property] < b[property]) {
          return -1;
        }
        return 0;
      });
    $('table').remove();
    createBooksInfo(objectBooksInfo);
    $('th').on("click", (event)=>{
        sortArray($(event.currentTarget).attr("class"))
        console.log(2222)
    })
}

window.onload = () => {
    createBooksInfo(objectBooksInfo);
    $('th').on("click", (event)=>{
        sortArray($(event.currentTarget).attr("class"))
    })
}