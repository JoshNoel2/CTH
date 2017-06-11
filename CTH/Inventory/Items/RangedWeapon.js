class RangedWeapon extends MeleeWeapon {
    constructor(name, sprite, maxStack, cooldown, consumable, lifetime, length, width,
                leftSprite, rightSprite, upSprite, downSprite, startExtension, fullExtension, singleShot,
                projLeftSprite, projRightSprite, projUpSprite, projDownSprite, projSpeed, damage)
    {
        super(name, sprite, maxStack, cooldown, consumable, lifetime, length, width,
                    leftSprite, rightSprite, upSprite, downSprite, startExtension, fullExtension, singleShot, damage);
        this.projLeftSprite = projLeftSprite;
        this.projRightSprite = projRightSprite;
        this.projUpSprite = projUpSprite;
        this.projDownSprite = projDownSprite;
        this.projSpeed = projSpeed;
    }
    use() {
        if (player.facing == "left") {
            entities.push(new Projectile(player.x, player.y + player.height/2 - 24, 48, 48,
                this.projLeftSprite, this.projSpeed*-1, 0, this.projSpeed, true, false, this.damage));
        } else if (player.facing == "right") {
            entities.push(new Projectile(player.x + player.width/2, player.y + player.height/2 - 24, 48, 48,
                this.projRightSprite, this.projSpeed, 0, this.projSpeed, true, false, this.damage));
        } else if (player.facing == "up") {
            entities.push(new Projectile(player.x + player.width/2 - 24, player.y, 48, 48,
                this.projUpSprite, 0, this.projSpeed*-1, this.projSpeed, true, false, this.damage));
        } else if (player.facing == "down") {
            entities.push(new Projectile(player.x + player.width/2 - 24, player.y + player.height/2, 48, 48,
                this.projDownSprite, 0, this.projSpeed, this.projSpeed, true, false, this.damage));
        }
        super.use();
    }
}
