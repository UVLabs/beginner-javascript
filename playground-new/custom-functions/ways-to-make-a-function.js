// function doctorize(firstName){
//   return `Dr. ${firstName}`;
// }

// Anon function
// function (firstName){
//   return `Dr. ${firstName}`;
// }

// Function expression
// const doctorize = function (firstName){
//   return `Dr. ${firstName}`;
// }

// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

// const inchToCM = function(inches) {
//   return inches * 2.54;
// };

/* eslint-disable-next-line */
// const inchToCM = (inches) => inches * 2.54;
const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }
const add = (a, b = 3) => a + b;

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//
//   return baby;
// }

// const makeABaby = (first, last) =>  ({ name: `${first} ${last}`, age: 0, });

// IIFE
// Immediately invoked function expression

(function(age) {
  // console.log('Running the Anon function');
  return `You are cool ${age}`;
})(10);

// Methods !!!

/* eslint-disable*/
const wes = {
  name: 'Wes Bos',
  // Method!
  sayHi: function(){
    console.log('Hey Wes');
    return 'Hey Wes';
  },
  // Short hand method
  yellHi(){
    console.log('HEY WESSSS');
  },
  // Arrow Function
  wisperHi: (name) => {
    console.log(`hii ${name} im a mouse`);
    // console.log('hii wesss im a mouse');
  }
}
/* eslint-enable */

// Callback functions
// Click callback
const button = document.querySelector('.click-me');
// console.log(button);

function handleClick() {
  console.log('Great Clicking!!');
}

// button.addEventListener('click', handleClick);

button.addEventListener('click', function() {
  console.log('Nice Job!!!');
});

// Timer Callback

// setTimeout(wes.yellHi, 1000);
// setTimeout(function() {
//   console.log('Time to eat!!');
// }, 1000);
setTimeout(() => {
  console.log('Time to eat!!');
}, 1000);
