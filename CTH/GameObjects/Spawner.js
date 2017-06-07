class Spawner extends MovingObject {
    constructor(x, y, sprite) {
        super(x, y, 128, 128, sprite, 0, new Hitbox(x + 16, y + 16, 96, 96, false, true, "spawner"));
        this.cooldown = 0;
    }
    update() {
        this.cooldown++;
        if (this.cooldown > 100) {
            addZombie(this.x - 32, this.y + 32);
            this.cooldown = 0;
        }
    }
}
