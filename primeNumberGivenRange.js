import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function askNumbers() {
    rl.question("Enter the first number:- ", (firstNumber) => {
        rl.question("Enter the second number:-", (secondNumber) => {
            const firstNum = Math.abs(parseInt(firstNumber));
            const secondNum = Math.abs(parseInt(secondNumber));

            if (isNaN(firstNum) || isNaN(secondNum) || (firstNum === secondNum)) {
                console.log("Please enter valid numbers, and they must not be equal.");
                rl.close();
                return;
            } else {
                if (firstNum > secondNum) {
                    [firstNum, secondNum] = [secondNum, firstNum];
                }

                findNumberFunction(firstNum, secondNum);

                askNumbers()
            }
        })
    })
}


function findNumberFunction(range1, range2) {
    console.log(`Prime numbers between ${range1} and ${range2}:`);
    for (let i = range1; i <= range2; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}


function isPrime(number) {
    if (number < 2) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

askNumbers();