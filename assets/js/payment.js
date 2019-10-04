
//Shipping address  variables
var shippingAddress = {
  name: "",
  street: "",
  city: "",
  state: "",
  zip: ""
};

//Credit card variables
var creditCard = {
  num: "",
  name: "",
  month: "",
  year: "",
  ccv: ""
};

//Billing address  variables
var billingAddress = {
  name: "",
  street: "",
  city: "",
  state: "",
  zip: ""
};

//price  variables
var paymentPrice = {
  order: 0,
  shipping: 0,
  tax: 0,
  total: 0
};






//creat Payment Info
function shippingAddressInnerHTML() {
  document.getElementById("shipping-address").innerHTML = "<h5>Shipping address</h5><p>" +
    "Full Name: " + shippingAddress["name"] +
    "<br>Street: " + shippingAddress["street"] +
    "<br>City: " + shippingAddress["city"] +
    " State: " + shippingAddress["state"] + "<br>Zip: " + shippingAddress["zip"] + "</p>";
}

//creat billing Address InnerHTML
function billingAddressInnerHTML() {
  document.getElementById("billing-address").innerHTML = "<h5>Billing address</h5><p>" +
    "Full Name: " + billingAddress["name"] +
    "<br>Street: " + billingAddress["street"] +
    "<br>City: " + billingAddress["city"] +
    " State: " + billingAddress["state"] + "<br>Zip: " + billingAddress["zip"] + "</p>";
}

//creat card Info InnerHTML
function cardInfoInnerHTML() {
  document.getElementById("card-info").innerHTML = "<h5>Credit card</h5><p>" +
    "Card number: " + creditCard["num"] +
    "<br>Name: " + creditCard["name"] +
    "<br>Expiry date: " + creditCard["month"] + "/" + creditCard["year"] +
    "<br>CCV: " + creditCard["ccv"] + "</p>";
}

//creat shipping option InnerHTML
function shippingOptionInnerHTML() {
  if (paymentPrice["shipping"] == 0) {
    document.getElementById("shipping-option").innerHTML = "<h5>Shipping:</h5><p>Stand free</p>"
  } else if (paymentPrice["shipping"] == 8) {
    document.getElementById("shipping-option").innerHTML = "<h5>Shipping:</h5><p>2-day $8</p>"
  }
}

//show Payment Price
function showPaymentPrice() {
  var order = Number(totalCart());
  var shipping = Number(paymentPrice["shipping"]);
  var tax = getTax(shippingAddress["state"]) * (shipping + order);
  var total = shipping + order + tax;
  paymentPrice["order"] = order;
  paymentPrice["tax"] = tax.toFixed(2);
  paymentPrice["total"] = total.toFixed(2);
  document.getElementById("price-order").innerHTML = "$" + paymentPrice["order"];
  document.getElementById("price-shipping").innerHTML = "$" + paymentPrice["shipping"];
  document.getElementById("price-tax").innerHTML = "$" + paymentPrice["tax"];
  document.getElementById("price-total").innerHTML = "$" + paymentPrice["total"];
}

// show all payment Info
function paymentInfo() {
  shippingAddressInnerHTML();
  billingAddressInnerHTML();
  cardInfoInnerHTML();
  showPaymentPrice();
  shippingOptionInnerHTML();
}

//get Tax rate
// California CA 7.25% michigan MI 6%  louisiana LA 9%
function getTax(e) {
  var state = e;
  var taxRate = 0;
  switch (state) {
    case "CA":
      taxRate = 0.0725;
      break;
    case "MI":
      taxRate = 0.06;
      break;
    case "LA":
      taxRate = 0.09;
      break;
    default:
      taxRate = 0;
  }
  return taxRate;
}

//clear all payment Info
function clearAll(){
  //Shipping address  variables
  shippingAddress = {
    name: "",
    street: "",
    city: "",
    state: "",
    zip: ""
  };
  //Credit card variables
  creditCard = {
    num: "",
    name: "",
    month: "",
    year: "",
    ccv: ""
  };
  //Billing address  variables
  billingAddress = {
    name: "",
    street: "",
    city: "",
    state: "",
    zip: ""
  };
  //price  variables
  paymentPrice = {
    order: 0,
    shipping: 0,
    tax: 0,
    total: 0
  };
}




