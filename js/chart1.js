import * as LibSaya from "./lib.js"

var canvasChart1 = document.getElementById("chart1");
canvasChart1.willReadFrequently = true;
var ctxChart1 = canvasChart1.getContext("2d");
var imageDataChart1 = ctxChart1.getImageData(0, 0, canvasChart1.width, canvasChart1.height);

var canvasChart2 = document.getElementById("chart2");
canvasChart2.willReadFrequently = true;
var ctxChart2 = canvasChart2.getContext("2d");
var imageDataChart2 = ctxChart2.getImageData(0, 0, canvasChart2.width, canvasChart2.height);

const selectElement = document.getElementById("selectChart");
const groupElement = document.getElementById("groupChart");

canvasChart1.addEventListener('click', function (event) {
  var rect = canvasChart1.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  
  console.log("Canvas chart 1 ",  Math.round(x),Math.round(y));
});

canvasChart2.addEventListener('click', function (event) {
  var rect = canvasChart1.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  
  console.log("Canvas chart 2 ",  Math.round(x),Math.round(y));
});

fetch("../database/ufo_data_clean.csv")
.then((response) => response.text())
.then((csvData) => {
    const rows = Papa.parse(csvData, { header: true }).data;
    console.log("Data Shape UFO")
    console.log(LibSaya.dataShapeUfo(rows))
    console.log("Data Jumlah Shape UFO")
    console.log(LibSaya.countDataShape(rows))
    console.log("Data Jumlah Shape UFO di US")
    console.log(LibSaya.dataCountryUS(rows))
    console.log("Data Jumlah Shape UFO di GB")
    console.log(LibSaya.dataCountryGB(rows))
    console.log("Data Jumlah Shape UFO di CA")
    console.log(LibSaya.dataCountryCA(rows))
    console.log("Data Jumlah Shape UFO di AU")
    console.log(LibSaya.dataCountryAU(rows))
    console.log("Data Jumlah Shape UFO di DE")
    console.log(LibSaya.dataCountryDE(rows))
});

function clearCanvas() {
    ctxChart1.clearRect(0, 0, canvasChart1.width, canvasChart1.height);
    imageDataChart1 = ctxChart1.getImageData(0, 0, canvasChart1.width, canvasChart1.height);
}

function clearCanvasChartUfo() {
  ctxChart2.clearRect(0, 0, canvasChart2.width, canvasChart2.height);
  imageDataChart2 = ctxChart2.getImageData(0, 0, canvasChart2.width, canvasChart2.height);
}

function chartUfoData() {
  var myList = [79, 813, 366, 282, 272, 258, 215, 100, 52, 78, 507, 1, 2, 104, 36, 59, 50, 28, 7, 7];
  var x1 = 10;
  var x2 = 30;
  var canvasHeight = 400;
  var currentFrame = 0;
  var frameDelay = 200;
  let warna = [
    { r: 187, g: 68, b: 48 }, // Cylinder
    { r: 146, g: 213, b: 230 }, // Light
    { r: 119, g: 45, b: 139 }, // Circle
    { r: 161, g: 239, b: 139 }, // Sphere
    { r: 255, g: 113, b: 91 }, // Disk
    { r: 249, g: 203, b: 64 }, // Fireball
    { r: 188, g: 237, b: 9 }, // Oval
    { r: 47, g: 82, b: 224 }, // Cigar
    { r: 147, g: 225, b: 216 }, // Rectangle
    { r: 255, g: 166, b: 158 }, // Chevron
    { r: 170, g: 68, b: 101 }, // Triangle
    { r: 70, g: 34, b: 85 }, //Formation
    { r: 8, g: 126, b: 139 }, // Delta
    { r: 255, g: 90, b: 95 }, // Changing
    { r: 60, g: 60, b: 60 }, // Egg
    { r: 15, g: 82, b: 87 }, // Diamond
    { r: 222, g: 84, b: 30 }, // Flash
    { r: 1, g: 22, b: 56 }, // Teardrop
    { r: 144, g: 85, b: 162 }, // Cone
    { r: 31, g: 47, b: 22 } // Cross
  ];

  function animate() {
    if (currentFrame < myList.length) {
      let color = warna[currentFrame];
      let r = color.r;
      let g = color.g;
      let b = color.b;

      var barHeight = myList[currentFrame];
      var startY = canvasHeight; // Start from the bottom of the canvas

      for (var j = 0; j <= barHeight; j++) {
        var currentY = startY - j;
        LibSaya.dda_line(imageDataChart1, x1, currentY, x2, currentY, r, g, b);
      }
      x1 += 35;
      x2 += 35;
      ctxChart1.putImageData(imageDataChart1, 0, 0);
      currentFrame += 1;

      setTimeout(animate, frameDelay);
    }
  }

  animate();
}

function chartUfoDataAscending() {
    var myList = [1, 2, 7, 7, 28, 36, 50, 52, 59, 78, 79, 100, 104, 215, 258, 272, 282, 366, 507, 813];
    var x1 = 10;
    var x2 = 30;
    var canvasHeight = 400;
    var currentFrame = 0;
    var frameDelay = 200;
    let warna = [
      { r: 70, g: 34, b: 85 }, //Formation
      { r: 8, g: 126, b: 139 }, // Delta
      { r: 144, g: 85, b: 162 }, // Cone
      { r: 31, g: 47, b: 22 }, // Cross
      { r: 1, g: 22, b: 56 }, // Teardrop
      { r: 60, g: 60, b: 60 }, // Egg
      { r: 222, g: 84, b: 30 }, // Flash
      { r: 147, g: 225, b: 216 }, // Rectangle
      { r: 15, g: 82, b: 87 }, // Diamond
      { r: 255, g: 166, b: 158 }, // Chevron
      { r: 187, g: 68, b: 48 }, // Cylinder
      { r: 47, g: 82, b: 224 }, // Cigar
      { r: 255, g: 90, b: 95 }, // Changing
      { r: 188, g: 237, b: 9 }, // Oval
      { r: 249, g: 203, b: 64 }, // Fireball
      { r: 255, g: 113, b: 91 }, // Disk
      { r: 161, g: 239, b: 139 }, // Sphere
      { r: 119, g: 45, b: 139 }, // Circle
      { r: 170, g: 68, b: 101 }, // Triangle
      { r: 146, g: 213, b: 230 } // Light
    ];

    function animate() {
      if (currentFrame < myList.length) {
        let color = warna[currentFrame];
        let r = color.r;
        let g = color.g;
        let b = color.b;

        var barHeight = myList[currentFrame];
        var startY = canvasHeight; // Start from the bottom of the canvas

        for (var j = 0; j <= barHeight; j++) {
          var currentY = startY - j;
          LibSaya.dda_line(imageDataChart1, x1, currentY, x2, currentY, r, g, b);
        }
        x1 += 35;
        x2 += 35;
        ctxChart1.putImageData(imageDataChart1, 0, 0);
        currentFrame += 1;

        setTimeout(animate, frameDelay);
      }
    }

    animate();
}

