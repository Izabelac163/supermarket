// Create an array of fruits and show them in the html page...
// fruits image should have name under it
// store fruit data in a structure (object)
// list -> Arrays of objects

// primitive types of data - Number, String, Boolean
// Reference types of data = Objects - Array and Objects and functions

var apple = {
  imgSource: "images/apple.jpg",
  color: 100,
  width: 100,
  info: {
    name: "Apple",
    origin: "Canada",
    price: "20Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0
  }
};

var banana = {
  imgSource: "images/banana.png",
  height: 100,
  width: 100,
  info: {
    name: "Banana",
    origin: "Canada",
    price: "20Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0
  }
};

var blueberry = {
  imgSource: "images/blueberry.svg",
  height: 100,
  width: 100,
  info: {
    name: "Blueberry",
    origin: "Canada",
    price: "20Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0
  }
};

var orange = {
  imgSource: "images/apple.jpg",
  color: 100,
  width: 100,
  info: {
    name: "orange",
    origin: "Canada",
    price: "20Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0
  }
};

var grapes = {
  imgSource: "images/grapes.png",
  height: 100,
  width: 100,
  info: {
    name: "grapes",
    origin: "Canada",
    price: "20Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0
  },
  showName: function() {
    return this.name;
  }
};

// list of fruits - Global variables
var fruitArray = [apple, banana, blueberry, grapes];

//***********************************************************
// for fruit
var mainContainer = document.getElementById("mainContainer"); //find the node with id mainContainer
//***********************************************************

// takes list of fruit object => creates fruit gallery
function createFruitGallery(anyArray) {
  var myRack = installRack();
  // loop thru the fruit array
  for (var i = 0; i < anyArray.length; i++) {
    // create container node to hold each fruit image
    var myFruitContainerCreated = setupFruitContainer(anyArray[i]);

    // Add click event listener to the Fruit Container
    myFruitContainerCreated.addEventListener("click", handleFruitClick);

    // giving each fruit item to this setImage function
    // setupImageElement function takes a fruit and adds it to the fruitDiv in the DOM...
    setupImageElement(anyArray[i], myFruitContainerCreated); // apple - banana - blueberry

    addFruitsInsideTheRack(myRack, myFruitContainerCreated);
    // adding child node to mainContainer here
    appendRackToMainContainer(myRack);
    createBttnDiv();
  }
}

// creates a Dom node when called and gives back
function setupFruitContainer(currentFruit) {
  var fruitContainer = document.createElement("div"); // creating multiple dom nodes/divs child
  // Add class fruit-container to the fruitContainer

  fruitContainer.classList.add("fruit-container");
  fruitContainer.setAttribute("data-fruitname", currentFruit.info.name);
  fruitContainer.setAttribute("data-price", currentFruit.info.price);
  fruitContainer.setAttribute("data-expiry", currentFruit.info.expiryDate);
  fruitContainer.setAttribute("data-qstock", currentFruit.info.quantityInStock);
  fruitContainer.setAttribute("data-qsold", currentFruit.info.quantitySold);
  fruitContainer.setAttribute("data-origin", currentFruit.info.origin);
  return fruitContainer;
}

//***********************************************************
function setupImageElement(fruit, fruitContainer) {
  // creating image element n DOM
  var myImageElement = document.createElement("IMG");
  // attach fruit props to image element
  // adds properties to the fruit objects
  myImageElement.src = fruit.imgSource;
  myImageElement.height = fruit.height;
  myImageElement.width = fruit.width;
  // Insert this image to Fruit container
  fruitContainer.appendChild(myImageElement);
}
//***********************************************************

function appendRackToMainContainer(rack) {
  mainContainer.appendChild(rack);
}

function installRack() {
  var rackSection = document.createElement("div");
  rackSection.classList.add("rackSection");
  return rackSection;
}

function addFruitsInsideTheRack(rack, myFruitContainerCreated) {
  rack.appendChild(myFruitContainerCreated);
}

var middleSection = document.getElementById("middle-section");

function createBttnDiv() {
  var bttnDiv = document.createElement("div");
  bttnDiv.classList.add("bttn-div");
}

// create a rackSection div
// add the child divs to that div
// add the rackSection to mainContainer

//***********************************************************
createFruitGallery(fruitArray);
//**********************************************************
