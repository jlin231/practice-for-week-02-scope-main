/***********************************************************************
Write a function named `funcTimer(time, func)` that will allow you to hand
in a function and a number representing milliseconds. The `funcTimer` should use
the global.setTimeout function to invoke the passed in function in `time` amount
of seconds.

There are no specs for this problem - try it in the console yourself to
test your answer!

Examples:

function partyFunc () {
  console.log("Party time!")
}

funcTimer(5000, partyFunc); // in 5 seconds prints: "Party time!"


***********************************************************************/

function funcTimer(time, func) {
  console.log(time)
  global.setTimeout(func, time)
  return
}

function partyFunc() {
  console.log("Party time!")
}
console.log(funcTimer(5000, partyFunc))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  sandwich("spinach") // => "One sandwich with tomato and spinach"
  sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
  sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"
  module.exports = funcTimer;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
