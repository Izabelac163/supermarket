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
  // setting an ID to the form.
  productInfoForm.setAttribute("id", "myForm");

  var inputFruitNameLabel = document.createElement("LABEL");
  inputFruitNameLabel.htmlFor = "name";
  inputFruitNameLabel.innerHTML = "Name";

  var inputFruitName = document.createElement("input");
  inputFruitName.id = "inputname";
  inputFruitName.type = "text";
  inputFruitName.name = "name";

  //----------------------------------------------------------
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

  var inputQuantityLabel = document.createElement("LABEL");
  inputQuantityLabel.htmlFor = "quantity";
  inputQuantityLabel.innerHTML = "Quantity";

  var inputQuantity = document.createElement("input");
  inputQuantity.id = "inputquantity";
  inputQuantity.type = "text";
  inputQuantity.name = "quantity";

  //----------------------------------------------------------
  var inputFruitOriginLabel = document.createElement("LABEL");
  inputFruitOriginLabel.htmlFor = "origin";
  inputFruitOriginLabel.innerHTML = "Origin";

  var inputFruitOrigin = document.createElement("input");
  inputFruitOrigin.id = "inputOrigin";
  inputFruitOrigin.type = "text";
  inputFruitOrigin.name = "origin";
  // Each input needs id,name,type and a Label field
  //Add class for css to input fields
  inputFruitName.className = "myInput";
  inputColor.className = "myInput";
  inputPrice.className = "myInput";
  inputQuantity.className = "myInput";
  inputFruitOrigin.className = "myInput";

  productInfoForm.appendChild(inputFruitNameLabel);
  productInfoForm.appendChild(inputFruitName);
  productInfoForm.appendChild(inputColorLabel);
  productInfoForm.appendChild(inputColor);
  productInfoForm.appendChild(inputPriceLabel);
  productInfoForm.appendChild(inputPrice);
  productInfoForm.appendChild(inputQuantityLabel);
  productInfoForm.appendChild(inputQuantity);
  productInfoForm.appendChild(inputFruitOriginLabel);
  productInfoForm.appendChild(inputFruitOrigin);

  return productInfoForm;
}

// Fruit Click Handler

// first u click on a fruit
// we need the fruit div to listen to the click
// then we need to give it a function containing what action to take once click is detected
function createDialog() {
  // dataInputDiv is a dialog which will take infomation about fruit from owner
  var dialogDiv = document.createElement("div");
  dialogDiv.className = "dialog";

  // BUTTON
  var myBtn = document.createElement("button");
  myBtn.className = "myBtn";
  myBtn.innerHTML = "SUBMIT";
  myBtn.type = "submit";
  //myBtn.addEventListener("click", getFormData);

  // label htmlFor has to be same as connected input name
  //----------------------------------------------------------
  let myForm = createFormWithInputAndLabel();
  myForm.appendChild(myBtn);
  // Adding listeners to our FORM so that we can catch all fields filled up in the form
  //1. attach eventHandler submitFormData - to submit event -

  //myForm.addEventListener("submit", submitFormDataHandler);
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    new FormData(myForm);
  });

  //  =================================================================
    myForm.addEventListener("formdata", getFormData);
  //  =================================================================

  //myForm.addEventListener("formdata", (e) => {
  //  console.log("formdata event fired");


  //        // formData.entries() method gives us all the form input fields in [Key, Value] pairs::::
  //        // it returns an Iterator...so we have to use for of loop..
  //          var fruitObjectFromFormData = {};
  //  for (let formFields of e.formData.entries()) {
  //          fruitObjectFromFormData[formFields[0]] = formFields[1];
  //  }
  //        console.log(fruitObjectFromFormData);
  //});

  dialogDiv.appendChild(myForm);

  return dialogDiv;
}

function destroyDialog() {
  var mypoordialog = document.getElementsByClassName("dialog")[0];
  mypoordialog.parentNode.removeChild(mypoordialog);
}

function handleFruitClick(event) {
  //=====================================================
  //  DIALOG CREATION POINT
  const myFormDialog = createDialog();
  console.log("IS the dialog there?", myFormDialog);
  //=====================================================
  // ADD DIALOG to HTML BODY
  document.body.appendChild(myFormDialog);

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

function submitFormDataHandler(e) {
  e.preventDefault();
  console.log(e);

  // grabbing the form by its ID
  var ourFilledUpForm = document.getElementById("myForm");
  console.log("OUR FILLED UP FORM", ourFilledUpForm);

  // console log all the form fields plus lot of unwanted stuff
  //console.log(formData.elements);
  // thats why we create a FormData object

  // // construct a FormData object, which fires the formdata event
  var fd = new FormData(ourFilledUpForm);
  console.log(fd);
}

// Event handler for formdata event
function getFormData(e) {
	console.log("This handler function is called when formdata event is fired");
	// formData.entries() method gives us all the form input fields in [Key, Value] pairs::::
	// it returns an Iterator...so we have to use for of loop..
	var fruitObjectFromFormData = {};
	for (let formFields of e.formData.entries()) {
		fruitObjectFromFormData[formFields[0]] = formFields[1];
	}
	console.log(fruitObjectFromFormData);
	destroyDialog();
}

// function createFruitObjectFromUserInput(formDataArray) {
//   for(i=0; i < formDataArray.length;)
// }

// var oldFruitArray = JSON.parse(localStorage.getItem("fruits"));
// oldFruitArray.push({
//   imgSource: "",
//   color: formData.elements[1].value,
//   width: 100,
//   info: {
//     name: formData.elements[0].value,
//     origin: formData.elements[4].value,
//     price: formData.elements[2].value,
//     quantityInStock: formData.elements[3].value,
//     expiryDate: addDaysFromToday(7),
//     quantitySold: 0,
//   },
// });

// localStorage.setItem("fruits", JSON.stringify(oldFruitArray));
// destroyDialog();

