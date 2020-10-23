const calculateExponent = require('./calculateExponent');

test('5, 5 => 3125', () => {
  expect(calculateExponent(5, 5)).toBe(3125);
});
test('3, 3 => 27', () => {
  expect(calculateExponent(3, 3)).toBe(27);
});
test('10, 10 => 10000000000', () => {
  expect(calculateExponent(10, 10)).toBe(10000000000);
});