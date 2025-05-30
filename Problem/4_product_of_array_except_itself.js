/*

https://leetcode.com/problems/product-of-array-except-self/description/

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

//way 1
var productExceptSelf_1 = function (nums) {
    let pre = [];
    let post = [];
    let output = [];

    pre[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        pre[i] = nums[i - 1] * pre[i - 1]
    }
   
    post[nums.length - 1] = 1
    for (i = nums.length - 2; i > -1; i--) {
        post[i] = post[i + 1] * nums[i + 1]
    }
    
    for (let i = 0; i < nums.length; i++) {
        output[i] = pre[i] * post[i]
    }
    return output;
};

//way 2
var productExceptSelf_2 = function (nums) {
    let pre = 1;
    let post = 1;
    let output = [];

    for (let i = 0; i < nums.length; i++) {
        output[i] = pre;
        pre = nums[i] * pre
    }
   
    for (i = nums.length - 1; i > -1; i--) {
        output[i] = post * output[i];
        post = nums[i] * post
    }
    
    return output;
};
