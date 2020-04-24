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
  //----------------------------------------------------------

  var inputQuantityInStockLabel = document.createElement("LABEL");
  inputQuantityInStockLabel.htmlFor = "quantityInStock";
  inputQuantityInStockLabel.innerHTML = "Quantity in stock";

  var inputQuantityInStock = document.createElement("input");
  inputQuantityInStock.id = "inputquantityinstock";
  inputQuantityInStock.type = "text";
  inputQuantityInStock.name = "quantityInStock";

  //----------------------------------------------------------
  var inputFruitOriginLabel = document.createElement("LABEL");
  inputFruitOriginLabel.htmlFor = "origin";
  inputFruitOriginLabel.innerHTML = "Origin";

  var inputFruitOrigin = document.createElement("input");
  inputFruitOrigin.id = "inputOrigin";
  inputFruitOrigin.type = "text";
  inputFruitOrigin.name = "origin";
  //-----------------------------------------------------------
  var inputFruitSoldLabel = document.createElement("LABEL");
  inputFruitSoldLabel.htmlFor = "sold";
  inputFruitSoldLabel.innerHTML = "Stock sold";

  var inputFruitSold = document.createElement("input");
  inputFruitSold.id = "inputSold";
  inputFruitSold.type = "text";
  inputFruitSold.name = "sold";
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
  productInfoForm.appendChild(inputQuantityInStockLabel);
  productInfoForm.appendChild(inputQuantityInStock);
  productInfoForm.appendChild(inputFruitOriginLabel);
  productInfoForm.appendChild(inputFruitOrigin);
  productInfoForm.appendChild(inputFruitSoldLabel);
  productInfoForm.appendChild(inputFruitSold);

  return productInfoForm;
}
