const absolute = require('./absolute');

test('absolute value of -5 = 5', () => {
  expect(absolute(-5)).toBe(5);
});
test('absolute value of -3.14 = 3.14', () => {
  expect(absolute(-3.14)).toBe(3.14);
});
test('absolute value of 250 = 250', () => {
  expect(absolute(250)).toBe(250);
});
test('absolute value of 0 = 0', () => {
  expect(absolute(0)).toBe(0);
});
test('absolute value of 6.28 = 6.28', () => {
  expect(absolute(6.28)).toBe(6.28);
});
  test('absolute value of 11037 = 11037', () => {
  expect(absolute(11037)).toBe(11037);
});