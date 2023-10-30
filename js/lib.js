// -- Referensi --
// https://www.papaparse.com/
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
// ChatGPT - Untuk Optimasi Kodingan

export function sayHi() {
  console.log("Hoi");
}

export function displayData(data, csvDataContainer) {
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
        console.log(data[i]["shape"]);
      });
    }

    //Print shape
    // console.log(data[i]["shape"]);
  }

  csvDataContainer.appendChild(table);
}

// export function displayData(data, csvDataContainer) {
//   const table = document.createElement("table");
//   const headerRow = table.insertRow(0);
//   const headerCell = headerRow.insertCell(0);
//   headerCell.textContent = "Shape";

//   for (let i = 0; i < data.length; i++) {
//     const row = table.insertRow(i + 1);
//     const cell = row.insertCell(0);
//     cell.textContent = data[i]["shape"];
//   }

//   csvDataContainer.appendChild(table);
// }
