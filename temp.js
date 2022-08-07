let first = 5;
let second = 7;
console.log(first, second);

// This is wrong approach
// first = second;
// second = first;

// approach:1
// const temp = first;
// first = second;
// second = temp;

// approach: 2 ----Destructing
[first, second] = [second, first];
console.log(first, second);