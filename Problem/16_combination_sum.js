/*
  https://leetcode.com/problems/combination-sum/description/
  Input: candidates = [2,3,6,7], target = 7
  Output: [[2,2,3],[7]]
  Explanation:
  2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
  7 is a candidate, and 7 = 7.
  These are the only two combinations.
*/

// O(n ^ t) n:number of candidates, t: target
var combinationSum = function (candidates, target) {
    const result = [];

    function backtrack(startIndex, currentPath, remainingTarget) {
        if (remainingTarget === 0) {
            result.push([...currentPath]);
            return;
        }
        if (remainingTarget < 0) return;
        for (let i = startIndex; i < candidates.length; i++) {
            currentPath.push(candidates[i]);
            backtrack(i, currentPath, remainingTarget - candidates[i]);
            currentPath.pop();
        }
    }
    backtrack(0, [], target);
    return result;
}

// way 1.2 - faster
function backtrack(startIndex, currentPath, remainingTarget, candidates, result) {
    if (remainingTarget === 0) {
        result.push([...currentPath]);
        return;
    }
    if (remainingTarget < 0) return;
    for (let i = startIndex; i < candidates.length; i++) {
        currentPath.push(candidates[i]);
        backtrack(i, currentPath, remainingTarget - candidates[i], candidates, result);
        currentPath.pop();
    }
}

var combinationSum = function (candidates, target) {
    const result = [];
    backtrack(0, [], target, candidates, result);
    return result;
}



// way 2
// O(n ^ t) n:number of candidates, t: target
function backtrack(target, result, combination, start, candidates) {
    if (target === 0) {
        result.push([...combination]);
        return;
    }
    else if (target < 0) return;
    for (let i = start; i < candidates.length; i++) {
        combination.push(candidates[i]);
        backtrack(target - candidates[i], result, combination, i, candidates);
        combination.pop();
    }
}
var combinationSum = function (candidates, target) {
    const result = [];
    const combination = [];
    backtrack(target, result, combination, 0, candidates);
    return result;
}













