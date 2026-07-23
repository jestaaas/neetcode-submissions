class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const SIZE = 9;
        for (let row = 0; row < SIZE; row++) {
            const rowSet = new Set();
            for (let col = 0; col < SIZE; col++) {
                if (board[row][col] !== '.') {
                    if (rowSet.has(board[row][col])) {
                        return false;
                    }
                    rowSet.add(board[row][col]);
                }
            }
        }
        for (let col = 0; col < SIZE; col++) {
            const colSet = new Set();
            for (let row = 0; row < SIZE; row++) {
                if (board[row][col] !== '.') {
                    if (colSet.has(board[row][col])) return false;
                    colSet.add(board[row][col]);
                }
            }
        }
        for (let rowStart = 0; rowStart < SIZE; rowStart += 3) {
            for (let colStart = 0; colStart < SIZE; colStart += 3) {
                const boxSet = new Set();
                for (let i = rowStart; i < rowStart + 3; i++) {
                    for (let j = colStart; j < colStart + 3; j++) {
                        if (board[i][j] !== '.') {
                            if (boxSet.has(board[i][j])) return false;
                            boxSet.add(board[i][j]);
                        }
                    }
                }
            }
        }
        return true;
    }
}
