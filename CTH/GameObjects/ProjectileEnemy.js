class ProjectileEnemy extends Enemy {
    constructor(x, y, movingLeftSprite, movingRightSprite, movingUpSprite, movingDownSprite, projectileSprite, speed,
                hitbox, health, maxHealth, damage) {
        super(x, y, movingLeftSprite, movingRightSprite, movingUpSprite, movingDownSprite, speed, hitbox, health,
             maxHealth, damage);
        this.projectileSprite = projectileSprite;
        this.shot = false;
        this.accuracy = 15;
    }
    update() {
        if (this.sprite.currentFrame == 0) {
            this.shot = false;
        }
        if (this.sprite.currentFrame == 8 && !this.shot) {
            this.shot = true;
            var proj = new Projectile(this.x + this.width/2, this.y + this.height/2 - 8, 16, 16,
                this.projectileSprite, 0, 0, 3, false, true, this.damageToPlayer);
            entities.push(proj);
            proj.target(player.hitbox.x + 16, player.hitbox.y + 16);
        }
        super.update();
    }
}
