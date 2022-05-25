function gridChallenge(grid) {
    // Write your code here
    let result = true;
    let gridSize = 0;
    grid = grid.map((row, rowIndex) => {
        let rowAsVector = [];
        for (const column of row) {
            rowAsVector.push(column);
        }
        rowAsVector.sort();
        gridSize++;
        return rowAsVector.join("");
    });
    if (gridSize > 1) {
        for (let i = 1; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                let current=grid[i][j];
                let previous = grid[i - 1][j];
                if (current < previous) {
                    result = false;
                    break;
                }
            }
            if (!result) {
                break;
            }
        }
    }
    return result ? "YES" : "NO";
}
module.exports = {
    gridChallenge
}