class Zombie extends Enemy {
    constructor(x, y, level) {
        super(x, y,
            new Animation("Graphics/Zombie/Zombie_Left.png", 32, 64, 3, 10, 0),
            new Animation("Graphics/Zombie/Zombie_Right.png", 32, 64, 3, 10, 0),
            new Animation("Graphics/Zombie/Zombie_Back.png", 32, 64, 3, 10, 0),
            new Animation("Graphics/Zombie/Zombie_Front.png", 32, 64, 3, 10, 0),
            1, new Hitbox(x, y + 20, 32, 32, false, false, "enemy")
        );
        if (level == 1)  {
            this.speed = 1;
        } else if (level == 2) {
            this.speed = 2;
        }
    }
}
