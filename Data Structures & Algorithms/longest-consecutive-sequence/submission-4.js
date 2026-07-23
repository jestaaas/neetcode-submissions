class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let store = new Set(nums);
        let res = 0;

        for (let num of nums) {
            let streak = 0;
            let curr = num;

            while (store.has(curr)) {
                curr++;
                streak++;
            }

            res = Math.max(res, streak);
        }
        return res;
    }
}
