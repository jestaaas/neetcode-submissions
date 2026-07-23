class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return '';
        const sizes = [];

        for (const str of strs) {
            sizes.push(str.length);
        }
        let result = '';
        for (const size of sizes) {
            result += size + ',';
        }
        result += '#';
        for (const str of strs) {
            result += str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === '') return [];

        let i = 0;
        let sizes = [];
        while (str[i] !== '#') {
            let n = '';
            while (str[i] !== ',') {
                n += str[i];
                i++;
            }
            sizes.push(parseInt(n));
            i++;
        }
        i++;
        let result = [];
        for (const size of sizes) {
            result.push(str.substr(i, size));
            i += size;
        }
        return result;
    }
}
