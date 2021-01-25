"use strict";

// ---------- Creating The Constructor of Products
var bigContainer = document.getElementById("bigContainer");

function Clothes(img, name, price, gender) {
  this.img = img;
  this.name = name;
  this.price = price;
  this.gender = gender;
  Clothes.prototype.allImages.push(this);
}
Clothes.prototype.allImages = [];
Clothes.prototype.cartProducts = [];
console.log(Clothes.prototype.cartProducts);

// Adding Tshirt products
new Clothes("Clothes_Images/Tshirt/both.png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (2).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (3).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (4).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (5).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (6).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (7).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (8).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (9).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (10).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (11).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (12).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (13).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (14).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (15).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (16).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (17).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/both (18).png", "T-shirt", "23 JD", "Both");
new Clothes("Clothes_Images/Tshirt/boy.png", "T-shirt", "23 JD", "Boy");
new Clothes("Clothes_Images/Tshirt/girl.png", "T-shirt", "23 JD", "Girl");
new Clothes("Clothes_Images/Tshirt/girl (2).png", "T-shirt", "23 JD", "Girl");
new Clothes("Clothes_Images/Tshirt/girl (3).png", "T-shirt", "23 JD", "Girl");
new Clothes("Clothes_Images/Tshirt/girl (4).png", "T-shirt", "23 JD", "Girl");
new Clothes("Clothes_Images/Tshirt/girl (5).png", "T-shirt", "23 JD", "Girl");

// Adding Pants products
new Clothes("Clothes_Images/pants/boy.png", "Pants", "23 JD", "boy");
new Clothes("Clothes_Images/pants/boy (2).png", "Pants", "23 JD", "boy");
new Clothes("Clothes_Images/pants/boy (3).png", "Pants", "23 JD", "boy");
new Clothes("Clothes_Images/pants/boy (4).png", "Pants", "23 JD", "boy");
new Clothes("Clothes_Images/pants/boy (5).png", "Pants", "23 JD", "boy");
new Clothes("Clothes_Images/pants/boy (6).png", "Pants", "23 JD", "boy");
new Clothes("Clothes_Images/pants/boy (7).png", "Pants", "23 JD", "boy");
new Clothes("Clothes_Images/pants/boy (8).png", "Pants", "23 JD", "boy");
new Clothes("Clothes_Images/pants/boy (9).png", "Pants", "23 JD", "boy");
new Clothes("Clothes_Images/pants/boy (10).png", "Pants", "23 JD", "boy");
new Clothes("Clothes_Images/pants/boy (11).png", "Pants", "23 JD", "boy");
new Clothes("Clothes_Images/pants/boy (12).png", "Pants", "23 JD", "boy");
new Clothes("Clothes_Images/pants/boy (13).png", "Pants", "23 JD", "boy");
new Clothes("Clothes_Images/pants/boy (14).png", "Pants", "23 JD", "boy");
new Clothes("Clothes_Images/pants/girl.png", "Pants", "23 JD", "Girl");
new Clothes("Clothes_Images/pants/girl (2).png", "Pants", "23 JD", "Girl");
new Clothes("Clothes_Images/pants/girl (3).png", "Pants", "23 JD", "Girl");
new Clothes("Clothes_Images/pants/girl (4).png", "Pants", "23 JD", "Girl");
new Clothes("Clothes_Images/pants/girl (5).png", "Pants", "23 JD", "Girl");
new Clothes("Clothes_Images/pants/girl (6).png", "Pants", "23 JD", "Girl");
new Clothes("Clothes_Images/pants/girl (7).png", "Pants", "23 JD", "Girl");
new Clothes("Clothes_Images/pants/girl (8).png", "Pants", "23 JD", "Girl");
new Clothes("Clothes_Images/pants/girl (9).png", "Pants", "23 JD", "Girl");
new Clothes("Clothes_Images/pants/girl (10).png", "Pants", "23 JD", "Girl");
new Clothes("Clothes_Images/pants/girl (11).png", "Pants", "23 JD", "Girl");

for (var i = 0; i < Clothes.prototype.allImages.length; i++) {
  // creat a single Product Container and append it in a Big Container
  var singleProductContainer = document.createElement("div");
  bigContainer.appendChild(singleProductContainer);
  singleProductContainer.setAttribute("class", "singleProductContainer");

  // craet image and append it in singleProductContainer
  var productImage = document.createElement("img");
  // console.log(productImage);
  singleProductContainer.appendChild(productImage);
  productImage.setAttribute("src", Clothes.prototype.allImages[i].img);
  productImage.setAttribute("width", "300px");
  productImage.setAttribute("height", "300px");

  // craet the Product Name heading and append it in singleProductContainer
  var productName = document.createElement("h3");
  singleProductContainer.appendChild(productName);
  productName.textContent = Clothes.prototype.allImages[i].name;
  productName.setAttribute("class", "productNameClass");

  //craet the Product Price heading and append it in singleProductContainer
  var productPrice = document.createElement("h4");
  singleProductContainer.appendChild(productPrice);
  productPrice.textContent = "Price: " + Clothes.prototype.allImages[i].price;
  productPrice.setAttribute("class", "productPriceClass");

  //craet the Product Gender heading and append it in singleProductContainer
  var productGender = document.createElement("h4");
  singleProductContainer.appendChild(productGender);
  productGender.textContent =
    "Gender: " + Clothes.prototype.allImages[i].gender;
  productGender.setAttribute("class", "productGenderClass");

  //creat the button of Add to Cart and append it in singleProductContainer
  var buyNowButton = document.createElement("input");
  singleProductContainer.appendChild(buyNowButton);
  buyNowButton.setAttribute("class", "buyNowButton");
  buyNowButton.setAttribute("type", "button");
  buyNowButton.setAttribute("value", "Buy Now");
  buyNowButton.setAttribute("onclick", "location.href='singlrProduct.html';");

  /////////////////////////////////////////////////////////////////////////////////////////////////////
}

//................ Add Event Listener to take the product from Buy Now Button
var buyNowButtonProduct = document.getElementsByClassName("buyNowButton");
// var productList = [];
// console.log(addToCartButtonProduct);
// console.log(productList);
for (let x = 0; x < buyNowButtonProduct.length; x++) {
  buyNowButtonProduct[x].addEventListener("click", updatingCart);
  function updatingCart(event) {
    console.log("I am in");
    // set the Products inside a local storage
    localStorage.setItem(
      "productObj",
      JSON.stringify(Clothes.prototype.allImages[x])
    );
  }
}
