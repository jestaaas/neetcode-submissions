class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const countS = [];
        const countT = [];

        if (s.length !== t.length) return false;

        for (let i = 0; i < s.length; i++) {
            countS[s[i]] = (countS[s[i]] || 0) + 1;
            countT[t[i]] = (countT[t[i]] || 0) + 1;
        }

        for (let i = 0; i < s.length; i++) {
            const currentChar = s[i];
            if (countS[currentChar] !== countT[currentChar]) return false;
        }

        return true;
    }
}
