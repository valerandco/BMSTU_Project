let currentIndex = 0;

let images = [
    '/img/Escapists 2 0.png',
    '/img/Escapists 2 1.png',
    '/img/Escapists 2 2.png',
    '/img/Escapists 2 3.png',
    '/img/Escapists 2 4.png',
    '/img/Escapists 2 5.png',
    '/img/Escapists 2 6.png',
    '/img/Escapists 2 7.png',
];


    

function updateIndex(index) {
    currentIndex = index;
}

function handleThumbnailClick(i) {
    currentIndex = i;
}

function handleKeyPress(event, i) {
    if (event.key === 'Enter' || event.key === ' ') {
    currentIndex = i;
    }
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
}
