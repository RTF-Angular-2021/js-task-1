function average(numbersString) 
{
    var sum = 0;
    var nums = numbersString.split(',');
    for (var num of nums)
        sum += Number(num);
    return sum == 0 ? 0 : sum / nums.length;
}

module.exports.average = average;