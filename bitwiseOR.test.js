const bitwiseOR = require('./bitwiseOR');

test('7, 12 AND', () => {
  expect(bitwiseOR(7, 12)).toBe(15);
});
test('32, 17 AND', () => {
  expect(bitwiseOR(32, 17)).toBe(49);
});
test('13, 19 AND', () => {
  expect(bitwiseOR(13, 19)).toBe(31);
});