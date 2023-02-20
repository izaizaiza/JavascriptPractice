//  a function that generates the fibonacci sequence of n length

function generateFibonacci(n){
    let fiboArray = [0,1];
    let lastiIndex;
    let seclastiIndex;
    while(fiboArray.length < n){
        lastiIndex = fiboArray.length - 1;
        seclastiIndex = fiboArray.length-2;
        fiboArray.push(fiboArray[lastiIndex] + fiboArray[seclastiIndex]);
    }

    return fiboArray;
}

console.log(generateFibonacci(1));
console.log(generateFibonacci(2));
console.log(generateFibonacci(10));


// caughts the case when sequence is of only 1 length
function fibonacciGenerator(m){
    let output = [];
    if(m===1){
        output.push(0);
        return output;
    }
    else if(m===2){
        output.push(0,1);
        return output;
    }
    else{
        output = [0,1];
        while(output.length < m){
            let i = output.length-1;
            let j = output.length-2;
            output.push(output[i]+output[j]);
        }
        return output;
    }
}

console.log(fibonacciGenerator(1));
console.log(fibonacciGenerator(2));
console.log(fibonacciGenerator(10));