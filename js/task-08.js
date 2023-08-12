const formEl = document.querySelector(".login-form");

const submitHandler = (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const info = {
    email: email.value,
    password: password.value,
  };

  if (info.email === "" || info.password === "") {
    alert("All fileld should be filled");
  } else {
    console.log(info);
    email.value = "";
    password.value = "";
  }
};

formEl.addEventListener("submit", submitHandler);
