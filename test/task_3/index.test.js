const { countAge } = require('../../src/task_3/index');

test('countAge of 2000', () => {
	expect(countAge(2000)).toBe(21);
});

test('countAge of -10', () => {
	expect(() => countAge(-10)).toThrow();
});

test('countAge of 2077', () => {
	expect(() => countAge(2077)).toThrow();
});

test('countAge of 2021', () => {
	expect(countAge(2021)).toBe(0);
});

test('countAge of 2000.35', () => {
	expect(() => countAge(2000.35)).toThrow();
});