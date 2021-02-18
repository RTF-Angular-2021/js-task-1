const { average } = require('../../src/task_4/index');

test('average of "1,2,3,4,0"', () => {
	expect(average('1,2,3,4,0')).toBe(2);
});

test('average of "0,0"', () => {
	expect(average('0,0')).toBe(0);
});

test('average of "10"', () => {
	expect(average('10')).toBe(10);
});

test('average of "10,-10"', () => {
	expect(average('10,-10')).toBe(0);
});

test('average of "-10,2"', () => {
	expect(average('-10,2')).toBe(-4);
});

test('average of "-10,-2"', () => {
	expect(average('-10,-2')).toBe(-6);
});