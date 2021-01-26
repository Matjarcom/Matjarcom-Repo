"use strict";
// Creating a Constructor To store the getItem from the local Storage in order to use it in Rendering
function Single(name,img,type,price,custumColor,voice,information) {
 //Properties for each items
 this.cName=name;
 this.cimage=img;
 this.cType=type;
 this.cPrice=price;
 this.cColor=custumColor;
 this.cVoice=voice;
 this.cIformation=information;
 if(this.cType==='pants'){products.prototype.pantsArray.push(this);}
 if(this.cType==='shirts'){products.prototype.shirtArray.push(this);}
 if(this.cType==='toys'){products.prototype.toysArray.push(this);}
 if(this.cType==='book'){products.prototype.bookArray.push(this);}
 if(this.cType==='custum'){products.prototype.custumArray.push(this);}
}
Single.prototype.allImages = [];

// Creating a function to get the local storage
var list;
var jsList;
getData();
function getData() {
  list = localStorage.getItem("singleProductObj");
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

// craet image and append it in single Product Container
var productImage = document.createElement("img");
// console.log(productImage);
singleProductContainer.appendChild(productImage);
productImage.setAttribute("src", Single.prototype.allImages.cimage);
productImage.setAttribute("width", "300px");
productImage.setAttribute("height", "300px");


// creat a single Product Detailes Container and append it in a single Product Container
var singleProductDetailesContainer = document.createElement("div");
singleProductContainer.appendChild(singleProductDetailesContainer);
singleProductDetailesContainer.setAttribute("class", "singleProductDetailesContainer")


// craet the Product Name heading and append it in single Product Detailes Container
var productName = document.createElement("h3");
singleProductDetailesContainer.appendChild(productName);
productName.textContent = "Product Name: " + Single.prototype.allImages.cName;
productName.setAttribute("class", "productNameClass");

//craet the Product Price heading and append it in single Product Detailes Container
var productPrice = document.createElement("h4");
singleProductDetailesContainer.appendChild(productPrice);
productPrice.textContent = "Price: $" + Single.prototype.allImages.cPrice;
productPrice.setAttribute("class", "productPriceClass");

//craet the Product Gender heading and append it in single Product Detailes Container
var productInformation = document.createElement("h4");
singleProductDetailesContainer.appendChild(productInformation);
productInformation.textContent = "Information: " + Single.prototype.allImages.cIformation;
productInformation.setAttribute("class", "productInformationClass");

//creat the button of Add to Cart and append it in single Product Detailes Container
var buyNowButton = document.createElement("input");
singleProductDetailesContainer.appendChild(buyNowButton);
buyNowButton.setAttribute("class", "buyNowButton");
buyNowButton.setAttribute("type", "button");
buyNowButton.setAttribute("value", "Add To Cart");
buyNowButton.setAttribute("onclick", "location.href='singlrProduct.html';");

