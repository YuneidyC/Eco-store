const firstGalleryCarouselImg = document.getElementsByClassName('carousel')[0];
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

let position = 0;

// Take images from HTML
let pictures = [];
let carouselItems = document.getElementsByClassName("carousel");

for (const element of carouselItems) {
    pictures.push(element.src);
};

const moveRight = () => {
    position = sanitizeCarouselIndex(position + 1, 3);
    changeGalleryCarouselImg(position);
}

const moveLeft = () => {
    position = sanitizeCarouselIndex(position - 1, 3);
    changeGalleryCarouselImg(position);
}

function changeGalleryCarouselImg(idx) {
    firstGalleryCarouselImg.src = pictures[idx];
}

function sanitizeCarouselIndex(newPosition, carouselSize) {
    return newPosition % carouselSize;
}

const mql = window.matchMedia("(max-width: 1052px)");

mql.onchange = () => {
    changeGalleryCarouselImg(0);
};

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);
