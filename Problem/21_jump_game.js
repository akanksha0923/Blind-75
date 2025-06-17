/*
https://leetcode.com/problems/jump-game/submissions/1667470402/

*/

// time O(n)
var canJump = function (nums) {
    let final = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= final) {
            final = i;
        }
    }
    if (final === 0) {
        return true;
    } else {
        return false;
    }
};
