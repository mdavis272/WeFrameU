//************  The Product modal ************//
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];




//************  The Product modal End ************//


//************  The Product info ************//


var sizes = [
  ["3\"x5\"", "5\"x7\"", "8\"x11\"", "11\"x14\"", "16\"x20\"", "7pc", "9pc", "3pc", "multiple"],
  [10, 12, 15, 20, 25, 88, 95, 30, 35],
];

var frames = [
  //names
  ["Ztiab Metal Wall Frame", "Selarom Wood Wall Frame", "Avonasac Dark Wood Wall Frame", "Nehc Wood Wall Frame",
    "Enilc Wood Wall Frame", "Sivad Wood Wall Frame", "Sse Glass Wall Frame", "Yelof Metal Wall Frame",
    "Shcuf Plastic Tabletop Frame", "Gnog Plastic Tabletop Frame", "Lenheah Plastic Tabletop Frame", "Sirrah Wood Tabletop Frame",
    "Nosnhoj Metal Tabletop Frame", "Elkrem Metal Tabletop Frame", "Lekean Wood Tabletop Frame", "Inirgellep Glass Tabletop Frame",
    "Snibbor Plastic Frame Set", "Mussur Wood Frame Set", "Htims Wood Frame Set", "Notpit Metal Frame Set"
  ],
  // prices
  ["$20-$25", "$15-$25", "$15-$20", "$25",
    "$20-$25", "$15-$20", "$20-$25", "$15-$25",
    "$10-$15", "$10-$12", "$10-$12", "$12-$15",
    "$15", "$12", "$12-$15", "$10-$12",
    "$88", "$95", "$30", "$35"
  ],
  //img names
  ["f1.jpg", "f2.jpg", "f3.jpg", "f4.jpg", "f5.jpg",
    "f6.jpg", "f7.jpg", "f8.jpg", "f9.jpg", "f10.jpg",
    "f11.jpg", "f12.jpg", "f13.jpg", "f14.jpg", "f15.jpg",
    "f16.jpg", "f17.jpg", "f18.jpg", "f19.jpg", "f20.jpg"
  ],
  //size number
  [
    [3, 4, null],
    [2, 3, 4],
    [2, 3, null],
    [4, null, null],
    [3, 4, null],
    [2, 3, null],
    [3, null, null],
    [2, 3, 4],
    [0, 1, 2],
    [0, 1, null],
    [0, 1, null],
    [1, 2, null],
    [2, null, null],
    [1, null, null],
    [1, 2, null],
    [0, 1, null],
    [5, null, null],
    [6, null, null],
    [7, null, null],
    [8, null, null],
  ],
  //frame id
  [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008,
    2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
    3001, 3002, 3002, 3004
  ],
];

// use for other js files
var selectedName = "";
var selectedFrameId = 0;
var checkedPrice = 0;
var checkedSize = "";
var personalization = false;
var selectedQty = 1;
var message = "";
var selectedImg = "";


var fLen = frames[0].length;
function DisplayItems(){
  var i = 0;
  for (i = 0; i < fLen; i++) {
    document.getElementById("fname" + (i + 1)).innerHTML = frames[0][i];
    document.getElementById("fimg" + (i + 1)).src = "assets/img/frames/" + frames[2][i];
    document.getElementById("fprice" + (i + 1)).innerHTML = frames[1][i]
  }
}




// Show Modal Text
function ShowModalText(e) {
  var frameId = e - 1;
  selectedFrameId = frames[4][frameId];
  selectedName = frames[0][frameId];
  document.getElementById("modalName").innerHTML = frames[0][frameId];
  document.getElementById("modalImg").src = "assets/img/frames/" + frames[2][frameId];
  selectedImg = frames[2][frameId];
  document.getElementById("modalPrice").innerHTML = frames[1][frameId];
  modal.style.display = "block";
}

