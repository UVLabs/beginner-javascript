const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/200';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// document.body.appendChild(myParagraph);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');

heading.textContent = 'Cool things';

// myDiv.appendChild(heading);
myDiv.insertAdjacentElement('afterbegin', heading);

const list = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');

li1.textContent = 'One';
li2.textContent = 'Two';
li3.textContent = 'Three';
li4.textContent = 'Four';

const arr = [li1, li2, li3, li4];

arr.forEach((arrr, i) => {
  // list.appendChild(arrr);
  list.insertAdjacentElement('beforeend', arrr);
  console.log(i);
});

document.body.insertAdjacentElement('afterbegin', list);

const li5 = li4.cloneNode(true);

document.body.insertAdjacentElement('afterbegin', li5);
