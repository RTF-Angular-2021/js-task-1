/** Задача 3 - Узнать возраст
Требуется написать функцию countAge, которая
принимает число - год рождения,
требуется вернуть число - количество лет с года рождения на данный момент.
Если введенный год рождения некорректный, то требуется возбуждать ошибку
@param {number} birthYear - Год рождения
@return {number} Количество лет
 */
function countAge(birthYear) {
    let year = (new Date()).getFullYear();
    if (birthYear > year || birthYear < 0 || !Number.isInteger(birthYear))
        throw "Wrong birth year."
    
    return year - birthYear;
}

module.exports.countAge = countAge;
