import * as lib from './lib.js';

// lightUFO
export function lightUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 40, 47, 72)
    }
    //besar
    lib.ellipse_polar(imageDataSaya, 150, 150, 10, 10, 244, 248, 241)
    var tambah = 2
    var rad = 10
    for (var i = 0; i < 40; i++) {
        lib.ellipse_polar(imageDataSaya, 150, 150, rad, rad, 103, 105, 109)
        rad += tambah
    }
    lib.floodFillStack(imageDataSaya, canvas, 150, 150, { r: 40, g: 47, b: 72 }, { r: 244, g: 248, b: 241 })
    // kecil
    lib.ellipse_polar(imageDataSaya, 250, 200, 10, 10, 244, 248, 241)
    lib.floodFillStack(imageDataSaya, canvas, 250, 200, { r: 40, g: 47, b: 72 }, { r: 244, g: 248, b: 241 })
    var tambah2 = 2
    var rad2 = 10
    for (var i = 0; i < 5; i++) {
        lib.ellipse_polar(imageDataSaya, 250, 200, rad2, rad2, 103, 105, 109)
        rad2 += tambah2
    }
    var point_array = [
        { x: 0, y: 350 },
        { x: 30, y: 360 },
        { x: 50, y: 350 },
        { x: 140, y: 365 },
        { x: 170, y: 350 },
        { x: 250, y: 360 },
        { x: 340, y: 340 },
        { x: 400, y: 360 },
        { x: 400, y: 400 },
        { x: 0, y: 400 },
    ];
    lib.polygon(imageDataSaya, point_array, 0, 0, 0);
    // gbr_titik(imageDataSaya,150,370,0,0,0)
    lib.floodFillStack(imageDataSaya, canvas, 1, 399, { r: 40, g: 47, b: 72 }, { r: 0, g: 0, b: 0 })
}


// circleUFO
export function circleUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 31, 72, 128)
    }
    // lingkaran
    lib.ellipse_polar(imageDataSaya, 210, 140, 30, 30, 171, 195, 226)
    lib.floodFillStack(imageDataSaya, canvas, 210, 140, { r: 31, g: 72, b: 128 }, { r: 171, g: 195, b: 226 })
    // cahaya luar
    lib.ellipse_polar(imageDataSaya, 210, 140, 32, 32, 255, 255, 255)
    lib.ellipse_polar(imageDataSaya, 210, 140, 34, 34, 255, 255, 255)
    // cahaya dalam
    lib.ellipse_polar(imageDataSaya, 210, 140, 28, 28, 255, 255, 255)
    lib.ellipse_polar(imageDataSaya, 210, 140, 26, 26, 255, 255, 255)

    lib.dda_line(imageDataSaya, 229, 159, 191, 121, 255, 255, 255) //geser 19
    lib.dda_line(imageDataSaya, 230, 159, 191, 121, 255, 255, 255) //geser 19
    lib.dda_line(imageDataSaya, 230, 157, 191, 121, 255, 255, 255) //geser 19

    lib.dda_line(imageDataSaya, 210, 165, 191, 121, 255, 255, 255)
    lib.dda_line(imageDataSaya, 212, 165, 191, 121, 255, 255, 255)
    lib.dda_line(imageDataSaya, 215, 165, 191, 121, 255, 255, 255)

    lib.dda_line(imageDataSaya, 235, 140, 191, 121, 255, 255, 255)
    lib.dda_line(imageDataSaya, 235, 138, 191, 121, 255, 255, 255)
    lib.dda_line(imageDataSaya, 235, 136, 191, 121, 255, 255, 255)
}

