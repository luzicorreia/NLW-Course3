// Inibir "ações do mapa, como Zoom, scroll, etc. na pagina Lar das menianas"
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-23.6815314,-46.8754974], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create and add marker
L
.marker([-23.6815314,-46.8754974], { icon })
.addTo(map)


// image gallery //

function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    
// selecionar a imagem clicada
const image = button.children[0]
const imageContainer = document.querySelector(".orphanage-details > img")

// atualziar o container da iamgem
imageContainer.src = image.src

// adicionar a classe .active para este botão
button.classList.add('active')
}





