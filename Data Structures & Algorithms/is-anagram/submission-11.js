class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const chars1 = {};
        const chars2 = {};

        if (s.length !== t.length) return false;

        for (let i = 0; i < s.length; i++) {
            const char1 = s[i];
            const char2 = t[i];
            chars1[char1] = (chars1[char1] || 0) + 1;
            chars2[char2] = (chars2[char2] || 0) + 1;
        }

        const keys = Object.keys(chars1);

        for (const key of keys) {
            if (chars1[key] !== chars2[key]) return false;
        }
        return true;
    }
}
