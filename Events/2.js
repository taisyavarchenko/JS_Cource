/*
2. Реализовать счётчик нажатий на кнопку: Дана кнопка внутри неё записана цифра. При клике на 
кнопку – её значение должно увеличиваться на единицу.
*/

window.onload = () => {
    let counter = 0;
    console.log("Страница польностью загружена")
    document.querySelector('button').addEventListener('click', (event)=>{
        event.currentTarget.innerHTML = `${++counter} clicks`;
    })
}