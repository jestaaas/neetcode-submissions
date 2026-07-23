class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const obj = {
            "}": "{",
            "]": "[",
            ")": "("
        }

        const stack = [];

        for (let c of s) {
            if (obj[c]) {
                if (stack.length > 0 && stack[stack.length - 1] === obj[c]) {
                    stack.pop();
                }
                else return false;
            }
            else {
                stack.push(c)
            }
        }
        return stack.length === 0;
    }
}
