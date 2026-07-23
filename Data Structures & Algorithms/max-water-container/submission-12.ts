class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxSqrt = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            const sqrt = Math.min(heights[left], heights[right]) * (right - left);
            maxSqrt = Math.max(sqrt, maxSqrt);

            if (heights[left] < heights[right]) left++;
            else right--;
        }

        return maxSqrt;
    }
}
