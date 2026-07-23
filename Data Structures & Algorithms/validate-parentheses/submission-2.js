class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;
        const closeToOpen = {
            "}": "{",
            "]": "[",
            ")": "("
        };
        const stack = [];

        for (let c of s) {
            if (closeToOpen[c]) {
                if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
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
