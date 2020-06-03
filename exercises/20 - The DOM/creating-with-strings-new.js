// const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute pup`;
const myHTML = `
<div class="wrapper">
<h2>Cute ${desc}</h2>
<img src="${src}" alt="${desc}" />
</div>
`;

// item.innerHTML = `
// <div>
// <h1>Hi URIAHS</h1>
// </div>
// `;
// console.log(typeof myHTML);
// item.innerHTML = myHTML;
//
// const itemImage = document.querySelector('.wrapper img');
// // console.log(item.innerHTML);
// console.log(itemImage);
//
// itemImage.classList.add('round');

// Turn a string into a dom element

const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);

console.log(myFragment);
console.log(myFragment.querySelector('img'));
