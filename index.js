const img = document.getElementsByClassName('carousel')[0];
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = ['./assets/img/gallery-1.jpg', './assets/img/gallery-2.jpg', './assets/img/gallery-3.jpg'];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

const mql = window.matchMedia("(max-width: 1052px)");

mql.onchange = (e) => {
    img.src = pictures[0];
  };

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

let carousel_imgs = document.getElementsByClassName("carousel");
carousel_imgs[0].src = pictures[0];
carousel_imgs[1].src = pictures[1];
carousel_imgs[2].src = pictures[2];
