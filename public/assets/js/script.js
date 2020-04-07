const $loginForm = document.querySelector('#login-form');
const $errorPassword = document.querySelector('#error-password');

const handleLoginFormSubmit = event => {
  event.preventDefault();

  const formData = new FormData($loginForm);

  fetch('/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      $errorPassword = 'Wrong password, try again';
    })
    .then(postResponse => {
      console.log(postResponse);
    });
};

$loginForm.addEventListener('submit', handleLoginFormSubmit);