// cylinderUFO
export function cylinderUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 76, 114, 159)
    }

    lib.dda_line(imageDataSaya, 150, 183, 250, 193, 255, 255, 255)
    lib.dda_line(imageDataSaya, 150, 184, 250, 194, 255, 255, 255)
    lib.dda_line(imageDataSaya, 150, 185, 250, 195, 255, 255, 255)

    lib.dda_line(imageDataSaya, 140, 205, 240, 215, 255, 255, 255)
    lib.dda_line(imageDataSaya, 140, 206, 240, 216, 255, 255, 255)
    lib.dda_line(imageDataSaya, 140, 207, 240, 217, 255, 255, 255)

    // cahaya
    lib.dda_line(imageDataSaya, 140, 187, 255, 198, 188, 222, 248)
    lib.dda_line(imageDataSaya, 135, 189, 260, 201, 188, 222, 248)

    lib.dda_line(imageDataSaya, 135, 201, 250, 213, 188, 222, 248)
    lib.dda_line(imageDataSaya, 130, 198, 255, 210, 188, 222, 248)

}

// diskUFO
export function diskUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 182, 182, 182)
    }
    lib.ellipse_polar(imageDataSaya, 200, 123, 75, 15, 123, 123, 123)
    lib.floodFillStack(imageDataSaya, canvas, 200, 120, { r: 182, g: 182, b: 182 }, { r: 123, g: 123, b: 123 })


    lib.ellipse_polar(imageDataSaya, 200, 150, 150, 30, 75, 75, 75)
    lib.floodFillStack(imageDataSaya, canvas, 200, 130, { r: 123, g: 123, b: 123 }, { r: 75, g: 75, b: 75 })
    lib.floodFillStack(imageDataSaya, canvas, 200, 150, { r: 182, g: 182, b: 182 }, { r: 75, g: 75, b: 75 })

}

// sphereUFO
export function sphereUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 71, 95, 119)
    }
    // besar
    lib.ellipse_polar(imageDataSaya, 210, 200, 60, 60, 122, 137, 156)
    lib.floodFillStack(imageDataSaya, canvas, 210, 200, { r: 71, g: 95, b: 119 }, { r: 122, g: 137, b: 156 })
    // kecil
    lib.ellipse_polar(imageDataSaya, 195, 200, 40, 40, 180, 183, 192)
    lib.floodFillStack(imageDataSaya, canvas, 210, 200, { r: 122, g: 137, b: 156 }, { r: 180, g: 183, b: 192 })
}

// fireballUFO
export function fireballUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 0, 0, 0)
    }
    // lingkaran luar
    lib.ellipse_polar(imageDataSaya, 160, 160, 18, 18, 223, 151, 124)
    lib.floodFillStack(imageDataSaya, canvas, 160, 160, { r: 0, g: 0, b: 0 }, { r: 223, g: 151, b: 124 })
    // cahaya lingkaran luar
    lib.ellipse_polar(imageDataSaya, 160, 160, 20, 20, 123, 82, 77)
    lib.ellipse_polar(imageDataSaya, 160, 160, 22, 22, 123, 82, 77)
    //lingkaran dalam
    lib.ellipse_polar(imageDataSaya, 160, 160, 10, 10, 253, 201, 162)
    lib.floodFillStack(imageDataSaya, canvas, 160, 160, { r: 223, g: 151, b: 124 }, { r: 253, g: 201, b: 162 })
    // cahaya lingkaran dalam
    lib.ellipse_polar(imageDataSaya, 160, 160, 12, 12, 250, 187, 145)
    lib.ellipse_polar(imageDataSaya, 160, 160, 14, 14, 250, 187, 145)
}

// ovalUFO
export function ovalUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 44, 113, 237)
    }
    // oval besar
    lib.ellipse_polar(imageDataSaya, 200, 200, 100, 18, 43, 75, 122)
    lib.floodFillStack(imageDataSaya, canvas, 200, 200, { r: 44, g: 113, b: 237 }, { r: 43, g: 75, b: 122 })
    // atas
    lib.ellipse_polar(imageDataSaya, 200, 182, 30, 18, 125, 201, 250)
    lib.floodFillStack(imageDataSaya, canvas, 200, 190, { r: 43, g: 75, b: 122 }, { r: 125, g: 201, b: 250 })
    lib.floodFillStack(imageDataSaya, canvas, 200, 178, { r: 44, g: 113, b: 237 }, { r: 125, g: 201, b: 250 })
    // cahaya atas
    lib.ellipse_polar(imageDataSaya, 200, 182, 15, 15, 199, 246, 255)
    lib.floodFillStack(imageDataSaya, canvas, 200, 182, { r: 125, g: 201, b: 250 }, { r: 199, g: 246, b: 255 })
}

