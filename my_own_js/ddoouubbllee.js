// write a function that takes in a string and returns a new string with every
// character doubled  =>  'what's up dude!' => 'wwhhaatt''ss  uupp  dduuddee!!'
function doubleChar(str) {
  var newStr = [];
  str = str.split('');
  str2 = str;

    for (var i = 0; i < str.length; i++) {
        newStr.splice(i + 1 , 0, str[i] + str2[i]);
    }
  newStr = newStr.join('');
  return newStr;
}
doubleChar('whats_up_dude!');


//OPTION #2
function doubleChar(str) {
  var word = '';
  for (var i = 0; i < str.length; i++){
    word = word + str[i] + str[i];
  }
  return word;
}
doubleChar('whats_up_dude!');



//OPTION #3
function doubleChar(str) {
    return str.split('').map(function(s){
        return s+s;
    }).join('');
}
doubleChar('whats_up_dude!');
