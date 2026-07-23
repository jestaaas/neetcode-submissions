class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsF = {};
        const result = [];
        for (let i = 0; i < nums.length; i++) {
            numsF[nums[i]] = numsF[nums[i]] ? numsF[nums[i]] + 1 : 1;
        }

        const sortedNumsF = Object.entries(numsF).sort(([, a], [, b]) => b - a)

        for (let i = 0; i < k; i++) {
        result.push(sortedNumsF[i][0]);
        }
        return result;
    }
}
