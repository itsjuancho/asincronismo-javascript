function sum(num1, num2) {
    return num1 + num2;
}

function calculate(num1, num2, cb) {
    return cb(num1, num2);
}

const result = calculate(15, 2, sum);

console.log(result);

function date(callback) {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date();
        callback(date);
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);