const { fioFormat } = require('../../src/task_2/index');

test('fioFormat of Петр Петрович Петров', () => {
	expect(fioFormat('Петр Петрович Петров')).toBe('Петрович П.П.');
});
