"use strict";
/** Задача 3 - Узнать возраст
Требуется написать функцию countAge, которая
принимает число - год рождения,
@@ -7,6 +8,12 @@
@return {number} Количество лет
 */
function countAge(birthYear) {
    let year = new Date().getFullYear();
    if (year < birthYear || birthYear<0 || !Number.isInteger(birthYear))
        throw new Error();
    return (year - birthYear);
}

module.exports.countAge = countAge;