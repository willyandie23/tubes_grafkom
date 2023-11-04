// -- Referensi --
// https://www.papaparse.com/
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
// ChatGPT - Untuk Optimasi Kodingan

// IMPORT FROM LIB
import * as LibSaya from "./lib.js";

// CANVAS
var canvasUFO = document.getElementById("canvasShapeUFO");
canvasUFO.willReadFrequently = true;
var ctx = canvasUFO.getContext("2d");
var imageDataSaya = ctx.getImageData(0, 0, canvasUFO.width, canvasUFO.height);

var canvasChart1 = document.getElementById("chart1");
canvasChart1.willReadFrequently = true;
var ctxChart1 = canvasChart1.getContext("2d");
var imageDataChart1 = ctxChart1.getImageData(0, 0, canvasChart1.width, canvasChart1.height);

const csvDataContainer = document.getElementById("csvDataContainer");
const selectElement = document.getElementById("selectChart");

fetch("../database/ufo_data_clean.csv")
.then((response) => response.text())
.then((csvData) => {
  const rows = Papa.parse(csvData, { header: true }).data;
  displayData(rows, csvDataContainer);
  
  console.log(LibSaya.dataShapeUfo(rows))
  console.log(LibSaya.countDataShape(rows))
}
);

canvasChart1.addEventListener('click', function (event) {
  var rect = canvasChart1.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  
  console.log(Math.round(x),Math.round(y));
});

function clearCanvas() {
  ctx.clearRect(0, 0, canvasUFO.width, canvasUFO.height);
  imageDataSaya = ctx.getImageData(0, 0, canvasUFO.width, canvasUFO.height);
}

function clearCanvarChart() {
  ctxChart1.clearRect(0, 0, canvasChart1.width, canvasChart1.height);
  imageDataChart1 = ctxChart1.getImageData(0, 0, canvasChart1.width, canvasChart1.height);
}

// DISPLAY DATA
function displayData(data, csvDataContainer) {
  const table = document.createElement("table");
  const headerRow = table.insertRow(0);
  for (const key in data[0]) {
    const headerCell = headerRow.insertCell(-1);
    headerCell.textContent = key;
  }

  for (let i = 0; i < data.length; i++) {
    const row = table.insertRow(i + 1);
    for (const key in data[i]) {
      const cell = row.insertCell(-1);
      cell.textContent = data[i][key];

      // Add a click event listener to the cell
      cell.addEventListener("click", function () {
        let shapeValue = data[i]["shape"];
        console.log(shapeValue);
        // GAMBAR DISINI
        if (shapeValue == "circle") { //CIRCLE
          clearCanvas();
          LibSaya.lightUFO(imageDataSaya);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "light") { //LIGHT
          clearCanvas();
          LibSaya.circleUFO(imageDataSaya);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "cylinder") { //CYLINDER
          clearCanvas();
          LibSaya.cylinderUFO(imageDataSaya);
          ctx.putImageData(imageDataSaya, 0, 0);
        }

        displayShapeInSection(shapeValue);
      });
    }
  }
  csvDataContainer.appendChild(table);
  function displayShapeInSection(shape) {
    const section = document.querySelector("#shapeUFO");
    if (section) {
      section.textContent = `${shape}`;
    }
  }
}

function chartUfoData() {
  var myList= [79, 813, 366, 282, 272, 258, 215, 100, 52, 78, 507, 0, 1, 104, 36, 59, 50, 28, 7, 7];
  var x1 = 10;
  var x2 = 30;

  for (var i = 0; i<myList.length; i++) {
    var r = Math.floor(Math.random() * 255) + 1;
    var g = Math.floor(Math.random() * 255) + 1;
    var b = Math.floor(Math.random() * 255) + 1;
    for (var j=0; j<myList[i]; j++) {
      LibSaya.dda_line(imageDataChart1, x1, 400-j, x2, 400-j, r, g, b);
      ctxChart1.putImageData(imageDataChart1, 0, 0);
    }
    x1 += 35;
    x2 += 35;
  }
  // requestAnimationFrame(chartUfoData)
}

function chartUfoDataAscending() {
  var myList= [0, 1, 7, 7, 28, 36, 50, 52, 59, 78, 79, 100, 104, 215, 258, 272, 282, 366, 507, 813];
  var x1 = 10;
  var x2 = 30;

  for (var i = 0; i<myList.length; i++) {
    var r = Math.floor(Math.random() * 255) + 1;
    var g = Math.floor(Math.random() * 255) + 1;
    var b = Math.floor(Math.random() * 255) + 1;
    for (var j=0; j<myList[i]; j++) {
      LibSaya.dda_line(imageDataChart1, x1, 400-j, x2, 400-j, r, g, b);
      ctxChart1.putImageData(imageDataChart1, 0, 0);
    }
    x1 += 35;
    x2 += 35;
  }
  // requestAnimationFrame(chartUfoData)
}

function chartUfoDataDecending() {
  var myList= [813, 507, 366, 282, 272, 258, 215, 104, 100, 79, 78, 59, 52, 50, 36, 28, 7, 7, 1, 0];
  var x1 = 10;
  var x2 = 30;

  for (var i = 0; i<myList.length; i++) {
    var r = Math.floor(Math.random() * 255) + 1;
    var g = Math.floor(Math.random() * 255) + 1;
    var b = Math.floor(Math.random() * 255) + 1;
    for (var j=0; j<myList[i]; j++) {
      LibSaya.dda_line(imageDataChart1, x1, 400-j, x2, 400-j, r, g, b);
      ctxChart1.putImageData(imageDataChart1, 0, 0);
    }
    x1 += 35;
    x2 += 35;
  }
  // requestAnimationFrame(chartUfoData)
}

chartUfoData();

selectElement.addEventListener('change', function() {
  const selectedValue = selectElement.value;

  if(selectedValue == "default") {
    clearCanvarChart();
    chartUfoData();
  } else if (selectedValue == "ascending") {
    clearCanvarChart();
    chartUfoDataAscending();
  } else if (selectedValue == "decending") {
    clearCanvarChart();
    chartUfoDataDecending();
  }  
  // console.log('Selected value: ' + selectedValue);
});