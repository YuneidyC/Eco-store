import { FurnitureAndHealthCarousel } from './furnitureAndHealthCarousel.js';
import { GalleryCarousel } from './galleryCarousel.js';

const galleryCarouselImg = document.getElementsByClassName('carousel')[0];
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

let galleryCarousel = new GalleryCarousel(galleryCarouselImg, 0, rightBtn, leftBtn, "carousel");

const mql = window.matchMedia("(max-width: 1052px)");

mql.onchange = () => {
    galleryCarousel.changeGalleryCarouselImg(0);
};

const furnitureCarouselFirstElement = document.getElementById('furniture-carousel');
const rightBtnFurniture = document.getElementById('right-btn-furniture');
const leftBtnFurniture = document.getElementById('left-btn-furniture');
let furnitureCarousel = new FurnitureAndHealthCarousel(furnitureCarouselFirstElement.children[2], 0, rightBtnFurniture, leftBtnFurniture, furnitureCarouselFirstElement.childNodes);

const healthCareCarousel = document.getElementById('healthcare-carousel');
const rightBtnHealth = document.getElementById('right-btn-health');
const leftBtnHealth = document.getElementById('left-btn-health');
let healthCarousel = new FurnitureAndHealthCarousel(healthCareCarousel.children[2], 0, rightBtnHealth, leftBtnHealth, healthCareCarousel.childNodes);
