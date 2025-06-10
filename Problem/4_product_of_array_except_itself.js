/*

https://leetcode.com/problems/product-of-array-except-self/description/

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

//Way 1 : O(n²) - for each element, multiply all others
var productExceptSelf_1 = function (nums) {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                product *= nums[j];
            }
        }
        result[i] = product;
    }
    
    return result;
}

//way 2 - O(n) - three separate passes
// space - O(n) - two extra arrays
var productExceptSelf_2 = function (nums) {
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

//way 3 - O(n) - two passes through array
//Space Complexity: O(1) - no extra arrays (output doesn't count)
var productExceptSelf_3 = function (nums) {
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
