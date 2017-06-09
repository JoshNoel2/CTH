class Spawner extends MovingObject {
    constructor(x, y, sprite, hitbox) {
        super(x, y, 128, 128, sprite, 0, hitbox);
        this.cooldown = 0;
    }
    update() {
        this.cooldown++;
        if (this.cooldown > 200 && !isOnScreen(this)) {
            this.spawn(this.x - 32, this.y + 32);
            this.cooldown = 0;
        }
    }
    spawn(x, y) {
        if (Math.floor(Math.random()*3) == 0) {
            addFairy(x, y);
        } else {
            addZombie(x, y);
        }
    }
}
