class MovingObject extends RenderedObject {
    constructor(x, y, width, height, sprite, speed, hitbox) {
        super(x, y, width, height, sprite);
        this.xvel = 0;
        this.yvel = 0;
        this.speed = speed;
        this.hitbox = hitbox;
        this.hitbox.parent = this;
        hitboxes.push(this.hitbox);
        this.hitboxX = this.x - this.hitbox.x;
        this.hitboxY = this.y - this.hitbox.y;
    }
    update() {
        this.x += this.xvel;
        this.collide(this.xvel, 0);
        this.y += this.yvel;
        this.collide(0, this.yvel);
        this.hitbox.x = this.x + this.hitboxX;
        this.hitbox.y = this.y + this.hitboxY;
    }
    collide(xvel, yvel) {
        for (var i = 0; i != hitboxes.length; i++) {
            if (collision(this, hitboxes[i]) && hitboxes[i] != this.hitbox) {
                this.collision(xvel, yvel, hitboxes[i]);
            }
        }
    }
    collision(xvel, yvel, object) {
        if (object.blocksObj) {
            if (xvel > 0) {
                this.x = object.x - this.width;
            } else if (xvel < 0) {
                this.x = object.x + object.width;
            }
            if (yvel > 0) {
                this.y = object.y - this.height;
            } else if (yvel < 0) {
                this.y = object.y + object.height;
            }
        }
    }
}
