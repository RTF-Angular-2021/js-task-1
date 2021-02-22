function fioFormat(inputFio) 
{
    let fullName = inputFio.split(' ');
    return `${fullName[1]} ${fullName[0][0]}.${fullName[2][0]}.`;
}

module.exports.fioFormat = fioFormat;
