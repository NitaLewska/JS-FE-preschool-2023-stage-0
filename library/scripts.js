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


console.log("На ширине экрана 768рх реализовано адаптивное меню +12\n(#000000)при нажатии на бургер-иконку плавно появляется адаптивное меню +4при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран +2ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, а само адаптивное меню при этом плавно скрывается +2размеры открытого бургер-меню соответствуют макету, так же открытое бургер-меню проверяется на PixelPerfect +2")