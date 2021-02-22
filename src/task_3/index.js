function countAge(birthYear) 
{
    var currentYear = new Date().getFullYear();
    var result = currentYear - birthYear;
    if (result >= 0 && isInteger(result) && result <= currentYear) return result;
    throw new Error();
}

function isInteger(year) 
{
    return (year ^ 0) === year;
}

module.exports.countAge = countAge;