function chartUfoDataDecending() {
    var myList = [813, 507, 366, 282, 272, 258, 215, 104, 100, 79, 78, 59, 52, 50, 36, 28, 7, 7, 2, 1];
    var x1 = 10;
    var x2 = 30;
    var canvasHeight = 400;
    var currentFrame = 0;
    var frameDelay = 200;
    let warna = [
      { r: 146, g: 213, b: 230 }, // Light
      { r: 170, g: 68, b: 101 }, // Triangle
      { r: 119, g: 45, b: 139 }, // Circle
      { r: 161, g: 239, b: 139 }, // Sphere
      { r: 255, g: 113, b: 91 }, // Disk
      { r: 249, g: 203, b: 64 }, // Fireball
      { r: 188, g: 237, b: 9 }, // Oval
      { r: 255, g: 90, b: 95 }, // Changing
      { r: 47, g: 82, b: 224 }, // Cigar
      { r: 187, g: 68, b: 48 }, // Cylinder
      { r: 255, g: 166, b: 158 }, // Chevron
      { r: 15, g: 82, b: 87 }, // Diamond
      { r: 147, g: 225, b: 216 }, // Rectangle
      { r: 222, g: 84, b: 30 }, // Flash
      { r: 60, g: 60, b: 60 }, // Egg
      { r: 1, g: 22, b: 56 }, // Teardrop
      { r: 31, g: 47, b: 22 }, // Cross
      { r: 144, g: 85, b: 162 }, // Cone
      { r: 8, g: 126, b: 139 }, // Delta
      { r: 70, g: 34, b: 85 } //Formation
    ];

    function animate() {
      if (currentFrame < myList.length) {
        let color = warna[currentFrame];
        let r = color.r;
        let g = color.g;
        let b = color.b;

        var barHeight = myList[currentFrame];
        var startY = canvasHeight; // Start from the bottom of the canvas

        for (var j = 0; j <= barHeight; j++) {
          var currentY = startY - j;
          LibSaya.dda_line(imageDataChart1, x1, currentY, x2, currentY, r, g, b);
        }
        x1 += 35;
        x2 += 35;
        ctxChart1.putImageData(imageDataChart1, 0, 0);
        currentFrame += 1;

        setTimeout(animate, frameDelay);
      }
    }

    animate();
}

function chartUfoDataUS() {
  var myList = [85, 67, 82, 309, 7, 6, 64, 1, 47, 227, 27, 217, 43, 103, 690, 186, 47, 237, 22, 314];
  var x1 = 10;
  var x2 = 30;
  var canvasHeight = 400;
  var currentFrame = 0;
  var frameDelay = 200;
  let warna = [
    { r: 255, g: 90, b: 95 }, // Changing
    { r: 255, g: 166, b: 158 }, // Chevron
    { r: 47, g: 82, b: 224 }, // Cigar
    { r: 119, g: 45, b: 139 }, // Circle
    { r: 144, g: 85, b: 162 }, // Cone
    { r: 31, g: 47, b: 22 }, // Cross
    { r: 187, g: 68, b: 48 }, // Cylinder
    { r: 8, g: 126, b: 139 }, // Delta
    { r: 15, g: 82, b: 87 }, // Diamond
    { r: 255, g: 113, b: 91 }, // Disk
    { r: 60, g: 60, b: 60 }, // Egg
    { r: 249, g: 203, b: 64 }, // Fireball
    { r: 222, g: 84, b: 30 }, // Flash
    { r: 70, g: 34, b: 85 }, //Formation
    { r: 146, g: 213, b: 230 }, // Light
    { r: 188, g: 237, b: 9 }, // Oval
    { r: 147, g: 225, b: 216 }, // Rectangle
    { r: 161, g: 239, b: 139 }, // Sphere
    { r: 1, g: 22, b: 56 }, // Teardrop
    { r: 170, g: 68, b: 101 } // Triangle
  ];

  function animate() {
    if (currentFrame < myList.length) {
      let color = warna[currentFrame];
      let r = color.r;
      let g = color.g;
      let b = color.b;

      var barHeight = myList[currentFrame];
      var startY = canvasHeight; // Start from the bottom of the canvas

      for (var j = 0; j <= barHeight; j++) {
        var currentY = startY - j;
        LibSaya.dda_line(imageDataChart1, x1, currentY, x2, currentY, r, g, b);
      }
      x1 += 35;
      x2 += 35;
      ctxChart1.putImageData(imageDataChart1, 0, 0);
      currentFrame += 1;

      setTimeout(animate, frameDelay);
    }
  }

  animate();
}

function chartUfoDataUSAscending() {
  var myList = [1, 6, 7, 22, 27, 43, 47, 47, 64, 67, 82, 85, 103, 186, 217, 227, 237, 309, 314, 690]
  var x1 = 10;
  var x2 = 30;
  var canvasHeight = 400;
  var currentFrame = 0;
  var frameDelay = 200;
  let warna = [
    { r: 8, g: 126, b: 139 }, // Delta
    { r: 31, g: 47, b: 22 }, // Cross
    { r: 144, g: 85, b: 162 }, // Cone
    { r: 1, g: 22, b: 56 }, // Teardrop
    { r: 60, g: 60, b: 60 }, // Egg
    { r: 222, g: 84, b: 30 }, // Flash
    { r: 15, g: 82, b: 87 }, // Diamond
    { r: 147, g: 225, b: 216 }, // Rectangle
    { r: 187, g: 68, b: 48 }, // Cylinder
    { r: 255, g: 166, b: 158 }, // Chevron
    { r: 47, g: 82, b: 224 }, // Cigar
    { r: 255, g: 90, b: 95 }, // Changing
    { r: 70, g: 34, b: 85 }, //Formation
    { r: 188, g: 237, b: 9 }, // Oval
    { r: 249, g: 203, b: 64 }, // Fireball
    { r: 255, g: 113, b: 91 }, // Disk
    { r: 161, g: 239, b: 139 }, // Sphere
    { r: 119, g: 45, b: 139 }, // Circle
    { r: 170, g: 68, b: 101 }, // Triangle
    { r: 146, g: 213, b: 230 } // Light 
  ];

  function animate() {
    if (currentFrame < myList.length) {
      let color = warna[currentFrame];
      let r = color.r;
      let g = color.g;
      let b = color.b;

      var barHeight = myList[currentFrame];
      var startY = canvasHeight; // Start from the bottom of the canvas

      for (var j = 0; j <= barHeight; j++) {
        var currentY = startY - j;
        LibSaya.dda_line(imageDataChart1, x1, currentY, x2, currentY, r, g, b);
      }
      x1 += 35;
      x2 += 35;
      ctxChart1.putImageData(imageDataChart1, 0, 0);
      currentFrame += 1;

      setTimeout(animate, frameDelay);
    }
  }

  animate();
}

