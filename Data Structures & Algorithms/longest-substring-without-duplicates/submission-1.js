class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let result = 0;
        let seen = new Set();
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            while (seen.has(s[right])) {
                seen.delete(s[left]);
                left++;
            }
            seen.add(s[right])
            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}
