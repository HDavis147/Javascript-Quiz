var topEl = $('.top');
var timerContainer = $('#timer');
var questionEl = $('#question');
var bottomEl = $('#bottom');
var timeDisplayer = $('#timeDisplay');
var buttonEl = $('#btn');
var answerEl = $('#answerList');



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

var timeLeft = 10;

function startQuiz() {
    
    timeDisplayer.text(timeLeft + " s");

    var quizInterval = setInterval(function () {
    var answerable = true;

        if((timeLeft > 0) && (answerable = true)) {
            timeLeft --;
            timeDisplayer.text(timeLeft + " s");
        } else if (timeLeft == 0) {
            timeDisplayer.text("Out of time.").css("color", "red");
            answerable = false;
            clearInterval(quizInterval);
        }
      }, 1000)

    

    var answers = ["10", "1", "1000", "100"];
    questionEl.text("What value is equal to one second in an interval function?");

    for(i=0; i<= answers.length -1; i++) {
    var answerLi = $('<li>');
    answerLi.addClass('list-item');
    answerLi.addClass('answer-button');
    answerEl.append(answerLi.text(answers[i]))
    }

    function decrementer(event) {
        timeLeft --;
        timeDisplayer.text(timeLeft + " s");
    }

    answerEl.on('click', '.answer-button', decrementer);
}



function getStarted(event) {
    //Removes button once clicked
    $(event.target).remove();
    startQuiz();
}

topEl.on('click', '.start-button', getStarted);
