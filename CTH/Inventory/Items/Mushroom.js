class Mushroom extends HealingItem {
    constructor() {
        super(
            "Mushroom", //name
            new Sprite("Graphics/Items/Mushroom.png"), //sprite
            5, //max stack
            0, //cooldown
            true, //consumable
            10 //heal
        );
    }
}
