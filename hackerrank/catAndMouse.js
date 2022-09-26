// Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

// You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C. Complete the function catAndMouse to return the appropriate answer to each query, which will be printed on a new line.

// If cat A catches the mouse first, print Cat A.
// If cat B catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

// Sample Input 0
// 2
// 1 2 3
// 1 3 2

// Sample Output 0
// Cat B
// Mouse C

// Explanation 0
// Query 0: The positions of the cats and mouse are shown below: image

// Cat B, at position 2 will catch the mouse first, so we print Cat B on a new line.

// Query 1: The positions of the cats and mouse are shown below: image

// Because the mouse is at the same position as cat B, the cats fight and mouse escapes, so we print Mouse C on a new line.

// Sample Input 1
// 1
// 1 3 2

// Sample Output 1
// Cat B

// Explanation 1
// Query 0: The positions of the cats and mouse are shown below: image

// Cat B, at position 2 will catch the mouse first, so we print Cat B on a new line.

// Because the mouse is at the same position as cat B, the cats fight and mouse escapes, so we print Mouse C on a new line.

// Constraints
// 1 <= q <= 100
// 1 <= x, y, z <= 100

// Function Description
// Complete the catAndMouse function in the editor below. It should return one of the three strings as described.

// catAndMouse has the following parameter(s):
// x: an integer, Cat A's position
// y: an integer, Cat B's position
// z: an integer, Mouse C's position

// Input Format for Custom Testing
// Sample Case 0
// Sample Input 0
// STDIN Function
// ----- --------
// 2 → q = 2
// 1 2 3 → x = 1, y = 2, z = 3
// 1 3 2 → x = 1, y = 3, z = 2

// Sample Case 1
// Sample Input 1
// STDIN Function
// ----- --------
// 1 → q = 1
// 1 3 2 → x = 1, y = 3, z = 2

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .replace(/\s*$/, "")
        .split("\n")
        .map((str) => str.replace(/\s*$/, ""));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/**
 *
 * @param {int} x - cat A's position
 * @param {int} y - cat B's position
 * @param {int} z - mouse C's position
 */


function catAndMouse(x, y, z) {
    let catADistance = Math.abs(x - z);
    let catBDistance = Math.abs(y - z);
    if (catADistance < catBDistance) {
        return "Cat A";
    } else if (catADistance > catBDistance) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}
console.log(catAndMouse(1, 2, 3));

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    // constraints 1 <= q <= 100
    const q = parseInt(readLine(), 10);
    // iterate through q beginning at index 0
    for (let qItr = 0; qItr < q; qItr++) {
        // split the input into an array
        const xyz = readLine().split(' ');
        // convert the array into integers for cat A 
        const x = parseInt(xyz[0], 10);
        // convert the array into integers for cat B
        const y = parseInt(xyz[1], 10);
        // convert the array into integers for mouse C
        const z = parseInt(xyz[2], 10);

        let result = catAndMouse(x, y, z);

        ws.write(result + "\n");
    }

    ws.end();
}