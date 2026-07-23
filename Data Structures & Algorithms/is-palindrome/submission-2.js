class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const symbols = [' ', ',', '.', '!', '?', '\'', '\"', ':', ';'];

        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            if (symbols.includes(s[i])) {
                i++;
                continue;
            }
            if (symbols.includes(s[j])) {
                j--;
                continue;
            }

            if (s[i].toUpperCase() !== s[j].toUpperCase()) return false;
            i++;
            j--;
        }
        return true;
    }
}
