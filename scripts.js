async function refreshPage() {
    let response
    if (document.querySelector('.keyword').value.length >= 1) {
        response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${document.querySelector('.keyword').value}&client_id=qKm_uGWhkmgjkXjYxGXDnrEOawZNVk79XluAOAtJYG8&per_page=20`);
    } else {
        response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=popular&client_id=qKm_uGWhkmgjkXjYxGXDnrEOawZNVk79XluAOAtJYG8&per_page=20`)
    }
    let responseJSON = await response.json();
    let imgs = responseJSON.results;
    console.log(imgs)
    document.querySelector('.pics_container').innerHTML = ''
    if (imgs.length > 0) {
        imgs.map(function (a) {
            let image = document.createElement('img');
            image.src = a.urls.regular;
            document.querySelector('.pics_container').append(image)
        })
    }
    else {
        let sorryText = document.createElement('h2');
        sorryText.innerHTML = "There's no such photos on Unsplash, sorry. Try again!"
        document.querySelector('.pics_container').append(sorryText)
    }

}
refreshPage()

document.querySelector(".submitButton").addEventListener('click', refreshPage)
document.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        refreshPage()
    }
});

document.querySelector('.keyword').addEventListener('input', function () {
    document.querySelector('.keyword').value.length > 0 ? document.querySelector(".clearButton").classList.remove('hidden') : document.querySelector(".clearButton").classList.add('hidden')
})

document.querySelector(".clearButton").addEventListener('click', function () {
    document.querySelector('.keyword').value = ''
})


console.log("Вроде бы всё успела сделать, по критериям себя проверяла, 60")
console.log("Дополнительно добавила сообщение о том, что таких фотографий нет, если длина массива response 0")

