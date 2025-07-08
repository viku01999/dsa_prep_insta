import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function askNumbers() {
    rl.question('Enter the year: ', (input1) => {
        const year = parseInt(input1);

        if (isNaN(year)) {
            console.log('Please enter a valid year.');
        } else {
            if (year < 0) {
                console.log('Year cannot be negative. Please enter a valid year.');
                askNumbers();
                return;
            }

            if (year.toString().length !== 4) {
                console.log('Please enter a valid 4-digit year.');
                askNumbers();
                return;
            }
            
            const isLeap = isThisLeapYear(year);
            if (isLeap) {
                console.log(`${year} is a leap year.`);
            } else {
                console.log(`${year} is not a leap year.`);
            }
        }
        askNumbers();
    });
}

askNumbers();


function isThisLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}