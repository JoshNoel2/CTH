function addTree(x, y) {
    hitboxes.push(new Hitbox(x + 16, y + 32, 96, 96, true, true));
    tiles.push(new SizedTile(x, y, 128, 64, new Sprite("Graphics/Terrain/Tree/Tree_Top.png"), true));
    tiles.push(new SizedTile(x, y + 64, 128, 64, new Sprite("Graphics/Terrain/Tree/Tree_Bottom.png"), false));
}

function addZombie(x, y) {
    objects.push(new Enemy(x, y,
        new Animation("Graphics/Zombie/Zombie_Left.png", 32, 64, 3, 10, 0),
        new Animation("Graphics/Zombie/Zombie_Right.png", 32, 64, 3, 10, 0),
        new Animation("Graphics/Zombie/Zombie_Back.png", 32, 64, 3, 10, 0),
        new Animation("Graphics/Zombie/Zombie_Front.png", 32, 64, 3, 10, 0),
    ));
}

function addCave(x, y) {
    objects.push(new Spawner(x, y, new Sprite("Graphics/Terrain/Cave.png")));
}

function addPlayer(x, y) {
    player.x = x;
    player.y = y;
}

function generateTerrain(width, height) {
    var w = "w";
    var row = "";
    for (var x = 0; x != width; x++) {
        row += w;
    }
    var map = [row];
    for (var y = 0; y != height - 1; y++) {
        map.push(w);
    }
    map[1] += "t";
    for (var y = 0; y != height; y++) {
        for (var x = 0; x != width; x++) {
            if (map[y][x] == null) {
                map = addSectionToMap(map, x, y);
                // console.log(map);
            }
        }
    }
    //map = addMapEnd(map);
    readWholeMap(0, 0, map);
    console.log(map);
    console.log("Done!");
}

function addMapEnd(map) {
    map.push("w");
    map.push("w");
    for (var y = map.length - 2; y != map.length; y++) {
        for (var x = 0; x != map[0].length; x++) {
            if (map[y][x] == null) {
                // console.log(map);
                map = addEndSectionToMap(map, x, y);
            }
        }
    }
    map[0] += "ww";
    for (var y = 0; y != map.length; y++) {
        for (var x = map[0].length - 2; x != map[0].length; x++) {
            if (map[y][x] == null) {
                console.log(map);
                map = addEndSectionToMap(map, x, y);
            }
        }
    }
    return map;
}

function addEndSectionToMap(map, x, y) {
    var sections = [];
    for (var i = 0; i != maps.length; i++) {
        if (doesEndSectionFit(map, maps[i], x, y)) {
            sections.push(maps[i]);
        }
    }
    var section = sections[Math.floor(Math.random()*sections.length)];
    map[y] += section[0][0];
    return map;
}

function doesEndSectionFit(map, section, x, y) {
    if (section[0][3] != null && section[0][4] != null) {
        if (y - 1 >= 0) {
            if (map[y - 1][x] != null) {
                if (section[0][3].includes(getSectionFromKey(map[y - 1][x])[0][0])) {
                    if (x - 1 >= 0) {
                        if (map[y][x - 1] != null) {
                            if (section[0][4].includes(getSectionFromKey(map[y][x - 1])[0][0])) {
                                return true;
                            }
                        }
                    }

                }
            }
        }
    }
    return false;
}

function addSectionToMap(map, x, y) {
    var sections = [];
    for (var i = 0; i != maps.length; i++) {
        if (doesSectionFit(map, maps[i], x, y)) {
            sections.push(maps[i]);
        }
    }
    var section = sections[Math.floor(Math.random()*sections.length)];
    map[y] += section[0][0];
    return map;
}

function doesSectionFit(map, section, x, y) {
    if (y - 1 >= 0) {
        if (map[y - 1][x] != null) {
            if (section[0][1].includes(getSectionFromKey(map[y - 1][x])[0][0])) {
                if (x - 1 >= 0) {
                    if (map[y][x - 1] != null) {
                        if (section[0][2].includes(getSectionFromKey(map[y][x - 1])[0][0])) {
                            return true;
                        }
                    }
                }

            }
        }
    }
    return false;
}

function readWholeMap(x1, y1, map) {
    for (var y = 0; y != map.length; y++) {
		for (var x = 0; x != map[y].split("").length; x++) {
			var key = map[y].split("")[x];

            section = getSectionFromKey(key)[1][Math.floor(Math.random()*getSectionFromKey(key)[1].length)]
            readMap(section, x*section[0].length + x1, y*section.length + y1);

        }
    }
}

function readMap(map, x1, y1) {
	for (var y2 = 0; y2 != map.length; y2++) {
		for (var x2 = 0; x2 != map[y2].split("").length; x2++) {

			var key = map[y2].split("")[x2];

            x = x1 + x2;
            y = y1 + y2;

			if (key == "p") {
                addPlayer(x*128, y*128);
                tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
			} else if (key == "g") {
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
                if (Math.floor(Math.random()*5) == 0) {
                    addTree(x*128, y*128);
                } else if (Math.floor(Math.random()*20) == 1) {
                    addCave(x*128, y*128);
                }
			} else if (key == "w") {
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/Water.png")));
			} else if (key == "l") {
				hitboxes.push(new Hitbox(x*128, y*128, 32, 128, false, true));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterLeft.png")));
			} else if (key == "r") {
				hitboxes.push(new Hitbox(x*128 + 96, y*128, 32, 128, false, true));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterRight.png")));
			} else if (key == "u") {
				hitboxes.push(new Hitbox(x*128, y*128, 128, 32, false, true));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterUp.png")));
			} else if (key == "d") {
				hitboxes.push(new Hitbox(x*128, y*128 + 96, 128, 32, false, true));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterDown.png")));
			} else if (key == "t") {
				hitboxes.push(new Hitbox(x*128, y*128, 32, 128, false, true));
				hitboxes.push(new Hitbox(x*128, y*128, 128, 32, false, true));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterLeft.png")));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterUp.png")));
			} else if (key == "y") {
				hitboxes.push(new Hitbox(x*128 + 96, y*128, 32, 128, false, true));
				hitboxes.push(new Hitbox(x*128, y*128, 128, 32, false, true));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterRight.png")));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterUp.png")));
			} else if (key == "b") {
				hitboxes.push(new Hitbox(x*128, y*128, 32, 128, false, true));
				hitboxes.push(new Hitbox(x*128, y*128 + 96, 128, 32, false, true));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterLeft.png")));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterDown.png")));
			} else if (key == "i") {
				hitboxes.push(new Hitbox(x*128 + 96, y*128, 32, 128, false, true));
				hitboxes.push(new Hitbox(x*128, y*128 + 96, 128, 32, false, true));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Grass.png")));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterRight.png")));
				tiles.push(new Tile(x*128, y*128, new Sprite("Graphics/Terrain/Water/WaterDown.png")));
			}

		}
	}
}
