// write characterPosition function
function characterPositioning(str) {
  str = str.toLowerCase().split(" ").join("");
  var count = { };
  // count individual characters in string
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    // Add conditional statement whether if it is the first occurence
    if (count[letter]) {
        count[letter].push(i);
    } else {
      count[letter] = [i];
    }
  }
  // show character and its positioning results
  return count;
}
console.log(characterPositioning("lighthouse in the house"));