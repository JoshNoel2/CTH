class Hitbox extends GameObject {
    constructor(x, y, width, height, proj, block, type, parent) {
        super(x, y, width, height);
        this.killsProj = proj;
        this.blocksObj = block;
        this.type = type;
        this.parent = parent;
    }
    render() {
        ctx.strokeRect(this.x - camerax, this.y - cameray, this.width, this.height);
    }
}