function chartUfoDataUSDecending() {
  var myList = [690, 314, 309, 237, 227, 217, 186, 103, 85, 82, 67, 64, 47, 47, 43, 27, 22, 7, 6, 1]
  var x1 = 10;
  var x2 = 30;
  var canvasHeight = 400;
  var currentFrame = 0;
  var frameDelay = 200;
  let warna = [
    { r: 146, g: 213, b: 230 }, // Light 
    { r: 170, g: 68, b: 101 }, // Triangle
    { r: 119, g: 45, b: 139 }, // Circle
    { r: 161, g: 239, b: 139 }, // Sphere
    { r: 255, g: 113, b: 91 }, // Disk
    { r: 249, g: 203, b: 64 }, // Fireball
    { r: 188, g: 237, b: 9 }, // Oval
    { r: 70, g: 34, b: 85 }, //Formation
    { r: 255, g: 90, b: 95 }, // Changing
    { r: 47, g: 82, b: 224 }, // Cigar
    { r: 255, g: 166, b: 158 }, // Chevron
    { r: 187, g: 68, b: 48 }, // Cylinder
    { r: 147, g: 225, b: 216 }, // Rectangle
    { r: 15, g: 82, b: 87 }, // Diamond
    { r: 222, g: 84, b: 30 }, // Flash
    { r: 60, g: 60, b: 60 }, // Egg
    { r: 1, g: 22, b: 56 }, // Teardrop
    { r: 144, g: 85, b: 162 }, // Cone
    { r: 31, g: 47, b: 22 }, // Cross
    { r: 8, g: 126, b: 139 } // Delta
  ];

  function animate() {
    if (currentFrame < myList.length) {
      let color = warna[currentFrame];
      let r = color.r;
      let g = color.g;
      let b = color.b;

      var barHeight = myList[currentFrame];
      var startY = canvasHeight; // Start from the bottom of the canvas

      for (var j = 0; j <= barHeight; j++) {
        var currentY = startY - j;
        LibSaya.dda_line(imageDataChart1, x1, currentY, x2, currentY, r, g, b);
      }
      x1 += 35;
      x2 += 35;
      ctxChart1.putImageData(imageDataChart1, 0, 0);
      currentFrame += 1;

      setTimeout(animate, frameDelay);
    }
  }

  animate();
}

function chartUfoDataGB() {
  var myList = [20, 20, 60, 30, 30, 10, 80, 60, 150, 40, 10, 20, 10, 110];
  var x1 = 10;
  var x2 = 30;
  var canvasHeight = 400;
  var currentFrame = 0;
  var frameDelay = 200;
  let warna = [
    { r: 255, g: 90, b: 95 }, // Changing
    { r: 47, g: 82, b: 224 }, // Cigar
    { r: 119, g: 45, b: 139 }, // Circle
    { r: 15, g: 82, b: 87 }, // Diamond
    { r: 255, g: 113, b: 91 }, // Disk
    { r: 60, g: 60, b: 60 }, // Egg
    { r: 249, g: 203, b: 64 }, // Fireball
    { r: 70, g: 34, b: 85 }, //Formation
    { r: 146, g: 213, b: 230 }, // Light
    { r: 188, g: 237, b: 9 }, // Oval
    { r: 147, g: 225, b: 216 }, // Rectangle
    { r: 161, g: 239, b: 139 }, // Sphere
    { r: 1, g: 22, b: 56 }, // Teardrop
    { r: 170, g: 68, b: 101 } // Triangle
  ];

  function animate() {
    if (currentFrame < myList.length) {
      let color = warna[currentFrame];
      let r = color.r;
      let g = color.g;
      let b = color.b;

      var barHeight = myList[currentFrame];
      var startY = canvasHeight; // Start from the bottom of the canvas

      for (var j = 0; j <= barHeight; j++) {
        var currentY = startY - j;
        LibSaya.dda_line(imageDataChart1, x1, currentY, x2, currentY, r, g, b);
      }
      x1 += 50;
      x2 += 50;
      ctxChart1.putImageData(imageDataChart1, 0, 0);
      currentFrame += 1;

      setTimeout(animate, frameDelay);
    }
  }

  animate();
}

function chartUfoDataGBAscending() {
  var myList = [10, 10, 10, 20, 20, 20, 30, 30, 40, 60, 60, 80, 110, 150];
  var x1 = 10;
  var x2 = 30;
  var canvasHeight = 400;
  var currentFrame = 0;
  var frameDelay = 200;
  let warna = [
    { r: 60, g: 60, b: 60 }, // Egg
    { r: 147, g: 225, b: 216 }, // Rectangle
    { r: 1, g: 22, b: 56 }, // Teardrop
    { r: 255, g: 90, b: 95 }, // Changing
    { r: 47, g: 82, b: 224 }, // Cigar
    { r: 161, g: 239, b: 139 }, // Sphere
    { r: 15, g: 82, b: 87 }, // Diamond
    { r: 255, g: 113, b: 91 }, // Disk
    { r: 188, g: 237, b: 9 }, // Oval
    { r: 119, g: 45, b: 139 }, // Circle
    { r: 70, g: 34, b: 85 }, //Formation
    { r: 249, g: 203, b: 64 }, // Fireball
    { r: 170, g: 68, b: 101 }, // Triangle
    { r: 146, g: 213, b: 230 } // Light
  ];

  function animate() {
    if (currentFrame < myList.length) {
      let color = warna[currentFrame];
      let r = color.r;
      let g = color.g;
      let b = color.b;

      var barHeight = myList[currentFrame];
      var startY = canvasHeight; // Start from the bottom of the canvas

      for (var j = 0; j <= barHeight; j++) {
        var currentY = startY - j;
        LibSaya.dda_line(imageDataChart1, x1, currentY, x2, currentY, r, g, b);
      }
      x1 += 50;
      x2 += 50;
      ctxChart1.putImageData(imageDataChart1, 0, 0);
      currentFrame += 1;

      setTimeout(animate, frameDelay);
    }
  }

  animate();
}

