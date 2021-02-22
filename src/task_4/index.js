function average(numbersString) {
    let sum = 0;
    let nums = numbersString.split(',');
    for (let num of nums)
        sum += Number(num);
    return sum == 0 ? 0 : sum / nums.length;
}

module.exports.average = average;