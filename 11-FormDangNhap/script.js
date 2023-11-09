// Filename: script.js
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const greetMsg = document.querySelector(".greet-msg");

loginBtn.addEventListener("click", () => {
  if (userName.value === "") {
    greetMsg.innerHTML = "Vui lòng nhập tên người dùng";
  } else {
    greetMsg.innerHTML = `Chào bạn <b><em>${userName.value}</em></b>`;
  }
});
