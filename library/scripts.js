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


console.log("Никак не сделаю сецию LibraryCard, в About не хватает стрелок")