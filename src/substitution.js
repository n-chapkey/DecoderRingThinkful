// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    
    //ERROR CHECKING
      //check if alphabet does not exist
    if (alphabet === undefined 
      //check if alphabet is exactly 26 characters
      || alphabet.length !== 26 
      //check if alphabet contains only unique characters
      || new Set(alphabet).size !== alphabet.length){ 
      return false;
    }
    input = input.toLowerCase();
    const inputCharArray = [...input];
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const standardAlphabetArray = [...standardAlphabet];
    const subAlphabetArray = [...alphabet];
  
    //encoding or decoding?
    const finalMessage = encode ? substitutionEncode(inputCharArray,subAlphabetArray, standardAlphabetArray)
      : substitutionEncode(inputCharArray, standardAlphabetArray , subAlphabetArray);
    return finalMessage;
  }

  function substitutionEncode(input, subAlphabet, baseAlphabet) {
    let encodedMessage = input.map(char => {
      if (char.charCodeAt(0) === 32) return char;
      
      let charIndex = -1;
      for (let i = 0; i < subAlphabet.length; i++){
        if (char === baseAlphabet[i]) {
          charIndex = i;
          break;
        }
      }
      return subAlphabet[charIndex];
    });
    return encodedMessage.join("");
  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
