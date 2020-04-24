var customer = document.getElementsByClassName("customer");

customer.addEventListner("click", createDiv);

function createDiv() {
  var div = document.createElement("div");
  div.innerHTML = "Where's the manager!!!";
}
