class HealingItem extends Item {
    constructor(name, sprite, maxStack, cooldown, consumable, heal) {
        super(name, sprite, maxStack, cooldown, consumable);
        this.heal = heal;
    }
    use() {
        if (player.health < player.maxHealth) {
            player.health += this.heal;
            return true;
        }
        return false;
    }
}
