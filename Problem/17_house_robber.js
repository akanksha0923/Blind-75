/*
    https://leetcode.com/problems/house-robber/description/
    https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/description/
    
    Input: nums = [1,2,3,1]
    Output: 4
    Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
    Total amount you can rob = 1 + 3 = 4.
*/

var rob = function (nums) {
    let rob1 = 0;
    let rob2 = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(rob1 + nums[i], rob2);
        rob1 = rob2;
        rob2 = max;
    }

    return max;
};



