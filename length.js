// length of strings
/*Suppose the max amount of tweet is 100 characters. Code an 
alert that alerts user how much is remaining after they typed 
their prompt */
var maxCount = 150;
var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters. You have " + (maxCount - tweetCount) + " characters remaining.");