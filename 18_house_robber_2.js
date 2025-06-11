/*
https://leetcode.com/problems/house-robber-ii/description/


1. check from i = 0 till i = nums.length - 2
2. check from i = 1 till i = nums.length - 1;
3. get max of both & return
*/


var rob = function (nums) {
    let rob1 = 0
    let rob2 = 0
    let max1 = nums[0]
    let max2 = 0

    for (let i = 0; i < nums.length - 1; i++) {
        max1 = Math.max(rob1 + nums[i], rob2);
        rob1 = rob2;
        rob2 = max1;
    }

    rob1 = 0;
    rob2 = 0;

    for (let i = 1; i < nums.length; i++) {
        max2 = Math.max(rob1 + nums[i], rob2);
        rob1 = rob2;
        rob2 = max2;
    }

    return Math.max(max1, max2)
};


