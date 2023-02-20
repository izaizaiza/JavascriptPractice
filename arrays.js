// Write a program that prints the numbers from 1 to 100.
// But for multiples of three, print "Fizz" instead of the number
// and for multiples of five, print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

function FizzBuzz(startNum, endNum){
    let  initialNum = startNum;
    let addends = 1;
    let sum = initialNum;

    while( sum != endNum){
        sum += addends;
        console.log(sum);
        if(sum%3==0 && sum%5==0){
            console.log("FizzBuzz");
        }else if(sum%5==0){
            console.log("Buzz");
        }else if(sum%3==0){
            console.log("Fizz");
        }
        else{
            console.log("not a multiple of 3 nor 5");
        }
    }
}

FizzBuzz(0,100);


// make an array that stores it
function FizzBuzz2(startNum, endNum){
    let fbArray = [];
    let  initialNum = startNum;
    let addends = 1;
    let sum = initialNum;

    while( sum != endNum){
        sum += addends;
        console.log(sum);
        if(sum%3==0 && sum%5==0){
            fbArray.push("FizzBuzz");
            console.log(fbArray);
        }else if(sum%5==0){
            fbArray.push("Buzz");
            console.log(fbArray);
        }else if(sum%3==0){
            fbArray.push("Fizz");
            console.log(fbArray);
        }
        else{
            fbArray.push(sum);
            console.log("not a multiple of 3 nor 5");
        }
    }
}

FizzBuzz2(0,100);


let namesList = ["Angela","Ben","Jen","Micky","Clo"];
function whosPaying(names){
    var numOfPeople = names.length;

    //since Math.random is 0-0.999
    var randomIndex = Math.floor(Math.random()*numOfPeople);
    return "The person paying is " + names[randomIndex];
}

alert(whosPaying(namesList));
