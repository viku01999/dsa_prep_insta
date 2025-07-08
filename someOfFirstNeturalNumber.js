import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



function askNumber() {
    rl.question('Enter a number: ', (input) => {
        const number = parseFloat(input);

        if (isNaN(number) || number < 1) {
            console.log('Please enter a valid number.');
            // askNumber();
        } else {
            const sum = returnSumOfNeturalNumber(number);
            console.log(`The sum of the first ${number} natural numbers is: ${sum}`);
            // rl.close();
        }
        askNumber();
    });
}

askNumber();


function returnSumOfNeturalNumber(number) {
    // without time complexity
    // let sum = 0;
    // for (let i = 1; i <= number; i++) {
    //     sum += i;
    // }
    // return sum;

    // with time complexity
    return (number * (number + 1)) / 2;
}