// cigarUFO
export function cigarUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 141, 191, 202)
    }

    lib.dda_line(imageDataSaya, 150, 199, 250, 191, 0, 0, 0)
    lib.dda_line(imageDataSaya, 150, 200, 250, 190, 0, 0, 0)

    for (var i = 0; i < 10; i++) {
        lib.dda_line(imageDataSaya, 150, 199 + i, 250, 191 + i, 0, 0, 0)
    }

    lib.dda_line(imageDataSaya, 150, 209, 250, 199, 0, 0, 0)
    lib.dda_line(imageDataSaya, 150, 210, 250, 200, 0, 0, 0)
    lib.dda_line(imageDataSaya, 150, 211, 250, 201, 0, 0, 0)

    lib.ellipse_polar(imageDataSaya, 250, 195, 6, 6, 0, 0, 0)
    lib.floodFillStack(imageDataSaya, canvas, 250, 195, { r: 141, g: 191, b: 202 }, { r: 0, g: 0, b: 0 })
    lib.ellipse_polar(imageDataSaya, 150, 205, 6, 6, 0, 0, 0)
    lib.floodFillStack(imageDataSaya, canvas, 149, 205, { r: 141, g: 191, b: 202 }, { r: 0, g: 0, b: 0 })

    lib.ellipse_polar(imageDataSaya, 200, 200, 3, 3, 255, 255, 255)
    lib.floodFillStack(imageDataSaya, canvas, 200, 200, { r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 })

    lib.ellipse_polar(imageDataSaya, 225, 198, 3, 3, 255, 255, 255)
    lib.floodFillStack(imageDataSaya, canvas, 225, 198, { r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 })

    lib.ellipse_polar(imageDataSaya, 175, 202, 3, 3, 255, 255, 255)
    lib.floodFillStack(imageDataSaya, canvas, 175, 202, { r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 })

    lib.ellipse_polar(imageDataSaya, 250, 195, 5, 5, 255, 255, 255)
    lib.floodFillStack(imageDataSaya, canvas, 250, 195, { r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 })
    lib.ellipse_polar(imageDataSaya, 150, 205, 5, 5, 255, 255, 255)
    lib.floodFillStack(imageDataSaya, canvas, 150, 205, { r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 })
}

// rectangleUFO
export function rectangleUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 44, 99, 148)
    }

    var point_array = [
        { x: 200, y: 180 },
        { x: 240, y: 180 },
        { x: 200, y: 220 },
        { x: 160, y: 220 },
    ];
    lib.polygon(imageDataSaya, point_array, 37, 68, 104);
    lib.floodFillStack(imageDataSaya, canvas, 200, 200, { r: 44, g: 99, b: 148 }, { r: 43, g: 72, b: 105 })


    lib.ellipse_polar(imageDataSaya, 202, 182, 2, 2, 255, 255, 255)
    lib.floodFillStack(imageDataSaya, canvas, 202, 182, { r: 43, g: 72, b: 105 }, { r: 255, g: 255, b: 255 },)
    lib.ellipse_polar(imageDataSaya, 168, 217, 2, 2, 255, 255, 255)
    lib.floodFillStack(imageDataSaya, canvas, 168, 217, { r: 43, g: 72, b: 105 }, { r: 255, g: 255, b: 255 },)
}

