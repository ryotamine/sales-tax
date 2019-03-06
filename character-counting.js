// write countLetters function
function countLetters(str) {
  str = str.toLowerCase().split(" ").join("");
  var count = { };

  // count individual characters in string
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    // return unique characters in string
    count[letter] = (count[letter] || 0) + 1;
  }
  // show character and its count results
  return count;
}

console.log(countLetters("lighthouse in the house"));