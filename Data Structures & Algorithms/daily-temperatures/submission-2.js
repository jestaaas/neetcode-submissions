class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            const current = temperatures[i];

            while (stack.length > 0 && current > stack[stack.length - 1][0]) {
                const [stackT, stackIndex] = stack.pop();
                res[stackIndex] = i - stackIndex;
            }

            stack.push([current, i]);
        }
        return res;
    }
}
