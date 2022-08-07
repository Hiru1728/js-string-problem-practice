const lyrics = "search the word of the Sentence. which is so importent for clint.";
const separate = lyrics.split(' ');
// console.log(separate);
const separate1 = lyrics.split('.');
// console.log(separate1);
const separate2 = lyrics.split('');
// console.log(separate2);

const pice = lyrics.slice(5, 8);
// console.log(pice);

const subPice = lyrics.substring(5, 8);
console.log(subPice);

// concatanation
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2));

const newLines = [
    'search the word of the Sentence',
    'which is so importent for clint'
];
const newSentence = newLines.join(': ');
console.log(newSentence);