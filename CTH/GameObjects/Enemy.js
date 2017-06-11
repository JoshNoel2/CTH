class Enemy extends MovingObject {
    constructor(x, y, movingLeftSprite, movingRightSprite, movingUpSprite, movingDownSprite, speed, hitbox,
                health, maxHealth, damage) {
        super(x, y, 32, 32, movingDownSprite, speed, hitbox);
        this.movingLeftSprite = movingLeftSprite;
        this.movingRightSprite = movingRightSprite;
        this.movingUpSprite = movingUpSprite;
        this.movingDownSprite = movingDownSprite;
        this.facing = "down";
        this.accuracy = 30;
        this.killedByPlayer = false;
        this.health = health;
        this.maxHealth = maxHealth;
        this.damageCooldown = 25;
        this.noDamage = this.damageCooldown;
        this.heartSprite = new Sprite("Graphics/Health/Heart.png");
        this.emptyHeartSprite = new Sprite("Graphics/Health/EmptyHeart.png");
        this.damageToPlayer = damage;
    }
    update() {
        this.noDamage++;
        if (this.accuracy == 0 || Math.floor(Math.random()*this.accuracy) == 1) {
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
        if (this.accuracy == 0 || Math.floor(Math.random()*this.accuracy) == 1) {
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

        if (this.health <= 0) {
            this.kill();
        }
    }
    renderHealth() {
        for (var i = 0; i != Math.floor(this.maxHealth/10); i++) {
            if (Math.floor(this.health/10) >= i + 1) {
                this.heartSprite.render(this.x + this.width/2 - (Math.floor(this.maxHealth/10)*10)/2 + i*10 - camerax, this.y - 10 - cameray, 10, 10);
            } else {
                this.emptyHeartSprite.render(this.x + this.width/2 - (Math.floor(this.maxHealth/10)*10)/2 + i*10 - camerax, this.y - 10 - cameray, 10, 10);
            }
        }
    }
    render() {
        if (this.noDamage < this.damageCooldown) {
            ctx.globalAlpha = 0.5;
        }
        super.render();
        ctx.globalAlpha = 1;
        if (this.health != this.maxHealth) {
            this.renderHealth();
        }
    }
    damage(damage) {
        if (this.noDamage > this.damageCooldown) {
            this.health -= damage;
            this.noDamage = 0;
            if (this.health <= 0) {
                this.kill();
            }
        }
    }
    kill() {
        this.killedByPlayer = true;
        this.remove();
    }
}
