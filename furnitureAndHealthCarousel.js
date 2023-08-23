import { Carousel } from "./carousel.js";

export class FurnitureAndHealthCarousel extends Carousel {
    constructor(item, position, rightBtn, leftBtn, className) {
        super(item, position, rightBtn, leftBtn);
        this.className = className;
        this.size = 0;
        this.items = [];
        this.addItems();

        this.firstCall = 0;
    }

    addItems() {
        // Take images from HTML
        for (const element of this.className) {
            if (element.localName === 'div') {
                this.items.push(element);
                this.size++;
            }
        };
    }

    changeCarouselImg() {
        if (this.firstCall === 0) {
            this.items[0].classList.remove('block');
        }
        this.item.classList.remove('block');
        this.item = this.items[this.position];
        this.item.classList.add('block');
        this.firstCall++;
    }
}