function chartUfoDataGBDecending() {
  var myList = [150, 110, 80, 60, 60, 40, 30, 30, 20, 20, 20, 10, 10, 10];
  var x1 = 10;
  var x2 = 30;
  var canvasHeight = 400;
  var currentFrame = 0;
  var frameDelay = 200;
  let warna = [
    { r: 146, g: 213, b: 230 }, // Light
    { r: 170, g: 68, b: 101 }, // Triangle
    { r: 249, g: 203, b: 64 }, // Fireball
    { r: 70, g: 34, b: 85 }, //Formation
    { r: 119, g: 45, b: 139 }, // Circle
    { r: 188, g: 237, b: 9 }, // Oval
    { r: 255, g: 113, b: 91 }, // Disk
    { r: 15, g: 82, b: 87 }, // Diamond
    { r: 161, g: 239, b: 139 }, // Sphere
    { r: 47, g: 82, b: 224 }, // Cigar
    { r: 255, g: 90, b: 95 }, // Changing
    { r: 1, g: 22, b: 56 }, // Teardrop
    { r: 147, g: 225, b: 216 }, // Rectangle
    { r: 60, g: 60, b: 60 } // Egg
  ];

  function animate() {
    if (currentFrame < myList.length) {
      let color = warna[currentFrame];
      let r = color.r;
      let g = color.g;
      let b = color.b;

      var barHeight = myList[currentFrame];
      var startY = canvasHeight; // Start from the bottom of the canvas

      for (var j = 0; j <= barHeight; j++) {
        var currentY = startY - j;
        LibSaya.dda_line(imageDataChart1, x1, currentY, x2, currentY, r, g, b);
      }
      x1 += 50;
      x2 += 50;
      ctxChart1.putImageData(imageDataChart1, 0, 0);
      currentFrame += 1;

      setTimeout(animate, frameDelay);
    }
  }

  animate();
}

function chartUfoDataCA() {
  var myList = [40, 10, 30, 110, 50, 20, 70, 40, 50, 20, 220, 50, 100, 10, 120];
  var x1 = 20;
  var x2 = 40;
  var canvasHeight = 400;
  var currentFrame = 0;
  var frameDelay = 200;
  let warna = [
    { r: 255, g: 90, b: 95 }, // Changing
    { r: 255, g: 166, b: 158 }, // Chevron
    { r: 47, g: 82, b: 224 }, // Cigar
    { r: 119, g: 45, b: 139 }, // Circle
    { r: 187, g: 68, b: 48 }, // Cylinder
    { r: 15, g: 82, b: 87 }, // Diamond
    { r: 255, g: 113, b: 91 }, // Disk
    { r: 60, g: 60, b: 60 }, // Egg
    { r: 249, g: 203, b: 64 }, // Fireball
    { r: 222, g: 84, b: 30 }, // Flash
    { r: 146, g: 213, b: 230 }, // Light
    { r: 188, g: 237, b: 9 }, // Oval
    { r: 161, g: 239, b: 139 }, // Sphere
    { r: 1, g: 22, b: 56 }, // Teardrop
    { r: 170, g: 68, b: 101 } // Triangle
  ];

  function animate() {
    if (currentFrame < myList.length) {
      let color = warna[currentFrame];
      let r = color.r;
      let g = color.g;
      let b = color.b;

      var barHeight = myList[currentFrame];
      var startY = canvasHeight; // Start from the bottom of the canvas

      for (var j = 0; j <= barHeight; j++) {
        var currentY = startY - j;
        LibSaya.dda_line(imageDataChart1, x1, currentY, x2, currentY, r, g, b);
      }
      x1 += 45;
      x2 += 45;
      ctxChart1.putImageData(imageDataChart1, 0, 0);
      currentFrame += 1;

      setTimeout(animate, frameDelay);
    }
  }

  animate();
}

function chartUfoDataCAAscending() {
  var myList = [10, 10, 20, 20, 30, 40, 40, 50, 50, 50, 70, 100, 110, 120, 220];
  var x1 = 20;
  var x2 = 40;
  var canvasHeight = 400;
  var currentFrame = 0;
  var frameDelay = 200;
  let warna = [
    { r: 255, g: 166, b: 158 }, // Chevron
    { r: 1, g: 22, b: 56 }, // Teardrop
    { r: 15, g: 82, b: 87 }, // Diamond
    { r: 222, g: 84, b: 30 }, // Flash
    { r: 47, g: 82, b: 224 }, // Cigar
    { r: 255, g: 90, b: 95 }, // Changing
    { r: 60, g: 60, b: 60 }, // Egg
    { r: 187, g: 68, b: 48 }, // Cylinder
    { r: 249, g: 203, b: 64 }, // Fireball
    { r: 188, g: 237, b: 9 }, // Oval
    { r: 255, g: 113, b: 91 }, // Disk
    { r: 161, g: 239, b: 139 }, // Sphere
    { r: 119, g: 45, b: 139 }, // Circle
    { r: 170, g: 68, b: 101 }, // Triangle
    { r: 146, g: 213, b: 230 } // Light
  ];

  function animate() {
    if (currentFrame < myList.length) {
      let color = warna[currentFrame];
      let r = color.r;
      let g = color.g;
      let b = color.b;

      var barHeight = myList[currentFrame];
      var startY = canvasHeight; // Start from the bottom of the canvas

      for (var j = 0; j <= barHeight; j++) {
        var currentY = startY - j;
        LibSaya.dda_line(imageDataChart1, x1, currentY, x2, currentY, r, g, b);
      }
      x1 += 45;
      x2 += 45;
      ctxChart1.putImageData(imageDataChart1, 0, 0);
      currentFrame += 1;

      setTimeout(animate, frameDelay);
    }
  }

  animate();
}

