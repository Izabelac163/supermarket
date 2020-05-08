//var customer = document.getElementsByClassName("customer");
// querySelector -> query using class/id -> '.classname' / '#idname'

var customerDIV = document.querySelector(".customer");
console.log(customerDIV);
//var icon = null;

customerDIV.addEventListener("click", function () {
  var middleSection = document.querySelector(".middle-section");
  var msgDiv = document.querySelector(".msgBox");

  msgDiv.innerText = "Call the manager";
  // msgDiv.insertAdjacentHTML(
  //   "beforeend",
  //   '<i class="fas fa-user userIcon"></i>'
  // );
  msgDiv.classList.add("msgBoxShow");
  middleSection.appendChild(msgDiv);
});

// document.addEventListener("DOMContentLoaded", (event) => {
//   console.log("DOM fully loaded and parsed");
//   icon = document.querySelector(".fa-user");
//   console.log(customer);
//
// });
var icon = document.querySelector(".customerIcon");

icon.addEventListener("click", hideMsgBox);

function hideMsgBox() {
  var msgdv = document.querySelector(".msgBox");
  msgdv.classList.toggle("msgBoxShow");
}

// when customer is clicked show the 1st msg
// then on second click show 2nd msg
// in between the 2 msg boxes there will be display none

//How to do it :
// create two functions which will each create a msg box
//then toggle between them 2
