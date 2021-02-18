const { numeralSum } = require('../../src/task_1/index');

test('numeralSum of 10', () => {
	expect(numeralSum(10)).toBe(1);
});

test('numeralSum of 2', () => {
	expect(numeralSum(2)).toBe(2);
});

test('numeralSum of -1', () => {
	expect(numeralSum(-1)).toBe(1);
});

test('numeralSum of -10', () => {
	expect(numeralSum(-10)).toBe(1);
});

test('numeralSum of 25', () => {
	expect(numeralSum(25)).toBe(7);
});

test('numeralSum of 0', () => {
	expect(numeralSum(0)).toBe(0);
});

test('numeralSum of 0.32', () => {
	expect(numeralSum(0.32)).toBe(5);
});

test('numeralSum of 5.32', () => {
	expect(numeralSum(5.32)).toBe(10);
});

test('numeralSum of Infinity', () => {
	expect(numeralSum(Infinity)).toBe(Infinity);
});

test('numeralSum of NaN', () => {
	expect(numeralSum(NaN)).toBe(0);
});