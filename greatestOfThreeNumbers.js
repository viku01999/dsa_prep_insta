import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function askNumbers() {
    rl.question('Enter the first number: ', (input1) => {
        const firstNumber = parseFloat(input1);

        rl.question('Enter the second number: ', (input2) => {
            const secondNumber = parseFloat(input2);

            rl.question('Enter the third number: ', (input3) => {
                const thirdNumber = parseFloat(input3);

                if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
                    console.log('Please enter valid numbers.');
                } else {
                    const greatest = findGreatestOfThreeNumbers(firstNumber, secondNumber, thirdNumber);
                    console.log(`The greatest of the three numbers is: ${greatest}`);
                }
                askNumbers();
            });
        });
    });
}


askNumbers();

function findGreatestOfThreeNumbers(firstNumber, secondNumber, thirdNumber) {
    let greatest = firstNumber;

    if (secondNumber > greatest) {
        greatest = secondNumber;
    }
    if (thirdNumber > greatest) {
        greatest = thirdNumber;
    }

    return greatest;
}