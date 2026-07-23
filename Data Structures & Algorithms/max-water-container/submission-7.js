class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxSqr = 0;

        while (left < right) {
           let currentSqr = Math.min(heights[left], heights[right]) * (right - left);
           maxSqr = Math.max(maxSqr, currentSqr);

           if (heights[left] <= heights[right]) left++;
           else right--;
        }

        return maxSqr;
    }
}
