const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onBtnSubmit);

function onBtnSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const submitFormData = {
    email: email.value,
    password: password.value,
  };

  console.log(submitFormData);
  event.currentTarget.reset();
}
