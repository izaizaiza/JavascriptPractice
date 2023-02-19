// a way of generating a random number
let yourName = prompt("What is your name: ");
let theirName = prompt("What is their name: ");
var loveScore = Math.random()*100;
loveScore = Math.floor(loveScore) + 1;

// control flow using conditionals
if(loveScore > 75){
    alert("Your love score is " + loveScore + "%. Your love is like how Kanye loves Kanye.");
}else{
    alert("Your love score is " + loveScore + "%.");
}