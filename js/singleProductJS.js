"use strict";
// Creating a Constructor To store the getItem from the local Storage in order to use it in Rendering
function Single(img, name, price, gender) {
  this.img = img;
  this.name = name;
  this.price = price;
  this.gender = gender;
}
Single.prototype.allImages = [];

// Creating a function to get the local storage
var list;
var jsList;
getData();
function getData() {
  list = localStorage.getItem("productObj");
  jsList = JSON.parse(list);
  console.log("this is a jslist ", jsList);
  Single.prototype.allImages = jsList;
}

var bigContainer = document.getElementById("singleProduct");

// ........................ Rendering ......................
// creat a single Product Container and append it in a Big Container
var singleProductContainer = document.createElement("div");
bigContainer.appendChild(singleProductContainer);
singleProductContainer.setAttribute("class", "singleProductContainer");

// craet image and append it in singleProductContainer
var productImage = document.createElement("img");
// console.log(productImage);
singleProductContainer.appendChild(productImage);
productImage.setAttribute("src", Single.prototype.allImages.img);
productImage.setAttribute("width", "300px");
productImage.setAttribute("height", "300px");

// craet the Product Name heading and append it in singleProductContainer
var productName = document.createElement("h3");
singleProductContainer.appendChild(productName);
productName.textContent = Single.prototype.allImages.name;
productName.setAttribute("class", "productNameClass");

//craet the Product Price heading and append it in singleProductContainer
var productPrice = document.createElement("h4");
singleProductContainer.appendChild(productPrice);
productPrice.textContent = "Price: " + Single.prototype.allImages.price;
productPrice.setAttribute("class", "productPriceClass");

//craet the Product Gender heading and append it in singleProductContainer
var productGender = document.createElement("h4");
singleProductContainer.appendChild(productGender);
productGender.textContent = "Gender: " + Single.prototype.allImages.gender;
productGender.setAttribute("class", "productGenderClass");

//creat the button of Add to Cart and append it in singleProductContainer
var buyNowButton = document.createElement("input");
singleProductContainer.appendChild(buyNowButton);
buyNowButton.setAttribute("class", "buyNowButton");
buyNowButton.setAttribute("type", "button");
buyNowButton.setAttribute("value", "Add To Cart");
buyNowButton.setAttribute("onclick", "location.href='singlrProduct.html';");
