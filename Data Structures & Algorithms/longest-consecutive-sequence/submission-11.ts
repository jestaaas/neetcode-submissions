class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numsSet = new Set(nums);

        let maxLength = 0;

        for (let num of nums) {
            let curr = num;
            let currLength = 0;
            while (numsSet.has(curr)) {
                currLength++;
                curr++;
            }
            maxLength = Math.max(maxLength, currLength)
        }

        return maxLength;
    }
}
