//Shopping cart  variables
var cart = [];
var Item = function(id, name, img, size, price, qty, personalization, message) {
  this.id = id
  this.name = name
  this.img = img
  this.size = size
  this.price = price
  this.qty = qty
  this.personalization = personalization
  this.message = message
};

//add Item To Cart
function addItemToCart(id, name, img, size, price, qty, personalization, message) {
  //check if it is a same item in cart
  for (var i in cart) {
    if (cart[i].name === name && cart[i].message === message && cart[i].size === size) {
      cart[i].qty += qty;
      return; //end the function
    }
  }

  //if not, add Item To Cart
  var item = new Item(id, name, img, size, price, qty, personalization, message);
  cart.push(item);
}


/******Save and Load order date****/
//order date
var orderDate = "";


//get order date
function saveOrderdate(){
  var d = new Date();
  orderDate = d.toString();
  localStorage.setItem("Order Date", JSON.stringify(orderDate));
}
//load order date
function loadOrderdate(){
  orderDate = JSON.parse(localStorage.getItem("Order Date"));
}
/******Save and Load order date end***/



/******Save and Load cart****/
//Save cart
function saveCart() {
  localStorage.setItem("Shoppoing cart", JSON.stringify(cart));
}
//Load cart
function loadCart() {
  cart = JSON.parse(localStorage.getItem("Shoppoing cart"));
}
/******Save and Load cart end****/



/******Save and Load payment****/
//Save payment
function savePayment() {
  localStorage.setItem("Shipping Address", JSON.stringify(shippingAddress));
  localStorage.setItem("Card Info", JSON.stringify(creditCard));
  localStorage.setItem("Billiing Address", JSON.stringify(billingAddress));
  localStorage.setItem("Payment Price", JSON.stringify(paymentPrice));
}
//Load payment
function loadPayment() {
  shippingAddress = JSON.parse(localStorage.getItem("Shipping Address"));
  creditCard = JSON.parse(localStorage.getItem("Card Info"));
  billingAddress = JSON.parse(localStorage.getItem("Billiing Address"));
  paymentPrice = JSON.parse(localStorage.getItem("Payment Price"));
}
/******Save and Load payment end****/



// Return total price
function totalCart() {
  var totalCost = 0;
  for (var i in cart) {
    totalCost = totalCost + subTotalCart(i);
  }
  totalCost = Math.floor(totalCost * 100) / 100;
  return totalCost;
}

// Return sub (one cart object item) total price
function subTotalCart(e) {
  var r = e;
  var subTotalCost = 0;
  var price = cart[r].price;
  if (cart[r].personalization) {
    price = price + personalizationCost(r);
  }
  subTotalCost = price * cart[r].qty;
  subTotalCost = Math.floor(subTotalCost * 100) / 100;
  //subTotalCost = subTotalCost.toFixed(2);
  return subTotalCost;
}

//personalization cost for each
function personalizationCost(e) {
  var r = e;
  var personalizationCost = 0;
  var message = cart[r].message;
  if (message.length > 5) {
    personalizationCost = 2 + (message.length - 5) * 0.01;
  } else {
    personalizationCost = 2;
  }
  return personalizationCost;
}


// RReturn total Qty
function totalQty() {
  var cartQty = 0;
  for (var i in cart) {
    cartQty = cartQty + cart[i].qty;
  }
  return cartQty;
}


//Get a copy of object cart, avoid changing it
function listCart() {
  return JSON.parse(JSON.stringify(cart));
}



//clean error Tip
function cleanTip(e) {
  var id = e;
  document.getElementById(id).innerHTML = "";
}

/******creat cart HTML****/
// creat Popover Body Inner HTML
function popoverBodyInnerHTML() {
  var cartCopy = listCart();
  var output = "";
  for (var i in cartCopy) {

    if (cart[i].personalization) {
      output += "<tr><td><img src='assets/img/frames/" + cartCopy[i].img + "' width=60px></td><td><b>" +
        cartCopy[i].name + "<br>$" + subTotalCart(i) + "</b><br>Size: " +
        cartCopy[i].size + " &nbsp; &nbsp;Qty: " + cartCopy[i].qty + "<br>\"" +
        cartCopy[i].message + "\" +$" + personalizationCost(i) +
        "</td></tr>";
    } else {
      output += "<tr><td><img src='assets/img/frames/" + cartCopy[i].img + "' width=60px></td><td><b>" +
        cartCopy[i].name + "<br>$" + subTotalCart(i) + "</b><br>Size: " +
        cartCopy[i].size + " &nbsp; &nbsp;Qty:" + cartCopy[i].qty +
        "</td></tr>";
    }


  }
  $("#popoverBody").html(output); //renew html file
  document.getElementById("popoverHeading").innerHTML = "Total: $" + totalCart();
}


$(document).ready(function() {

// display cart popover controller
$("[data-toggle=popover]").popover({
  html: true,
  content: function() {
    var content = $(this).attr("data-popover-content");
    return $(content).children(".popover-body").html();
  },
  title: function() {
    var title = $(this).attr("data-popover-content");
    return $(title).children(".popover-heading").html();
  }
});
//saveCart();
loadCart();
popoverBodyInnerHTML();
document.getElementById("cartBadgeNum").innerHTML = totalQty();
});
