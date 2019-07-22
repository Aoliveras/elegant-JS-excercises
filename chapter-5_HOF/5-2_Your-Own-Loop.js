// Your code here.
const loop = (value, test, update, body) => {
  for (let i = value; i > 0; i--) {
    if (!test) return;
    body(i);
    update(i);
  }
};

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
