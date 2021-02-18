const { makePairs } = require('../../src/task_5/index');

test('makePairs of { a: 5, b: 3 }', () => {
	expect(makePairs({ a: 5, b: 3 })).toStrictEqual([['a', 5], ['b', 3]]);
});
