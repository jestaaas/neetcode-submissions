class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const appearedNums = new Set(nums);

        return appearedNums.size !== nums.length;
    }
}
