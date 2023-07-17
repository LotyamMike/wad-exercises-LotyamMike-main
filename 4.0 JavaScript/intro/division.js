//alert("I work!");

/*algorithm (JS)
0. When the divide button is clicked.. START
1. Getting the user input (DOM) -> Document Object Model
--1a. firstnumber
--1b. secondnumber
2. Division
(before we divide,ensure that)
--2a. the is a value
--2c. the value for the second number must not be zero
--2c. if all is well(2a,2b) then we divide
3. Display the result
--3a. get the element(DOM)
--3b. show the result in the result element
*/

/*
     When the divide button is clicked..Start
*/
//Method 1
//console.log(document);
//anonymous functions -- a function without a name
document.getElementById('calc')
.addEventListener('click',function(){
    console.log('someone clicked me!');
});

document.getElementById('snumber')
.addEventListener('mouseover',function(){
    console.log('some mouse hovered me!');
});

//Method 2
//using special html attributes(on...) and js function 

function divide() {
  console.log('Divide function called..');

  // 1. Getting the user input (DOM) -> Document Object Model
  let first_num = document.getElementById('fnumber').value;
  let second_num = document.getElementById('snumber').value;
  console.log("First number: " + first_num);
  console.log("Second number: " + second_num);

  // 2a. Check if the first and second value is not empty (there is a value)
  if (first_num == "") {
    //notify the user there is a problem
    document.getElementById('fnumber_error').innerHTML = "Please fill in the first value";
    document.getElementById('fnumber').classList.add('is-invalid');
    document.getElementById('fnumber').focus();
  } else if (second_num == "") {
    document.getElementById('snumber_error').innerHTML = "Please fill in the second value";
    document.getElementById('snumber').classList.add('is-invalid');
    document.getElementById('snumber').focus();
  }

  // 2c. Check if the value for the second number is not zero
  else if (parseFloat(second_num) == 0) {
    document.getElementById('snumber_error').innerHTML = "Please enter a non-zero value for the second value";
    document.getElementById('snumber').classList.add('is-invalid');
    document.getElementById('snumber').focus();
  }

  // 2c. If all is well (2a, 2b), then we can perform the division
  else {
    // Perform the division
    let result = first_num / second_num;

    // 3. Get the element to the result
    let result_element = document.getElementById('results');

    // 3b. Display the results
    result_element.innerHTML = result;
  }
}

/**
 * A function that clears error message for the associated input fields
 * It is executed onkeyup
 */
function clearMessage() {
  let first_num = document.getElementById('fnumber').value;
  let second_num = document.getElementById('snumber').value;

  if (first_num !== "") {
    document.getElementById('fnumber_error').innerHTML = "";
    document.getElementById('fnumber').classList.remove('is-invalid');
    document.getElementById('fnumber').classList.add('is-valid');
  } if (second_num !== "") {
    document.getElementById('snumber_error').innerHTML = "";
    document.getElementById('snumber').classList.remove('is-invalid');
    document.getElementById('snumber').classList.add('is-valid');
  }
}