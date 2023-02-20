// a way of generating a random number
let yourName = prompt("What is your name: ");
let theirName = prompt("What is their name: ");
var loveScore = Math.random()*100;
loveScore = Math.floor(loveScore) + 1;

// control flow using conditionals
if( loveScore > 30 && loveScore>=70){
    alert("Your love score is " + loveScore + "%. Your love is like how Kanye loves Kanye.");
}else if (loceScore <=30){
    alert("Your love score is " + loveScore + "%." + " It's like oild and water...");
}else{
    alert("Your love score is " + loveScore + "%.");
}