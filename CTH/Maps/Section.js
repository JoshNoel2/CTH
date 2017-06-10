class Section {
    constructor(x, y, map, biome) {
        this.x = x;
        this.y = y;
        this.map = map;
        this.biome = biome;
        this.isLoaded = false;
        this.objects = [];
        this.hitboxes = [];
        this.tiles = [];
    }
    addBiomeObjects(x, y) {
        if (this.biome == "X") {
            if (Math.floor(Math.random()*5) == 0) {
                this.hitboxes.push(new Hitbox(x*128 + 32, y*128 + 48, 64, 80, false, true));
                this.tiles.push(new SizedTile(x*128, y*128, 128, 64, new Sprite("Graphics/Terrain/Tree/Tree_Top.png"), true));
                this.tiles.push(new SizedTile(x*128, y*128 + 64, 128, 64, new Sprite("Graphics/Terrain/Tree/Tree_Bottom.png"), false));
            } else if (x % 4 === 0 && y % 4 === 0) {
                this.objects.push(new Spawner(x*128, y*128, this.biome));
            }
        } else if (this.biome == 0) {
            if (Math.floor(Math.random()*5) == 0) {
                this.hitboxes.push(new Hitbox(x*128 + 32, y*128 + 48, 64, 80, false, true));
                this.tiles.push(new SizedTile(x*128, y*128, 128, 64, new Sprite("Graphics/Terrain/Tree/Tree_Top.png"), true));
                this.tiles.push(new SizedTile(x*128, y*128 + 64, 128, 64, new Sprite("Graphics/Terrain/Tree/Tree_Bottom.png"), false));
            } else if (Math.floor(Math.random()*5) == 0) {
                this.hitboxes.push(new Hitbox(x*128 + 48, y*128 + 16, 32, 96, false, true));
                this.tiles.push(new Tile(x*128, y*128 - 100, new Sprite("Graphics/Terrain/Tree/Tree2_Top.png"), true));
                this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Tree/Tree2_Bottom.png"), false));
            } else if (x % 4 === 0 && y % 4 === 0) {
                this.objects.push(new Spawner(x*128, y*128, this.biome));
            }
        } else if (this.biome == 1) {
            if (Math.floor(Math.random()*3) == 0) {
                this.hitboxes.push(new Hitbox(x*128 + 48, y*128 + 16, 32, 96, false, true));
                this.tiles.push(new Tile(x*128, y*128 - 100, new Sprite("Graphics/Terrain/Tree/Tree1_Top.png"), true));
                this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Tree/Tree1_Bottom.png"), false));
            } else if (Math.floor(Math.random()*3) == 0) {
                this.tiles.push(new Tile(x*128 + Math.floor(Math.random()*100), y*128 + Math.floor(Math.random()*100), new Sprite("Graphics/Terrain/Mushroom.png")));
            } else if (x % 4 === 0 && y % 4 === 0){
                this.objects.push(new Spawner(x*128, y*128, this.biome));
            }
        }
    }
    unload() {
        if (this.isLoaded) {
            toRemove.push(this);
            // console.log("Unloading Section " + this.x + ", " + this.y);
            this.isLoaded = false;
            this.objects = [];
            this.hitboxes = [];
            this.tiles = [];
        }
    }
    load() {
        if (!this.isLoaded) {
            loadedSections.push(this);
            // console.log("Loading Section " + this.x + ", " + this.y);
            this.isLoaded = true;
            for (var y1 = 0; y1 != this.map.length; y1++) {
        		for (var x1 = 0; x1 != this.map[y1].split("").length; x1++) {

        			var key = this.map[y1].split("")[x1];

                    var x = this.x*this.map[0].length + x1;
                    var y = this.y*this.map.length + y1;

        			if (key == "p") {
                        player.x = x*128;
                        player.y = y*128;
                        this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
        			} else if (key == "g") {
                        this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
                        this.addBiomeObjects(x, y);
        			} else if (key == "w") {
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/Water.png")));
        			} else if (key == "l") {
        				this.hitboxes.push(new Hitbox(x*128, y*128, 32, 128, false, true));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterLeft.png")));
        			} else if (key == "r") {
        				this.hitboxes.push(new Hitbox(x*128 + 96, y*128, 32, 128, false, true));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterRight.png")));
        			} else if (key == "u") {
        				this.hitboxes.push(new Hitbox(x*128, y*128, 128, 32, false, true));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterUp.png")));
        			} else if (key == "d") {
        				this.hitboxes.push(new Hitbox(x*128, y*128 + 96, 128, 32, false, true));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterDown.png")));
        			} else if (key == "t") {
        				this.hitboxes.push(new Hitbox(x*128, y*128, 32, 128, false, true));
        				this.hitboxes.push(new Hitbox(x*128, y*128, 128, 32, false, true));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterLeft.png")));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterUp.png")));
        			} else if (key == "y") {
        				this.hitboxes.push(new Hitbox(x*128 + 96, y*128, 32, 128, false, true));
        				this.hitboxes.push(new Hitbox(x*128, y*128, 128, 32, false, true));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterRight.png")));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterUp.png")));
        			} else if (key == "b") {
        				this.hitboxes.push(new Hitbox(x*128, y*128, 32, 128, false, true));
        				this.hitboxes.push(new Hitbox(x*128, y*128 + 96, 128, 32, false, true));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterLeft.png")));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterDown.png")));
        			} else if (key == "i") {
        				this.hitboxes.push(new Hitbox(x*128 + 96, y*128, 32, 128, false, true));
        				this.hitboxes.push(new Hitbox(x*128, y*128 + 96, 128, 32, false, true));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterRight.png")));
        				this.tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterDown.png")));
        			}

        		}
        	}
        }
    }

}
