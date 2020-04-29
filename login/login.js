const id_input = document.querySelector(".id-input");
const password_input = document.querySelector(".password-input");
const login_btn = document.querySelector(".login-btn");

function handleId(e) {
  if (id_input.value !== "" && password_input.value !== "") {
    login_btn.classList.add("activeBtn");
  } else {
    login_btn.classList.remove("activeBtn");
  }
}

id_input.addEventListener("keydown", handleId);
password_input.addEventListener("keydown", handleId);
