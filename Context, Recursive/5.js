/*
5. Отсортировать массив по полю 'price' используя
метод sort и передаваемую ей функцию,
определяющую порядок сортировки.
*/

let arr = [
    {
        'price' : 10,
        'count' : 2 
    }, 
    { 
        'price' : 5,
        'count' : 5},
    { 
        'price' : 8,
        'count' : 5 
    }, 
    { 
        'price' : 12,
        'count' : 4 
    }, 
    { 
        'price' : 8, 
        'count' : 4
    },
];

arr.sort((a,b) => a.price - b.price);

console.log(arr);