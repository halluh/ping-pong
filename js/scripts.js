function pingpong(startPoint) {
  if ((startPoint % 3 === 0 && startPoint % 5 === 0)) {
    return ('pingpong');
  } else if (startPoint % 5 === 0) {
    return ('pong');
  } else if (startPoint % 3 === 0) {
    return ('ping');
  } else {
    return startPoint;
  }
}


$(document).ready(function() {
  $('#sub').click(function(event) {
    // rawInput = $('input#number').val();
    var userNumber = parseInt($('input#pong').val());
    event.preventDefault();
    $('ul.numbersList').empty();
    for (var startPoint = 1; startPoint <= userNumber; startPoint += 1) {
      $('ul.numbersList').append('<li>' + pingpong(startPoint) + '</li>');
    }
  });
});