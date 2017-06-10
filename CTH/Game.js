var entities;
var toRemove;

var slowUpdate;

var world;
var loadedSections;

var renderHitboxes;

var flashScreen;

var camerax, cameray;

function collision(rect1, rect2) {
	if (rect1.x < rect2.x + rect2.width &&
		rect1.x + rect1.width > rect2.x &&
		rect1.y < rect2.y + rect2.height &&
		rect1.height + rect1.y > rect2.y)
	{
		return true;
	} else {
		return false;
	}
}

function isOnScreen(obj) {
	if (collision(obj, new GameObject(camerax, cameray, canvas.width, canvas.height))) {
		return true;
	}
	return false;
}

function isNearby(obj) {
	if (collision(obj, new GameObject(camerax - 500, cameray - 500, camerax + canvas.width + 500, cameray + canvas.height + 500))) {
		return true;
	}
	return false;
}

function start() {
	loading = true;
    renderLoadingScreen();
	setTimeout(load, 1000);
}

function load() {
	renderHitboxes = false;
	paused = false;
	flashScreen = false;
    camerax = cameray = 0;
	slowUpdate = 0;
	entities = [];
	toRemove = [];
	loadedSections = [];
	player = new Player(0, 0,
						new Animation("Graphics/Player/playerStationaryLeftSprite.png", 32, 64, 5, 5, 0),
						new Animation("Graphics/Player/playerStationaryRightSprite.png", 32, 64, 5, 5, 0),
						new Animation("Graphics/Player/playerStationaryUpSprite.png", 32, 64, 5, 5, 0),
						new Animation("Graphics/Player/playerStationaryDownSprite.png", 32, 64, 5, 5, 0),
						new Animation("Graphics/Player/playerMovingLeftSprite.png", 32, 64, 10, 5, 0),
						new Animation("Graphics/Player/playerMovingRightSprite.png", 32, 64, 10, 5, 0),
						new Animation("Graphics/Player/playerMovingUpSprite.png", 32, 64, 10, 5, 0),
						new Animation("Graphics/Player/playerMovingDownSprite.png", 32, 64, 10, 5, 0)
						);
	camerax = player.x + player.width/2 - canvas.width/2;
	cameray = player.y + player.height/2 - canvas.height/2;
	if (localStorage.getItem("cth_highscore") == null) {
		localStorage.setItem("cth_highscore", 0)
	}
	world = null;
	while (world == null) {
		world = generateMap(mapSize[0], mapSize[1]);
	}
	console.log(world);
	loading = false;
}

function logData() {
	console.log("");
	console.log("-=+=-");
	console.log("Entities: " + entities.length);
	console.log("Objects: " + getObjects().length);
	console.log("Tiles: " + getTiles().length);
	console.log("Sections Loaded: " + loadedSections.length);
	console.log("World Size: " + world.sections[0].length + " x " + world.sections.length);
	console.log("World Pixel Size: " + world.sections[0].length*10*128 + " x " + world.sections.length*10*128);
	console.log("Current Section: (" + getCurrentSection().x + ", " + getCurrentSection().y + ")");
	console.log("Player Position: (" + player.x + ", " + player.y + ")");
	console.log("Camera Position: (" + camerax + ", " + cameray + ")");
	console.log("-=+=-");
	console.log("");
}

function end() {
	if (player.kills > localStorage.getItem("cth_highscore")) {
		localStorage.setItem("cth_highscore", player.kills);
	}
	ended = true;
}

function getCurrentSection() {
	return world.getSection(Math.floor(player.x/128/10), Math.floor(player.y/128/10));
}

function getNearbySections() {
	sections = [];
	section = getCurrentSection();
	for (var y = -1; y != 2; y++) {
		for (var x = -1; x != 2; x++) {
			s = world.getSection(section.x + x, section.y + y);
			if (s != null) {
				s.load();
				sections.push(s);
			}
		}
	}
	return sections;
}

function getObjects() {
	objects = [];
	sections = getNearbySections();
	for (var i = 0; i != sections.length; i++) {
		sections[i].load();
		for (var i1 = 0; i1 != sections[i].objects.length; i1++) {
			objects.push(sections[i].objects[i1]);
		}
	}
	return objects;
}

function getTiles() {
	tiles = [];
	sections = getNearbySections();
	for (var i = 0; i != sections.length; i++) {
		sections[i].load();
		for (var i1 = 0; i1 != sections[i].tiles.length; i1++) {
			tiles.push(sections[i].tiles[i1]);
		}
	}
	return tiles;
}

