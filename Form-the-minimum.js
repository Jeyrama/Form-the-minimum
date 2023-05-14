/*
Given a list of digits, return the smallest number that 
could be formed from these digits, using the digits only once.
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

Example:
  minValue ({1, 3, 1})  ==> return (13)
*/


// Solution

function minValue(values) {
  let arr = Array.from(new Set(values))
  return parseInt(arr.sort().join(''))
}

// or

function minValue(values) {
  const n = values
    .filter((e, i, arr) => arr.indexOf(e) === i)
    .sort()
    .join('');
  return Number(n);
}