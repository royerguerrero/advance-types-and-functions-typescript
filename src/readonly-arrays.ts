const numbers: ReadonlyArray<number> = [12, 3, 4];
// fail: numbers.push(1);
// fail: numbers.pop();
// fail: numbers.unshift(2);
numbers.filter(() => {})
numbers.reduce(() => 0)
numbers.map(() => 0)
