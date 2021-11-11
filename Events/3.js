/*
3. Реализовать возможность добавления комментариев. Комментарий вводится в textarea. 
Комментарий добавляется по нажатию на кнопку Комментировать. При добавлении комментария 
отображаются: аватар автора (пока у всех комментариев одинаковый), имя автора (пока у всех 
комментариев одинаковое), дата добавления комментария (текущая дата), текст комментария (тот, что 
был введен в textarea).
*/
window.onload = () => {
    document.querySelector("#addcomment").addEventListener("click", (event) => {
        let today = new Date();
        let options = {
            image: "https://www.stratege.ru/forums/cavatar/159933_1",
            name: "Taisya Varchenko",
            date: today.toLocaleTimeString(),
            text: document.querySelector('textarea').innerHTML,
        }
        let comment = document.createElement('div');
        comment.innerHTML = `
            <img src=${options.image}>
            <p>${options.name}</p>
            <p>${options.date}</p>
            <p>text</p>
        `
        console.log(document.body.querySelector("#output"));
        document.body.querySelector("#output").append(comment)
    })
}