$(document).ready(function() {

  //Submit Shipping address
  $("#shipping-btn").click(function() {
    //loadPayment();
    var name = $('#shipping-name-id').val();
    var street = $('#shipping-add-id').val();
    var city = $('#shipping-city-id').val();
    var state = $('#shipping-state-id').val();
    var zip = $('#shipping-zip-id').val();

    if (name == "" || street == "" || city == "" || state == "" || zip == "") {
      document.getElementById("shipping-tip").innerHTML = "(Please complete all fields)";
      setTimeout("cleanTip('shipping-tip')", 2000);
    } else if (isNaN(zip) || zip.toString().length != 5) {
      document.getElementById("shipping-zip-tip").innerHTML = "(Enter a valid zip code)";
      setTimeout("cleanTip('shipping-zip-tip')", 2000);
    } else {
      shippingAddress["name"] = name;
      shippingAddress["street"] = street;
      shippingAddress["city"] = city;
      shippingAddress["state"] = state;
      shippingAddress["zip"] = zip;
      savePayment();
      paymentInfo();
    }
  });



  //Submit Billing address
  $("#billing-btn").click(function() {
    //loadPayment();
    var name = $('#billing-name-id').val();
    var street = $('#billing-add-id').val();
    var city = $('#billing-city-id').val();
    var state = $('#billing-state-id').val();
    var zip = $('#billing-zip-id').val();

    if (name == "" || street == "" || city == "" || state == "" || zip == "") {
      document.getElementById("billing-tip").innerHTML = "(Please complete all fields)";
      setTimeout("cleanTip('billing-tip')", 2000);
    } else if (isNaN(zip) || zip.toString().length != 5) {
      document.getElementById("billing-zip-tip").innerHTML = "(Enter a valid zip code)";
      setTimeout("cleanTip('billing-zip-tip')", 2000);
    } else {
      billingAddress["name"] = name;
      billingAddress["street"] = street;
      billingAddress["city"] = city;
      billingAddress["state"] = state;
      billingAddress["zip"] = zip;
      savePayment();
      paymentInfo();
    }
  });

  //Submit Card
  $("#card-btn").click(function() {
    //loadPayment();
    var num = $('#card-num-id').val();
    var name = $('#card-name-id').val();
    var month = $('#card-month-id').val();
    var year = $('#card-year-id').val();
    var ccv = $('#card-ccv-id').val();

    if (num == "" || name == "" || month == "" || year == "" || ccv == "") {
      document.getElementById("card-tip").innerHTML = "(Please complete all fields)";
      setTimeout("cleanTip('card-tip')", 2000);
    } else if (isNaN(num) || !(num.toString().length == 15 || num.toString().length == 16)) {
      document.getElementById("card-num-tip").innerHTML = "(Enter a valid card number)";
      setTimeout("cleanTip('card-num-tip')", 2000);
    } else {
      creditCard["num"] = num;
      creditCard["name"] = name;
      creditCard["month"] = month;
      creditCard["year"] = year;
      creditCard["ccv"] = ccv;
      savePayment();
      paymentInfo();
    }
  });





  // checked billing address = shippingAddress
  $("input[id=sameAsShipping]").click(function() {
    if ($(this).prop("checked") == true) {
      billingAddress = JSON.parse(JSON.stringify(shippingAddress));

      savePayment();
      paymentInfo();
    } else if ($(this).prop("checked") == false) {
      savePayment();
      paymentInfo();
    }
  });



  //get shipping price
  $("input[type=radio]").click(function() {
    var checkedShipping = this.value;
    switch (checkedShipping) {
      case "stand-shipping":
        paymentPrice["shipping"] = 0;
        savePayment();
        paymentInfo();
        break;
      case "2day-shipping":
        paymentPrice["shipping"] = 8;
        savePayment();
        paymentInfo();
        break;
      default:
        paymentPrice["shipping"] = 0;
        savePayment();
        paymentInfo();
    }
  });

  //Place Order button
  $("#place-order").click(function() {
    saveOrderdate();
    window.location = "confirmation.html";
  });

  //Back to cart button
  $("#back-to-cart").click(function() {
    window.location = "cart.html";
  });

  //Back to cart button
  $("#restart").click(function() {
    clearAll();
    savePayment();
    paymentInfo();
  });




  loadCart();
  loadPayment();
  paymentInfo();


});
