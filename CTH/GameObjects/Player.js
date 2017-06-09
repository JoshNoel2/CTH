class Player extends MovingObject {
    constructor(x, y, stationaryLeftSprite, stationaryRightSprite, stationaryUpSprite, stationaryDownSprite,
                movingLeftSprite, movingRightSprite, movingUpSprite, movingDownSprite) {
        super(x, y, 32, 32, stationaryDownSprite, 4,
            new Hitbox(x, y, 32, 32, false, false, "player"));
        this.stationaryLeftSprite = stationaryLeftSprite;
        this.stationaryRightSprite = stationaryRightSprite;
        this.stationaryUpSprite = stationaryUpSprite;
        this.stationaryDownSprite = stationaryDownSprite;
        this.movingLeftSprite = movingLeftSprite;
        this.movingRightSprite = movingRightSprite;
        this.movingUpSprite = movingUpSprite;
        this.movingDownSprite = movingDownSprite;
        this.facing = "down";
        this.shotDelay = 0;
        this.health = 5;
        this.noDamage = 51;
        this.kills = 0;
    }
    update() {
        this.shotDelay++;
        this.noDamage++;
        if (keysDown[32] && this.shotDelay > 20) {
            this.shotDelay = 0;
            if (this.facing == "left") {
                entities.push(new Projectile(this.x, this.y + this.height/2 - 24, 48, 48,
                    new Animation("Graphics/Fire/Fire_Left.png", 64, 64, 5, 5, 0), -6, 0, 6, true, false));
            } else if (this.facing == "right") {
                entities.push(new Projectile(this.x + this.width/2, this.y + this.height/2 - 24, 48, 48,
                    new Animation("Graphics/Fire/Fire_Right.png", 64, 64, 5, 5, 0), 6, 0, 6, true, false));
            } else if (this.facing == "up") {
                entities.push(new Projectile(this.x + this.width/2 - 24, this.y, 48, 48,
                    new Animation("Graphics/Fire/Fire_Up.png", 64, 64, 5, 5, 0), 0, -6, 6, true, false));
            } else if (this.facing == "down") {
                entities.push(new Projectile(this.x + this.width/2 - 24, this.y + this.height/2, 48, 48,
                    new Animation("Graphics/Fire/Fire_Down.png", 64, 64, 5, 5, 0), 0, 6, 6, true, false));
            }
            keysDown[32] = false;
        }
        this.sprite = this.stationaryDownSprite;
        if (keysDown[65] || keysDown[37]) {
            this.xvel = -this.speed;
            this.facing = "left";
        } else if (keysDown[68] || keysDown[39]) {
            this.xvel = this.speed;
            this.facing = "right";
        } else {
            this.xvel = 0;
        }
        if (keysDown[87] || keysDown[38]) {
            this.yvel = -this.speed;
            this.facing = "up";
        } else if (keysDown[83] || keysDown[40]) {
            this.yvel = this.speed;
            this.facing = "down";
        } else {
            this.yvel = 0;
        }
        if (this.xvel != 0 || this.yvel != 0) {
            if (this.facing == "left") {
                this.sprite = this.movingLeftSprite;
            } else if (this.facing == "right") {
                this.sprite = this.movingRightSprite;
            } else if (this.facing == "up") {
                this.sprite = this.movingUpSprite;
            } else if (this.facing == "down") {
                this.sprite = this.movingDownSprite;
            }
        } else {
            if (this.facing == "left") {
                this.sprite = this.stationaryLeftSprite;
            } else if (this.facing == "right") {
                this.sprite = this.stationaryRightSprite;
            } else if (this.facing == "up") {
                this.sprite = this.stationaryUpSprite;
            } else if (this.facing == "down") {
                this.sprite = this.stationaryDownSprite;
            }
        }
        this.y += 32;
        this.height = 32;
        super.update();
        this.y -= 32;
        this.height = 64;
    }
    render() {
        if (this.noDamage < 50) {
            ctx.globalAlpha = 0.5;
        }
        super.render();
        ctx.globalAlpha = 1;
    }
    collision(xvel, yvel, object) {
        if ((object.type == "enemy" || (object.type == "projectile" && object.parent.killsPlayer)) && this.noDamage > 50) {
            this.health -= 1;
            this.noDamage = 0;
            flashScreen = true;
        }
        super.collision(xvel, yvel, object);
    }
}
