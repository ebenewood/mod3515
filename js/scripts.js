var a;
var numArray = [];

function divCheck (num) {
  for ( i = num; num > 0; num-- ) {
    if ( num % 3 != 0 && num % 5 != 0 ) {
      a = num;
      numArray.unshift(a);
    } else if ( num % 3 == 0 && num % 5 == 0 ) {
      a = 'fifteen'
      numArray.unshift(a);
    } else if ( num % 3 == 0 && num % 5 != 0 ) {
      a = 'three'
      numArray.unshift(a);
    } else if ( num % 5 == 0 && num % 3 != 0 ) {
      a = 'five'
      numArray.unshift(a);
    };
  };
  return numArray;
};

function parseArray (array) {
  for ( i = 0; i <= ( array.length - 1 ); i++ ) {
    document.write(array[i]);
  };
};

$(function () {
    $('form').submit(function() {
      event.preventDefault();
      $('result').text(parseArray(divCheck($('#userInput').val())));
    });
});
