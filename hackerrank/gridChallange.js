function gridChallenge(grid) {
    let sorted = grid.map(row => row.split('').sort().join(''));
    for (let i = 0; i < sorted[0].length; i++) {
        for (let j = 0; j < sorted.length - 1; j++) {
            if (sorted[j][i] > sorted[j + 1][i]) {
                return 'NO';
            }
        }
    }
    return 'YES';
}
console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']));
