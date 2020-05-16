

//After user inputs month and click the button,the funcion is called
function even() {
  userInput = document.getElementById('myInput').value;
  show = document.getElementById('show');

  
  //userinput for months that have 31 days 
  if(
    userInput === 'January' || userInput === 'january' ||
    userInput === 'March' || userInput === 'march' ||
    userInput === 'May' || userInput === 'may' ||
    userInput === 'July' || userInput === 'july' ||
    userInput === 'August' || userInput === 'august' ||
    userInput === 'October' || userInput === 'october'||
    userInput === 'December' || userInput === 'december' 
    ){
    show.innerHTML = userInput + ' has thirty-one (31) days in its month';
  }
  // the userInput for the month of February 
 else if(userInput === 'February' || userInput === 'february' ){
   show.innerHTML = 'February has twenty-eight (28) days or twenty-nine (29) days in a leap year';
 }
  
  //userInputs for months that have only 30 days

  else if(
    userInput === 'April' || userInput === 'april' ||
    userInput === 'November' || userInput === 'november' ||
    userInput === 'September' || userInput === 'september' ||
    userInput === 'June' || userInput === 'june'
    ){
    show.innerHTML = userInput + ' has thirty (30) days in its month';
  }
  //If the input field is blank
  else if( userInput === ''){
    show.innerHTML = 'Users must input a value, input field cannot be left blank';
  }

  //If the user inputs wrong letter cases or short form
  else{
    show.innerHTML = 'You either capitalize or use lowercase for the first letter'
  }

}