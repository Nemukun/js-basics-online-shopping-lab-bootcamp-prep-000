var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice=Math.floor(Math.random()*100);
  cart.push({[item]:itemPrice});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length===0){
    console.log ("Your shopping cart is empty.");
  }else{
    for(var i=0;i<cart.length;i++){
      for(var item in cart[i]){
        cart.push(`${item} has been added to your cart.`);
    }
    }
}
return cart;
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
