function numeralSum(num) {
	if (num == NaN)
		return 0;
	if (!isFinite(num))
		return Infinity;

	let result = 0;
	let stringNum = Math.abs(num).toString().replace('.', '');
	for (digit of stringNum)
		result += parseInt(digit);

	
	return result;
}
