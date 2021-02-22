function numeralSum(number) {
    if (number === Infinity) return Infinity;
    let sum = 0;
    number = convertNumber(number);
    let div = (x) => (x - x % 10) / 10;
    while (number != 0) 
    {
        sum += number % 10;
        number = div(number);
    }
    return sum;
}

function convertNumber(number) {
    let processing = String(number);
    let digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let result = "";
    for (let sym of processing)
        if (digits.indexOf(sym) != -1) result += sym;
    return Number(result);
}

module.exports.numeralSum = numeralSum;