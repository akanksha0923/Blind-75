/*
  https://leetcode.com/problems/maximum-product-subarray/description/
  Input: nums = [2,3,-2,4]
  Output: 6
  Explanation: [2,3] has the largest product 6.

  1. if all the values are +
  2. if odd number is -
  3. if even number is -
  4. if there is one or more zeros

  1) divide the array by occurance of zeros
  2) find the max_pre & max_post from both sides
  3) keep one result, that will be max of all times.
*/


var maxProduct = function(nums) {
    let result = nums[0];
    let pre = 1;
    let post = 1;
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if(pre === 0) pre = 1;
        if(post === 0) post = 1;

        pre = pre * nums[i];
        post = post * nums[len - i - 1];

        result = Math.max(result, Math.max(pre, post));
    }
    return result
};
