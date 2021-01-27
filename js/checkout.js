var checkoutProducts = JSON.parse( localStorage.getItem("cart") );
var cartAllItems = document.getElementById("cart-all-items");
function renderCart(){
    cartAllItems.innerHTML = "";
    var total = 0;
    if(checkoutProducts === undefined || checkoutProducts.length == 0) {
        cartAllItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
    }
    else {
        for(var i = 0; i < checkoutProducts.length; i++){
            var item = document.createElement("div");
            item.setAttribute('class','spec');
            if (checkoutProducts[i].sticker != undefined) {
                // custom shirt
                item.innerHTML = checkoutProducts[i].cIformation + ' <img src=' + checkoutProducts[i].cimage + ' width ="50" style="filter: ' + checkoutProducts[i].color +  '"> <span class="sticker-text">' + checkoutProducts[i].text + '</span> <img class="sticker" src=' + checkoutProducts[i].sticker + ' width="40px">  </div> <div class="information"> <h2>' + checkoutProducts[i].cName + '</h2>   </div> <div class="information"> <button class="close" onclick="deleteItem(' + i + ')"><i class="fas fa-times-circle"></i></button></div> <div class="information"> <h2> ' + checkoutProducts[i].cPrice + ' JD </h2> ';
            }
            else {
                // not custom
                item.innerHTML = ' <img src=' + checkoutProducts[i].cimage + ' width="70" > </div> <div class="information"> <h2>' + checkoutProducts[i].cName + '  </h2> </div> <div class="information"> <h2>' + checkoutProducts[i].cType + '</h2> <button class="close" onclick="deleteItem(' + i + ')"><i class="fas fa-times-circle"></i></button></div> <div class="information"> <h2> ' + checkoutProducts[i].cPrice + ' JD</h2>';
            }
            cartAllItems.appendChild(item);
            total += checkoutProducts[i].cPrice;
        }
    }
    document.getElementById("total-price").innerHTML = total.toFixed(2);
}
renderCart();
function deleteItem(current) {
    var x = checkoutProducts;
    x.splice(current, 1);
    localStorage.setItem("cart", JSON.stringify( x ) );
    renderCart();
}