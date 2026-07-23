class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isEnglishAlphabet(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (left < right && !this.isEnglishAlphabet(s[left])) left++;
            while (left < right && !this.isEnglishAlphabet(s[right])) right--;
            if (s[left].toUpperCase() !== s[right].toUpperCase()) return false;
            left++;
            right--;
        }

        return true;
    }
}
