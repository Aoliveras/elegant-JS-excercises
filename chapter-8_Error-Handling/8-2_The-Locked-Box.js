const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!');
    return this._content;
  },
};

function withBoxUnlocked(body) {
  // Your code here.
  if (box.locked === false) {
    try {
      body();
    } catch (err) {
      console.log(err.message);
    }
  } else {
    try {
      box.unlock();
      body();
    } catch (err) {
      console.log(err.message);
    } finally {
      box.lock();
    }
  }
}

withBoxUnlocked(function() {
  box.content.push('gold piece');
});

try {
  withBoxUnlocked(function() {
    throw new Error('Pirates on the horizon! Abort!');
  });
} catch (e) {
  console.log(`Error raised: ${e}`);
}
console.log(box.locked);
// → true

console.log(box);
