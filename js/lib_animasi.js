export function gbr_titik(imageDataTemp, radius, x, y, r, g, b) {
    // var radius = 5; // Adjust the radius to control the dot size

    for (var dx = -radius; dx <= radius; dx++) {
        for (var dy = -radius; dy <= radius; dy++) {
            if (dx * dx + dy * dy <= radius * radius) {
                var xx = x + dx;
                var yy = y + dy;

                var index = 4 * (Math.ceil(xx) + (Math.ceil(yy) * imageDataTemp.width));
                imageDataTemp.data[index] = r;
                imageDataTemp.data[index + 1] = g;
                imageDataTemp.data[index + 2] = b;
                imageDataTemp.data[index + 3] = 255;
            }
        }
    }
}

// Gambar DDA Line
export function dda_line(imageData, radius, x1, y1, x2, y2, r, g, b) {
    var dx = x2 - x1;
    var dy = y2 - y1;

    if (Math.abs(dx) > Math.abs(dy)) {
        // jalan di x
        if (x2 > x1) {
            // kanan
            var y = y1
            for (var x = x1; x < x2; x++) {
                y = y + dy / Math.abs(dx);
                gbr_titik(imageData, radius, x, y, r, g, b);
            }
        }
        else {
            // kiri
            var y = y1
            for (var x = x1; x > x2; x--) {
                y = y + dy / Math.abs(dx);
                gbr_titik(imageData, radius, x, y, r, g, b);
            }
        }
    } else {
        // jalan di y
        if (y2 > y1) {
            // kanan
            var x = x1
            for (var y = y1; y < y2; y++) {
                x = x + dx / Math.abs(dy);
                gbr_titik(imageData, radius, x, y, r, g, b);
            }
        }
        else {
            // kiri
            var x = x1
            for (var y = y1; y > y2; y--) {
                x = x + dx / Math.abs(dy);
                gbr_titik(imageData, radius, x, y, r, g, b);
            }
        }

    }
}

// mewarnai
export function floodFillStack(imageDataSaya, canvas, x0, y0, toFlood, color) {
    var tumpukan = [];
    tumpukan.push({ x: x0, y: y0 })

    while (tumpukan.length > 0) {
        var titik_skrg = tumpukan.pop();
        var index_skrg = 4 * (titik_skrg.x + titik_skrg.y * canvas.width)

        var r1 = imageDataSaya.data[index_skrg]
        var g1 = imageDataSaya.data[index_skrg + 1]
        var b1 = imageDataSaya.data[index_skrg + 2]

        if ((r1 == toFlood.r) && (g1 == toFlood.g) && (b1 == toFlood.b)) {
            imageDataSaya.data[index_skrg] = color.r
            imageDataSaya.data[index_skrg + 1] = color.g
            imageDataSaya.data[index_skrg + 2] = color.b
            imageDataSaya.data[index_skrg + 3] = 255

            tumpukan.push({ x: titik_skrg.x + 1, y: titik_skrg.y })
            tumpukan.push({ x: titik_skrg.x - 1, y: titik_skrg.y })
            tumpukan.push({ x: titik_skrg.x, y: titik_skrg.y + 1 })
            tumpukan.push({ x: titik_skrg.x, y: titik_skrg.y - 1 })
        }
    }

}

export function lingkaran_polar(imageDataSaya, rtitik, xc, yc, radius, r, g, b) {
    for (var theta = 0; theta < Math.PI * 5; theta += 0.01) {
        var x = xc + radius * Math.cos(theta);
        var y = yc + radius * Math.sin(theta);

        gbr_titik(imageDataSaya, rtitik, Math.ceil(x), Math.ceil(y), r, g, b);
    }
}