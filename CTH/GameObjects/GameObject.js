class GameObject {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    remove() {
        toRemove.push(this);
        if (this.hitbox != null) {
            toRemove.push(this.hitbox);
        }
    }
}
