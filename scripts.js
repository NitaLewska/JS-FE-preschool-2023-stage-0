async function refreshPage() {
    let response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=cats&client_id=qKm_uGWhkmgjkXjYxGXDnrEOawZNVk79XluAOAtJYG8&per_page=20`);
    let responseJSON = await response.json();
    let imgs = responseJSON.results;
    console.log(imgs)
    imgs.map(function (a) {
        let image = document.createElement('img');
        image.src = a.urls.regular;
        document.querySelector('.pics_container').append(image)
    })
}
refreshPage()

