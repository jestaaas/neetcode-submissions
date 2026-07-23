class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const charsToExcept = [' ', '\'', ',', '+', "?", "!", ':', ';', '.', ''];
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (left < right && charsToExcept.includes(s[left])) left++;
            while (left < right && charsToExcept.includes(s[right])) right--;
            if (s[left].toLowerCase() != s[right].toLowerCase()) return false;

            left++;
            right--;
        }

        return true;
    }
}
