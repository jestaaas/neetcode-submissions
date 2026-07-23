class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = [];
        for (let i = 0; i < temperatures.length; i++) {
            let count = 0;
            let seen = false;
            for (let j = i + 1; j < temperatures.length; j++) {
                count++;
                if (temperatures[i] < temperatures[j]) {
                    seen = true;
                    break;
                }
            }
            result[i] = seen ? count : 0;
        }
        return result;
    }
}
