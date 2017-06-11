class Sword extends MeleeWeapon {
    constructor() {
        super(
            "Sword", //name
            new Sprite("Graphics/Items/Sword/Sword.png"), //sprite
            1, //max stack
            25, //cooldown
            false, //consumable
            25, //lifetime
            48, //length
            32, //width
            new Sprite("Graphics/Items/Sword/Sword_Left.png"), //left sprite
            new Sprite("Graphics/Items/Sword/Sword_Right.png"), //right sprite
            new Sprite("Graphics/Items/Sword/Sword_Up.png"), //up sprite
            new Sprite("Graphics/Items/Sword/Sword_Down.png"), //down sprite
            -20, //start extension
            20, //full extension
            true, //single shot
            7, //damage
        );
    }
}
