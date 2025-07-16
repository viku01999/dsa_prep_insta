import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function askInput() {
    rl.question("Enter a number: ", (input) => {

        if (isNaN(input)) {
            const reverseOutput = reverseInput(input)
            if (input === reverseOutput) {
                console.log("This is palindrome.")
            } else {
                console.log("Not palindrome")
            }
        } else {
            const num = Math.abs(parseInt(input))
            const reverseOutput = reverseInput(num.toString())

            if (num === parseInt(reverseOutput)) {
                console.log("This is palindrome.")
            } else {
                console.log("Not palindrome")
            }
        }
        askInput()
    })
}


askInput()

function reverseInput(input) {
    let rev = '';
    const arrayOfNum = input.split('')


    for (let i = arrayOfNum.length - 1; i >= 0; i--) {
        rev += arrayOfNum[i];
    }

    return rev
}