var randomNumber = Math.floor(Math.random()*10);

var guess = prompt("Enter a number and try to find the random number!");
if (guess ===randomNumber && guess !=null) alert("You know!!!");

else if (guess =="") alert ("You entered empty!!");
else if (guess == null) alert("Stop logging in !!");
else{
    alert("Try again =(, Random Number " + randomNumber);
}
