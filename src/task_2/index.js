/** Задача 2 - Форматтер для ФИО
Требуется написать функцию fioFormat, которая
принимает строку, в которой через пробел написаны три слова: имя, фамилия и отчество,
требуется вернуть новую строку формата Фамилия И.О. где И - имя и О - отчество
@param {string} inputFio - Строка с именем, фамилией и отчеством
@return {string} Строка формата Фамилия И.О.
 */
function fioFormat(inputFio) {
    let arr = inputFio.split(" ");
    alert(typeof (arr));
    let change = arr[1] + arr[0].charAt(0) + "." + arr[2].charAt(0) + ".";
    return change;
}

module.exports.fioFormat = fioFormat;
