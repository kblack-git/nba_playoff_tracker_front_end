let conference = document.querySelector('.conference')

fetch('http://localhost:3000/teams')
.then (response => response.json())
.then (data => {
    console.log(data)
    // photo.setAttribute('src',data.photos[0].image.web)
    // photo.innerText='test'
    document.createElement
}) 