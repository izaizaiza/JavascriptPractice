// create a BMI calculator using JavaScript Functions
// formula = bmi = weight (kg) / height squared (meters squared)

function bmiCalculator(weight,height){
    bmi = weight / (height**2);
    return bmi
}

var bmi = bmiCalculator(65,1.8);
console.log(bmi);
