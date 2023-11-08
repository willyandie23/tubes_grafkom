// -- Referensi --
// https://www.papaparse.com/
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
// ChatGPT - Untuk Optimasi Kodingan

// IMPORT FROM LIB
import * as LibSaya from "./lib.js";

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