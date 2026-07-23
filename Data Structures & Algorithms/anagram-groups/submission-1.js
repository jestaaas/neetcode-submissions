class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        for (let i = 0; i < strs.length; i++) {
            const key = strs[i].split("").sort().join("");
            if (!map[key]) map[key] = [strs[i]];
            else map[key].push(strs[i]);
        }
        const result = [];
        for (const key in map) {
            result.push(map[key]);
        }
        return result;
    }
}