// chevronUFO
export function chevronUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 105, 150, 171)
    }

    var point_array = [
        { x: 197, y: 140 },
        { x: 225, y: 250 },
        { x: 213, y: 250 },
        { x: 190, y: 180 },
        { x: 140, y: 240 },
        { x: 123, y: 240 },
    ];
    lib.polygon(imageDataSaya, point_array, 0, 3, 7);
    lib.floodFillStack(imageDataSaya, canvas, 200, 200, { r: 105, g: 150, b: 171 }, { r: 0, g: 3, b: 7 },)

    lib.ellipse_polar(imageDataSaya, 193, 165, 6, 6, 251, 243, 232)
    lib.floodFillStack(imageDataSaya, canvas, 193, 165, { r: 0, g: 3, b: 7 }, { r: 251, g: 243, b: 232 },)

    lib.ellipse_polar(imageDataSaya, 218, 244, 4, 4, 251, 243, 232)
    lib.floodFillStack(imageDataSaya, canvas, 218, 244, { r: 0, g: 3, b: 7 }, { r: 251, g: 243, b: 232 },)

    lib.ellipse_polar(imageDataSaya, 206, 205, 5, 5, 251, 243, 232)
    lib.floodFillStack(imageDataSaya, canvas, 206, 205, { r: 0, g: 3, b: 7 }, { r: 251, g: 243, b: 232 },)

    lib.ellipse_polar(imageDataSaya, 134, 235, 4, 4, 251, 243, 232)
    lib.floodFillStack(imageDataSaya, canvas, 134, 235, { r: 0, g: 3, b: 7 }, { r: 251, g: 243, b: 232 },)

    lib.ellipse_polar(imageDataSaya, 162, 200, 5, 5, 251, 243, 232)
    lib.floodFillStack(imageDataSaya, canvas, 162, 200, { r: 0, g: 3, b: 7 }, { r: 251, g: 243, b: 232 },)

    var point_array = [
        { x: 0, y: 350 },
        { x: 30, y: 360 },
        { x: 50, y: 350 },
        { x: 140, y: 365 },
        { x: 170, y: 350 },
        { x: 250, y: 360 },
        { x: 340, y: 340 },
        { x: 400, y: 360 },
        { x: 400, y: 400 },
        { x: 0, y: 400 },
    ];
    lib.polygon(imageDataSaya, point_array, 0, 0, 0);
    lib.floodFillStack(imageDataSaya, canvas, 1, 399, { r: 105, g: 150, b: 171 }, { r: 33, g: 26, b: 19 })
}

// triangleUFO
export function triangleUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 152, 170, 184)
    }

    var point_array = [
        { x: 160, y: 175 },
        { x: 240, y: 175 },
        { x: 190, y: 210 },
    ];
    lib.polygon(imageDataSaya, point_array, 73, 91, 105);
    lib.floodFillStack(imageDataSaya, canvas, 200, 200, { r: 152, g: 170, b: 184 }, { r: 73, g: 91, b: 105 })

    lib.ellipse_polar(imageDataSaya, 170, 179, 3, 3, 180, 198, 210)
    lib.floodFillStack(imageDataSaya, canvas, 170, 179, { r: 73, g: 91, b: 105 }, { r: 202, g: 220, b: 232 },)

    lib.ellipse_polar(imageDataSaya, 227, 179, 3, 3, 180, 198, 210)
    lib.floodFillStack(imageDataSaya, canvas, 227, 179, { r: 73, g: 91, b: 105 }, { r: 202, g: 220, b: 232 },)

    lib.ellipse_polar(imageDataSaya, 191, 204, 3, 3, 180, 198, 210)
    lib.floodFillStack(imageDataSaya, canvas, 191, 204, { r: 73, g: 91, b: 105 }, { r: 202, g: 220, b: 232 },)

}

