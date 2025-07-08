import readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function askNumber() {
    rl.question('Enter a number: ', (input) => {
        const number = parseFloat(input);

        if (isNaN(number)) {
            console.log('Please enter a valid number.');
            // askNumber();
        } else {
            if (number % 2 === 0) {
                console.log('The number is even.');
            } else {
                console.log('The number is odd.');
            }
            // rl.close();
        }
        askNumber();
    });
}

askNumber();