// Show Frames Sizes
function ShowSizes(e) {
  var frameId = e - 1;
  var sizeLa1 = frames[3][frameId][0];
  var sizeLa2 = frames[3][frameId][1];
  var sizeLa3 = frames[3][frameId][2];

  if (sizeLa2 != null && sizeLa3 != null) {
    document.getElementById("modalSizeLa1").innerHTML = sizes[0][sizeLa1];
    document.getElementById("modalSizeLa2").innerHTML = sizes[0][sizeLa2];
    document.getElementById("modalSizeLa3").innerHTML = sizes[0][sizeLa3];
    document.getElementById("modalSize2").style.visibility = "visible";
    document.getElementById("modalSize3").style.visibility = "visible";
  } else if (sizeLa2 == null && sizeLa3 == null) {
    document.getElementById("modalSize1").checked = true;
    checkedSize = sizes[0][sizeLa1];
    checkedPrice = sizes[1][sizeLa1];
    document.getElementById("modalSizeLa1").innerHTML = sizes[0][sizeLa1];
    document.getElementById("modalSizeLa2").innerHTML = "";
    document.getElementById("modalSizeLa3").innerHTML = "";
    document.getElementById("modalSize2").style.visibility = "hidden";
    document.getElementById("modalSize3").style.visibility = "hidden";
  } else if (sizeLa2 != null && sizeLa3 == null) {
    document.getElementById("modalSizeLa1").innerHTML = sizes[0][sizeLa1];
    document.getElementById("modalSizeLa2").innerHTML = sizes[0][sizeLa2];
    document.getElementById("modalSizeLa3").innerHTML = "";
    document.getElementById("modalSize2").style.visibility = "visible";
    document.getElementById("modalSize3").style.visibility = "hidden";
  }

}


//************  Open The Product modal ************//


$(document).ready(function() {

  //Buttens to Open The Product modal
  for (let r = 0; r < 21; r++) {
    $("#myBtn" + r).click(function() {
      RenewModal();
      ShowModalText(r);
      ShowSizes(r);
      PriceByCheckedSize(r);
      return false;
    });
  }



  /**********Close the modal****/
  function RenewModal() {
    document.getElementById("modalSize1").checked = false;
    document.getElementById("modalSize2").checked = false;
    document.getElementById("modalSize3").checked = false;
    checkedPrice = 0;
    checkedSize = "";
    selectedName = "";
    selectedImg = "";
    personalization = false;
    selectedFrameId = 0;
    selectedQty = 1;
    $('#modalQty :selected').text('1');
    message = "";
    $('#modalMessage').val('');
    $('#modalMessageCheck').prop('checked', false);
    document.getElementById("modalMessage").style.display = "none";
  }



  // Change Price By Checked Size

  function PriceByCheckedSize(e) {
    var frameId = e - 1;
    var sizeLa1 = frames[3][frameId][0];
    var sizeLa2 = frames[3][frameId][1];
    var sizeLa3 = frames[3][frameId][2];
    $("input[type=radio]").click(function() {
      var checkedRadio = this.value;
      switch (checkedRadio) {
        case "radio1":
          checkedSize = sizes[0][sizeLa1];
          checkedPrice = sizes[1][sizeLa1];
          document.getElementById("modalPrice").innerHTML = "$" + checkedPrice;
          break;
        case "radio2":
          checkedSize = sizes[0][sizeLa2];
          checkedPrice = sizes[1][sizeLa2];
          document.getElementById("modalPrice").innerHTML = "$" + checkedPrice;
          break;
        case "radio3":
          checkedSize = sizes[0][sizeLa3];
          checkedPrice = sizes[1][sizeLa3];
          document.getElementById("modalPrice").innerHTML = "$" + checkedPrice;
          break;
          default:
          checkedSize = sizes[0][sizeLa1];
          checkedPrice = sizes[1][sizeLa1];
          document.getElementById("modalPrice").innerHTML = "$" + checkedPrice;
      }
    });
  }

  // display personalization textbox
  $("input[type=checkbox]").click(function() {
    if ($(this).prop("checked") == true) {
      document.getElementById("modalMessage").style.display = "initial";
      personalization = true;
    } else if ($(this).prop("checked") == false) {
      document.getElementById("modalMessage").style.display = "none";
      $('#modalMessageCheck').prop('checked', false);
      personalization = false;
      $('#modalMessage').val('');
      message = "";
    }
  });

  DisplayItems();


});



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
