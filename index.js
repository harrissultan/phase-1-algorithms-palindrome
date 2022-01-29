function isPalindrome(word) {
  // Write your algorithm here
  let a = 0;
  let b =0;
  for(a;a<word.length;a++){
    b=word.length - 1;
    if(word[a]===word[b]){
      return true;
    }else return false;
  }

}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
