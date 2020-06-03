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

function handleBuyButtonClick(event) {
  const button = event.target;
  console.log('You clicked a button');
  // console.log('You are buying it');
  // console.log(parseFloat(event.target.dataset.price));
  // console.log(button.textContent);

  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.currentTarget === event.target);

  // console.log(event);
  // console.log(event.target);

  // stop this event from bubbling up

  // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function(event) {
    console.log('You clicked the window');
    console.log(event.target);
    console.log(event.type);
    // event.stopPropagation();
    console.log(event.bubbles);
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function(event) {
  console.log(event.currentTarget);
  console.log(this);
});
