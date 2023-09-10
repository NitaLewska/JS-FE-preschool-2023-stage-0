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

// //burger
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("menu-burger-button").addEventListener("click", function() {
//         document.querySelector(".header-links").classList.toggle("open")
//     })
// });

// //Close burger by Esc
// window.addEventListener('keydown', (e) => {
//     if (e.key === "Escape") {
//         document.querySelector(".header-links").classList.remove("open")
//     }
// });

// // Close burger by outer click
// document.getElementById("open-menu-burger").addEventListener('click', event => {
//     /*event._isClickWithInMenu = true; menu is still open*/
//     if (event._isClickWithInMenu) return;
//     document.querySelector(".header-links").classList.remove("open")
// });
// document.getElementById("menu-burger-button").addEventListener('click', event => {
//     event._isClickWithInMenu = true;
// });
// document.body.addEventListener('click', event => {
//     if (event._isClickWithInMenu) return;
//     document.querySelector(".header-links").classList.remove("open")
// });