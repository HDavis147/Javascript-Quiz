var topEl = $('.top');
var timerEl = $('#timer');
var questionEl = $('#question');
var bottomEl = $('#bottom');

function colorChanger() {
    var iterate = true;
    var titleSpan = $('#title-flair');
    var flairColors = ["red", "blue", "green", "yellow", "orange", "orangered", "magenta", "aqua", "lightgreen", "slateblue", "indianred", "plum"];
  
      var timeInterval = setInterval(function () {
        var flairChoice = flairColors[Math.floor(Math.random() * (flairColors.length))];
        if(iterate = true) {
            $(titleSpan).css('color', flairChoice);
        } else{
            clearInterval(timeInterval);
        }
      }, 225)
    }

colorChanger();


function startGame(event) {
    //Removes button once clicked
    $(event.target).parent().remove();
}

topEl.on('click', '.start-button', startGame);


// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score