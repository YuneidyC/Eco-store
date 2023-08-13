export class Carousel {
    constructor(item, position, rightBtn, leftBtn) {
        this.item = item;
        this.position = position;
        this.rightBtn = rightBtn;
        this.leftBtn = leftBtn;
        this.size = 0;

        this.rightBtn.addEventListener("click", () => {
            this.moveRight();
        });

        this.leftBtn.addEventListener("click", () => {
            this.moveLeft();
        });
    }

    moveRight () {
        this.updatePosition(this.position + 1);
        this.changeCarouselImg();
    }

    moveLeft() {
        this.updatePosition(this.position - 1);
        this.changeCarouselImg();
    }

    updatePosition(newPosition) {
        this.position = ((newPosition % this.size) + this.size) % this.size;
    }

    changeCarouselImg() {
        this.item.src = this.items[this.position];
    }
}
