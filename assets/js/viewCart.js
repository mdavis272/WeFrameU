/******creat cart table body HTML****/
function cartTableInnerHTML() {
  var cartCopy = listCart();
  var output = "";
  for (var i in cartCopy) {
    if (cart[i].personalization) {
      output += "<tr><td><img src='assets/img/frames/" + cartCopy[i].img + "' width=80px></td><td><b>" +
        cartCopy[i].name + "</b><br>" +
        cartCopy[i].size + "<br>'" +
        cartCopy[i].message + "' +$" + personalizationCost(i) +
        "<br><a class='delete-item' data-name='" + i + "' style='color:#b4b4b4;'>Delete</a></td><td>" +
        cartCopy[i].qty + "</td><td><b>  $" +
        subTotalCart(i) + "</b></td></tr>";
    } else {
      output += "<tr><td><img src='assets/img/frames/" + cartCopy[i].img + "' width=80px></td><td><b>" +
        cartCopy[i].name + "</b><br>" +
        cartCopy[i].size +
        "<br><a class='delete-item' data-name='" + i + "' style='color:#b4b4b4;'>Delete</a></td><td>" +
        cartCopy[i].qty + "</td><td><b>  $" +
        subTotalCart(i) + "</b></td></tr>";
    }
  }
  $("#cartTableBody").html(output); //renew html file
  document.getElementById("cartTableTotal").innerHTML = "Total: $" + totalCart();
}

//Remove one item from cart table
function removeItemFromCartTable(index) {
  cart.splice(index, 1);
  saveCart();
}








$(document).ready(function() {


  //Remove all items in cart
  $("#removeAll").click(function() {
    cart = [];
    saveCart();
    cartTableInnerHTML();
    document.getElementById("cartBadgeNum").innerHTML = totalQty();
  });

  //delete Product on cart table when click delect

  $("#cartTableBody").on("click", ".delete-item", function(event) {
    var index = $(this).attr("data-name");
    removeItemFromCartTable(index);
    cartTableInnerHTML();
  });


  loadCart();
  cartTableInnerHTML();
});
