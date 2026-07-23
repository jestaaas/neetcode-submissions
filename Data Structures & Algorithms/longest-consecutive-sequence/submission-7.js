class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let result = 0;
        const store = new Set(nums);

        for (const num of nums) {
            let streak = 0;
            let current = num;

            while (store.has(current)) {
                current++;
                streak++;
            }

            result = Math.max(streak, result);
        }
        return result;
    }
}
