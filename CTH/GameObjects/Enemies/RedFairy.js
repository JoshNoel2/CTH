class RedFairy extends ProjectileEnemy {
    constructor(x, y, level) {
        super(x, y,
            new Animation("Graphics/Fairy/Fairy1_Left.png", 56, 100, 9, 10, 0),
            new Animation("Graphics/Fairy/Fairy1_Right.png", 56, 100, 9, 10, 0),
            new Animation("Graphics/Fairy/Fairy1_Back.png", 56, 100, 9, 10, 0),
            new Animation("Graphics/Fairy/Fairy1_Front.png", 56, 100, 9, 10, 0),
            new Sprite("Graphics/Fairy/Red_Orb.png"),
            1, new Hitbox(x, y + 32, 32, 32, false, false, "enemy")
        );
    }
}
