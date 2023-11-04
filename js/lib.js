// -- Referensi --
// https://www.papaparse.com/
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
// ChatGPT - Untuk Optimasi Kodingan

// gbr_titik
export function gbr_titik(imageDataTemp, x, y, r, g, b) {
  var index;
  index = 4 * (x + y * imageDataTemp.width);
  imageDataTemp.data[index] = r;
  imageDataTemp.data[index + 1] = g;
  imageDataTemp.data[index + 2] = b;
  imageDataTemp.data[index + 3] = 255;
}

// dda_line
export function dda_line(imageData, x1, y1, x2, y2, r, g, b) {
  var dx = x2 - x1;
  var dy = y2 - y1;

  if (Math.abs(dx) > Math.abs(dy)) {
    // jalan di x
    if (x2 > x1) {
      // kanan
      var y = y1;
      for (var x = x1; x < x2; x++) {
        y = y + dy / Math.abs(dx);
        gbr_titik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
      }
    } else {
      // kiri
      var y = y1;
      for (var x = x1; x > x2; x--) {
        y = y + dy / Math.abs(dx);
        gbr_titik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
      }
    }
  } else {
    // jalan di y
    if (y2 > y1) {
      // kanan
      var x = x1;
      for (var y = y1; y < y2; y++) {
        x = x + dx / Math.abs(dy);
        gbr_titik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
      }
    } else {
      // kiri
      var x = x1;
      for (var y = y1; y > y2; y--) {
        x = x + dx / Math.abs(dy);
        gbr_titik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
      }
    }
  }
}

// polygon
export function polygon(imageDataSaya, point_array, r, g, b) {
  var point = point_array[0];

  for (var i = 1; i < point_array.length; i++) {
    var point_2 = point_array[i];

    dda_line(imageDataSaya, point.x, point.y, point_2.x, point_2.y, r, g, b);
    point = point_2;
  }
  dda_line(
    imageDataSaya,
    point.x,
    point.y,
    point_array[0].x,
    point_array[0].y,
    r,
    g,
    b
  );
}

export function lingkaran_polar(imageDataSaya, xc, yc, radius, r, g, b) {
  for (var theta = 0; theta < Math.PI * 5; theta += 0.01) {
    var x = xc + radius * Math.cos(theta);
    var y = yc + radius * Math.sin(theta);

    gbr_titik(imageDataSaya, Math.ceil(x), Math.ceil(y), r, g, b);
  }
}

export function lingkaran_spiral(imageDataSaya, xc, yc, r, g, b) {
  for (var theta = 0; theta < 9 * Math.PI; theta += 0.01) {
    var radius = (theta * Math.min(xc, yc)) / (12 * Math.PI);
    var x = xc + radius * Math.cos(theta);
    var y = yc + radius * Math.sin(theta);

    gbr_titik(imageDataSaya, Math.ceil(x), Math.ceil(y), r, g, b);
  }
}

// Function ellipse_polar
export function ellipse_polar(
  imageDataSaya,
  xc,
  yc,
  radiusX,
  radiusY,
  r,
  g,
  b
) {
  for (var theta = 0; theta < Math.PI * 2; theta += 0.01) {
    var x = xc + radiusX * Math.cos(theta);
    var y = yc + radiusY * Math.sin(theta);

    gbr_titik(imageDataSaya, Math.ceil(x), Math.ceil(y), r, g, b);
  }
}

// Function gbr_lingkaran
export function gbr_lingkaran(imageDataSaya, xc, yc, radius, r, g, b) {
  for (var x = xc - radius; x < xc + radius; x++) {
    var y = yc + Math.sqrt(Math.pow(radius, 2) - Math.pow(x - xc, 2));
    gbr_titik(imageDataSaya, Math.ceil(x), Math.ceil(y), r, g, b);

    var y = yc - Math.sqrt(Math.pow(radius, 2) - Math.pow(x - xc, 2));
    gbr_titik(imageDataSaya, Math.ceil(x), Math.ceil(y), r, g, b);
  }
  for (var x = xc - radius; x < xc + radius; x++) {
    var y = yc + Math.sqrt(Math.pow(radius, 2) - Math.pow(x - xc, 2));
    gbr_titik(imageDataSaya, Math.ceil(y), Math.ceil(x), r, g, b);

    var y = yc - Math.sqrt(Math.pow(radius, 2) - Math.pow(x - xc, 2));
    gbr_titik(imageDataSaya, Math.ceil(y), Math.ceil(x), r, g, b);
  }
}

