/*
  https://leetcode.com/problems/climbing-stairs/description/
  Input: n = 2
  Output: 2
  Explanation: There are two ways to climb to the top.
  1. 1 step + 1 step
  2. 2 steps
*/


var climbStairs = function (n) {
    if (n === 1) return 1;
    let one = 1;
    let two = 2;

    for (let i = 3; i <= n; i++) {
        let total = one + two;
        one = two;
        two = total;
    }

    return two;
};
