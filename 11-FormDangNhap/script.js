// Filename: script.js
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const greetMsg = document.querySelector(".greet-msg");

loginBtn.addEventListener("click", () => {
  if (password.value === "" && userName.value === "") {
    greetMsg.innerHTML = "Vui lòng nhập thông tin đăng nhập";
  } else if (userName.value === "") {
    greetMsg.innerHTML = "Vui lòng nhập tên người dùng";
  } else if (password.value === "") {
    greetMsg.innerHTML = "Vui lòng nhập mật khẩu";
  } else {
    greetMsg.innerHTML = `Chào bạn <b><em>${userName.value}</em></b>`;
  }
});
