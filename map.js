var words = ["ground", "control", "to", "major", "tom"];
function map(wordArray, fn) {
  var newWordArray = [];
  for (var word of wordArray) {
    newWordArray.push(fn(word));
  }
  // for (var i =0; i < wordArray.length; ++i) {
  //   newWordArray.push(fn(wordArray[i]));
  // }
  return newWordArray;
}
console.log(map(words, function(word) {
  return word.length;
}));
console.log(map(words, function(word) {
  return word.toUpperCase();
}));
console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));
