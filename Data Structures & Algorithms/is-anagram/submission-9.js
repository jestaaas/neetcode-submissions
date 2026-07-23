class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = {};
        const tMap = {};

        if (s.length !== t.length) return false;
        for (let i = 0; i < s.length; i++) {
            sMap[s[i]] = (sMap[s[i]] || 0) + 1;
            tMap[t[i]] = (tMap[t[i]] || 0) + 1;
        }

        for (const key in sMap) {
            if (sMap[key] !== tMap[key]) return false;
        }

        return true;
    }
}
