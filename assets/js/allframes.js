

var set_arr = [17, 18, 19, 20];
var wall_arr = [1, 2, 3, 4, 5, 6, 7, 8];
var table_arr = [9, 10, 11, 12, 13, 14, 15, 16];
var wall_arr2 = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var wood_arr = [2, 3, 4, 5, 6, 12, 15, 18, 19];
var metal_arr = [1, 8, 13, 14, 20];
var plastic_arr = [9, 10, 11, 17];
var glass_arr = [7, 16];

var s3x5_arr = [9, 10, 11, 16];
var s5x7_arr = [9, 10, 11, 12, 14, 16];
var s8x11_arr = [2, 3, 6, 8, 9, 12, 13, 15];
var s11x14_arr = [1, 2, 3, 5, 6, 7, 8];
var s16x20_arr = [1, 2, 4, 5, 8];

//get dropbox value
function GetSelText(txt) {
  var selText = txt;

  switch (selText) {
    case "Wall Frames":
      ShowAllItems();
      HideItems(wall_arr);
      break;
    case "Tabletop Frames":
      ShowAllItems();
      HideItems(table_arr);
      break;
    case "Frame Sets":
      ShowAllItems();
      HideItems(set_arr);
      break;
    case "Wood":
      ShowAllItems();
      HideItems(wood_arr);
      break;
    case "Metal":
      ShowAllItems();
      HideItems(metal_arr);
      break;
    case "Glass":
      ShowAllItems();
      HideItems(glass_arr);
      break;
    case "Plastic":
      ShowAllItems();
      HideItems(plastic_arr);
      break;
    case '3"x5"':
      ShowAllItems();
      HideItems(s3x5_arr);
      break;
    case '5"x7"':
      ShowAllItems();
      HideItems(s5x7_arr);
      break;
    case '8"x11"':
      ShowAllItems();
      HideItems(s8x11_arr);
      break;
    case '11"x14"':
      ShowAllItems();
      HideItems(s11x14_arr);
      break;
    case '16"x20"':
      ShowAllItems();
      HideItems(s16x20_arr);
      break;
    default:
      ShowAllItems();
  }


}

//Hide item not in the arrar
function HideItems(arr) {
  var i;
  for (i = 1; i < 21; i++) {
    if (!arr.includes(i)) {
      document.getElementById("f" + i).style.display = "none";
    }
  }
}

//Hide item not in the arrar
function ShowAllItems() {
  var i;
  for (i = 1; i < 21; i++) {
    document.getElementById("f" + i).style.display = "initial";
  }
}




$(document).ready(function() {

  $("#tableMenu1 a").click(function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    $("#tableButton1").text(selText);
    GetSelText(selText);
  });

  $("#tableMenu2 a").click(function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    $("#tableButton2").text(selText);
    GetSelText(selText);
  });


  $("#tableMenu3 a").click(function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    $("#tableButton3").text(selText);
    GetSelText(selText);
  });





});
