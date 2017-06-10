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

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
	if (e.keyCode == 32 || e.keyCode == 9) {
		e.preventDefault();
	}
}, false);

addEventListener("keyup", function (e) {
	keysDown[e.keyCode] = false;
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
		render();
		removeObjects();
		if (ended) {
			if (keysDown[32]) {
				keysDown[32] = false;
				ended = false;
				start();
			}
		} else {
				if (keysDown[16]) {
					keysDown[16] = false;
					if (paused) {
						paused = false;
					} else {
						paused = true;
					}
				}
			}
	} else {
		renderLoadingScreen();
	}
	
	if (keysDown[9]) {
		logData();
		keysDown[9] = false;
	}

	requestAnimationFrame(run);
}
