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
        this.itemCooldown = 0;
        this.health = 10;
        this.maxHealth = 10;
        this.noDamage = 51;
        this.kills = 0;
    }
    update() {
        this.itemCooldown++;
        this.noDamage++;
        if (keysDown[32] && inventory.getCurrentItem() != null) {
            if (this.itemCooldown >= inventory.getCurrentItem().item.cooldown) {
                this.itemCooldown = 0;
                if (inventory.getCurrentItem().item.use()) {
                    if (inventory.getCurrentItem().item.consumable) {
                        inventory.setAmount(9 + inventory.hotbarSlot, inventory.getCurrentItem().amount - 1);
                    }
                }
                keysDown[32] = false;
            }
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
    renderHealth() {
    	for (var i = 0; i != 5; i++) {
            if (player.health >= i + 1) {
                new Sprite("Graphics/Health/Heart.png").render(10 + i*50, 10, 50, 50);
            } else {
                new Sprite("Graphics/Health/EmptyHeart.png").render(10 + i*50, 10, 50, 50);
            }
    	}
        for (var i = 0; i != 5; i++) {
            if (player.health >= i + 6) {
        	   new Sprite("Graphics/Health/Heart.png").render(10 + i*50, 50, 50, 50);
           } else {
                new Sprite("Graphics/Health/EmptyHeart.png").render(10 + i*50, 50, 50, 50);
           }
    	}
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
