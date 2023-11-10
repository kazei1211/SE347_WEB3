// Filename: script.js
const confirmButton = document.querySelector(".confirm");
const cancelButton = document.querySelector(".cancel");
const userName = document.querySelector(".user-name");
const address = document.querySelector(".address");
const email = document.querySelector(".email");
const phoneNumber = document.querySelector(".phone-number");

const participant = document.querySelector(".participant");
const product = document.querySelector(".product");
const occupation = document.querySelector("#occupation");

const validate = () => {
  if (userName.value === "") {
    alert("Vui lòng nhập họ và tên");
    return false;
  }
  if (address.value === "") {
    alert("Vui lòng nhập địa chỉ");
    return false;
  }
  if (email.value === "") {
    alert("Vui lòng nhập email");
    return false;
  }
  if (phoneNumber.value === "") {
    alert("Vui lòng nhập số điện thoại");
    return false;
  }
  if (participant.value === "") {
    alert("Vui dự đoán số người tham gia");
    return false;
  }
  return true;
};

const reset = () => {
  userName.value = "";
  address.value = "";
  email.value = "";
  phoneNumber.value = "";
  participant.value = "";
  product.value = "";
  occupation.value = "";
};

confirmButton.addEventListener("click", () => {
  if (validate()) {
    alert("Đăng kí thành công");
    reset();
  }
});

cancelButton.addEventListener("click", () => {
  if (confirm("Bạn có chắc muốn làm lại")) {
    reset();
  }
});
