/* 
  https://leetcode.com/problems/decode-ways/description/
  Input: s = "12"
  Output: 2
  Explanation:
  "12" could be decoded as "AB" (1 2) or "L" (12).
*/

// way 1 : O(n)
var numDecodings = function (s) {
    if (s[0] === '0') return 0;

    let one = 1; let two = 1;
    for (let i = 1; i < s.length; i++) {
        let current = 0;
        if (s[i] != '0') {
            current = one;
        }
        let value = parseInt(s.substring(i - 1, i + 1));
        if (value <= 26 && value >= 10) {
            current = current + two;
        }

        two = one;
        one = current;
    }

    return one;
};
