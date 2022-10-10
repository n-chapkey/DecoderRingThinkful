// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here

    //creating polybiusSquare to work like the example
    let finalMessage = "";
    let polybiusSquare = [
      [],
      [0, 'a', 'f', 'l', 'q', 'v'],
      [0, 'b', 'g', 'm', 'r', 'w'],
      [0, 'c', 'h', 'n', 's', 'x'],
      [0, 'd', 'ij', 'o', 't', 'y'],
      [0, 'e', 'k', 'p', 'u', 'z'],
    ]
    input = input.toLowerCase();
    const charArray = [...input];
    
    //encoding or decoding?
    if (encode) {
      finalMessage = polybiusEncode(charArray, polybiusSquare)
    } else {
      if (input.replace(/ /g, "").length % 2 !== 0) return false;
      finalMessage = polybiusDecode(charArray, polybiusSquare);
    }
    return finalMessage;
  }

  function polybiusEncode(input, codeMap) {
    let encodedMessage = input.map(char => {
      //Special characters (in this case just space);
      if (char.charCodeAt(0) === 32) return char;

      for (let i = 1; i < codeMap.length; i++) {
        for (let j = 1; j < codeMap[1].length; j++) {
          if (char === 'i' || char === 'j') {
            return "42"
          }
          else if (codeMap[i][j] === char) {
            return "" + i + j;
          }
        }
      }

    });

    return encodedMessage.join("");
  }

  //"23513434112251";
  function polybiusDecode(input, codeMap) {



    let decodedMessage = ""
    for (let i = 0; i < input.length; i = i + 2) {
      if (input[i] === " ") {//space handling
        decodedMessage = decodedMessage + " ";
        i = i - 1;
      } else {
        decodedMessage = decodedMessage + codeMap[parseInt(input[i])][parseInt(input[i + 1])];
      }
    }


    return decodedMessage;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
