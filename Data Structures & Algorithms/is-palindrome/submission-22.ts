class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (left < right && !this.isAlphanumeric(s[left])) left++;
            while (left < right && !this.isAlphanumeric(s[right])) right--;

            if (s[left].toUpperCase() !== s[right].toUpperCase()) return false;
            left++;
            right--;
        }

        return true;
    }
    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
}
