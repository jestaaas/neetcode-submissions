class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        s = s.split("").sort().toString();
        t = t.split("").sort().toString();

        return s === t;
    }
}
