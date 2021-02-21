function numeralSum(number) 
{
    if (number == Infinity) return Infinity;
    number = convertNumber(number);
    var sum = 0;
    while (number != 0) {
        sum += number % 10;
        number = div(number);
    }
    return sum;
}

function convertNumber(number)
{
    var processing = String(number);
    var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var result = "";
    for (var sym of processing)
        if (digits.indexOf(sym) != -1) result += sym;
    return Number(result);
}

function div(x, sub = 10)
{
    return (x - x % sub) / sub;
}

module.exports.numeralSum = numeralSum;
