class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = 0;
        

        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                const area = Math.min(heights[i], heights[j]) * (j - i);
                result = Math.max(area, result);
            }
        }
        return result;
    }
}
