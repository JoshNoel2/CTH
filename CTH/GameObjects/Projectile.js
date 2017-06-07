class Projectile extends MovingObject {
    constructor(x, y, sprite, xvel, yvel) {
        super(x, y, 48, 48, sprite, 6, new Hitbox(x, y, 48, 48, false, false, "projectile"));
        this.xvel = xvel;
        this.yvel = yvel;
        this.removeCount = 0;
    }
    update() {
        this.removeCount++;
        if (this.removeCount > 500) {
            this.remove();
        }
        super.update();
    }
    collision(xvel, yvel, object) {
        if (object.killsProj) {
            this.remove();
        }
        if (object.type == "enemy") {
            object.parent.kill();
        }
    }
}
