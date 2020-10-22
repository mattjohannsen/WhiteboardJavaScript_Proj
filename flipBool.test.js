const flipBool = require('./flipBool');

test('1 => 0', () => {
  expect(flipBool(1)).toBe(0);
});
test('true => 0', () => {
  expect(flipBool(true)).toBe(0);
});
test('0 => 1', () => {
  expect(flipBool(0)).toBe(1);
});
test('false => 1', () => {
  expect(flipBool(false)).toBe(1);
});