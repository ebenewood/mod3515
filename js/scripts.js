var a;
var numArray = [];
var output = [];

function divCheck (num) {
  for ( i = num; num > 0; num-- ) {
    if ( num % 3 != 0 && num % 5 != 0 ) {
      a = ' ' + num + ' ';
      numArray.unshift(a);
    } else if ( num % 3 == 0 && num % 5 == 0 ) {
      a = ' divisible by 15 '
      numArray.unshift(a);
    } else if ( num % 3 == 0 && num % 5 != 0 ) {
      a = ' divisible by 3 '
      numArray.unshift(a);
    } else if ( num % 5 == 0 && num % 3 != 0 ) {
      a = ' divisible by 5 '
      numArray.unshift(a);
    };
  };
  return numArray;
};

function parseArray (array) {
  output = '';
  for ( i = 0; i <= (array.length - 1); i++ ) {
    output += '<li>' + array[i] + '</li>'
  };
};

function parDiv (input) {
  parseArray(divCheck(input));
};

$(function () {
  $('form').submit(function () {
    event.preventDefault();
    parDiv($('#userInput').val());
    document.getElementById('result').innerHTML = output;
  });
});
