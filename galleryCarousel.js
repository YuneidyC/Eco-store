import { Carousel } from "./carousel.js";

export class GalleryCarousel extends Carousel {
    constructor(item, position, rightBtn, leftBtn, className) {
        super(item, position, rightBtn, leftBtn);
        this.className = className;
        this.size = 0;
        this.items = [];
        this.addItems();
    }

    addItems() {
        // Take images from HTML
        {
            let carouselItems = document.getElementsByClassName(this.className);

            for (const element of carouselItems) {
                this.items.push(element.src);
                this.size++;
            };
        }
    }

    changeGalleryCarouselImg(idx) {
        this.item.src = this.items[idx];
    }
}
