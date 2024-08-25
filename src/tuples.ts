// Arrays. Unlimited elements
const prices: (number | string)[] = [1, 2, 3, 4, 4];
prices.push('hello');

// Tuples. Limited elements (`useState` in React use it)
const user: [string, number] = ['royjuni', 231];

// Destructuration
const [username, id] = user;
console.log(username, id)
