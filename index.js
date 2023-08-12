const img = document.getElementsByClassName('carousel')[0];
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Take images from HTML
let pictures = [];
let carouselItems = document.getElementsByClassName("carousel");
for (const element of carouselItems) {
    pictures.push(element.src);
};

let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[++position];
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[--position];
}

const mql = window.matchMedia("(max-width: 1052px)");

mql.onchange = (e) => {
    img.src = pictures[0];
};

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);
