//strings lesson

// length of strings
/*Suppose the max amount of tweet is 100 characters. Code an 
alert that alerts user how much is remaining after they typed 
their prompt */
// var maxCount = 150;
// var tweet = prompt("Compose your tweet:");
// var tweetCount = tweet.length;
// alert("You have written " + tweetCount + " characters. You have " + (maxCount - tweetCount) + " characters remaining.");

// slicing strings
var herName = "Angela";

/*the parameters/args of slice() take in the start 
and end index of the substring you want*/
console.log(herName.slice(5,6)); 
console.log(herName.slice(0,3));

// challenge: change the letter case
console.log(herName.toUpperCase());
console.log(herName.toUpperCase(3,4)); // looks like it does'n take args

// so how do you only capitalize a particular character in a string?
var yourName = prompt("Enter your name: ");
var firstLetter = yourName.slice(0,1).toUpperCase();
alert("Hi, " + firstLetter + yourName.slice(1,yourName.length) + " welcome to Web World!");
