class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        nums.sort((a, b) => a - b);
        let result = 0;
        let current = nums[0];
        let i = 0;
        let streak = 0

        while (i < nums.length) {
            if (current !== nums[i]) {
                current = nums[i]
                streak = 0;
            }

            while (i < nums.length && nums[i] === current) {
                i++;
            }

            streak++;
            current++;
            result = Math.max(result, streak);
        }
        return result;
    }
}
