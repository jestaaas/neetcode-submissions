class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = {};
        let r = [];
        let sortedStrs = [];
        for (let i = 0; i < strs.length; i++) {
            sortedStrs.push(strs[i].split("").sort().join(""));
        }
        for (let i = 0; i < sortedStrs.length; i++) {
            let key = sortedStrs[i];

            if (!result[key]) {
            result[key] = [];
            }

            result[key].push(strs[i]);
        }

        for (let key in result) {
        r.push(result[key])
        }

        return r;
    }
}
