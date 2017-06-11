class ItemStack {
    constructor(item, amount) {
        this.item = item;
        this.amount = amount;
    }
    renderDescription(x, y) {
        var description = [];
        if (this.item.consumable) {
            description.push("Consumable");
        }
        if (this.item instanceof HealingItem) {
            description.push("Healing Item");
            description.push("Heal: " + this.item.heal);
        }
        if (this.item instanceof MeleeWeapon) {
            if (this.item instanceof RangedWeapon) {
                description.push("Ranged Weapon");
                description.push("Speed: " + this.item.projSpeed);
            } else {
                description.push("Melee Weapon");
                description.push("Size: " + this.item.length);
            }
            description.push("Cooldown: " + this.item.cooldown);
        }
        var height = 80 + description.length*25;
        y -= (65 + height);
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "#000000";
        ctx.fillRect(x, y, 200, height);
        ctx.globalAlpha = 0.9;
        ctx.strokeRect(x, y, 200, height);
        ctx.globalAlpha = 1;


        ctx.fillStyle = "#ffffff";
        ctx.font = "25px Courier New";
        ctx.fillText(this.item.name + " x" + this.amount, x + 5, y + 30);
        ctx.font = "20px Courier New";
        for (var i = 0; i != description.length; i++) {
            ctx.fillText(description[i], x + 5, y + 60 + i*25);
        }
    }
}
