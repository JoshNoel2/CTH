var version = "0.0.1"
console.log("Running #CTH Version " + version);

var canvas = document.getElementById("CTH");
canvas.width = 1325;
canvas.height = 600;
var ctx = canvas.getContext("2d");

var ended = false;
var loading = false;
var paused = false;

var mapSize = [250, 250];

var keysDown = {};
var pos = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
	if (e.keyCode == 32 || e.keyCode == 9) {
		e.preventDefault();
	}
}, false);

addEventListener("keyup", function (e) {
	keysDown[e.keyCode] = false;
}, false);

addEventListener("mousemove", function(e) {
	pos["x"] = e.pageX;
	pos["y"] = e.pageY + 60;
}, false);

addEventListener("click", function(e) {
	if (!ended && inventory != null) {
		if (inventory.isOpen) {
			inventory.clickEvent();
		}
		for (var i = 0; i != entities.length; i++) {
			if (entities[i] instanceof LootBag) {
				if (entities[i].inventory.isOpen) {
					entities[i].inventory.clickEvent();
				}
			}
		}
	}
}, false);

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

start();
run();


function run() {

	if (!loading) {
		if (!ended && !paused) {
			update();
		}
		if (!ended) {
			updateInventories();
		}
		render();
		removeObjects();
		if (ended) {
			if (keysDown[32]) {
				keysDown[32] = false;
				ended = false;
				start();
			}
		}
	} else {
		renderLoadingScreen();
	}

	requestAnimationFrame(run);
}
