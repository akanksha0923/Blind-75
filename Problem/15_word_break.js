/*
  https://leetcode.com/problems/word-break/description/
  Input: s = "applepenapple", wordDict = ["apple","pen"]
  Output: true
  Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
               Note that you are allowed to reuse a dictionary word.

  1. create DP array on s + 1 length.
  2. 
*/


// Way 1 : O(n*n*n)
var wordBreak = function (s, wordDict) {
    const wordSet = new Set(wordDict);
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    // each item represents if the substring can be made from wordDict or no
    // dp[0] is for representing '' (empty string)
    // dp[1]  = if "a" can be made from the wordDict that is 'false'
    // dp[2] = if "ap"
    // dp[5] = if "apple" can be made from wordDict that is 'true'
    dp[0] = true; 

    for (let i = 1; i <= n; i++) { // iterate over dp array 
      // take substring then break it in size 0, 1, 2, 3 ... 
      // a
      // ap
      // app
      // appl
      // ...
        for (let j = 0; j < i; j++) { // iterate over substring
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break; 
            }
        }
    }

    return dp[n];
};

//Way 2
var wordBreak = function (s, wordDict) {
    const wordSet = new Set(wordDict);
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true; 

    for (let i = 1; i <= n; i++) {
        for (let j = i-1; j >= 0; j--) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break; 
            }
        }
    }

    return dp[n];
};

