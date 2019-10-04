








//*** modal data***/
//Get item data on modal
function getItemData() {
  selectedQty = parseInt($('#modalQty :selected').text());
  message = $('#modalMessage').val();
  if (message == "") {
    personalization = false;
  }
}

// clear Item Data on modal after add an item to cart
function clearItemData() {
  document.getElementById("modalMessage").style.display = "none";
  $('#modalMessageCheck').prop('checked', false);
  $('#modalMessage').val('');
  message = "";
  personalization = false;
  selectedQty = 1;
  $('#modalQty :selected').text('1');
}
//*** modal data end***/









$(document).ready(function() {

  //add product to cart controller
  $("#productFormBtn").click(function() {
    getItemData();
    if (checkedSize == "") {
      document.getElementById("sizeTip").innerHTML = "(select a size.)";
      setTimeout("cleanTip('sizeTip')", 2000);
    } else {
      addItemToCart(selectedFrameId, selectedName, selectedImg, checkedSize, checkedPrice, selectedQty, personalization, message);
      saveCart();
      clearItemData();
      popoverBodyInnerHTML();
      document.getElementById("popoverHeading").innerHTML = "Total: $" + totalCart();
      document.getElementById("cartBadgeNum").innerHTML = totalQty();
    }
  });





  //Load data when open page

  loadCart();
  getItemData();
  popoverBodyInnerHTML();
  document.getElementById("popoverHeading").innerHTML = "Total: $" + totalCart();
  document.getElementById("cartBadgeNum").innerHTML = totalQty();

});
