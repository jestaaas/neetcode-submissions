class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let countZeroes = 0;
        let product = 1;

        for (let num of nums) {
            if (num === 0) countZeroes++;
            else {
                product *= num;
            }
        }

        if (countZeroes > 1) {
            return Array(nums.length).fill(0);
        }

        const result = [];

        for (const num of nums) {
            if (num === 0) {
                result.push(product);
            }
            else if (countZeroes > 0) result.push(0);
            else result.push(product / num);
        }

        return result;
    }
}
