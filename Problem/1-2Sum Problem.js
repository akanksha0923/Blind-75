//test cases 1
let nums = [2,7,11,15];
let target = 9;

//test cases 2
// let nums = [3,2,4]
// let target = 6;

//test cases 3
// let nums = [3,3]
// let target = 6;

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

console.log(twoSum(nums, target))
