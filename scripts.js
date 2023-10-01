async function refreshPage() {
    let response
    if (document.querySelector('.keyword').value.length > 1) {
        response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${document.querySelector('.keyword').value}&client_id=qKm_uGWhkmgjkXjYxGXDnrEOawZNVk79XluAOAtJYG8&per_page=20`);
    }
    let responseJSON = await response.json();
    let imgs = responseJSON.results;
    console.log(imgs)
    document.querySelector('.pics_container').innerHTML=''
    imgs.map(function (a) {
        let image = document.createElement('img');
        image.src = a.urls.regular;
        document.querySelector('.pics_container').append(image)
    })
}
// refreshPage()



document.querySelector(".submitButton").addEventListener('click', refreshPage)


