/** Задача 2 - Форматтер для ФИО
Требуется написать функцию fioFormat, которая
принимает строку, в которой через пробел написаны три слова: имя, фамилия и отчество,
требуется вернуть новую строку формата Фамилия И.О. где И - имя и О - отчество
@param {string} inputFio - Строка с именем, фамилией и отчеством
@return {string} Строка формата Фамилия И.О.
 */
function fioFormat(inputFio) {
    inputFio = inputFio.split(' ');
    let lastName = inputFio[1];
    let initials = `${inputFio[0][0]}.${inputFio[2][0]}.`;

    return `${lastName} ${initials}`;
}

module.exports.fioFormat = fioFormat;
