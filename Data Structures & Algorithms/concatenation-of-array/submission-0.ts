class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n: number = nums.length;
        const ans: number[] = Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            ans[i] = nums[i];
            ans[n + i] = nums[i];
        }

        return ans;
    }
}
