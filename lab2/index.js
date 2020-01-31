//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const arrayU = require("./arrayUtils.js");
const stringU = require("./stringUtils.js");
const objU = require("./objUtils.js");

// capitalize Tests
try {
   // Should Pass
   const capitalizeOne = stringU.capitalize("nICE DUDE");
   console.log('Capitalize passed successfully');
} catch (e) {
   console.error('Capitalize failed test case');
}
try {
   // Should Fail
   const capitalizeTwo = stringU.capitalize(1);
   console.error('Capitalize did not error');
} catch (e) {
   console.log('Capitalize failed successfully');
}

// range Tests
try {
   // Should Pass
   const rangeOne = arrayU.range(10);
   console.log('Range passed successfully');
} catch (e) {
   console.error('Range failed test case');
}
try {
   // Should Fail
   const rangeTwo = arrayU.range(-1);
   console.error('Range did not error');
} catch (e) {
   console.log('Range failed successfully');
}

// countChars Tests
try {
   // Should Pass
   const countCharsOne = stringU.countChars("The quick brown fox jumped over the lazy dog.");
   console.log('countChars passed successfully');
} catch (e) {
   console.error('countChars failed test case');
}
try {
   // Should Fail
   const countCharsOne = stringU.countChars(1);
   console.error('countChars did not error');
} catch (e) {
   console.log('countChars failed successfully');
}

// Last Tests
try {
   // Should Pass
   const lastOne = arrayU.last([2, 3, 4]);
   console.log('Last passed successfully');
} catch (e) {
   console.error('Last failed test case');
}
try {
   // Should Fail
   const lastTwo = arrayU.last("yo");
   console.error('Last did not error');
} catch (e) {
   console.log('Last failed successfully');
}