alert("I work!");
/*algorithm (JS)
1. Getting the user input (DOM) -> Document Object Model
1a.First number (value)
1b.Second number (value)
2. Division
(before we divide,make sure)
2a.The first and second value is NOT empty(there is a value)
2b.The values are numbers
2c.The second number is NOT zero
2d.Divide
3. Display the result
3a.Get the element to display the result
3b.Display the result in the element
*/

//0.When a user clicks the calculate button
$("#calc").click(function(){
 // 1. Getting the user input (DOM) -> Document Object Model
  let first_num = $('#fnumber').val();
  let second_num = $('#snumber').val();
  console.log("First number: " + first_num);
  console.log("Second number: " + second_num);

   // 2a. Check if the first and second value is not empty (there is a value)
  if (first_num == "") {
    //notify the user there is a problem
    $('#fnumber_error').html("Please fill in the first value");
    $('#fnumber').addClass('is-invalid');
    $('#fnumber').focus();
  } else if (second_num == "") {
    $('#snumber_error').html("Please fill in the second value");
    $('#snumber').addClass('is-invalid');
    $('#snumber').focus();
  }

  // 2c. Check if the value for the second number is not zero
  else if (parseFloat(second_num) == 0) {
    $('#snumber_error').html("Please enter a non-zero value for the second value");
    $('#snumber').addClass('is-invalid');
    $('#snumber').focus();
  }

  // 2c. If all is well (2a, 2b), then we can perform the division
  else {
    // 2d. Perform the division
    let result = first_num / second_num;

    // 3. Get the element to the result
    // 3b. Display the results
    $('#results').html(result);
  }
});

// Clearing the messages on keyup for the two input fileds.
$('.form-control').on('keyup',function(){
    let first_num = $('#fnumber').val();
    let second_num = $('#snumber').val();
  
    if (first_num !== "") {
      $('#fnumber_error').html (" ");
      $('#fnumber').removeClass('is-invalid');
      $('#fnumber').addClass('is-valid');
    } 
    if (second_num !== "") {
        $('#snumber_error').html (" ");
        $('#snumber').removeClass('is-invalid');
        $('#snumber').addClass('is-valid');
    }
});