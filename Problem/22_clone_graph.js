/*
https://leetcode.com/problems/clone-graph/submissions/1669860100/

*/


function dfs(current, visited) {
    if (visited.has(current)) {
        return visited.get(current);
    }

    const clonedNode = new Node(current.val);
    visited.set(current, clonedNode);

    for (let neighbor of current.neighbors) {
        clonedNode.neighbors.push(dfs(neighbor, visited));
    }

    return clonedNode;
}

var cloneGraph = function (node) {
    if (!node) return null;
    const visited = new Map();
    return dfs(node, visited);
};
