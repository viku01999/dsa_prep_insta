import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function askInput() {
    rl.question("Enter a number: ", (input) => {
        const num = Math.abs(parseInt(input))
        if (isNaN(num)) {
            console.log("Please Enter a valid number")
            askInput()
        } else {
            const amsNum = checkIsArmStrongNumberOrNot(num)
            if (amsNum === num) {
                console.log("Armstrong number.")
                askInput()
            } else {
                console.log("Not armstrong")
                askInput()
            }
        }
    })
}


askInput()



function checkIsArmStrongNumberOrNot(num) {
    const numberString = String(num)
    const charArray = numberString.split('')
    const numberArray = charArray.map(Number)

    let calPowNum = 0;

    for (let i = 0; i <= numberArray.length - 1; i++) {
        const powNum = calculatePowerOfNumber(numberArray[i], numberArray.length)
        calPowNum = calPowNum + powNum
    }

    return calPowNum;
}


function calculatePowerOfNumber(numb, power) {
    let powerOfNumber = 1;

    while (power > 0) {
        powerOfNumber = powerOfNumber * numb
        power = power - 1
    }

    return powerOfNumber
}
