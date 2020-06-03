console.log('it works');
const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('it got clicked');
}

const hooray = () => console.log('hoorayyy');
//
// butts.addEventListener('click', function() {
//   console.log('it got clicked');
// });

butts.addEventListener('click', handleClick);
// coolButton.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

// listen on multiple items

const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
  console.log('BUYING ITEM');
}

// buyButtons.addEventListener('click', buyItem);

console.log(buyButtons);
console.dir(butts);

function attachBuyListener(buyButton) {
  console.log('Binding the buy button');
  buyButton.addEventListener('click', buyItem);
}

// buyButtons.forEach(function(buyButton) {
//   console.log('Binding The buy button');
//   buyButton.addEventListener('click', buyItem);
// });
// buyButtons.forEach(attachBuyListener);

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('YOU CLICKED IT!');
  });
});
