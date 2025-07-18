import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



function askQuestion() {
    rl.question('Enter a number: ', (input1) => {
        rl.question('Enter the power', (input2) => {
            const numb = Math.abs(parseInt(input1))
            const power = Math.abs(parseInt(input2))
            if (isNaN(numb) || isNaN(power)) {
                console.log("Please Enter a valid number.")
                askQuestion()
            } else {
                const factorial = findPowerOfNumber(numb, power)
                console.log("Factorial is = " + factorial)
                askQuestion()
            }
        })
    })
}

askQuestion()



function findPowerOfNumber(numb, power) {
    let calculate = 1;

    for (let i = 1; i <= power; i++) {
        calculate = calculate * numb
    }
    return calculate
}