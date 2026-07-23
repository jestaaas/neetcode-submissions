class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = {};
        const columns = {};
        const boxes = {};

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const val = board[i][j];
                if (val === '.') continue;

                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (!rows[i]) rows[i] = {};
                if (!columns[j]) columns[j] = {};
                if (!boxes[boxIndex]) boxes[boxIndex] = {};

                if (rows[i][val] || columns[j][val] || boxes[boxIndex][val]) return false;

                rows[i][val] = true;
                columns[j][val] = true;
                boxes[boxIndex][val] = true;
            }
        }
        return true;
    }
}
