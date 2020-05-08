var securityDIV = document.querySelector(".security");
console.log("Security::", securityDIV);

securityDIV.addEventListener("click", function () {
  console.log(securityDIV);
  var middleSection = document.querySelector(".middle-section");
  console.log("MIDDLE", middleSection);
  var securityMsgBox = document.querySelector(".securityMsgBox");
  console.log("BOX", securityMsgBox);
  console.log("Working still");

  securityMsgBox.innerText = "Sir i will have to check your pockets!";
  console.log("Still is working");

  securityMsgBox.classList.add("msgBoxShow");
});

var icon = document.querySelector(".securityIcon");

icon.addEventListener("click", hideMsgBox);

function hideMsgBox() {
  var msgdv = document.querySelector(".securityMsgBox");
  // by adding or removing the msgBoxShow class the display property is changed from none to flex
  // which is how the msgBox is hidden/shown
  // toggle -> add + remove
  msgdv.classList.toggle("msgBoxShow");
}
