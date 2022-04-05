var executeButton;
var outputParagraph;
var inputElement;
var dadJokes = ["What did one pirate say to the other when he beat him at chess? checkmatey", "I burned 2000 calories today<>I left my food in the oven for too long.","I startled my next-door neighbor with my new electric power tool. <>I had to calm him down by saying 'Don’t worry, this is just a drill!'"];
// var dadJokes = [jokes.txt]

window.addEventListener('DOMContentLoaded', function(){

executeButton = document.getElementById("joke-button");
outputParagraph = document.getElementById("outputText");
inputElement = document.getElementById("user-input");

executeButton.addEventListener("click", function(){
gentext();
  });

});

function gentext(){
  var linebreak = '\n';
  var currentInputText = inputElement.value;

  var randomJokeIndex = Math.floor(Math.random()*dadJokes.length);
  outputParagraph.innerText = currentInputText + ", your dad joke of the day is:" + linebreak + dadJokes[randomJokeIndex];

  restyleOutput()

}

function restyleOutput() {

  /// Modifying css directly

  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;

  // console.log("R: " + randomRed);
  // console.log("G: " + randomGreen);
  // console.log("B: " + randomBlue);

  // rgb(100,140,200);

  var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  // console.log(outputColorString);

  outputParagraph.style.color = outputColorString;


}


// console.log(dadJokes);
// fetch('media/jokes.txt')
//  .then(response => {
//    return response.text();
//  })
//  .then(text=> {
//   document.getElementById('outputText').scr = URL.createobjectURLtext(text);
//   console.log(text);
// });