// lightUFO
export function lightUFO(imageDataSaya) {
  dda_line(imageDataSaya, 10, 10, 100, 100, 255, 0, 0);
}

// circleUFO
export function circleUFO(imageDataSaya) {
  var point_array = [
    { x: 100, y: 100 },
    { x: 150, y: 150 },
    { x: 50, y: 150 },
  ];
  polygon(imageDataSaya, point_array, 225, 0, 0);
}

// cylinder
export function cylinderUFO(imageDataSaya) {
  // lingkaran_polar(imageDataSaya, 100, 100, 50, 255,0,0)
  ellipse_polar(imageDataSaya,200,150,100,50,255,0,0)
  ellipse_polar(imageDataSaya,200,250,100,50,255,0,0)
}

export function countDataShape(data) {
  let countShapeCylinder = 0;
  let countShapeLight = 0;
  let countShapeCircle = 0;
  let countShapeSphere = 0;
  let countShapeDisk = 0;
  let countShapeFireball = 0;
  let countShapeOval = 0;
  let countShapeCigar = 0;
  let countShapeRectangle = 0;
  let countShapeChevron = 0;
  let countShapeTriangle = 0;
  let countShapeFormation = 0;
  let countShapeDelta = 0;
  let countShapeChanging = 0;
  let countShapeEgg = 0;
  let countShapeDiamond = 0;
  let countShapeFlash = 0;
  let countShapeTeardrop = 0;
  let countShapeCone = 0;
  let countShapeCross = 0;
  let myList = [];


  let checkData;
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
    }

    checkData = data[i]["shape"];
    if(checkData == "cylinder") {
      countShapeCylinder += 1;
    } else if (checkData == "light") {
      countShapeLight += 1;
    } else if (checkData == "circle") {
      countShapeCircle += 1;
    } else if (checkData == "sphere") {
      countShapeSphere += 1;
    } else if (checkData == "disk") {
      countShapeDisk += 1;
    } else if (checkData == "fireball") {
      countShapeFireball += 1;
    } else if (checkData == "oval") {
      countShapeOval += 1;
    } else if (checkData == "cigar") {
      countShapeCigar += 1;
    } else if (checkData == "rectangle") {
      countShapeRectangle += 1;
    } else if (checkData == "chevron") {
      countShapeChevron += 1;
    } else if (checkData == "triangle") {
      countShapeTriangle += 1;
    } else if (checkData == "formation") {
      countShapeTriangle += 1;
    } else if (checkData == "delta") {
      countShapeDelta += 1;
    } else if (checkData == "changing") {
      countShapeChanging += 1;
    } else if (checkData == "egg") {
      countShapeEgg += 1;
    } else if (checkData == "diamond") {
      countShapeDiamond += 1;
    } else if (checkData == "flash") {
      countShapeFlash += 1;
    } else if (checkData == "teardrop") {
      countShapeTeardrop += 1;
    } else if (checkData == "cone") {
      countShapeCone += 1;
    } else if (checkData == "cross") {
      countShapeCross += 1;
    } 

  }

  myList = [countShapeCylinder, countShapeLight, countShapeCircle ,countShapeSphere, countShapeDisk, countShapeFireball, countShapeOval, countShapeCigar, countShapeRectangle, countShapeChevron, countShapeTriangle, countShapeFormation, countShapeDelta, countShapeChanging, countShapeEgg, countShapeDiamond, countShapeFlash, countShapeTeardrop, countShapeCone, countShapeCross]
  return myList;
}

export function dataShapeUfo(data) {
  let myList = [];

  let checkData;
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
    }

    checkData = data[i]["shape"];
    if(!myList.includes(checkData)) {
      myList.push(checkData)
    }
  }

  return myList;
}