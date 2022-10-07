/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

// Your code here

function recVolume(height) {
  let h = height;
  let length = 0;
  let width = 0;

  function getVolume(value) {
    if (length === 0) {
      length = value;
      console.log("length is " + length)
      return getVolume
    }
    else {
      width = value;
      console.log(width)
      console.log(h);
      return length * h * width;
    }
  }
  return getVolume
}

let a = recVolume(4);
console.log(a(3));
console.log(a(2));
console.log('test')


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
