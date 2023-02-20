// create a BMI calculator using JavaScript Functions
// formula = bmi = weight (kg) / height squared (meters squared)


function bmiCalculator(weight,height){
    var bmi = Math.round(weight / (height**2));
    let interpretation="";
    if( bmi < 18.5){
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }else if (bmi>= 18.5 && bmi<= 24.9){
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }else{
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}

let yourWeight = prompt("Enter your weight (kg): ");
let yourHeight = prompt("Enter your height (m): ");
alert(bmiCalculator(yourWeight,yourHeight));
