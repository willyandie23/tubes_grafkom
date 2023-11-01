// -- Referensi --
// https://www.papaparse.com/
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
// ChatGPT - Untuk Optimasi Kodingan

// IMPORT FROM LIB
import * as LibSaya from "./lib.js";

// CANVAS
var canvasUFO;
canvasUFO = document.getElementById("canvasShapeUFO");
var ctx;
ctx = canvasUFO.getContext("2d");
var imageDataSaya = ctx.getImageData(0, 0, canvasUFO.width, canvasUFO.height);

const csvDataContainer = document.getElementById("csvDataContainer");

function clearCanvas() {
  ctx.clearRect(0, 0, canvasUFO.width, canvasUFO.height);
  imageDataSaya = ctx.getImageData(0, 0, canvasUFO.width, canvasUFO.height);
}

// function lightUFO() {
//   // Light
//   LibSaya.dda_line(imageDataSaya, 10, 10, 100, 100, 255, 0, 0);
// }

// function circleUFO() {
//   // Circle
//   var point_array = [
//     { x: 100, y: 100 },
//     { x: 150, y: 150 },
//     { x: 50, y: 150 },
//   ];
//   LibSaya.polygon(imageDataSaya, point_array, 225, 0, 0);
// }

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

fetch("../database/ufo_data_clean.csv")
  .then((response) => response.text())
  .then((csvData) => {
    const rows = Papa.parse(csvData, { header: true }).data;
    displayData(rows, csvDataContainer);
  });

ctx.putImageData(imageDataSaya, 0, 0);

// const csvDataContainer = document.getElementById("csvDataContainer");
// let tableData = []; // To store the original data
// let sortedColumn = null; // To track the currently sorted column
// let ascending = true; // To track the sorting order (ascending by default)

// fetch("../database/ufo_data_clean.csv")
//   .then((response) => response.text())
//   .then((csvData) => {
//     const rows = Papa.parse(csvData, { header: true }).data;
//     tableData = rows; // Store the original data
//     displayData(rows, csvDataContainer);
//   });

// function displayData(data, csvDataContainer) {
//   const table = document.createElement("table");
//   const headerRow = table.insertRow(0);
//   for (const key in data[0]) {
//     const headerCell = headerRow.insertCell(-1);
//     headerCell.textContent = key;
//     headerCell.addEventListener("click", () => sortTable(key));
//   }

//   for (let i = 0; i < data.length; i++) {
//     const row = table.insertRow(i + 1);
//     for (const key in data[i]) {
//       const cell = row.insertCell(-1);
//       cell.textContent = data[i][key];
//     }
//   }

//   csvDataContainer.innerHTML = ""; // Clear the container
//   csvDataContainer.appendChild(table);
// }

// function sortTable(column) {
//   // If the same column is clicked again, toggle sorting order
//   if (sortedColumn === column) {
//     ascending = !ascending;
//   } else {
//     sortedColumn = column;
//     ascending = true;
//   }

//   tableData.sort((a, b) => {
//     const valueA = a[column];
//     const valueB = b[column];
//     return ascending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
//   });

//   displayData(tableData, csvDataContainer);
// }
