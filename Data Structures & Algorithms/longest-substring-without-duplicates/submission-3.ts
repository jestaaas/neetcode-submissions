class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let left = 0;
        let right = 0;
        let maxLength = 0;
        const set = new Set();

        while (right < s.length) {
            while (set.has(s[right])) {
                set.delete(s[left])
                left++;
            }
            set.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1) 
            right++;
        }

        return maxLength;
    }
}
