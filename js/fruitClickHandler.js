const DAY_TO_MILISECONDS = 24 * 60 * 60 * 1000;

function convertDaysToMiliseconds(numberOfDays) {
  return numberOfDays * DAY_TO_MILISECONDS;
}

function convertMilisecondsToDate(miliseconds) {
  return new Date(miliseconds).toDateString();
}

function addDaysFromToday(daysToAdd) {
  var daysInMil = convertDaysToMiliseconds(daysToAdd);
  var result = Date.now() + daysInMil;
  return convertMilisecondsToDate(result);
}

function createFormWithInputAndLabel() {
  var productInfoForm = document.createElement("form");
  var inputColorLabel = document.createElement("LABEL");
  inputColorLabel.htmlFor = "color";
  inputColorLabel.innerHTML = "Color";

  var inputColor = document.createElement("input");
  inputColor.id = "inputcolor";
  inputColor.type = "text";
  inputColor.name = "color";
  //----------------------------------------------------------
  var inputPriceLabel = document.createElement("LABEL");
  inputPriceLabel.htmlFor = "price";
  inputPriceLabel.innerHTML = "Price";

  var inputPrice = document.createElement("input");
  inputPrice.id = "inputprice";
  inputPrice.type = "text";
  inputPrice.name = "price";
  //----------------------------------------------------------
  var inputQuantity = document.createElement("input");
  inputQuantity.id = "inputquantity";
  inputQuantity.type = "text";
  inputQuantity.name = "quantity";

  var inputQuantityLabel = document.createElement("LABEL");
  inputQuantityLabel.htmlFor = "quantity";
  inputQuantityLabel.innerHTML = "Quantity";
  //----------------------------------------------------------
  // Each input needs id,name,type and a Label field
  inputColor.className = "myInput";
  inputPrice.className = "myInput";
  inputQuantity.className = "myInput";

  productInfoForm.appendChild(inputColorLabel);
  productInfoForm.appendChild(inputColor);
  productInfoForm.appendChild(inputPriceLabel);
  productInfoForm.appendChild(inputPrice);
  productInfoForm.appendChild(inputQuantityLabel);
  productInfoForm.appendChild(inputQuantity);

  return productInfoForm;
}

// Fruit Click Handler

// first u click on a fruit
// we need the fruit div to listen to the click
// then we need to give it a function containing what action to take once click is detected
function createDialog() {
  // dataInputDiv is a dialog which will take infomation about fruit from owner
  var dataInputDiv = document.createElement("div");
  dataInputDiv.className = "dialog";

  var myBtn = document.createElement("button");
  myBtn.className = "myBtn";
  myBtn.innerHTML = "SUBMIT";
  // label htmlFor has to be same as connected input name
  //----------------------------------------------------------
  let myForm = createFormWithInputAndLabel();
  myForm.appendChild(myBtn);
  dataInputDiv.appendChild(myForm);

  return dataInputDiv;
}

function handleFruitClick(event) {
  const dialog = createDialog();
  console.log("IS the dialog there?", dialog);
  document.body.appendChild(dialog);
  console.log(event);
  var clickedElem = event.target;
  // if image is clicked then event.target is <img>
  // check if clickedElement.nodeName ? == DIV or IMG
  // if IMG true then find parentNode and follow below step
  // if IMG false then follow below steps
  console.log(clickedElem);
  console.log(clickedElem.getAttribute("data-fruitname"));
  // event.target -> clicked fruitContainer
  // fruitContainer.getAttribute('data-name'); -> apple
}
