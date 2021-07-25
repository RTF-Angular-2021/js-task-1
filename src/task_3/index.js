/** Задача 3 - Узнать возраст
Требуется написать функцию countAge, которая
принимает число - год рождения,
требуется вернуть число - количество лет с года рождения на данный момент.
Если введенный год рождения некорректный, то требуется возбуждать ошибку
@param {number} birthYear - Год рождения
@return {number} Количество лет
 */
function countAge(birthYear) {
    let currentY = new Date().getFullYear();
    try {
        if (typeof birthYear !== "number" 
            || birthYear < 0 
            || !isFinite(birthYear) 
            || !Number.isInteger(birthYear)
            || birthYear > currentY) {
            throw new SyntaxError("Неверный формат даты.");
        }
        return currentY - birthYear;
    } catch (e) {
        alert("Error: " + e.message);
    }
}

module.exports.countAge = countAge;
