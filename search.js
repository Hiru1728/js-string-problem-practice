const lyrics = "search the word of the Sentence which is so importent for clint";
const searchString = 'sentence'
// const doesExist = lyrics.includes('sentence');
// const doesExist = lyrics.includes('Sentence');
const lyricsLowerCase = lyrics.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchString);
// const searchStringLower = searchString.toLowerCase();
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);

// ---------------------------
// indexOf

console.log(lyrics.indexOf('of'));
console.log(lyrics.indexOf('search'));

if (lyrics.indexOf('search') !== -1) {
    console.log('exists inside the string');
}
else {
    console.log('can not find it');
}

// startWith
console.log(lyrics.startsWith('search'));

// endWith

const fileName = 'mybiodata.pdf';
const otherFileName = 'mypic.pdf';

console.log(fileName.endsWith('.pdf'));