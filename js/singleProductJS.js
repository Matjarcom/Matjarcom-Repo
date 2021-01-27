"use strict";
// debugger;
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
 var Main= document.getElementById('main');
 var headingText=document.createElement('h3');
 headingText.setAttribute("class","page-name");
 headingText.textContent= 'products > '+ Single.prototype.allImages.cType + " > " + Single.prototype.allImages.cName;
 Main.appendChild(headingText);


var bigContainer = document.getElementById("singleProduct");

// ........................ Rendering ......................
// creat a single Product Container and append it in a Big Container
var singleProductContainer = document.createElement("div");
bigContainer.appendChild(singleProductContainer);
singleProductContainer.setAttribute("class", "singleProductContainer");

// create image and append it in single Product Container
var divImg=document.createElement("div");
divImg.setAttribute("class","div-img");
singleProductContainer.appendChild(divImg);
var productImage = document.createElement("img");
divImg.appendChild(productImage);
// console.log(productImage);

productImage.setAttribute("src", Single.prototype.allImages.cimage);
productImage.setAttribute("width", "400px");
productImage.setAttribute("height", "400px");


// creat a single Product Detailes Container and append it in a single Product Container
var singleProductDetailesContainer = document.createElement("div");
singleProductContainer.appendChild(singleProductDetailesContainer);
singleProductDetailesContainer.setAttribute("class", "singleProductDetailesContainer")


// craet the Product Name heading and append it in single Product Detailes Container
var productName = document.createElement("h3");
singleProductDetailesContainer.appendChild(productName);
productName.textContent =  Single.prototype.allImages.cName + " "+  Single.prototype.allImages.cType;
productName.setAttribute("class", "productNameClass");

//craet the Product Gender heading and append it in single Product Detailes Container
var productInformation = document.createElement("h4");
singleProductDetailesContainer.appendChild(productInformation);
productInformation.textContent =  Single.prototype.allImages.cIformation;
productInformation.setAttribute("class", "productInformationClass");

//craet the Product Price heading and append it in single Product Detailes Container
var productPrice = document.createElement("h1");
singleProductDetailesContainer.appendChild(productPrice);
productPrice.textContent =  Single.prototype.allImages.cPrice +" JD";
productPrice.setAttribute("class", "productPriceClass");



//creat the button of Add to Cart and append it in single Product Detailes Container
var buyNowButton = document.createElement("input");
singleProductDetailesContainer.appendChild(buyNowButton);
buyNowButton.setAttribute("class", "buyNowButton");
buyNowButton.setAttribute("type", "button");
buyNowButton.setAttribute("value", "Add To Cart");
buyNowButton.setAttribute("onclick", "location.href='singlrProduct.html';");

//buyNowButton.setAttribute("onclick", "location.href='singlrProduct.html';");
buyNowButton.setAttribute("onclick", "addToCart();");



var myCart = [];
function addToCart() {

  // Get storaged data if exist old items
  var storaged = localStorage.getItem("cart");
  if (storaged != null) {
    myCart = JSON.parse( storaged );
  }
  // Add the new current item to myCart localstorage
  var currentProduct = JSON.parse( localStorage.getItem("singleProductObj") );
  myCart.push(currentProduct);
  localStorage.setItem("cart", JSON.stringify(myCart) );
  alert("product added to my cart")
}

