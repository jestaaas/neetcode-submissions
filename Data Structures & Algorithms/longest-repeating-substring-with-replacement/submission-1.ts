class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let res = 0;
        let left = 0;
        const freqMap = {};
        let maxF = 0;

        for (let right = 0; right < s.length; right++) {
            freqMap[s[right]] = (freqMap[s[right]] || 0) + 1;
            maxF = Math.max(maxF, freqMap[s[right]]);

            if (right - left + 1 - maxF > k) {
                freqMap[s[left]]--;
                left++;
            }

            res = Math.max(res, right - left + 1);
        }


        return res;
    }
}
