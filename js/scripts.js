// Business Logic
function leap(year){
  if((year%4 === 0 && year%100 !== 0) || year%400 === 0){
    return true;
  } else {
    return false;
  }
}

function translate(sentence) {
  var vowels = ["a", "e", "i", "o", "u"];
  var sentenceArray = [];
  sentenceArray = sentence.split("");
  for (var vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    if(sentenceArray[0] === vowels[vowelIndex]){
      sentenceArray.push("a");
      sentenceArray.push("y");
    }
  }
  alert(sentenceArray);
  sentence = sentenceArray.join("");
  return sentence;
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
  $("#pig").submit(function(event){
    $("#hidden1").hide();
    var sentence = $("#pigSentence").val().toLowerCase();
    $('#translatedSentence').text((translate(sentence)));
    $("#hidden1").slideDown();
    event.preventDefault();
  });
});
