import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function askNumbers() {
    rl.question('Enter the first number: ', (input1) => {
        const firstNumber = parseFloat(input1);

        rl.question('Enter the second number: ', (input2) => {
            const secondNumber = parseFloat(input2);

            if (isNaN(firstNumber) || isNaN(secondNumber)) {
                console.log('Please enter valid numbers.');
            } else {
                const greatest = findGreatestOfTwoNumbers(firstNumber, secondNumber);
                console.log(`The greatest of the two numbers is: ${greatest}`);
            }
            askNumbers();
        });
    });
}

function findGreatestOfTwoNumbers(firstNumber, secondNumber) {
    return firstNumber > secondNumber ? firstNumber : secondNumber;
}

askNumbers();