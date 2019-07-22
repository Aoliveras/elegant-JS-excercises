const arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(arrays.reduce((acc, current) => acc.concat(current), []));
// → [1, 2, 3, 4, 5, 6]
