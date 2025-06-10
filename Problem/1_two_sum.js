/*
https://leetcode.com/problems/two-sum/description/

//test cases 1
let nums = [2,7,11,15];
let target = 9;

//test cases 2
let nums = [3,2,4]
let target = 6;

//test cases 3
let nums = [3,3]
let target = 6;
*/

// way 1 - use 2 nested loops to findout the indexes, here the complexity will be O(n^2)

// way 2 - using map - O(n)
var twoSum = function (nums, target) {
    let resObj = {};
    let output = []

    for (let index = 0; index < nums.length; index++) {
        let currNumber = nums[index];
        let reqNumber = target - currNumber;
        if (resObj[reqNumber] != undefined && resObj[reqNumber] != index) {
            second = resObj[reqNumber];
            first = index;
            output.push([first, second])
            break;
        } else {
            resObj[currNumber] = index
        }
    }
    return output[0]
}

// way 3 - Two Pointers (Sorted Array) - O(n log n) 
var twoSum = function (nums, target) {
    // Create array of [value, original_index] pairs
    const indexedNums = nums.map((num, index) => [num, index]);
    indexedNums.sort((a, b) => a[0] - b[0]); // Sort by value
    
    let left = 0;
    let right = indexedNums.length - 1;
    
    while (left < right) {
        const currentSum = indexedNums[left][0] + indexedNums[right][0];
        
        if (currentSum === target) {
            return [indexedNums[left][1], indexedNums[right][1]];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [];
}
