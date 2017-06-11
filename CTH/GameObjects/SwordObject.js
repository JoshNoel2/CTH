class SwordObject extends MovingObject {
    constructor(length, width1, lifetime, leftSprite, rightSprite, upSprite, downSprite, startExtension, fullExtension, killsEnemies) {
        super(player.x, player.y, length, width1, leftSprite, 0, new Hitbox(0, 0, length, width1, false, false, "sword"));
        this.lifetime = lifetime;
        this.lifeCount = 0;
        this.leftSprite = leftSprite;
        this.upSprite = upSprite;
        this.downSprite = downSprite;
        this.rightSprite = rightSprite;
        this.length = length;
        this.width1 = width1;
        this.startExtension = startExtension;
        this.extension = this.startExtension;
        this.fullExtension = fullExtension;
        this.killsEnemies = killsEnemies;
    }
    update() {
        if (this.lifeCount < this.lifetime/2) {
            this.extension += (this.fullExtension - this.startExtension)/(this.lifetime/2);
        } else {
            this.extension -= (this.fullExtension - this.startExtension)/(this.lifetime/2);
        }
        if (player.facing == "left") {
            this.width = this.length;
            this.height = this.width1;
            this.sprite = this.leftSprite;
            this.x = player.x - this.width + this.width/4 - this.extension;
            this.y = player.y + player.height/2 - this.width/2 + this.width/3;
            this.priority = false;
        } else if (player.facing == "right") {
            this.width = this.length;
            this.height = this.width1;
            this.sprite = this.rightSprite;
            this.x = player.x + player.width - this.width/4 + this.extension;
            this.y = player.y + player.height/2 - this.width/2 + this.width/3;
            this.priority = false;
        } else if (player.facing == "up") {
            this.width = this.width1;
            this.height = this.length;
            this.sprite = this.upSprite;
            this.x = player.x + player.width/2 - this.width/2;
            this.y = player.y - this.height + this.height/2 - this.extension;
            this.priority = false;
        } else if (player.facing == "down") {
            this.width = this.width1;
            this.height = this.length;
            this.sprite = this.downSprite;
            this.x = player.x + player.width/2 - this.width/2;
            this.y = player.y + player.height - this.height/2 + this.extension;
            this.priority = true;
        }
        this.hitbox.x = this.y;
        this.hitbox.y = this.y;
        this.hitbox.width = this.width;
        this.hitbox.height = this.height;
        this.updateHitbox();
        this.lifeCount++;
        if (this.lifeCount >= this.lifetime || this.extension < this.startExtension) {
            this.remove();
        }
        super.update();
    }
    render() {
        if (this.lifeCount > 1) {
            super.render();
        }
    }
    collision(xvel, yvel, object) {
        if (object.type == "enemy" && this.killsEnemies) {
            object.parent.kill();
            this.lifeCount = this.lifetime/2;
        }
    }
}
