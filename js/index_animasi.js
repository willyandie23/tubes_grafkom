import * as libAnimasi from "./lib_animasi.js";

var canvasKita = document.querySelector("#canvasDraw");
var ctx = canvasKita.getContext("2d");
var imageDataSaya = ctx.getImageData(0, 0, canvasKita.width, canvasKita.height);


var drawing = false; // To track if we are currently drawing
var clearCanvas = false;
var lastX, lastY; // To store the previous mouse coordinates
var currentColor = [0, 0, 0];
var prevColor = [0, 0, 0];
var radius = 1;
var prevRadius = 1;
var radiusErase = 1;
var fillColorEnabled = false;
var eraseEnabled = false;


var ctx;

// Add mouse event listeners for drawing
canvasKita.addEventListener("mousedown", function (event) {
    drawing = true;
    var rect = canvasKita.getBoundingClientRect();
    lastX = event.clientX - rect.left;
    lastY = event.clientY - rect.top;
});

canvasKita.addEventListener("click", function () {
    var rect = canvasKita.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    if (fillColorEnabled) {
        libAnimasi.floodFillStack(imageDataSaya, canvasKita, Math.ceil(x), Math.ceil(y), { r: 255, g: 255, b: 255 }, { r: 255, g: 0, b: 0 })
        // console.log("Clicked at coordinates: (" + Math.ceil(x) + ", " + Math.ceil(y) + ")");
    }

});

canvasKita.addEventListener("mousemove", function (event) {
    if (!drawing) return;
    var rect = canvasKita.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    // if (eraseEnabled) {
    //     prevRadius = radius
    //     radius = 20
    // }

    var numPoints = Math.max(Math.abs(x - lastX), Math.abs(y - lastY));
    for (var i = 0; i < numPoints; i++) {
        var pointX = lastX + (i / numPoints) * (x - lastX);
        var pointY = lastY + (i / numPoints) * (y - lastY);
        libAnimasi.gbr_titik(imageDataSaya, radius, pointX, pointY, currentColor[0], currentColor[1], currentColor[2]);
    }


    lastX = x;
    lastY = y;
    ctx.putImageData(imageDataSaya, 0, 0);
});

canvasKita.addEventListener("mouseup", function () {
    drawing = false;
});

canvasKita.addEventListener("mouseout", function () {
    drawing = false;
});

// Color button event listeners
var blackButton = document.querySelector("#blackButton");
blackButton.addEventListener("click", function () {
    currentColor = [0, 0, 0]; // Black
});

var redButton = document.querySelector("#redButton");
redButton.addEventListener("click", function () {
    currentColor = [255, 0, 0]; // Red
});

var greenButton = document.querySelector("#greenButton");
greenButton.addEventListener("click", function () {
    currentColor = [0, 255, 0]; // Green
});

var blueButton = document.querySelector("#blueButton");
blueButton.addEventListener("click", function () {
    currentColor = [0, 0, 255]; // Blue
});

// Update the brush size
var radiusInput = document.querySelector("#radiusInput");
radiusInput.addEventListener("input", function () {
    radius = parseInt(radiusInput.value);
});

// Button to clear the canvas
var clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvasKita.width, canvasKita.height);
    imageDataSaya = ctx.getImageData(0, 0, canvasKita.width, canvasKita.height);
});

// FILL
// var fillColorCheckbox = document.querySelector("#fillColorCheckbox");
// fillColorCheckbox.addEventListener("change", function () {
//     fillColorEnabled = fillColorCheckbox.checked;
// });

// ERASE
var eraseCheckbox = document.querySelector("#eraseCheckbox");
eraseCheckbox.addEventListener("change", function () {
    eraseEnabled = eraseCheckbox.checked;

    if (eraseEnabled) {
        prevColor = currentColor
        prevRadius = radius
        currentColor = [255, 255, 255]; // White
        radius = 5
    } else {
        radius = prevRadius
        currentColor = prevColor; // Back to drawing color (e.g., Black)
    }

    // currentColor = [255, 255, 255]; // Red
    // eraseEnabled = eraseCheckbox.checked;
});
