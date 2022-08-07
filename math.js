const result = Math.pow(3, 8);
console.log(result);

const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
console.log(gap);
if (gap < 5) {
    console.log('You guys can be friend');
}
else {
    console.log('You guys stay apart');
}

// ----------------
// 
// ----------------
const number = 2.4593458;
const fullNumber = Math.round(number);
// console.log(fullNumber);
const result2 = Math.ceil(2.09823);
const result3 = Math.floor(2.09823);
console.log(result2);
console.log(result3);

// ----------
// 
// ----------
// Random
// console.log(Math.random());
for (var i = 0; i < 20; i++) {
    const random = Math.round(Math.random() * 100);
    console.log(random);
}
// const random = Math.round(Math.random() * 100);
// console.log(random);