// formationUFO
export function formationUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 0, 0, 0)
    }

    lib.ellipse_polar(imageDataSaya, 200, 200, 6, 6, 147, 157, 146)
    lib.ellipse_polar(imageDataSaya, 200, 200, 7, 7, 95, 106, 93)
    lib.floodFillStack(imageDataSaya, canvas, 200, 200, { r: 0, g: 0, b: 0 }, { r: 223, g: 233, b: 222 },)

    lib.ellipse_polar(imageDataSaya, 230, 170, 6, 6, 147, 157, 146)
    lib.ellipse_polar(imageDataSaya, 230, 170, 7, 7, 95, 106, 93)
    lib.floodFillStack(imageDataSaya, canvas, 230, 170, { r: 0, g: 0, b: 0 }, { r: 223, g: 233, b: 222 },)

    lib.ellipse_polar(imageDataSaya, 170, 170, 6, 6, 147, 157, 146)
    lib.ellipse_polar(imageDataSaya, 170, 170, 7, 7, 95, 106, 93)
    lib.floodFillStack(imageDataSaya, canvas, 170, 170, { r: 0, g: 0, b: 0 }, { r: 223, g: 233, b: 222 },)

    lib.ellipse_polar(imageDataSaya, 140, 140, 6, 6, 147, 157, 146)
    lib.ellipse_polar(imageDataSaya, 140, 140, 7, 7, 95, 106, 93)
    lib.floodFillStack(imageDataSaya, canvas, 140, 140, { r: 0, g: 0, b: 0 }, { r: 223, g: 233, b: 222 },)

    lib.ellipse_polar(imageDataSaya, 260, 140, 6, 6, 147, 157, 146)
    lib.ellipse_polar(imageDataSaya, 260, 140, 7, 7, 95, 106, 93)
    lib.floodFillStack(imageDataSaya, canvas, 260, 140, { r: 0, g: 0, b: 0 }, { r: 223, g: 233, b: 222 },)

}

// deltaUFO
export function deltaUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 217, 217, 217)
    }

    var point_array = [
        { x: 180, y: 150 },
        { x: 240, y: 220 },
        { x: 190, y: 210 },
    ];
    lib.polygon(imageDataSaya, point_array, 0, 0, 0);
    lib.floodFillStack(imageDataSaya, canvas, 200, 200, { r: 217, g: 217, b: 217 }, { r: 0, g: 0, b: 0 })

    var point_array = [
        { x: 179, y: 148 },
        { x: 241, y: 221 },
        { x: 189, y: 210 },
    ];
    lib.polygon(imageDataSaya, point_array, 130, 130, 130);

    var point_array = [
        { x: 178, y: 147 },
        { x: 242, y: 222 },
        { x: 188, y: 211 },
    ];
    lib.polygon(imageDataSaya, point_array, 184, 184, 184);
}

// changingUFO
export function changingUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 50, 112, 209)
    }
    var point_array = [
        { x: 190, y: 150 },
        { x: 210, y: 150 },

        { x: 215, y: 170 },

        { x: 225, y: 230 },

        { x: 220, y: 240 },
        { x: 180, y: 240 },

        { x: 175, y: 230 },

        { x: 185, y: 170 },
    ];
    lib.polygon(imageDataSaya, point_array, 91, 126, 197);
    lib.gbr_titik(imageDataSaya, 210, 150, 91, 126, 197)
    lib.floodFillStack(imageDataSaya, canvas, 191, 151, { r: 50, g: 112, b: 209 }, { r: 254, g: 242, b: 244 })

    var point_array = [
        { x: 189, y: 149 },
        { x: 211, y: 149 },

        { x: 216, y: 170 },

        { x: 226, y: 230 },

        { x: 219, y: 240 },
        { x: 179, y: 240 },

        { x: 174, y: 230 },

        { x: 184, y: 170 },
    ];
    lib.polygon(imageDataSaya, point_array, 111, 138, 194);

    var point_array = [
        { x: 188, y: 149 },
        { x: 212, y: 149 },

        { x: 217, y: 170 },

        { x: 227, y: 230 },

        { x: 220, y: 241 },
        { x: 178, y: 240 },

        { x: 173, y: 230 },

        { x: 184, y: 171 },
    ];
    lib.polygon(imageDataSaya, point_array, 111, 138, 194);

}

