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
  var consonantBuffer = [];
  var vowelFound = false;
  var quFound = false;
  sentenceArray = sentence.split("");
  // for (var i = 0; i < sentenceArray.length; i++) {
  //   sentenceArray[i]
  // }
    for (var letter = 0; letter < sentenceArray.length; letter++) {
      if((sentenceArray[letter] + sentenceArray[letter + 1] === "qu")){
        consonantBuffer.push("q");
        consonantBuffer.push("u");
        break;
      }
      for (var vowel = 0; vowel < vowels.length; vowel++) {
        if(sentenceArray[letter] === vowels[vowel]){
          vowelFound = true;
          break;
        }
      }
      if(vowelFound){
          break;
      } else {
        consonantBuffer.push(sentenceArray[letter]);
      }
    }

    for (var vowel = 0; vowel < vowels.length; vowel++) {
      if(sentenceArray[0] === vowels[vowel]){
        for (var i = 0; i < sentenceArray.length; i++) {
          if( (sentenceArray[i] !== vowels[vowel]) &&  ( ((sentenceArray[i] + sentenceArray[i + 1])) === "qu") ) {
            //alert("i got here!");
            //debugger;
            consonantBuffer.push("q");
            consonantBuffer.push("u");
            quFound = true;
            sentenceArray.splice(i,2);
            break;
          }
        }
      }
      if(quFound)
      {
        break;
      }
    }
    if(quFound === false){
      for (var i = 0; i < consonantBuffer.length; i++) {
        sentenceArray.shift();
      }
    }
    sentenceArray = sentenceArray.concat(consonantBuffer);

  sentenceArray.push("a");
  sentenceArray.push("y");
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
