import readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function askNumber() {
    rl.question('Enter the first number: ', (input1) => {
        const firstNumber = parseFloat(input1);

        rl.question('Enter the second number: ', (input2) => {
            const secondNumber = parseFloat(input2);

            if (isNaN(firstNumber) || isNaN(secondNumber)) {
                console.log('Please enter valid numbers.');
            } else {
                const sum = returnSumOfNumbersInRange(firstNumber, secondNumber);
                console.log(`The sum of numbers between ${firstNumber} and ${secondNumber} is: ${sum}`);
            }
            askNumber();
        });
    });
}


askNumber();

function returnSumOfNumbersInRange(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        [firstNumber, secondNumber] = [secondNumber, firstNumber];
    }

    let sum = 0;

    for (let i = 0; i <= secondNumber; i++) {
        if (i >= firstNumber) {
            sum += i;
        }
    }
    return sum;

}