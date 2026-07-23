class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];
        let product = 1;
        let zeroCount = 0;
        for (const num of nums) {
            if (num !== 0) product *= num;
            else zeroCount++;

            if (zeroCount > 1) break;
        }

        if (zeroCount > 1) {
            return Array(nums.length).fill(0);
        }

        for (const num of nums) {
            if (zeroCount > 0) {
                result.push(num === 0 ? product : 0);
            }
            else {
                result.push(product / num)
            }
        }
        return result;
    }
}