function chartUfoDataCADecending() {
  var myList = [220, 120, 110, 100, 70, 50, 50, 50, 40, 40, 30, 20, 20, 10, 10]
  var x1 = 20;
  var x2 = 40;
  var canvasHeight = 400;
  var currentFrame = 0;
  var frameDelay = 200;
  let warna = [
    { r: 146, g: 213, b: 230 }, // Light
    { r: 170, g: 68, b: 101 }, // Triangle
    { r: 119, g: 45, b: 139 }, // Circle
    { r: 161, g: 239, b: 139 }, // Sphere
    { r: 255, g: 113, b: 91 }, // Disk
    { r: 188, g: 237, b: 9 }, // Oval
    { r: 249, g: 203, b: 64 }, // Fireball
    { r: 187, g: 68, b: 48 }, // Cylinder
    { r: 60, g: 60, b: 60 }, // Egg
    { r: 255, g: 90, b: 95 }, // Changing
    { r: 47, g: 82, b: 224 }, // Cigar
    { r: 222, g: 84, b: 30 }, // Flash
    { r: 15, g: 82, b: 87 }, // Diamond
    { r: 1, g: 22, b: 56 }, // Teardrop
    { r: 255, g: 166, b: 158 } // Chevron
  ];

  function animate() {
    if (currentFrame < myList.length) {
      let color = warna[currentFrame];
      let r = color.r;
      let g = color.g;
      let b = color.b;

      var barHeight = myList[currentFrame];
      var startY = canvasHeight; // Start from the bottom of the canvas

      for (var j = 0; j <= barHeight; j++) {
        var currentY = startY - j;
        LibSaya.dda_line(imageDataChart1, x1, currentY, x2, currentY, r, g, b);
      }
      x1 += 45;
      x2 += 45;
      ctxChart1.putImageData(imageDataChart1, 0, 0);
      currentFrame += 1;

      setTimeout(animate, frameDelay);
    }
  }

  animate();
}

function chartUfoDataAU() {
  var myList = [100, 100, 200, 200, 100, 100, 100, 300, 200];
  var x1 = 20;
  var x2 = 40;
  var canvasHeight = 400;
  var currentFrame = 0;
  var frameDelay = 200;
  let warna = [
    { r: 255, g: 166, b: 158 }, // Chevron
    { r: 47, g: 82, b: 224 }, // Cigar
    { r: 119, g: 45, b: 139 }, // Circle
    { r: 187, g: 68, b: 48 }, // Cylinder
    { r: 60, g: 60, b: 60 }, // Egg
    { r: 249, g: 203, b: 64 }, // Fireball
    { r: 70, g: 34, b: 85 }, //Formation
    { r: 188, g: 237, b: 9 }, // Oval
    { r: 161, g: 239, b: 139 }, // Sphere
  ];

  function animate() {
    if (currentFrame < myList.length) {
      let color = warna[currentFrame];
      let r = color.r;
      let g = color.g;
      let b = color.b;

      var barHeight = myList[currentFrame];
      var startY = canvasHeight; // Start from the bottom of the canvas

      for (var j = 0; j <= barHeight; j++) {
        var currentY = startY - j;
        LibSaya.dda_line(imageDataChart1, x1, currentY, x2, currentY, r, g, b);
      }
      x1 += 80;
      x2 += 80;
      ctxChart1.putImageData(imageDataChart1, 0, 0);
      currentFrame += 1;

      setTimeout(animate, frameDelay);
    }
  }

  animate();
}

function chartUfoDataAUAscending() {
  var myList = [100, 100, 100, 100, 100, 200, 200, 200, 300];
  var x1 = 20;
  var x2 = 40;
  var canvasHeight = 400;
  var currentFrame = 0;
  var frameDelay = 200;
  let warna = [
    { r: 255, g: 166, b: 158 }, // Chevron
    { r: 47, g: 82, b: 224 }, // Cigar
    { r: 60, g: 60, b: 60 }, // Egg
    { r: 249, g: 203, b: 64 }, // Fireball
    { r: 70, g: 34, b: 85 }, //Formation
    { r: 119, g: 45, b: 139 }, // Circle
    { r: 187, g: 68, b: 48 }, // Cylinder
    { r: 161, g: 239, b: 139 }, // Sphere
    { r: 188, g: 237, b: 9 }, // Oval
  ];

  function animate() {
    if (currentFrame < myList.length) {
      let color = warna[currentFrame];
      let r = color.r;
      let g = color.g;
      let b = color.b;

      var barHeight = myList[currentFrame];
      var startY = canvasHeight; // Start from the bottom of the canvas

      for (var j = 0; j <= barHeight; j++) {
        var currentY = startY - j;
        LibSaya.dda_line(imageDataChart1, x1, currentY, x2, currentY, r, g, b);
      }
      x1 += 80;
      x2 += 80;
      ctxChart1.putImageData(imageDataChart1, 0, 0);
      currentFrame += 1;

      setTimeout(animate, frameDelay);
    }
  }

  animate();
}

function chartUfoDataAUDecending() {
  var myList = [300, 200, 200, 200, 100, 100, 100, 100, 100];
  var x1 = 20;
  var x2 = 40;
  var canvasHeight = 400;
  var currentFrame = 0;
  var frameDelay = 200;
  let warna = [
    { r: 188, g: 237, b: 9 }, // Oval
    { r: 161, g: 239, b: 139 }, // Sphere
    { r: 187, g: 68, b: 48 }, // Cylinder
    { r: 119, g: 45, b: 139 }, // Circle
    { r: 70, g: 34, b: 85 }, //Formation
    { r: 249, g: 203, b: 64 }, // Fireball
    { r: 60, g: 60, b: 60 }, // Egg
    { r: 47, g: 82, b: 224 }, // Cigar
    { r: 255, g: 166, b: 158 }, // Chevron
  ];

  function animate() {
    if (currentFrame < myList.length) {
      let color = warna[currentFrame];
      let r = color.r;
      let g = color.g;
      let b = color.b;

      var barHeight = myList[currentFrame];
      var startY = canvasHeight; // Start from the bottom of the canvas

      for (var j = 0; j <= barHeight; j++) {
        var currentY = startY - j;
        LibSaya.dda_line(imageDataChart1, x1, currentY, x2, currentY, r, g, b);
      }
      x1 += 80;
      x2 += 80;
      ctxChart1.putImageData(imageDataChart1, 0, 0);
      currentFrame += 1;

      setTimeout(animate, frameDelay);
    }
  }

  animate();
}

function chartUfoDataDE() {
  var myList = [100];
  var x1 = 340;
  var x2 = 360;
  var canvasHeight = 400;
  var currentFrame = 0;
  var frameDelay = 200;
  let warna = [
    { r: 249, g: 203, b: 64 }, // Fireball
  ];

  function animate() {
    if (currentFrame < myList.length) {
      let color = warna[currentFrame];
      let r = color.r;
      let g = color.g;
      let b = color.b;

      var barHeight = myList[currentFrame];
      var startY = canvasHeight; // Start from the bottom of the canvas

      for (var j = 0; j <= barHeight; j++) {
        var currentY = startY - j;
        LibSaya.dda_line(imageDataChart1, x1, currentY, x2, currentY, r, g, b);
      }
      ctxChart1.putImageData(imageDataChart1, 0, 0);
      currentFrame += 1;

      setTimeout(animate, frameDelay);
    }
  }

  animate();
}

