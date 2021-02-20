function numeralSum(number) {
    
    if (isNaN(number)) {
        return 0
    }
  let sum = 0
  number = Math.abs(number)
    let numberString = number.toString();
    numberString = numberString.replace('.', '')
        for (let symbol of numberString) {   
            sum += parseInt (symbol, 10)
    }
    if (number === Infinity) {
        return Infinity
    }
    return (sum)
}
module.exports.numeralSum = numeralSum;
