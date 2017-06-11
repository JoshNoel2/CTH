class Item {
    constructor(name, sprite, maxStack, cooldown, consumable) {
        this.name = name;
        this.sprite = sprite;
        this.maxStack = maxStack;
        this.cooldown = cooldown;
        this.consumable = consumable;
    }
    use() {
        return false;
    }
}
