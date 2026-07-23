class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let appearedNums = {};

        for (let i = 0; i < nums.length; i++) {
            if (appearedNums[nums[i]]) return true;
            appearedNums[nums[i]] = true;
        }

        return false;
    }
}
