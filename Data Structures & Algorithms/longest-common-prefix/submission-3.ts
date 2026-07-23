class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let currentIndex: number = 0;
        let minLength = 200;
        let shortestStrIndex = 0;

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            if (minLength < str.length) {
                minLength = str.length;
                shortestStrIndex = i;
            }
        }

        while (currentIndex < minLength) {
            let currentChar = strs[0][currentIndex];
            for (let str of strs) {
                if (currentChar !== str[currentIndex]) return str.slice(0, currentIndex);
            }
            currentIndex++;
        }
        return currentIndex === 0 ? '' : strs[shortestStrIndex];
    }
}
