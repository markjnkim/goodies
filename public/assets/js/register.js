const $registerForm = document.querySelector('#register-form');

const handleRegisterFormSubmit = event => {
  event.preventDefault();

  const formData = new FormData($registerForm);

  fetch('/register', {
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
    })
    .then(postResponse => {
      console.log(postResponse);
    });
};

$registerForm.addEventListener('submit', handleRegisterFormSubmit);