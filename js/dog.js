var dog = document.querySelector(".gaurdDog");
console.log("Dog ::", dog);

dog.addEventListener("click", function () {
  var dogMsgBox = document.querySelector(".dogMsgBox");
  dogMsgBox.innerText = "woof woof";
  dogMsgBox.classList.add("dogMsgBoxShow");
});

var icon = document.querySelector(".dogIcon");

icon.addEventListener("click", function () {
  var msgBox = document.querySelector(".dogMsgBox");
  msgBox.classList.toggle("dogMsgBoxShow");
});
