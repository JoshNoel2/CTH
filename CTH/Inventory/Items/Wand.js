class Wand extends RangedWeapon {
    constructor() {
        super(
            "Wand", //name
            new Sprite("Graphics/Items/Wand/Wand.png"), //sprite
            1, //max stack
            25, //cooldown
            false, //consumable
            20, //lifetime
            32, //length
            32, //width
            new Sprite("Graphics/Items/Wand/Wand_Left.png"), //left sprite
            new Sprite("Graphics/Items/Wand/Wand_Right.png"), //right sprite
            new Sprite("Graphics/Items/Wand/Wand_Up.png"), //up sprite
            new Sprite("Graphics/Items/Wand/Wand_Down.png"), //down sprite
            -10, //start extension
            10, //full extension
            true, //single shot
            new Animation("Graphics/Fire/Fire_Left.png", 64, 64, 5, 5, 0), //proj left sprite
            new Animation("Graphics/Fire/Fire_Right.png", 64, 64, 5, 5, 0), //proj right sprite
            new Animation("Graphics/Fire/Fire_Up.png", 64, 64, 5, 5, 0), //proj up sprite
            new Animation("Graphics/Fire/Fire_Down.png", 64, 64, 5, 5, 0), //proj down sprite
            6, //proj speed
            10, //damage
        );
    }
}
