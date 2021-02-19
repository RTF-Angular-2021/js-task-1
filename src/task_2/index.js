/** Задача 2 - Форматтер для ФИО
Требуется написать функцию fioFormat, которая
принимает строку, в которой через пробел написаны три слова: имя, фамилия и отчество,
требуется вернуть новую строку формата Фамилия И.О. где И - имя и О - отчество
@param {string} inputFio - Строка с именем, фамилией и отчеством
@return {string} Строка формата Фамилия И.О.
 */
function fioFormat(inputFio) {
    let nameParts = inputFio.split(' ');
    return `${nameParts[1]} ${nameParts[0][0]}.${nameParts[2][0]}.`
}

module.exports.fioFormat = fioFormat;
