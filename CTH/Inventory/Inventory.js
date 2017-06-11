class Inventory {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.rowSprite = new Sprite("Graphics/Inventory/Hotbar.png");
        this.row1Sprite = new Sprite("Graphics/Inventory/Row1.png");
        this.row2Sprite = new Sprite("Graphics/Inventory/Row2.png");
        this.row3Sprite = new Sprite("Graphics/Inventory/Row3.png");
        this.isOpen = false;
        this.selectedSlot = 0;

        this.contents = [];

        for (var y = 0; y != 3; y++) {
            for (var x = 0; x != 3; x++) {
                this.contents.push(new Slot(this.x + (50 + x*75), this.y + (10 + y*-75)));
            }
        }

    }
    open() {
        this.isOpen = true;
        paused = true;
    }
    close() {
        this.isOpen = false;
        paused = false;
    }
    setAmount(slot, amount) {
        if (this.contents[slot - 1].itemStack != null) {
            if (amount < 1) {
                this.contents[slot - 1].itemStack = null
            } else {
                this.contents[slot - 1].itemStack.amount = amount;
            }
        }
    }
    addItem(itemStack) {
        for (var i = 0; i != this.contents.length; i++) {
            if (this.contents[i].itemStack != null) {
                if (this.contents[i].itemStack.item == itemStack.item) {
                    if (this.contents[i].itemStack.amount + itemStack.amount > itemStack.item.maxStack) {
                        this.contents[i].itemStack.amount = this.contents[i].itemStack.item.maxStack;
                        itemStack.amount = itemStack.amount + this.contents[i].itemStack.amount -
                        this.contents[i].itemStack.item.maxStack;
                    } else {
                        this.contents[i].itemStack.amount += itemStack.amount;
                        return;
                    }
                }
            }
        }
        for (var i = 0; i != this.contents.length; i++) {
            if (this.contents[i].itemStack == null) {
                this.contents[i].itemStack = itemStack;
                return;
            }
        }
    }
    setItem(item, slot) {
        this.contents[slot - 1].itemStack = item;
    }
    clickEvent() {
        if (this.selectedSlot != 0) {
            var mouseItemStack = mouseItem.itemStack;
            var slotItem = this.contents[this.selectedSlot - 1].itemStack;
            if (mouseItemStack != null && slotItem != null) {
                if (mouseItemStack.item.name == slotItem.item.name) {
                    if (this.contents[this.selectedSlot - 1].itemStack.amount + mouseItem.itemStack.amount >
                        this.contents[this.selectedSlot - 1].itemStack.item.maxStack)
                    {
                        mouseItem.itemStack.amount = mouseItem.itemStack.amount +
                        this.contents[this.selectedSlot - 1].itemStack.amount -
                        this.contents[this.selectedSlot - 1].itemStack.item.maxStack;
                        this.contents[this.selectedSlot - 1].itemStack.amount = this.contents[this.selectedSlot - 1].itemStack.item.maxStack;
                    } else {
                        this.contents[this.selectedSlot - 1].itemStack.amount += mouseItem.itemStack.amount;
                        mouseItem.itemStack = null;
                    }
                    return;
                }
            }
            this.contents[this.selectedSlot - 1].itemStack = mouseItemStack;
            mouseItem.itemStack = slotItem;
        }
    }
    updateInventory() {
        if (this.isOpen) {
            this.selectedSlot = 0;
            for (var i = 0; i != this.contents.length; i++) {
                if (collision(new GameObject(pos["x"], pos["y"], 1, 1), this.contents[i])) {
                    this.selectedSlot = i + 1;
                }
            }
        }
    }
    updateHotbar() {
        if (keysDown[49]) {
            this.hotbarSlot = 1;
        } else if (keysDown[50]) {
            this.hotbarSlot = 2;
        } else if (keysDown[51]) {
            this.hotbarSlot = 3;
        }
    }
    renderContents() {
        this.rowSprite.render(this.x, this.y - 100, 300, 125);
        this.rowSprite.render(this.x, this.y - 175, 300, 125);
        this.rowSprite.render(this.x, this.y - 250, 300, 125);
        switch (this.selectedSlot) {
            case 1:
                this.row1Sprite.render(this.x, this.y - 100, 300, 125);
                break;
            case 2:
                this.row2Sprite.render(this.x, this.y - 100, 300, 125);
                break;
            case 3:
                this.row3Sprite.render(this.x, this.y - 100, 300, 125);
                break;
            case 4:
                this.row1Sprite.render(this.x, this.y - 175, 300, 125);
                break;
            case 5:
                this.row2Sprite.render(this.x, this.y - 175, 300, 125);
                break;
            case 6:
                this.row3Sprite.render(this.x, this.y - 175, 300, 125);
                break;
            case 7:
                this.row1Sprite.render(this.x, this.y - 250, 300, 125);
                break;
            case 8:
                this.row2Sprite.render(this.x, this.y - 250, 300, 125);
                break;
            case 9:
                this.row3Sprite.render(this.x, this.y - 250, 300, 125);
                break;
        }
        for (var i = 0; i != this.contents.length; i++) {
            this.contents[i].renderItem();
        }
        if (mouseItem.itemStack == null) {
            if (this.selectedSlot != 0) {
                if (this.contents[this.selectedSlot - 1].itemStack != null) {
                    this.contents[this.selectedSlot - 1].itemStack.renderDescription(pos["x"], pos["y"]);                    
                }
            }
        }
    }
}
