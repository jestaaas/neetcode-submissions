class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0;
        let right = nums.length - 1;
        let res = 1001;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (nums[left] > nums[right]) {
                left = left + 1;
            }
            else right = right - 1;
            res = Math.min(res, nums[mid]);
        }
        return res;
    }
}
