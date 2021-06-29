


function atbash(text) {

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const alphabetUpper = alphabet.map(char => char.toUpperCase());
  const reverseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].reverse()
  const reverseAlphabetUpper = reverseAlphabet.map(char => char.toUpperCase());

  return text.split('')
    .map(char => {
      if (char == char.toLowerCase()) {
        if (char == ' ') {
          return ' ';
        }
        const index = alphabet.findIndex(letter => letter === char);
        return reverseAlphabet[index];
      }
      if (char == char.toUpperCase()) {
        if (char == ' ') {
          return ' ';
        }
        const index = alphabetUpper.findIndex(letter => letter === char);
        return reverseAlphabetUpper[index];
      }
    }).join('');
}
