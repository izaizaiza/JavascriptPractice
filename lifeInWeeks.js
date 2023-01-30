// coding exercise
/* Create a function that tells us how many days, weeks and months
we have left until 90 years old. 
current age will be the input and 
console.logs a message with our time left in this format:
"You have x days, y weeks, and z months left."
Where x, y and z are replaced with the actual calculated numbers.
*/

function lifeInWeeks(age){
    let yearsRemaining = 90 - age;
    let months = yearsRemaining*12;
    let weeks = yearsRemaining*52;
    let days = yearsRemaining*365;

    console.log("You have " + days + " days," + weeks + " weeks, and " + months + " months left");
}

lifeInWeeks(23)
lifeInWeeks(51)