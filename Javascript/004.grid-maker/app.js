const GRID = { width: 7, height: 3, border: "*", filler: " " };

const arguments = process.argv.slice(2);
const pixelWidth = arguments[0] * (GRID.width - 1) + 1;
const pixelHeight = arguments[1] * (GRID.height - 1) + 1;

let result = "\n";
for (let h = 0; h < pixelHeight; h++) {
    for (let w = 0; w < pixelWidth; w++) {
        if (
            h == 0 ||
            h % (GRID.height - 1) == 0 ||
            w == 0 ||
            w % (GRID.width - 1) == 0
        ) {
            result += GRID.border;
        } else {
            result += GRID.filler;
        }
    }
    result += "\n";
}

console.log(result);
