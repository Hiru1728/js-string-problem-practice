function reverseString(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        let element = text[i];
        reversed = reversed + element;
        // console.log(element);
    }
    return reversed;
}

const myString = 'I am a Good Person';
const reverse = reverseString(myString);
console.log(reverse);