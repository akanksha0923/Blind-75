/*
  https://leetcode.com/problems/contains-duplicate/description/
  Input: nums = [1,2,3,1]
  Output: true
  Explanation:
  The element 1 occurs at the indices 0 and 3.
*/

var containsDuplicate = function (nums) {
    let frequencyMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if (!frequencyMap.has(current)) {
            frequencyMap.set(current, 1);
        } else {
            return true;
        }
    }

    return false;
};
