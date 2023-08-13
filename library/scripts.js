document.querySelector('#nav-icon').addEventListener('click', () => {
    console.log(1)
    if(document.querySelector('#nav-icon').classList.contains('open')){
        console.log('sdfsfd')
        document.querySelector('#nav-icon').classList.remove('open')
        document.querySelector('header nav ul').classList.remove('open')

    }else{
        console.log('sdfsfdwwwww')
        document.querySelector('#nav-icon').classList.add('open')
        document.querySelector('header nav ul').classList.add('open')
        document.addEventListener('click', f1)
    }
})
function f1(e) {
    console.log('2')
    if(e.target!=document.querySelectorAll('header nav ul>*')&&e.target!=document.querySelector('#nav-icon')) {
        e.stopPropagation()
        document.querySelector('#nav-icon').classList.remove('open')
        document.querySelector('header nav ul').classList.remove('open')
        document.removeEventListener('click', f1)
    }
}


// Вёрстка соответствует макету. Ширина экрана 768px +26

// блок <header> +2
// секция Welcome +2
// секция About +4. Обратите внимание на появление новых элементов в виде стрелок и переход на 5 точек вместо 3х.
// ❗Не нужно менять расстояние от картинки до точек, нужно оставить 40px. Оценку не снижаем, если сделано по макету (25px).
// секция Favorites +2
// ❗Сделать кнопку own, вместо buy для последней книги. Здесь важно будет соблюсти условие, что, какие кнопки находились в состояние "own" на Desktop, те же кнопки в том же состоянии будут и на Tablet. Если условие соблюдено: +2
// секция CoffeShop +4
// ❗Оценка снижаться не будет, если при наложении текста, не будет совпадать расположение букв, расстояние между символами, начало и конец строки, а так же орфография. Будут оцениваться межстрочный интервал, шрифт и центрирование блока с текстом по общим правилам.
// секция LibraryCard +4
// блок <footer> + 2
// Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12

// элементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх +4. Например, меню в хедере должно преобразоваться в бургер-меню до того, как элементы начнут наезжать друг на друга.

// размеры открытого бургер-меню соответствуют макету, так же открытое бургер-меню проверяется на PixelPerfect +2