function circleUfoChart() {
  LibSaya.linkaran_polar(imageDataChart2, 1080, 200, 180, 0.0001, 255, 255, 255);
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1080, 20, 187, 48, 68) 
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1125, 25, 146, 213, 230) //79
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1257, 236, 119, 45, 139) //813
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1218, 319, 161, 239, 139) // 366
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1160, 362, 255, 113, 91) //282
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1105, 380, 249, 203, 64) //272
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1050, 379, 188, 237, 9) //258
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1005, 365, 47, 82, 224) //215
  LibSaya.dda_line(imageDataChart2, 1080, 200, 970, 345, 147, 225, 216) //100
  LibSaya.dda_line(imageDataChart2, 1080, 200, 956, 330, 255, 166, 158) //52
  LibSaya.dda_line(imageDataChart2, 1080, 200, 940, 311, 170, 68, 101) //78
  LibSaya.dda_line(imageDataChart2, 1080, 200, 910, 140, 70, 34, 85) //507
  LibSaya.dda_line(imageDataChart2, 1080, 200, 912, 135, 8, 126, 139) //0
  LibSaya.dda_line(imageDataChart2, 1080, 200, 915, 130, 255, 90, 95) //1
  LibSaya.dda_line(imageDataChart2, 1080, 200, 941, 88, 60, 60, 60) //104
  LibSaya.dda_line(imageDataChart2, 1080, 200, 957, 68, 15, 82, 87) //36
  LibSaya.dda_line(imageDataChart2, 1080, 200, 985, 48, 222, 84, 30) //59
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1010, 35, 1, 22, 56) //50
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1040, 25, 144, 85, 162) //28
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1060, 22, 31, 47, 22) //7

  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1115, 41, { r: 0, g: 0, b: 0 }, { r: 187, g: 48, b: 68 }) // Cylinder
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1200, 155, { r: 0, g: 0, b: 0 }, { r: 146, g: 213, b: 230 }) // Light
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1212, 260, { r: 0, g: 0, b: 0 }, { r: 119, g: 45, b: 139 }) // Circle
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1183, 305, { r: 0, g: 0, b: 0 }, { r: 161, g: 239, b: 139 }) // Sphere
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1139, 337, { r: 0, g: 0, b: 0 }, { r: 255, g: 113, b: 91 }) // Disk
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1100, 347, { r: 0, g: 0, b: 0 }, { r: 249, g: 203, b: 64 }) // Fireball
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1050, 350, { r: 0, g: 0, b: 0 }, { r: 188, g: 237, b: 9 }) // Oval
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1012, 344, { r: 0, g: 0, b: 0 }, { r: 47, g: 82, b: 224 }) // Cigar
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 965, 335, { r: 0, g: 0, b: 0 }, { r: 147, g: 225, b: 216 }) // Rectangle
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 966, 315, { r: 0, g: 0, b: 0 }, { r: 255, g: 166, b: 158 }) // Chevron
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 981, 230, { r: 0, g: 0, b: 0 }, { r: 170, g: 68, b: 101 }) // Triangle
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 942, 148, { r: 0, g: 0, b: 0 }, { r: 70, g: 34, b: 85 }) // Formation
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 942, 143, { r: 0, g: 0, b: 0 }, { r: 8, g: 126, b: 139 }) // Delta
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 967, 128, { r: 0, g: 0, b: 0 }, { r: 255, g: 90, b: 95 }) // Changing
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 984, 99, { r: 0, g: 0, b: 0 }, { r: 60, g: 60, b: 60 }) // Egg
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 980, 92, { r: 0, g: 0, b: 0 }, { r: 15, g: 82, b: 87 }) // Diamond
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1020, 64, { r: 0, g: 0, b: 0 }, { r: 222, g: 84, b: 30 }) // Flash
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1030, 64, { r: 0, g: 0, b: 0 }, { r: 1, g: 22, b: 56 }) // Teardrop
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1050, 64, { r: 0, g: 0, b: 0 }, { r: 144, g: 85, b: 162 }) // Cone
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1070, 64, { r: 0, g: 0, b: 0 }, { r: 31, g: 47, b: 22 }) // Cross
  
  ctxChart2.putImageData(imageDataChart2, 0, 0);
}
function circleUfoChartUS() {
  LibSaya.linkaran_polar(imageDataChart2, 1080, 200, 180, 0.0001, 255, 255, 255);
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1080, 20, 255, 0, 0) 
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1160, 40, 255, 0, 0) // Changing 85
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1223, 90, 255, 0, 0) // chevron 67
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1256, 160, 255, 0, 0) // cigar 82
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1225, 310, 255, 0, 0) // circle 309
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1215, 320, 255, 0, 0) // cone 7
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1205, 330, 255, 0, 0) // cross 6
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1160, 362, 255, 0, 0) // cylinder 64
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1155, 364, 255, 0, 0) // delta 1
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1110, 378, 255, 0, 0) // diamond 47
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1035, 375, 255, 0, 0) // disk 227
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1010, 365, 255, 0, 0) // egg 27
  LibSaya.dda_line(imageDataChart2, 1080, 200, 950, 325, 255, 0, 0) // fireball 217
  LibSaya.dda_line(imageDataChart2, 1080, 200, 930, 300, 255, 0, 0) // flash 43
  LibSaya.dda_line(imageDataChart2, 1080, 200, 905, 250, 255, 0, 0) // formation 103
  LibSaya.dda_line(imageDataChart2, 1080, 200, 915, 130, 255, 0, 0) // light 690
  LibSaya.dda_line(imageDataChart2, 1080, 200, 940, 89, 255, 0, 0) // oval 186
  LibSaya.dda_line(imageDataChart2, 1080, 200, 960, 67, 255, 0, 0) // rectangle 47
  LibSaya.dda_line(imageDataChart2, 1080, 200, 980, 51, 255, 0, 0) // sphere 237
  LibSaya.dda_line(imageDataChart2, 1080, 200, 990, 45, 255, 0, 0) // teardrop 22

  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1140, 62, { r: 0, g: 0, b: 0 }, { r: 255, g: 90, b: 95 }) // Changing
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1180, 62, { r: 0, g: 0, b: 0 }, { r: 255, g: 166, b: 158 }) // Chevron
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1238, 152, { r: 0, g: 0, b: 0 }, { r: 47, g: 82, b: 224 }) // Cigar
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1240, 170, { r: 0, g: 0, b: 0 }, { r: 119, g: 45, b: 139 }) // Circle
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1210, 315, { r: 0, g: 0, b: 0 }, { r: 144, g: 85, b: 162 }) // Cone
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1210, 320, { r: 0, g: 0, b: 0 }, { r: 31, g: 47, b: 22 }) // Cross
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1200, 325, { r: 0, g: 0, b: 0 }, { r: 187, g: 48, b: 68 }) // Cylinder
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1158, 362, { r: 0, g: 0, b: 0 }, { r: 8, g: 126, b: 139 }) // Delta
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1150, 362, { r: 0, g: 0, b: 0 }, { r: 15, g: 82, b: 87 }) // Diamond
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1080, 250, { r: 0, g: 0, b: 0 }, { r: 255, g: 113, b: 91 }) // Disk
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1070, 230, { r: 0, g: 0, b: 0 }, { r: 60, g: 60, b: 60 }) // Egg
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1060, 230, { r: 0, g: 0, b: 0 }, { r: 249, g: 203, b: 64 }) // Fireball
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1040, 230, { r: 0, g: 0, b: 0 }, { r: 222, g: 84, b: 30 }) // Flash
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1030, 230, { r: 0, g: 0, b: 0 }, { r: 70, g: 34, b: 85 }) // Formation
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1010, 220, { r: 0, g: 0, b: 0 }, { r: 146, g: 213, b: 230 }) // Light
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 970, 150, { r: 0, g: 0, b: 0 }, { r: 188, g: 237, b: 9 }) // Oval
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1000, 130, { r: 0, g: 0, b: 0 }, { r: 147, g: 225, b: 216 }) // Rectangle
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1010, 110, { r: 0, g: 0, b: 0 }, { r: 161, g: 239, b: 139 }) // Sphere
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1020, 110, { r: 0, g: 0, b: 0 }, { r: 1, g: 22, b: 56 }) // Teardrop
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1050, 110, { r: 0, g: 0, b: 0 }, { r: 170, g: 68, b: 101 }) // Triangle
  
  ctxChart2.putImageData(imageDataChart2, 0, 0);
}
function circleUfoChartGB() {
  LibSaya.linkaran_polar(imageDataChart2, 1080, 200, 180, 0.0001, 255, 255, 255);
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1080, 20, 255, 0, 0)
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1160, 40, 255, 0, 0) // changing 2
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1215, 80, 255, 0, 0) // cigar 2
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1260, 170, 255, 0, 0) // circle 6
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1260, 230, 255, 0, 0) // diamond 3
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1248, 270, 255, 0, 0) // disk 3
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1238, 290, 255, 0, 0) // egg 1
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1160, 363, 255, 0, 0) // fireball 8
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1090, 380, 255, 0, 0) // formation 6
  LibSaya.dda_line(imageDataChart2, 1080, 200, 980, 350, 255, 0, 0) // light 15
  LibSaya.dda_line(imageDataChart2, 1080, 200, 931, 300, 255, 0, 0) // oval 4
  LibSaya.dda_line(imageDataChart2, 1080, 200, 910, 260, 255, 0, 0) // rectangle 1
  LibSaya.dda_line(imageDataChart2, 1080, 200, 900, 210, 255, 0, 0) // sphere 2
  LibSaya.dda_line(imageDataChart2, 1080, 200, 907, 150, 255, 0, 0) // teardrop 1


  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1115, 41, { r: 0, g: 0, b: 0 }, { r: 255, g: 90, b: 95 }) // Changing
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1160, 60, { r: 0, g: 0, b: 0 }, { r: 47, g: 82, b: 224 }) // Cigar
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1190, 110, { r: 0, g: 0, b: 0 }, { r: 119, g: 45, b: 139 }) // Circle
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1240, 180, { r: 0, g: 0, b: 0 }, { r: 15, g: 82, b: 87 }) // Diamond
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1240, 230, { r: 0, g: 0, b: 0 }, { r: 255, g: 113, b: 91 }) // Disk
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1212, 260, { r: 0, g: 0, b: 0 }, { r: 60, g: 60, b: 60 }) // Egg
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1220, 303, { r: 0, g: 0, b: 0 }, { r: 249, g: 203, b: 64 }) // Fireball
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1120, 303, { r: 0, g: 0, b: 0 }, { r: 70, g: 34, b: 85 }) // Formation
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1020, 303, { r: 0, g: 0, b: 0 }, { r: 146, g: 213, b: 230 }) // Light
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1000, 303, { r: 0, g: 0, b: 0 }, { r: 188, g: 237, b: 9 }) // Oval
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 990, 255, { r: 0, g: 0, b: 0 }, { r: 147, g: 225, b: 216 }) // Rectangle
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 980, 235, { r: 0, g: 0, b: 0 }, { r: 161, g: 239, b: 139 }) // Sphere
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 990, 188, { r: 0, g: 0, b: 0 }, { r: 1, g: 22, b: 56 }) // Teardrop
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 990, 108, { r: 0, g: 0, b: 0 }, { r: 170, g: 68, b: 101 }) // Triangle
  ctxChart2.putImageData(imageDataChart2, 0, 0);
}
function circleUfoChartCA() {
  LibSaya.linkaran_polar(imageDataChart2, 1080, 200, 180, 0.0001, 255, 255, 255);
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1080, 20, 255, 0, 0)
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1160, 40, 255, 0, 0) // changing 4
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1190, 57, 255, 0, 0) // chevron 1
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1230, 100, 255, 0, 0) // cigar 3
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1260, 230, 255, 0, 0) // circle 11
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1238, 290, 255, 0, 0) // cylinder 5
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1200, 335, 255, 0, 0) // diamond 2
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1090, 380, 255, 0, 0) // disk 7
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1015, 370, 255, 0, 0) // egg 4
  LibSaya.dda_line(imageDataChart2, 1080, 200, 960, 335, 255, 0, 0) // fireball 5
  LibSaya.dda_line(imageDataChart2, 1080, 200, 925, 290, 255, 0, 0) // flash 2
  LibSaya.dda_line(imageDataChart2, 1080, 200, 903, 170, 255, 0, 0) // light 22
  LibSaya.dda_line(imageDataChart2, 1080, 200, 915, 130, 255, 0, 0) // oval 5
  LibSaya.dda_line(imageDataChart2, 1080, 200, 955, 70, 255, 0, 0) // sphere 10
  LibSaya.dda_line(imageDataChart2, 1080, 200, 975, 54, 255, 0, 0) // teardrop 1

  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1115, 41, { r: 0, g: 0, b: 0 }, { r: 255, g: 90, b: 95 }) // Changing
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1160, 60, { r: 0, g: 0, b: 0 }, { r: 255, g: 166, b: 158 }) // Chevron
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1190, 110, { r: 0, g: 0, b: 0 }, { r: 47, g: 82, b: 224 }) // Cigar
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1240, 180, { r: 0, g: 0, b: 0 }, { r: 119, g: 45, b: 139 }) // Circle
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1212, 260, { r: 0, g: 0, b: 0 }, { r: 187, g: 48, b: 68 }) // Cylinder
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1220, 303, { r: 0, g: 0, b: 0 }, { r: 15, g: 82, b: 87 }) // Diamond
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1120, 303, { r: 0, g: 0, b: 0 }, { r: 255, g: 113, b: 91 }) // Disk
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1080, 303, { r: 0, g: 0, b: 0 }, { r: 60, g: 60, b: 60 }) // Egg
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1020, 303, { r: 0, g: 0, b: 0 }, { r: 249, g: 203, b: 64 }) // Fireball
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1020, 250, { r: 0, g: 0, b: 0 }, { r: 222, g: 84, b: 30 }) // Flash
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1000, 220, { r: 0, g: 0, b: 0 }, { r: 146, g: 213, b: 230 }) // Light
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 990, 170, { r: 0, g: 0, b: 0 }, { r: 188, g: 237, b: 9 }) // Oval
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 990, 160, { r: 0, g: 0, b: 0 }, { r: 161, g: 239, b: 139 }) // Sphere
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1000, 100, { r: 0, g: 0, b: 0 }, { r: 1, g: 22, b: 56 }) // Teardrop
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 995, 75, { r: 0, g: 0, b: 0 }, { r: 170, g: 68, b: 101 }) // Triangle

  ctxChart2.putImageData(imageDataChart2, 0, 0);
}
function circleUfoChartAU() {
  LibSaya.linkaran_polar(imageDataChart2, 1080, 200, 180, 0.0001, 255, 255, 255);
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1080, 20, 255, 0, 0) // chevron 1
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1160, 40, 255, 0, 0) // cigar 1
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1230, 100, 255, 0, 0) // cirlce 2
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1260, 230, 255, 0, 0) // cylinder 2
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1200, 335, 255, 0, 0) // egg 1
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1090, 380, 255, 0, 0) // fireball 1
  LibSaya.dda_line(imageDataChart2, 1080, 200, 1015, 370, 255, 0, 0) // formation 1
  LibSaya.dda_line(imageDataChart2, 1080, 200, 925, 290, 255, 0, 0) // oval 3
  LibSaya.dda_line(imageDataChart2, 1080, 200, 975, 54, 255, 0, 0) // sphere 2

  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1147, 60, { r: 0, g: 0, b: 0 }, { r: 255, g: 166, b: 158 }) // Chevron
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1160, 60, { r: 0, g: 0, b: 0 }, { r: 47, g: 82, b: 224 }) // Cigar
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1255, 185, { r: 0, g: 0, b: 0 }, { r: 119, g: 45, b: 139 }) // Circle
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1209, 256, { r: 0, g: 0, b: 0 }, { r: 187, g: 48, b: 68 }) // Cylinder
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1173, 314, { r: 0, g: 0, b: 0 }, { r: 60, g: 60, b: 60 }) // Egg
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1049, 293, { r: 0, g: 0, b: 0 }, { r: 249, g: 203, b: 64 }) // Fireball
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1029, 309, { r: 0, g: 0, b: 0 }, { r: 70, g: 34, b: 85 }) // Formation
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1017, 188, { r: 0, g: 0, b: 0 }, { r: 188, g: 237, b: 9 }) // Oval
  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1070, 64, { r: 0, g: 0, b: 0 }, { r: 161, g: 239, b: 139 }) // Sphere

  ctxChart2.putImageData(imageDataChart2, 0, 0);
}
function circleUfoChartDE() {
  LibSaya.linkaran_polar(imageDataChart2, 1080, 200, 180, 0.0001, 255, 255, 255);

  LibSaya.floodFillStack(imageDataChart2, canvasChart2, 1080, 200, { r: 0, g: 0, b: 0 }, { r: 249, g: 203, b: 64 }) // Fireball

  ctxChart2.putImageData(imageDataChart2, 0, 0);
}

