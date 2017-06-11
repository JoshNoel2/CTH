class RenderedObject extends GameObject {
    constructor(x, y, width, height, sprite) {
        super(x, y, width, height);
        this.priority = false;
        this.sprite = sprite;
    }
    render() {
        if (this.sprite != null) {
            this.sprite.render(this.x - camerax, this.y - cameray, this.width, this.height);
        }
    }
}
