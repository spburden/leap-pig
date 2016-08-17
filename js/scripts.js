// Business Logic
function leap(year){
  if((year%4 === 0 && year%100 !== 0) || year%400 === 0){
    return true;
  } else {
    return false;
  }
}
// User Interface
$(document).ready(function(){
  $("#leap").submit(function(event){
    event.preventDefault();
    $("#hidden").hide();
    $("#not").text("");
    var year = parseInt($('#year').val());
    var bool = leap(year);
    if (!bool) {
      $("#not").text("NOT");
    }
    $("#hidden").slideDown();
  });
});
