console.log('it works');

const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  // console.log(event);
  // event.preventDefault();
  console.log('YOU CLICKED IT');
  const shouldChangePage = confirm(
    'This website might be malicious, do you wish to proceed'
  );

  if (!shouldChangePage) {
    event.preventDefault();
  }
  // if (shouldChangePage) {
  //   window.location = event.currentTarget.href;
  // }
  console.log(shouldChangePage);
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
  // console.log(event)
  // console.dir(event.currentTarget);
  // console.log(event.currentTarget.name.value);
  // console.log(event.currentTarget.email.value);
  // console.log(event.currentTarget.agree.checked);
  const name = event.currentTarget.name.value;
  // console.log(name);
  if (name.includes('chad')) {
    alert('Sorry bro');
    event.preventDefault();
  }
});

console.log(signupForm.name);

function logEvent() {
  console.log(event.type);

  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
