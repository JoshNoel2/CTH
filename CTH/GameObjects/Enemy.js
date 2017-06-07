class Enemy extends MovingObject {
    constructor(x, y, movingLeftSprite, movingRightSprite, movingUpSprite, movingDownSprite) {
        super(x, y, 32, 32, movingDownSprite, 2,
            new Hitbox(x, y + 20, 32, 32, true, false, "enemy"));
        this.movingLeftSprite = movingLeftSprite;
        this.movingRightSprite = movingRightSprite;
        this.movingUpSprite = movingUpSprite;
        this.movingDownSprite = movingDownSprite;
        this.facing = "down";
        this.accuracy = 30;
        this.killsProj = true;
        this.killedByPlayer = false;
    }
    update() {
        if (Math.floor(Math.random()*this.accuracy) == 1) {
            if (player.x < this.x) {
                this.xvel = -this.speed;
                this.facing = "left";
                this.sprite = this.movingLeftSprite;
            } else if (player.x > this.x) {
                this.xvel = this.speed;
                this.facing = "right";
                this.sprite = this.movingRightSprite;
            } else {
                this.xvel = 0;
            }
        }
        if (Math.floor(Math.random()*this.accuracy) == 1) {
            if (player.y < this.y) {
                this.yvel = -this.speed;
                this.facing = "up";
                this.sprite = this.movingUpSprite;
            } else if (player.y >= this.y) {
                this.yvel = this.speed;
                this.facing = "down";
                this.sprite = this.movingDownSprite;
            } else {
                this.yvel = 0;
            }
        }
        this.y += 32;
        this.height = 32;
        super.update();
        this.y -= 32;
        this.height = 64;
    }
    kill() {
        this.killedByPlayer = true;
        this.remove();
    }
}
