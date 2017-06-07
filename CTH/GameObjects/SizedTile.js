class SizedTile extends RenderedObject {
    constructor(x, y, width, height, sprite, priority) {
        super(x, y, width, height, sprite);
        this.priority = priority;
    }
}
