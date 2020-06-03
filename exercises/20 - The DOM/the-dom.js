// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// const imgs = document.querySelectorAll('.item img');
// const heading = document.querySelector('h2');
// console.log(heading.textContent);
// console.log(heading.innerText);
// // set the content property on that element
// // heading.textContent = 'Uriahs is cool';
// // console.log(heading.textContent);
// // console.log(heading.innerText);
// // console.log(p);
// // console.log(divs);
// // console.log(imgs);
//
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);
//
// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
//
// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;
//
// // pizzaList.insertAdjacentText('beforebegin', '🍕');
// pizzaList.insertAdjacentText('afterbegin', '🍕');
// // pizzaList.insertAdjacentText('beforeend', '🍕');

const pic = document.querySelector('.nice');
// pic.classList.add('open');
// pic.classList.remove('cool');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute pup';

console.log(pic.alt);
console.log(pic.naturalWidth);

pic.addEventListener('load', function() {
  console.log(pic.naturalWidth);
});

pic.setAttribute('alt', 'really cute pup');
console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
