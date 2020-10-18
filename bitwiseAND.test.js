const bitwiseAND = require('./bitwiseAND');

test('7, 12 AND', () => {
  expect(bitwiseAND(7, 12)).toBe(4);
});
test('32, 17 AND', () => {
  expect(bitwiseAND(32, 17)).toBe(0);
});
test('13, 19 AND', () => {
  expect(bitwiseAND(13, 19)).toBe(1);
});