class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const ROWS: number = 9;
        const COLS: number = 9;

        for (let row = 0; row < ROWS; row++) {
            const set = new Set();
            for (let col = 0; col < COLS; col++) {
                if (board[row][col] === '.') continue;
                if (set.has(board[row][col])) return false;
                set.add(board[row][col]);
            }
        }

        for (let col = 0; col < COLS; col++) {
            const set = new Set();
            for (let row = 0; row < ROWS; row++) {
                if (board[row][col] === '.') continue;
                if (set.has(board[row][col])) return false;
                set.add(board[row][col]);
            }
        }

        for (let rowStart = 0; rowStart < ROWS; rowStart += 3) {
            for (let colStart = 0; colStart < COLS; colStart += 3) {
                const set = new Set();
                for (let i = rowStart; i < rowStart + 3; i++) {
                    for (let j = colStart; j < colStart + 3; j++) {
                        if (board[i][j] === '.') continue;
                        if (set.has(board[i][j])) return false;
                        set.add(board[i][j])
                    }
                }
            }
        }

        return true;
    }
}
