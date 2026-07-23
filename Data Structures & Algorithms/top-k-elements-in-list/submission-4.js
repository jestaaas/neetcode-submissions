class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res = {};

        for (const num of nums) {
            res[num] = (res[num] || 0) + 1;
        }

        const keys = Object.keys(res);

        keys.sort((a, b) => {
            return res[b] - res[a];
        });

        return keys.slice(0, k).map((key) => Number(key));
    }
}
