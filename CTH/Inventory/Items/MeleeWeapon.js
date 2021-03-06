class MeleeWeapon extends Item {
    constructor(name, sprite, maxStack, cooldown, consumable, lifetime, length, width,
                leftSprite, rightSprite, upSprite, downSprite, startExtension, fullExtension, singleShot, damage) {
        super(name, sprite, maxStack, cooldown, consumable);
        this.lifetime = lifetime;
        this.length = length;
        this.width = width;
        this.leftSprite = leftSprite;
        this.rightSprite = rightSprite;
        this.upSprite = upSprite;
        this.downSprite = downSprite;
        this.startExtension = startExtension;
        this.fullExtension = fullExtension;
        this.singleShot = singleShot;
        this.damage = damage;
    }
    use() {
        entities.push(new SwordObject(
                                    this.length, this.width,
                                    this.lifetime,
                                    this.leftSprite,
                                    this.rightSprite,
                                    this.upSprite,
                                    this.downSprite,
                                    this.startExtension,
                                    this.fullExtension,
                                    this.singleShot,
                                    this.damage,
                                ));
        return true;
    }
}