// eggUFO
export function eggUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 122, 172, 181)
    }

    lib.ellipse_polar(imageDataSaya, 160, 140, 50, 15, 94, 112, 108)
    lib.floodFillStack(imageDataSaya, canvas, 161, 140, { r: 122, g: 172, b: 181 }, { r: 94, g: 112, b: 108 })
    lib.ellipse_polar(imageDataSaya, 160, 140, 51, 16, 119, 140, 126)
    lib.ellipse_polar(imageDataSaya, 160, 140, 51, 16, 156, 179, 170)

    var point_array = [
        { x: 0, y: 350 },
        { x: 30, y: 360 },
        { x: 50, y: 350 },
        { x: 140, y: 365 },
        { x: 170, y: 350 },
        { x: 250, y: 360 },
        { x: 340, y: 340 },
        { x: 400, y: 360 },
        { x: 400, y: 400 },
        { x: 0, y: 400 },
    ];
    lib.polygon(imageDataSaya, point_array, 28, 62, 3);
    // gbr_titik(imageDataSaya,150,370,0,0,0)
    lib.floodFillStack(imageDataSaya, canvas, 1, 399, { r: 122, g: 172, b: 181 }, { r: 28, g: 62, b: 3 })
}

// diamondUFO
export function diamondUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 228, 226, 227)
    }

    var point_array = [
        { x: 200, y: 150 },
        { x: 250, y: 165 },
        { x: 200, y: 175 },
        { x: 150, y: 165 },
    ];
    lib.polygon(imageDataSaya, point_array, 112, 105, 91);
    lib.floodFillStack(imageDataSaya, canvas, 200, 169, { r: 228, g: 226, b: 227 }, { r: 112, g: 105, b: 91 })

    var point_array = [
        { x: 200, y: 150 },
        { x: 250, y: 165 },
        { x: 150, y: 165 },
    ];
    lib.polygon(imageDataSaya, point_array, 155, 144, 124);
    lib.floodFillStack(imageDataSaya, canvas, 200, 152, { r: 112, g: 105, b: 91 }, { r: 155, g: 144, b: 124 })

}

// flashUFO
export function flashUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 60, 67, 77)
    }

    lib.ellipse_polar(imageDataSaya, 200, 200, 11, 11, 233, 231, 225)
    lib.floodFillStack(imageDataSaya, canvas, 200, 200, { r: 60, g: 67, b: 77 }, { r: 233, g: 231, b: 225 })

    for (var i = 0; i <= 5; i++) {
        lib.ellipse_polar(imageDataSaya, 200, 200, 12 + i, 12 + i, 227, 203, 186)
    }

    for (var i = 0; i < 10; i++) {
        lib.ellipse_polar(imageDataSaya, 200, 200, 17 + i, 17 + i, 201, 158, 142)
    }

    for (var i = 0; i < 15; i++) {
        lib.ellipse_polar(imageDataSaya, 200, 200, 27 + i, 27 + i, 118, 100, 106)
    }
}

// teardropUFO
export function teardropUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 63, 102, 161)
    }

    var point_array = [
        { x: 240, y: 180 },
        { x: 350, y: 220 },
        { x: 225, y: 230 },
        { x: 60, y: 160 },
    ];
    lib.polygon(imageDataSaya, point_array, 212, 210, 223);
    lib.floodFillStack(imageDataSaya, canvas, 240, 182, { r: 63, g: 102, b: 161 }, { r: 212, g: 210, b: 223 })

    var point_array = [
        { x: 241, y: 179 },
        { x: 351, y: 220 },
        { x: 224, y: 231 },
        { x: 59, y: 159 },
    ];
    lib.polygon(imageDataSaya, point_array, 131, 143, 175);
    var point_array = [
        { x: 242, y: 178 },
        { x: 352, y: 220 },
        { x: 223, y: 232 },
        { x: 58, y: 158 },
    ];
    lib.polygon(imageDataSaya, point_array, 131, 143, 175);
}

