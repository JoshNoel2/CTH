class Sprite {
    constructor(image) {
        this.image = new Image;
        this.image.src = image;
    }
    render(x, y, width, height) {
    	renderImage(this.image, 0, 0, this.image.width, this.image.height, x, y, width, height);
    }
}
