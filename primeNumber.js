import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function askNumbers() {
    rl.question('Enter a number:', (input) => {
        const number = parseInt(input);

        if (isNaN(number)) {
            console.log('Please enter a valid number.');
        } else {
            const isPrime = isThisPrimeNumber(number);
            if (isPrime) {
                console.log(`${number} is a prime number.`);
            } else {
                console.log(`${number} is not a prime number.`);
            }
        }
        askNumbers();
    })
}


askNumbers();

function isThisPrimeNumber(number) {
    if (number < 2) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;    
}