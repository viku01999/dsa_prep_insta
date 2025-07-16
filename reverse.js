import readline from "readline";




/**
 * NOTE:
 * This script demonstrates two ways to reverse a number:
 * 
 * 1. reverseNumber(number)
 *    - Reverses a number mathematically (e.g., 120 -> 21)
 *    - Trailing zeroes are lost, since numbers like 001 are stored as 1
 * 
 * 2. reverseAsString(str)
 *    - Reverses the number as a string (e.g., "120" -> "021")
 *    - Preserves all characters, including leading/trailing zeroes
 */

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function askInput() {
    rl.question("Enter a number: ", (input) => {
        if (!input.trim()) {
            console.log("Input cannot be empty.");
            return askInput();
        }

        if (input.toLowerCase() === "exit") {
            console.log("Goodbye!");
            rl.close();
            return;
        }

        const parsedNum = parseInt(input);

        if (isNaN(parsedNum)) {
            console.log("Please enter a valid number.");
            return askInput();
        }

        const num = Math.abs(parsedNum);

        const revNum = reverseNumber(num);

        const revStr = reverseAsString(input);

        console.log(`Reversed as number: ${revNum}`);
        console.log(`Reversed as string: "${revStr}"`);

        askInput();
    });
}

askInput()


function reverseNumber(number) {
    let reverseNumber = 0;
    while (number !== 0) {
        const rem = number % 10;
        reverseNumber = reverseNumber * 10 + rem;
        number = Math.floor(number / 10);
    }
    return reverseNumber;
}


function reverseAsString(str) {
    return str.split('').reverse().join('');
}
