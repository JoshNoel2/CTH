class RenderedObject extends GameObject {
    constructor(x, y, width, height, sprite) {
        super(x, y, width, height);
        this.sprite = sprite;
    }
    render() {
        this.sprite.render(this.x - camerax, this.y - cameray, this.width, this.height);
    }
}
