import * as LibSaya from "./lib.js"

var canvasChart1 = document.getElementById("chart1");
canvasChart1.willReadFrequently = true;
var ctxChart1 = canvasChart1.getContext("2d");
var imageDataChart1 = ctxChart1.getImageData(0, 0, canvasChart1.width, canvasChart1.height);
const selectElement = document.getElementById("selectChart");
const groupElement = document.getElementById("groupChart");

canvasChart1.addEventListener('click', function (event) {
    var rect = canvasChart1.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    
    console.log(Math.round(x),Math.round(y));
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
  var myList = [2, 2, 6, 3, 3, 1, 8, 6, 15, 4, 1, 2, 1, 11];
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
  var myList = [1, 1, 1, 2, 2, 2, 3, 3, 4, 6, 6, 8, 11, 15];
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
  var myList = [15, 11, 8, 6, 6, 4, 3, 3, 2, 2, 2, 1, 1, 1];
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
  var myList = [4, 1, 3, 11, 5, 2, 7, 4, 5, 2, 22, 5, 10, 1, 12];
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
  var myList = [1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 7, 10, 11, 12, 22];
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
  var myList = [22, 12, 11, 10, 7, 5, 5, 5, 4, 4, 3, 2, 2, 1, 1]
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
  var myList = [1, 1, 2, 2, 1, 1, 1, 3, 2];
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
  var myList = [1, 1, 1, 1, 1, 2, 2, 2, 3];
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
  var myList = [3, 2, 2, 2, 1, 1, 1, 1, 1];
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
  var myList = [10];
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

function handleSelectChange() {
  const selectedValue = selectElement.value;
  const groupValue = groupElement.value;

  if (groupValue == "none") {
    if (selectedValue === "default") {
        clearCanvas();
        chartUfoData();
    } else if (selectedValue === "ascending") {
        clearCanvas();
        chartUfoDataAscending();
    } else if (selectedValue === "decending") {
        clearCanvas();
        chartUfoDataDecending();
    }
  } else if (groupValue == "us") {
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
    if (selectedValue === "default" || selectedValue === "ascending" || selectedValue === "decending") {
      clearCanvas();
      chartUfoDataDE();
    }
  }
  console.log('S3qroup value: ' + groupValue);
}

selectElement.addEventListener('change', handleSelectChange);
groupElement.addEventListener('change', handleSelectChange);