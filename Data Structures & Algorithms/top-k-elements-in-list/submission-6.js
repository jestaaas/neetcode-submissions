class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for (let num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }

        const keys = Object.entries(freq).sort(([, a], [, b]) => b - a ).map(([key]) => key);  

        return keys.slice(0, k);
    }
}
