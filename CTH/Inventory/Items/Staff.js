class Staff extends MeleeWeapon {
    constructor() {
        super(
            "Staff", //name
            new Sprite("Graphics/Items/Staff/Staff.png"), //sprite
            1, //max stack
            75, //cooldown
            false, //consumable
            50, //lifetime
            128, //length
            48, //width
            new Sprite("Graphics/Items/Staff/Staff_Left.png"), //left sprite
            new Sprite("Graphics/Items/Staff/Staff_Right.png"), //right sprite
            new Sprite("Graphics/Items/Staff/Staff_Up.png"), //up sprite
            new Sprite("Graphics/Items/Staff/Staff_Down.png"), //down sprite
            -75, //start extension
            50, //full extension
            true, //kills enemies
        );
    }
}
