class Spawner extends MovingObject {
    constructor(x, y,  biome, sprite, hitbox) {
        super(x, y, 128, 128, sprite, 0, hitbox);
        this.cooldown = 0;
        this.biome = biome;
    }
    update() {
        this.cooldown++;
        if (this.cooldown > 200 && !isOnScreen(this)) {
            this.spawn(this.x - 32, this.y + 32);
            this.cooldown = 0;
        }
    }
    spawn(x, y) {
        if (this.biome == "X" && getCurrentSection().biome == "X") {
            addEnemy(new Zombie(x, y, getBiomeFromKey(this.biome)[3]));
        } else if (this.biome == 0 && getCurrentSection().biome == 0) {
            addEnemy(new Zombie(x, y, getBiomeFromKey(this.biome)[3]));
        } else if (this.biome == 1 && getCurrentSection().biome == 1) {
            if (Math.floor(Math.random()*2) == 0) {
                addEnemy(new GreenFairy(x, y, getBiomeFromKey(this.biome)[3]));
            } else {
                addEnemy(new RedFairy(x, y, getBiomeFromKey(this.biome)[3]));
            }
        }
    }
}
