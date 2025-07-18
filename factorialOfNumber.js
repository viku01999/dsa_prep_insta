import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



function askQuestion() {
    rl.question('Enter a number: ', (input) => {
        const number = Math.abs(parseInt(input))
        if (isNaN(number)) {
            console.log("Please Enter a valid number.")
            askQuestion()
        } else {
            const factorial = findFactorialOfANumber(number)
            console.log("Factorial is = " + factorial)
            askQuestion()
        }
    })
}

askQuestion()



function findFactorialOfANumber(num) {
    let fact = 1;

    while (num > 0) {
        fact = fact * num
        num--
    }

    return fact
}