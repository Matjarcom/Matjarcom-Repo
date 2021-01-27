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
            item.innerHTML = '<div class="cart-item"> <div class="spec"> <img src=' + checkoutProducts[i].cimage + ' width="70px"> </div> <div class="spec"> <h>' + checkoutProducts[i].cName + ' </p>  </div> <div class="spec"><p>' + checkoutProducts[i].cType + '</p> <button class="close" onclick="deleteItem(' + i + ')"><i class="fas fa-times-circle"></i></button></div> <div class="spec"> <b>price</b> <p>' + checkoutProducts[i].cPrice + ' JD</p> </div></div>';
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