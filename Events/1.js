/*
1. Даны несколько div элементов на html. По первому нажатию на каждый div перекрашивается 
зеленым цветом, при повторном нажатии перекрашивается обратно и так далее каждый клик 
происходит чередование цвета.
*/

window.onload = () => {
    console.log("Страница польностью загружена")
    document.querySelectorAll('div').forEach((el)=>{
        el.addEventListener('click', (event)=>{
            event.currentTarget.style.backgroundColor != "green" ? event.currentTarget.style.backgroundColor="green" : event.currentTarget.style.backgroundColor="white";
        })
    })
}