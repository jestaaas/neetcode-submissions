class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        let product = 1;
        let zeroCount = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) product *= nums[i];
            else zeroCount++;
        }

        for (let i = 0; i < nums.length; i++) {
            if (zeroCount > 1) result.push(0);
            else if (zeroCount === 1) result.push(nums[i] === 0 ? product : 0);
            else result.push(product / nums[i]);
        }

        return result;
    }
}
