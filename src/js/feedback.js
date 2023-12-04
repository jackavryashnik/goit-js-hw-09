const form = document.querySelector('.feedback-form');

function uploadStorageData() {
  if (localStorage.getItem('feedback-form-state')) {
    const obj = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (obj.email) form.email.value = obj.email;
    if (obj.message) form.message.value = obj.message;
  }
}

uploadStorageData();

form.addEventListener('input', updateInputData);

function updateInputData() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    })
  );

  const obj = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (obj.email === undefined) {
    obj.delete(email);
  }
  if (obj.message === undefined) {
    obj.delete(message);
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const obj = JSON.parse(localStorage.getItem('feedback-form-state'));

  form.reset();
  console.log({ email: obj.email, message: obj.message });
  localStorage.clear();
});
