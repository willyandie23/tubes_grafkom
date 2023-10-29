// -- Referensi --
// https://www.papaparse.com/
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
// ChatGPT - Untuk Optimasi Kodingan

// import * as LibSaya from "./lib.js"

// const csvDataContainer = document.getElementById("csvDataContainer");

// fetch("../database/ufo_data_clean.csv")
// .then((response) => response.text())
// .then((csvData) => {
//     const rows = Papa.parse(csvData, { header: true }).data;
//     LibSaya.displayData(rows, csvDataContainer);
// });



const csvDataContainer = document.getElementById("csvDataContainer");
let tableData = []; // To store the original data
let sortedColumn = null; // To track the currently sorted column
let ascending = true; // To track the sorting order (ascending by default)

fetch("../database/ufo_data_clean.csv")
  .then((response) => response.text())
  .then((csvData) => {
    const rows = Papa.parse(csvData, { header: true }).data;
    tableData = rows; // Store the original data
    displayData(rows, csvDataContainer);
  });

function displayData(data, csvDataContainer) {
  const table = document.createElement("table");
  const headerRow = table.insertRow(0);
  for (const key in data[0]) {
    const headerCell = headerRow.insertCell(-1);
    headerCell.textContent = key;
    headerCell.addEventListener("click", () => sortTable(key));
  }

  for (let i = 0; i < data.length; i++) {
    const row = table.insertRow(i + 1);
    for (const key in data[i]) {
      const cell = row.insertCell(-1);
      cell.textContent = data[i][key];
    }
  }

  csvDataContainer.innerHTML = ""; // Clear the container
  csvDataContainer.appendChild(table);
}

function sortTable(column) {
  // If the same column is clicked again, toggle sorting order
  if (sortedColumn === column) {
    ascending = !ascending;
  } else {
    sortedColumn = column;
    ascending = true;
  }

  tableData.sort((a, b) => {
    const valueA = a[column];
    const valueB = b[column];
    return ascending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
  });

  displayData(tableData, csvDataContainer);
}
