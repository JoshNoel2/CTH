class Slot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.itemStack = null;
    }
    renderItem() {
        if (this.itemStack != null) {
            this.itemStack.item.sprite.render(this.x, this.y - 70, this.width, this.height);
            if (this.itemStack.amount > 1) {
            	ctx.fillStyle = "#ffffff";
            	ctx.font = "25px Courier New";
        		ctx.fillText("x" + this.itemStack.amount, this.x, this.y - 28);
            }
        }
    }
}
