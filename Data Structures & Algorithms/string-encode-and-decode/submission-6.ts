class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const sizes: number[] = [];

        for (let str of strs) {
            sizes.push(str.length);
        }
        let resultString:string = "";

        for (const size of sizes) {
            resultString += size + ",";
        }

        resultString += "#";

        for (let str of strs) {
            resultString += str;
        }
        return resultString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const sizes: number[] = [];
        let i: number = 0;

        while (str[i] !== '#') {
            let j = i;
            while (str[j] !== ',') j++;
            sizes.push(parseInt(str.substring(i, j), 10));
            i = j + 1;
        }
        i++;
        const result = [];
        for (const size of sizes) {
            result.push(str.substr(i, size));
            i += size;
        }
        return result;
    }
}
