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
    kill() {
        if (Math.floor(Math.random()*20) == 0) {
            entities.push(new LootBag(this.x, this.y, [new ItemStack(new Mushroom(), 3), new ItemStack(new Staff(), 1)]));
        }
        super.kill();
    }
}