function handleSelectChange() {
  const selectedValue = selectElement.value;
  const groupValue = groupElement.value;

  if (groupValue == "none") {
    if (selectedValue === "default") {
        clearCanvasChartUfo();
        clearCanvas();
        circleUfoChart();
        chartUfoData();
    } else if (selectedValue === "ascending") {
        clearCanvas();
        chartUfoDataAscending();
    } else if (selectedValue === "decending") {
        clearCanvas();
        chartUfoDataDecending();
    }
  } else if (groupValue == "us") {
    clearCanvasChartUfo();
    circleUfoChartUS();
    if (selectedValue === "default") {
      clearCanvas();
      chartUfoDataUS();
    } else if (selectedValue === "ascending") {
      clearCanvas();
      chartUfoDataUSAscending();
    } else if (selectedValue === "decending") {
      clearCanvas();
      chartUfoDataUSDecending();
    }
  } else if (groupValue == "gb") {
    clearCanvasChartUfo();
    circleUfoChartGB();
    if (selectedValue === "default") {
      clearCanvas();
      chartUfoDataGB();
    } else if (selectedValue === "ascending") {
      clearCanvas();
      chartUfoDataGBAscending();
    } else if (selectedValue === "decending") {
      clearCanvas();
      chartUfoDataGBDecending();
    }
  } else if (groupValue == "ca") {
    clearCanvasChartUfo();
    circleUfoChartCA();
    if (selectedValue === "default") {
      clearCanvas();
      chartUfoDataCA();
    } else if (selectedValue === "ascending") {
      clearCanvas();
      chartUfoDataCAAscending();
    } else if (selectedValue === "decending") {
      clearCanvas();
      chartUfoDataCADecending();
    }
  } else if (groupValue == "au") {
    clearCanvasChartUfo();
    circleUfoChartAU();
    if (selectedValue === "default") {
      clearCanvas();
      chartUfoDataAU();
    } else if (selectedValue === "ascending") {
      clearCanvas();
      chartUfoDataAUAscending();
    } else if (selectedValue === "decending") {
      clearCanvas();
      chartUfoDataAUDecending();
    }
  } else if (groupValue == "de") {
    clearCanvasChartUfo();
    circleUfoChartDE();
    if (selectedValue === "default" || selectedValue === "ascending" || selectedValue === "decending") {
      clearCanvas();
      chartUfoDataDE();
    }
  }
  console.log('S3qroup value: ' + groupValue);
}

selectElement.addEventListener('change', handleSelectChange);
groupElement.addEventListener('change', handleSelectChange);