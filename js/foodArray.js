var milk = {
  imgSource: "images/milk.jpg",
  height: 100,
  width: 100,
  info: {
    name: "Milk",
    origin: "Cows",
    price: "10Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0,
  },
};

var cheese = {
  imgSource: "images/cheese.jpg",
  height: 100,
  width: 100,
  info: {
    name: "Cheese",
    origin: "Cows",
    price: "24Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0,
  },
};

var iceCream = {
  imgSource: "images/icecream.jpg",
  height: 100,
  width: 100,
  info: {
    name: "Ice Cream",
    origin: "Cows",
    price: "15Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0,
  },
};

var egg = {
  imgSource: "images/egg.jpg",
  height: 100,
  width: 10,
  info: {
    name: "Egg",
    origin: "Chicken",
    price: "30Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0,
  },
};

var dairyArray = [milk, cheese, iceCream, egg];

createFruitGallery(dairyArray);

var cake = {
  imgSource: "images/cake.jpg",
  height: 100,
  width: 100,
  info: {
    name: "Cake",
    origin: "Bakery",
    price: "99Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0,
  },
};

var chocolate = {
  imgSource: "images/chocolate.jpeg",
  height: 100,
  width: 100,
  info: {
    name: "Chocolate",
    origin: "Willy Wonkas chocolate factory",
    price: "45Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0,
  },
};

var cookie = {
  imgSource: "images/cookie.png",
  height: 100,
  width: 100,
  info: {
    name: "Cookie",
    origin: "Bakery",
    price: "34Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0,
  },
};

var cottoncandy = {
  imgSource: "images/cottoncandy.jpg",
  height: 100,
  width: 100,
  info: {
    name: "Cotton candy",
    origin: "Bakery",
    price: "30Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0,
  },
};

var sweetArray = [cake, cookie, chocolate, cottoncandy];

createFruitGallery(sweetArray);

var burger = {
  imgSource: "images/burger.jpg",
  height: 100,
  width: 100,
  info: {
    name: "Burger",
    origin: "Burger King",
    price: "40Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0,
  },
};

var fries = {
  imgSource: "images/fries.png",
  height: 100,
  width: 100,
  info: {
    name: "Fries",
    origin: "McDonalds",
    price: "26Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0,
  },
};

var pizza = {
  imgSource: "images/pizza.jpg",
  height: 100,
  width: 100,
  info: {
    name: "Pizza",
    origin: "Domino's Pizza",
    price: "100Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0,
  },
};

var taco = {
  imgSource: "images/taco.jpg",
  height: 100,

  width: 100,
  info: {
    name: "Taco",
    origin: "Taco bell",
    price: "80Kc",
    quantityInStock: 20,
    expiryDate: addDaysFromToday(7),
    quantitySold: 0,
  },
};

var junkFoodArray = [fries, burger, taco, pizza];

createFruitGallery(junkFoodArray);