function getHitboxes() {
	hitboxes = [];
	sections = getNearbySections();
	for (var i = 0; i != sections.length; i++) {
		sections[i].load();
		for (var i1 = 0; i1 != sections[i].hitboxes.length; i1++) {
			hitboxes.push(sections[i].hitboxes[i1]);
		}
		for (var i1 = 0; i1 != sections[i].objects.length; i1++) {
			if (sections[i].objects[i1].hitbox != null) {
				hitboxes.push(sections[i].objects[i1].hitbox);
			}
		}
	}
	for (var i = 0; i != entities.length; i++) {
		if (entities[i].hitbox != null) {
			hitboxes.push(entities[i].hitbox);
		}
	}
	return hitboxes;
}

function update() {
	slowUpdate++;
	if (slowUpdate >= 500) {
		slowUpdate = 0;
		sections = getNearbySections();
		for (var i = 0; i != loadedSections.length; i++) {
			if (!sections.includes(loadedSections[i])) {
				loadedSections[i].unload();
			}
		}
	}
	for (var i = 0; i != entities.length; i++) {
		if (isNearby(entities[i])) {
        	entities[i].update();
		} else {
			entities[i].remove();
		}
    }
	objects = getObjects();
    for (var i = 0; i != objects.length; i++) {
        objects[i].update();
    }
	player.update();
	camerax = player.x + player.width/2 - canvas.width/2;
	cameray = player.y + player.height/2 - canvas.height/2;

	if (player.health <= 0) {
		end();
	}
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	tiles = getTiles();
    for (var i = 0; i != tiles.length; i++) {
		if (isOnScreen(tiles[i])) {
			if (!tiles[i].priority) {
	        	tiles[i].render();
			}
		}
    }
	objects = getObjects();
    for (var i = 0; i != objects.length; i++) {
		if (isOnScreen(objects[i])) {
        	objects[i].render();
		}
    }
    for (var i = 0; i != entities.length; i++) {
		if (isOnScreen(entities[i])) {
        	entities[i].render();
		}
    }
	if (!ended) {
		player.render();
	}
	tiles = getTiles();
    for (var i = 0; i != tiles.length; i++) {
		if (isOnScreen(tiles[i])) {
			if (tiles[i].priority) {
	        	tiles[i].render();
			}
		}
    }
	if (renderHitboxes) {
		hitboxes = getHitboxes();
		for (var i = 0; i != hitboxes.length; i++) {
			hitboxes[i].render();
		}
	}
	if (flashScreen) {
		flashScreen = false;
		ctx.fillStyle = "Red"
		ctx.globalAlpha = 0.7;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.globalAlpha = 1;
	}
	for (var i = 0; i != player.health; i++) {
		new Sprite("Graphics/Heart.png").render(10 + i*50, 10, 50, 50);
	}
	drawText();
}

function drawText() {
	ctx.fillStyle = "#ffffff";
	ctx.font = "30px Courier New";
	ctx.fillText("Kills: " + player.kills, 10, canvas.height - 60);
	if (player.kills > localStorage.getItem("cth_highscore")) {
		ctx.fillText("Highscore: " + player.kills, 10, canvas.height - 25);
	} else {
		ctx.fillText("Highscore: " + localStorage.getItem("cth_highscore"), 10, canvas.height - 25);
	}
	if (ended) {
		ctx.font = "50px Courier New";
		ctx.fillText("Press Space to Play Again", getCentreWidth("Press Space to Play Again"), 175);
	} else if (paused) {
		ctx.font = "50px Courier New";
		ctx.fillText("Paused", getCentreWidth("Paused"), 175);
		ctx.font = "30px Courier New";
		ctx.fillText("Press Shift to Play", getCentreWidth("Press Shift to Play"), 250);
	}
}

function removeObjects() {
	for (var i = 0; i != toRemove.length; i++) {
		if (toRemove[i] instanceof Enemy) {
			if (toRemove[i].killedByPlayer) {
				player.kills++
			}
		}
		if (entities.includes(toRemove[i])) {
			entities.splice(entities.indexOf(toRemove[i]), 1);
		}
		if (loadedSections.includes(this)) {
			loadedSections.splice(loadedSections.indexOf(toRemove[i]), 1);
		}
	}
	toRemove = [];
}

function renderLoadingScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#000000";
	ctx.font = "50px Courier New";
	ctx.fillText("Loading Game...", getCentreWidth("Loading Game..."), 175);
	ctx.font = "30px Courier New";
	ctx.fillText("Map Size: " + (mapSize[0]+2)*10 + " x " + (mapSize[1]+2)*10, getCentreWidth("Map Size: " + (mapSize[0]+2)*10 + " x " + (mapSize[1]+2)*10), 250);
}

function getCentreWidth(text) {
	return canvas.width/2 - ctx.measureText(text).width/2;
}
