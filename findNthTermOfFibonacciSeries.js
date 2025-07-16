import readline from "readline";




const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function askInput() {
    rl.question("Enter the nth term number: ", (nthTerm) => {
        const number = Math.abs(parseInt(nthTerm))
        if (isNaN(number) || number <= 0) {
            console.log("Please enter valid number ")
            askInput()
        } else {
            const series = checkFibonacci(number)
            console.log("Nth term is: ", series)
            askInput()
        }
    })
}


askInput()

function checkFibonacci(number) {
    const arrayOfSeries = [];

    let a = 0, b = 1;
    if (number >= 1) arrayOfSeries.push(a);

    if (number >= 2) arrayOfSeries.push(b);

    while (arrayOfSeries.length < number) {
        let c = a + b;
        arrayOfSeries.push(c)
        a = b
        b = c
    }

    return arrayOfSeries.pop()

}