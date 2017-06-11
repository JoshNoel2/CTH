class LootBag extends RenderedObject {
    constructor(x, y, items) {
        super(x, y, 32, 32, new Sprite("Graphics/Inventory/Bag.png"));
        this.inventory = new Inventory(350, canvas.height - 128);
        for (var i = 0; i != items.length; i++) {
            this.inventory.addItem(items[i]);
        }
    }
    update() {
        
    }
}
