class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap: Record<number,number> = {};

        for (const n of nums) {
            freqMap[n] = (freqMap[n] || 0) + 1;
        }

        const sortedKeys: number[] = Object.entries(freqMap)
            .sort(([, a], [, b]) => b - a)
            .map(([num]) => Number(num));

        return sortedKeys.slice(0, k);
    }
}