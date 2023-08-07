let array = ['n', 2, '&', 'a', 'l', 9, '$', 'q', 47, 'i', 'a', 'j', 'b', 'z', '%', 8];
console.log(array);

let reverse = [];

const specialAndPositions = array
  .map((data, index) => ({ data, index }))
  .filter(e => !e.data.toString().match(/[a-zA-Z0-9]/));
  //console.log(specialAndPositions);
  
const specialCharacters = specialAndPositions.map(item => item.data);
//console.log(specialCharacters)
  
const alphanumeric = array.filter((char) => char.toString().match(/[a-zA-Z0-9]/));
let alphanumericReverse = alphanumeric.reverse()
//console.log(alphanumericReverse)

let alphaIndex = 0;
for(let i = 0; i < array.length; i++) {
    let special = specialAndPositions.find(item => item.index === i);
    if (special) {
        reverse.push(special.data);
    } else {
        reverse.push(alphanumericReverse[alphaIndex]);
        alphaIndex++;
    }
}
console.log(reverse);