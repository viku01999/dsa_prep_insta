import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function askNumber() {
    rl.question("Enter the number:-", (input) => {
        const number = Math.abs(parseInt(input));

        if (isNaN(number)) {
            console.log("Please Enter a valid number")
            askNumber()
        } else {
            
        }
    })
}


askNumber()