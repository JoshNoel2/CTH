class GreenFairy extends ProjectileEnemy {
    constructor(x, y, level) {
        super(x, y,
            new Animation("Graphics/Fairy/Fairy_Left.png", 56, 100, 9, 10, 0),
            new Animation("Graphics/Fairy/Fairy_Right.png", 56, 100, 9, 10, 0),
            new Animation("Graphics/Fairy/Fairy_Back.png", 56, 100, 9, 10, 0),
            new Animation("Graphics/Fairy/Fairy_Front.png", 56, 100, 9, 10, 0),
            new Sprite("Graphics/Fairy/Orb.png"),
            1, new Hitbox(x, y + 32, 32, 32, false, false, "enemy")
        );
    }
}
