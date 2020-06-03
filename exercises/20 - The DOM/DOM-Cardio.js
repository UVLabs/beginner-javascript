console.log('it works');

// Make a div

const div = document.createElement('div');

// add a class of wrapper to it

div.setAttribute('class', 'wrapper');
// div.classList.add('wrapper');

// put it into the body

document.body.appendChild(div);

// make an unordered list

const ul = document.createElement('ul');

// add three list items with the words "one, two three" in them

const li1 = document.createElement('li');
li1.textContent = 'One';
const li2 = document.createElement('li');
li2.textContent = 'Two';
const li3 = document.createElement('li');
li3.textContent = 'Three';

ul.insertAdjacentElement('beforeend', li1);
ul.insertAdjacentElement('beforeend', li2);
ul.insertAdjacentElement('beforeend', li3);

// put that list into the above wrapper

div.appendChild(ul);
// const wrapper = document.querySelector('.wrapper');
// wrapper.appendChild(ul);
// wrapper.insertAdjacentElement('afterbegin', ul);

// create an image

const img = document.createElement('img');

// set the source to an image

img.setAttribute('src', 'https://picsum.photos/500/500');

// set the width to 250

img.style.width = '250px';
// add a class of cute

img.classList.add('cute');

// add an alt of Cute Puppy

img.setAttribute('alt', 'Cute Puppy');

// Append that image to the wrapper

const wrapper = document.querySelector('.wrapper');

wrapper.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it

const html = `

<div class="myDiv">
<p>Paragragh 1</p>
<p>Paragragh 2</p>
</div>
`;

// put this div before the unordered list from above

const htmlEl = document.createRange().createContextualFragment(html);
div.prepend(htmlEl);
// div.insertAdjacentElement('afterbegin', htmlEl);
// div.insertAdjacentHTML('afterbegin', htmlEl);

// div.insertAdjacentHTML('afterbegin', html);

// add a class to the second paragraph called warning

const innerDiv = wrapper.querySelector('div');
const innerDiv2 = div.querySelector('.myDiv');

const secondpar = innerDiv.lastElementChild;
secondpar.classList.add('warning');

// remove the first paragraph

const firstpar = innerDiv.firstElementChild;

firstpar.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name = 'Tom', age = '21', height = '20') {
  const card = `
<div class="playerCard">
  <h2>${name} — ${age}</h2>
  <p>
  Their height is ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!
  </p>
  <button class="delete" type="button">Delete</button>
</div>
`;
  return card;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// Have that function make 4 cards

let cardsHTML = generatePlayerCard('wes', 12, 150);

cardsHTML += generatePlayerCard('ies', 12, 150);
cardsHTML += generatePlayerCard('kais', 14, 250);
cardsHTML += generatePlayerCard('jaes', 12, 166);

cardDiv.innerHTML = cardsHTML;

const card1 = generatePlayerCard();
const card2 = generatePlayerCard();
const card3 = generatePlayerCard();
const card4 = generatePlayerCard();

// append those cards to the div

const card1_frag = document.createRange().createContextualFragment(card1);
const card2_frag = document.createRange().createContextualFragment(card2);
const card3_frag = document.createRange().createContextualFragment(card3);
const card4_frag = document.createRange().createContextualFragment(card4);

cardDiv.appendChild(card1_frag);
cardDiv.appendChild(card2_frag);
cardDiv.appendChild(card3_frag);
cardDiv.appendChild(card4_frag);

// put the div into the DOM just before the wrapper element

div.insertAdjacentElement('beforebegin', cardDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!

const buttons = document.querySelectorAll('.delete');
// make out delete function

function delete_card(event) {
  const buttonclicked = event.currentTarget;
  // buttonclicked.parentElement.remove();
  buttonclicked.closest('.playerCard').remove();
}

// loop over them and attach a listener

buttons.forEach(button => button.addEventListener('click', delete_card));
