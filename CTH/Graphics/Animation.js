class Animation extends Sprite {
    constructor(image, width, height, frames, ticksPerFrame, y) {
        super(image);
        this.width = width;
        this.height = height;
        this.frames = frames;
        this.ticksPerFrame = ticksPerFrame;
        this.ticks = 0;
        this.currentFrame = 0;
        this.y = y;
    }
    render(x, y, width, height) {
        if (!ended) {
            this.ticks += 1;
            if (this.ticks >= this.ticksPerFrame) {
                this.ticks = 0;
                if (this.currentFrame < this.frames - 1) {
                    this.currentFrame += 1;
                } else {
                    this.currentFrame = 0;
                }
            }
        }
    	renderImage(this.image, this.width*this.currentFrame, this.y, this.width, this.height, x, y, width, height);
    }
}
