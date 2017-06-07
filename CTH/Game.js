var objects;
var hitboxes;
var tiles;
var toRemove;

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
	if (collision(obj, new GameObject(camerax - 500, cameray - 250, canvas.width + 500, canvas.height + 250))) {
		return true;
	}
	return false;
}

function start() {
	renderHitboxes = false;
	flashScreen = false;
    camerax = cameray = 0;
    objects = [];
    tiles = [];
	hitboxes = [];
	toRemove = [];
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
	if (localStorage.getItem("cth_highscore") == null) {
		localStorage.setItem("cth_highscore", 0)
	}
	try {
		generateTerrain(5, 5);
	} catch (err) {
		console.log("Error");
		start();
	}
}

function end() {
	if (player.kills > localStorage.getItem("cth_highscore")) {
		localStorage.setItem("cth_highscore", player.kills);
	}
	ended = true;
}

function update() {
    for (var i = 0; i != objects.length; i++) {
		if (isNearby(objects[i])) {
        	objects[i].update();
		} else {
			if (objects[i] instanceof Enemy) {
				objects[i].remove();
			}
		}
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
    for (var i = 0; i != tiles.length; i++) {
		if (isOnScreen(tiles[i])) {
			if (!tiles[i].priority) {
	        	tiles[i].render();
			}
		}
    }
    for (var i = 0; i != objects.length; i++) {
		if (isOnScreen(objects[i])) {
        	objects[i].render();
		}
    }
	if (!ended) {
		player.render();
	}
    for (var i = 0; i != tiles.length; i++) {
		if (isOnScreen(tiles[i])) {
			if (tiles[i].priority) {
	        	tiles[i].render();
			}
		}
    }
	if (renderHitboxes) {
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
		ctx.fillText("Press Space to Play Again", 250, 175);
	}
}

function removeObjects() {
	for (var i = 0; i != toRemove.length; i++) {
		if (objects.includes(toRemove[i])) {
			if (toRemove[i] instanceof Enemy) {
				if (toRemove[i].killedByPlayer) {
					player.kills++
				}
			}
			objects.splice(objects.indexOf(toRemove[i]), 1);
		}
		if (tiles.includes(toRemove[i])) {
			tiles.splice(tiles.indexOf(toRemove[i]), 1);
		}
		if (hitboxes.includes(toRemove[i])) {
			hitboxes.splice(hitboxes.indexOf(toRemove[i]), 1);
		}
	}
}
