// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

// Examples:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

const num = 274;

// Solution #1 - mine
const dashatize = (num) => {
  if (isNaN(num)) {
      return 'NaN';
  }
  num = Math.abs(num);
  let arr = num.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1) {                         // if the num is only a single digit simply return it
      return arr.toString();
    }
    if (i !== 0) {                                  // if it isn't the first one
      if (arr[i] % 2 !== 0) {                         // and if the num is odd then -num
        arr[i] = '-' + arr[i];
      }                                    
      if (arr[i] % 2 === 0 && arr[i-1] % 2 !== 0) {   // and if the num is even AND the one before it was odd then -num
        arr[i] = '-' + arr[i];
      }
    }
  }
  return arr.join('');
};


// Solution #2 - mine refactored a little
const dashatize = (num) => {
  if (isNaN(num)) {
      return 'NaN';
  }
  num = Math.abs(num);
  let arr = num.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1) {                         // if the num is only a single digit simply return it
      return arr.toString();
    }
    if (i !== 0) {                                  // if it isn't the first one
      if (arr[i] % 2 !== 0) {                         // and if the num is odd then -num
        arr[i] = '-' + arr[i];
      }                                    
      if (arr[i] % 2 === 0 && arr[i-1] % 2 !== 0) {   // and if the num is even AND the one before it was odd then -num
        arr[i] = '-' + arr[i];
      }
    }
  }
  return arr.join('');
};



// Solution #3 - using regex but seems quite readable - and after understanding it I love it!
function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")    // if its an odd number add dash before and after
    .replace(/--+/g, "-")             // if there are double dashes then replace with a single dash
    .replace(/(^-|-$)/g, "")          // if the string starts or ends with a dash remove it
}


// Solution #4 - there will always be a dash between numbers unless there is more than one even number
function dashatize(num) {
  return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
};