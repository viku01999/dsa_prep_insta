import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function askInput() {
    rl.question("Enter first number: ", (fInput) => {
        rl.question("Enter second number: ", (sInput) => {
            const fNum = Math.abs(parseInt(fInput))
            const sNum = Math.abs(parseInt(sInput))
            if (isNaN(fNum) || isNaN(sNum)) {
                console.log("Please Enter valid number")
                askInput()
            } else {
                checkArmStrongBWRange(fNum, sNum)
                askInput()
            }
        })
    })
}


askInput()


function checkArmStrongBWRange(fNum, sNum) {
    if (fNum > sNum) {
        [fNum, sNum] = [sNum, fNum]
    }

    for (let i = fNum; i <= sNum; i++) {
        const amsNum = checkIsArmStrongNumberOrNot(i)
        if (amsNum === i) {
            console.log(`Armstrong number:- ${amsNum}`)
        }
    }
}



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
