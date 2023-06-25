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
      }, 1000)
    }

colorChanger();