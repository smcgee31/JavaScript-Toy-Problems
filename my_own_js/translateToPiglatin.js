// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant 
// cluster) of an English word, moves it to the end of 
// the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.


function translatePigLatin(str) {
  if ((/^[aeiouAEIOU]/).test(str[0])) {
    return `${ str }way`;
  }

  

  console.log(str);
  return str;
}

translatePigLatin("consonant");
translatePigLatin("algorithm");