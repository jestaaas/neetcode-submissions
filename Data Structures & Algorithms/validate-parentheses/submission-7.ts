class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const pairs = {
            '}': '{',
            ']': '[',
            ')': '('
        }

        const stack = [];

        for (const c of s) {
            if (pairs[c]) {
                if (stack[stack.length - 1] === pairs[c]) {
                    stack.pop();
                }
                else return false;
            }
            else {
                stack.push(c);
            }
        }
        return stack.length === 0;
    }
}
