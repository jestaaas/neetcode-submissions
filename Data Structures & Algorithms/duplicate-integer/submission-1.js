class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = new Set();

        for (let i = 0; i < nums.length; i++) {
          numsSet.add(nums[i]);
        }

        return numsSet.size === nums.length ? false : true;
    }
}
