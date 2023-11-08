// -- Referensi --
// https://www.papaparse.com/
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
// ChatGPT - Untuk Optimasi Kodingan

// IMPORT FROM LIB
import * as LibSaya from "./lib.js";
import * as ufo from "./ufo.js";


// CANVAS
var canvasUFO = document.getElementById("canvasShapeUFO");
var ctx = canvasUFO.getContext("2d");
var imageDataSaya = ctx.getImageData(0, 0, canvasUFO.width, canvasUFO.height);

fetch("../database/ufo_data_clean.csv")
.then((response) => response.text())
.then((csvData) => {
  const rows = Papa.parse(csvData, { header: true }).data;
  displayData(rows, csvDataContainer);
}
);

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
          ufo.circleUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "light") { //LIGHT
          clearCanvas();
          ufo.lightUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "cylinder") { //CYLINDER
          clearCanvas();
          ufo.cylinderUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "sphere") { //SPHERE
          clearCanvas();
          ufo.sphereUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "disk") { //DISK
          clearCanvas();
          ufo.diskUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "fireball") { //FIREBALL
          clearCanvas();
          ufo.fireballUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "oval") { //OVAL
          clearCanvas();
          ufo.ovalUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "cigar") { //CIGAR
          clearCanvas();
          ufo.cigarUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "rectangle") { //RECTANGLE
          clearCanvas();
          ufo.rectangleUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "chevron") { //CHEVRON
          clearCanvas();
          ufo.chevronUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "triangle") { //TRIANGLE
          clearCanvas();
          ufo.triangleUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "formation") { //FORMATION
          clearCanvas();
          ufo.formationUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "delta") { //DELTA
          clearCanvas();
          ufo.deltaUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        }else if (shapeValue == "changing") { //CHANGING
          clearCanvas();
          ufo.changingUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "egg") { //EGG
          clearCanvas();
          ufo.eggUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "diamond") { //DIAMOND
          clearCanvas();
          ufo.diamondUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "flash") { //FLASH
          clearCanvas();
          ufo.flashUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "teardrop") { //TEARDROP
          clearCanvas();
          ufo.teardropUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "cone") { //CONE
          clearCanvas();
          ufo.coneUFO(imageDataSaya,canvasUFO);
          ctx.putImageData(imageDataSaya, 0, 0);
        } else if (shapeValue == "cross") { //CROSS
          clearCanvas();
          ufo.crossUFO(imageDataSaya,canvasUFO);
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