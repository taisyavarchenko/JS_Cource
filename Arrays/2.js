/*
2. Одномерным массивом задана доска 3 на 3 
var area = [ null, null, null, null, null, null, null, null, null ]
Необходимо сформировать и вывести (document.write) игровое поле состоящее из квадратов для крестиков-ноликов в HTML. При 
появлении в массиве 0-ля рисовать нолик , 1-цы крестик Пример: [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н 
нолик.
*/

var area = [ null, null, null, null, null, null, null, null, null ];

area.forEach((value, i) => {
    switch (value) {
        case 0:
            document.write(`<img src="src/O.jpg">`);
            break;
        case 1:
            document.write(`<img src="src/X.jpg">`);
            break;
        default:
            document.write(`<img src="src/empty.jpg">`);
            break;
    }
    if(!((i+1)%3))
        document.write('<br>');
})