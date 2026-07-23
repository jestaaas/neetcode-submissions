class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
        let left = 0;
        let right = 1;
        while (right < prices.length) {
            if (prices[right] <= prices[left]) {
                left = right;
            }
            else {
                res = Math.max(prices[right] - prices[left], res);
            }
            right++;
        }
        return res;
    }
}
