console.log('IT WORKS!');

const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;

    // stop observe
    ob.unobserve(terms.lastElementChild);
    console.log(payload[0].isIntersecting);
  }
  // console.log(payload[0].isIntersecting);
}

const ob = new IntersectionObserver(obCallback, { root: terms, threshold: 1 });

ob.observe(terms.lastElementChild);

/* terms.addEventListener('scroll', function(e) {
  // console.log(e);
  console.log(e.currentTarget.scrollTop);
  console.dir(e.currentTarget.scrollHeight);
}); */
