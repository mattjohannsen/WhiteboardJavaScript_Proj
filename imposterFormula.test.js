const imposterFormula = require('./imposterFormula');

test('adds every number from 1 to 4', () => {
  expect(imposterFormula(1, 9)).toBe("11%");
});
test('adds every number from 1 to 13', () => {
  expect(imposterFormula(2, 10)).toBe("20%");
});
test('adds every number from 1 to 600', () => {
  expect(imposterFormula(3, 7)).toBe("43%");
});