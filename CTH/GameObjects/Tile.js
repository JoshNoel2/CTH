class Tile extends RenderedObject {
    constructor(x, y, sprite, priority) {
        super(x, y, 128, 128, sprite);
        this.priority = priority;
    }
}
