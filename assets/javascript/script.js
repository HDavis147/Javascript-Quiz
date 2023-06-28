var topEl = $('.top');
var timerContainer = $('#timer');
var questionEl = $('#question');
var bottomEl = $('#bottom');
var timeDisplayer = $('#timeDisplay');
var buttonEl = $('#btn');



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


function startQuiz() {
    var timeLeft = 10;
    var quizInterval = setInterval(function () {
    var answerable = true;
    
        if((timeLeft > 0) && (answerable = true)) {
            timeDisplayer.text(timeLeft + " s");
            timeLeft --;
        } else if (timeLeft == 0) {
            timeDisplayer.text("Out of time.").css("color", "red");
            answerable = false;
            clearInterval(quizInterval);
        }

    questionEl.text("What is Javascript?");
    
      }, 1000)
    
}



function getStarted(event) {
    //Removes button once clicked
    $(event.target).remove();
    startQuiz();
}

topEl.on('click', '.start-button', getStarted);


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