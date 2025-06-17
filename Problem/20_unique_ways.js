/*
  https://leetcode.com/problems/unique-paths/description/
  Input: m = 3, n = 2
  Output: 3
  Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
  1. Right -> Down -> Down
  2. Down -> Down -> Right
  3. Down -> Right -> Down
*/


//wya 1 
// time complexity : O(m*n)
// space complexity : O(m*n)


var uniquePaths = function (m, n) {
    let dp = Array.from({ length: m }, () => new Array(n).fill(1));
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};
