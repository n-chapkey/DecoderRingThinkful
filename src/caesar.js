// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    let finalMessage = "";
    input = input.toLowerCase();
    const charArray = [...input];
    
    //erro-checking shift amounts
    if (shift === 0 || shift > 25 || shift < -25) return false;

    //encoding or decoding?
    encode ? finalMessage = caesarEncode(charArray, shift) : finalMessage = caesarEncode(charArray, -shift);
    return finalMessage;

  }

  function caesarEncode(input, shift) {



    let charArrayEncoded = input.map(char => {
      
      //handling spaces and special characters
      if (char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122) return char; 
      
      encodedChar = String.fromCharCode(char.charCodeAt(0) + shift);
      
      //handling going past z in the alphabet
      if (encodedChar.charCodeAt(0) > 122) return String.fromCharCode(encodedChar.charCodeAt(0) - 26);
      
      //handling going before a in the alphabet
      if (encodedChar.charCodeAt(0) < 97) return String.fromCharCode(encodedChar.charCodeAt(0) + 26);


      return encodedChar;
    })
    return charArrayEncoded.join("");
  }


  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
