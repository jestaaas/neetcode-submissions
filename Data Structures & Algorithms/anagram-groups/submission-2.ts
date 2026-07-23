class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = [];

        for (let str of strs) {
            const sortedStr = str.split('').sort().join('');
            if (!groups[sortedStr]) {
                groups[sortedStr] = [];
            }

            groups[sortedStr].push(str);
        }

        const result: string[][] = [];

        for (let [key, value] of Object.entries(groups)) {
            result.push(value)
        }

        return result;
    }
}
