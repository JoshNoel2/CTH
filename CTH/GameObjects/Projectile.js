class Projectile extends MovingObject {
    constructor(x, y, width, height, sprite, xvel, yvel, speed, killsEnemies, killsPlayer) {
        super(x, y, width, height, sprite, speed, new Hitbox(x, y, width, height, false, false, "projectile"));
        this.xvel = xvel;
        this.yvel = yvel;
        this.killsEnemies = killsEnemies;
        this.killsPlayer = killsPlayer;
    }
    update() {
        super.update();
    }
    target(x, y) {
        var angle = Math.atan2(x - this.x, y - this.y);
        this.xvel = Math.sin(angle) * this.speed;
        this.yvel = Math.cos(angle) * this.speed;
    }
    collision(xvel, yvel, object) {
        if (object.killsProj) {
            this.remove();
        }
        if (object.type == "enemy" && this.killsEnemies) {
            object.parent.kill();
            this.remove();
        }
    }
}
