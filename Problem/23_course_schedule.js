/*
  https://leetcode.com/problems/course-schedule/description/
  - Cycle Detection in a Directed Graph
  - If there's a cycle in the prerequisites graph, you can't finish all courses.
*/



var canFinish = function (numCourses, prerequisites) {
    const adj = new Map();
    const indegree = new Array(numCourses).fill(0);

    for (let [course, prereq] of prerequisites) {
        if (!adj.has(prereq)) adj.set(prereq, []);
        adj.get(prereq).push(course);
        indegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    let completed = 0;

    while (queue.length > 0) {
        const current = queue.shift();
        completed++;

        for (let neighbor of (adj.get(current) || [])) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    return completed === numCourses;
};
