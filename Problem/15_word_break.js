/*
  https://leetcode.com/problems/word-break/description/
  Input: s = "applepenapple", wordDict = ["apple","pen"]
  Output: true
  Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
               Note that you are allowed to reuse a dictionary word.
*/


// Way 1 : O(n*n*n)

var wordBreak = function (s, wordDict) {
    const wordSet = new Set(wordDict);
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true; 

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break; 
            }
        }
    }

    return dp[n];
};

