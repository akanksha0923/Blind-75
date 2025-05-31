/*
  https://leetcode.com/problems/search-in-rotated-sorted-array/description/
  
  Example 1:
  Input: nums = [4,5,6,7,0,1,2], target = 0
  Output: 4
  
  Example 2:
  Input: nums = [4,5,6,7,0,1,2], target = 3
  Output: -1
  
  Example 3:
  Input: nums = [1], target = 0
  Output: -1

  1. use binary search
  2. identify the sorted half lower < higher value
  3. check mid === target ?
  
*/

// Way 1 - linear search
var search_1 = function (nums, target) {
    let ans = -1;
    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i] == target) {
            ans = i;
            break;
        }
    }
    return ans;
};


// Way 2 - binary search
var search_2 = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if(nums[mid] === target) return mid
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target <= nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] <= target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
};










