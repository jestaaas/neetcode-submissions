class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a,b) => a - b);
        const freqMap = {};
        const result = [];

        for (let num of nums) {
            freqMap[num] = (freqMap[num] || 0) + 1;
        }

        for (let i = 0; i < nums.length; i++) {
            freqMap[nums[i]]--;
            if (i !== 0 && nums[i] === nums[i - 1]) continue;

            for (let j = i + 1; j < nums.length; j++) {
                freqMap[nums[j]]--;
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;
                const diff = -(nums[i] + nums[j]);

                if (freqMap[diff]) result.push([diff, nums[i], nums[j]]);
            }

            for (let j = i + 1; j < nums.length; j++) {
                freqMap[nums[j]]++;
            }
        }

        return result;
    }
}
