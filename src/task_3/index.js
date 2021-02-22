function countAge(birthYear) {
    let isInteger = (year) => (year ^ 0) === year;
    let currentYear = new Date().getFullYear();
    let result = currentYear - birthYear;
    if (result >= 0 && isInteger(result) && result <= currentYear) return result;
    throw new Error();
}

module.exports.countAge = countAge;