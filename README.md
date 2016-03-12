###Modulo Demonstration for 3 5 & 15

Takes user input, returns number values which are not divisible by 3 5 or 15  

####Date of Version:12/March/2016

Author:  ~~Eben~~

###Description

Any numerical input > 0 is iterated over, starting at 1 until the number which was given as an input is reached. The iterative process is one wherein the number value given by the user as input is counted up toward, with each number between 1 and the number given as user input being assessed by conditional statements which determine whether or not the number value is divisible by 3, 5, or 15. 

If the number is divisible by 3, 5, or 15 the returned value of the number and the statement ‘is divisible by’ is stored in an array. If the number is not divisible by 3, 5, or 15, the number counting up to the input is stored in an array.

Both conditions store values within the same array.

This array is then converted into a string, with each element within the array given the HTML tags ````<li> and </li>````.

This string is then output, as an ordered list.

Each time the user inputs an new value, this string is added onto and is displayed. 

###Setup/Installation Requirements

* Input a value greater than 0.

* Click Submit.

## Known Bugs

The string which stores the output value can get quite large if large numbers are submitted.

## Support and contact details

If there are any problems shoot me an e-mail: ebenewood@yahoo.com

## Technologies Used

JS, Jquery, HTML, CSS

### License

There are no licenses attributed to this code whatsoever.