// coneUFO
export function coneUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 65, 71, 90)
    }

    var point_array = [
        { x: 210, y: 150 },
        { x: 250, y: 190 },
        { x: 170, y: 190 },
    ];
    lib.polygon(imageDataSaya, point_array, 163, 172, 189);
    lib.floodFillStack(imageDataSaya, canvas, 175, 189, { r: 65, g: 71, b: 90 }, { r: 163, g: 172, b: 189 })

    var point_array = [
        { x: 210, y: 150 },
        { x: 235, y: 180 },
        { x: 185, y: 180 },
    ];
    lib.polygon(imageDataSaya, point_array, 255, 253, 255);
    lib.floodFillStack(imageDataSaya, canvas, 190, 179, { r: 163, g: 172, b: 189 }, { r: 255, g: 253, b: 255 })

    lib.dda_line(imageDataSaya, 172, 190, 252, 190, 136, 149, 165)
    lib.dda_line(imageDataSaya, 173, 191, 251, 191, 136, 149, 165)
    lib.dda_line(imageDataSaya, 174, 192, 250, 192, 136, 149, 165)
    lib.dda_line(imageDataSaya, 175, 193, 249, 193, 136, 149, 165)
    lib.dda_line(imageDataSaya, 176, 194, 248, 194, 136, 149, 165)
    lib.dda_line(imageDataSaya, 177, 195, 247, 195, 136, 149, 165)
    lib.dda_line(imageDataSaya, 178, 196, 246, 196, 136, 149, 165)
    lib.dda_line(imageDataSaya, 179, 197, 245, 197, 136, 149, 165)
    lib.dda_line(imageDataSaya, 180, 198, 244, 198, 136, 149, 165)

    var point_array = [
        { x: 220, y: 400 },
        { x: 400, y: 280 },
        { x: 400, y: 400 },
    ];
    lib.polygon(imageDataSaya, point_array, 0, 0, 0);
    lib.floodFillStack(imageDataSaya, canvas, 395, 395, { r: 65, g: 71, b: 90 }, { r: 0, g: 0, b: 0 })
}

// crossUFO
export function crossUFO(imageDataSaya, canvas) {
    for (var i = 0; i < 400; i++) {
        lib.dda_line(imageDataSaya, 0, i, 400, i, 106, 148, 192)
    }

    var point_array = [
        { x: 190, y: 190 },
        { x: 210, y: 190 },
        { x: 215, y: 205 },
        { x: 240, y: 207 },
        { x: 240, y: 227 },
        { x: 215, y: 230 },
        { x: 210, y: 280 },
        { x: 190, y: 280 },
        { x: 185, y: 230 },
        { x: 160, y: 227 },
        { x: 160, y: 207 },
        { x: 185, y: 205 },
    ];
    lib.polygon(imageDataSaya, point_array, 162, 172, 198);
    lib.gbr_titik(imageDataSaya, 210, 190, 162, 172, 198)
    lib.gbr_titik(imageDataSaya, 215, 205, 162, 172, 198)
    lib.gbr_titik(imageDataSaya, 240, 227, 162, 172, 198)
    lib.gbr_titik(imageDataSaya, 185, 205, 162, 172, 198)
    lib.floodFillStack(imageDataSaya, canvas, 192, 192, { r: 106, g: 148, b: 192 }, { r: 245, g: 241, b: 251 })

    var point_array = [
        { x: 189, y: 189 },
        { x: 211, y: 189 },
        { x: 216, y: 204 },
        { x: 241, y: 206 },
        { x: 241, y: 228 },
        { x: 216, y: 231 },
        { x: 211, y: 281 },
        { x: 189, y: 281 },
        { x: 184, y: 231 },
        { x: 159, y: 228 },
        { x: 159, y: 206 },
        { x: 184, y: 204 },
    ];
    lib.polygon(imageDataSaya, point_array, 162, 172, 198);
}