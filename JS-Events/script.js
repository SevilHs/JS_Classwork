let nameInp = document.querySelector("#name");
let surname = document.querySelector("#surname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let checkboxText = document.querySelector("#checkbox-text");
let submit = document.querySelector("#submit");
let form = document.querySelector("form");
let radio = document.querySelectorAll('input[name="radio"]');

checkboxText.style.visibility = "hidden";
submit.disabled = true;

nameInp.addEventListener("focus", function () {
  this.style.background = "grey";
  this.style.color = "#fff";
});
nameInp.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
  this.style.color = "#000";
});

surname.addEventListener("mouseover", function () {
  this.style.background = "green";
});
surname.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
});

email.addEventListener("contextmenu", function () {
  this.style.background = "red";
});
email.addEventListener('mouseout', function(){
    this.style.background='transparent'
})
////////////////////////////////?????????????

password.addEventListener("focus", function () {
  this.value = "12345678";
});
password.addEventListener("mouseout", function () {
  this.value = "";
});

checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    checkboxText.style.visibility = "visible";
  } else {
    checkboxText.style.visibility = "hidden";
  }
});

form.addEventListener('change',function(){
  if (nameInp.value && surname.value && checkbox.checked) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
})

radio.forEach(item =>
  item.addEventListener("click", function () {
    alert("Thanks!");
  })
);
radio.forEach((item) =>
  item.setAttribute("required", "")
);
