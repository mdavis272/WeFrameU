//creat Payment Info
function ConfirPaymentInnerHTML() {
  var creditNum = creditCard["num"];
  var last4 =str = creditNum.replace(/\d(?=\d{4})/g, "*");
  document.getElementById("shipping-address").innerHTML = "<h6>Shipping address</h6><p>" +
    "Full Name: " + shippingAddress["name"] +
    "<br>Street: " + shippingAddress["street"] +
    "<br>City: " + shippingAddress["city"] +
    " State: " + shippingAddress["state"] + "<br>Zip: " + shippingAddress["zip"] + "</p>" +
    "<h6>Payment Method:</h6><p>Card number:<br>" + last4 + "</p>";
}




/******creat cart table body HTML****/
function confirCartTableInnerHTML() {
  var cartCopy = listCart();
  var output = "";
  for (var i in cartCopy) {
    if (cart[i].personalization) {
      output += "<tr><td><img src='assets/img/frames/" + cartCopy[i].img + "' width=80px></td><td><b>" +
        cartCopy[i].name + "</b><br>" +
        cartCopy[i].size + "<br>'" +
        cartCopy[i].message + "' +$" + personalizationCost(i) +
        "</td><td>" +
        cartCopy[i].qty + "</td><td><b>  $" +
        subTotalCart(i) + "</b></td></tr>";
    } else {
      output += "<tr><td><img src='assets/img/frames/" + cartCopy[i].img + "' width=80px></td><td><b>" +
        cartCopy[i].name + "</b><br>" +
        cartCopy[i].size +
        "</td><td>" +
        cartCopy[i].qty + "</td><td><b>  $" +
        subTotalCart(i) + "</b></td></tr>";
    }
  }
  var outputPrice = "";
  outputPrice = "<tr><td></td><td></td><td>Order:</td><td>$" +
    paymentPrice["order"] + "</td></tr>" +
    "<tr><td></td><td></td><td>Shipping:</td><td>$" +
    paymentPrice["shipping"] + "</td></tr>" +
    "<tr><td></td><td></td><td>Tax:</td><td>$" +
    paymentPrice["tax"] + "</td></tr>" +
    "<tr><td></td><td></td><td>Total:</td><td>$" +
    paymentPrice["total"] + "</td></tr>";
  output = output + outputPrice
  $("#cartTableBody").html(output); //renew html file
}






$(document).ready(function() {
  //Place Order button
  $("#to-account").click(function() {
    window.location = "myaccount.html";
  });







  loadCart();
  loadPayment();
  loadOrderdate();

  //show order date on page
  document.getElementById("order-date").innerHTML = orderDate;
  confirCartTableInnerHTML();
  ConfirPaymentInnerHTML();



});
