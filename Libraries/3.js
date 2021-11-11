/*
3. Написать функцию генерации поля n x n (значение n - аргумент функции), в ячейки рандомно спрятать несколько 
призов. Пользователю дается 3 попытки найти их - по нажатию на ячейку либо открывается приз (иконка, изменения 
цвета и тд), либо иконка, сообщающая, что приза нет. Количество оставшихся попыток выводим рядом с игровым полем.
*/
const n = 3;

let generate = () => {
    let win = n;
    for (let index = 0; index < n*n; index++) {
        $($('div.line')[(index)%n]).append(`<div class="square" id=${index}><div>`);
    }
    while(win > 0)
    {
        let index = Math.round(Math.random()*100 % (n * n));
        console.log(index);
        if(!$(`#${index}`).hasClass('win'))
        {
            --win;
            $(`#${index}`).addClass('win');
        }
    }
    win = n;
    $( ".square" ).on( "click", function(event) {
        if(win)
        {
            if($(event.currentTarget).hasClass('win'))
            {
                $(event.currentTarget).css("background", "#FF0" );
            }
            else
            {
                --win;
                $("#wincount").text(win);

            }
        }
    });
}




$( document ).ready(function() {
    generate()
});
