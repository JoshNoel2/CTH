class PlayerInventory extends Inventory {
    constructor(x, y) {
        super(x, y);
        this.hotbarSlot = 1;
        this.hotbar1Sprite = new Sprite("Graphics/Inventory/Hotbar1.png");
        this.hotbar2Sprite = new Sprite("Graphics/Inventory/Hotbar2.png");
        this.hotbar3Sprite = new Sprite("Graphics/Inventory/Hotbar3.png");
        for (var i = 0; i != 3; i++) {
            this.contents.push(new Slot(this.x + (50 + i*75), this.y + 108));
        }
        this.setItem(new ItemStack(new Sword(), 1), 10);
        this.setItem(new ItemStack(new Staff(), 1), 11);
        this.setItem(new ItemStack(new Wand(), 1), 12);
    }
    renderContents() {
        this.rowSprite.render(this.x, this.y, 300, 125);
        switch (this.selectedSlot) {
            case 10:
                this.row1Sprite.render(this.x, this.y, 300, 125);
                break;
            case 11:
                this.row2Sprite.render(this.x, this.y, 300, 125);
                break;
            case 12:
                this.row3Sprite.render(this.x, this.y, 300, 125);
                break;
        }
        super.renderContents();
    }
    getCurrentItem() {
        return this.contents[8 + this.hotbarSlot].itemStack;
    }
    renderHotbar() {
        if (!this.isOpen) {
            if (this.hotbarSlot == 1) {
                this.hotbar1Sprite.render(this.x, this.y, 300, 125);
            } else if (this.hotbarSlot == 2) {
                this.hotbar2Sprite.render(this.x, this.y, 300, 125);
            } else if (this.hotbarSlot == 3) {
                this.hotbar3Sprite.render(this.x, this.y, 300, 125);
            } else {
                this.rowSprite.render(this.x, this.y, 300, 125);
            }
            for (var i = 9; i != 12; i++) {
                this.contents[i].renderItem();
            }
        }
    }
}
