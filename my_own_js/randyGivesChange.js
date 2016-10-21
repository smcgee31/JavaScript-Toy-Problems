// The new "Avengers" movie has just been released! There are a lot of people at the 
// cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 
// dollars bill. A "Avengers" ticket costs 25 dollars.

// Randy is currently working as a clerk. He wants to sell a ticket to every single person 
// in this line. Can Randy sell a ticket to each person and give the change if he initially 
// has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Randy can sell a ticket to each person and give the change. Otherwise return NO.
// example 2:
// tickets([25, 25, 50, 50])  returns "YES"
// tickets([25, 100])  returns "NO"


// Solution #1 - mine
function tickets(peopleInLine){
  // you have to keep track of the change Randy has after each sale
  // and upon each sale if % = 0 then no change needed, move on...
  // but if change is needed does Randy's change % 25 = 0 then move on
  // otherwise he cannot give the correct amount of change.

  var ticket = 25;
  var change = 0;
 
  for (var i = 0; i < peopleInLine.length; i++) {
	if (peopleInLine[i] > ticket) {
		peopleInLine[i] - ticket 
	}
  }

}