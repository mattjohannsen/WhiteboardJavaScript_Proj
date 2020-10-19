const binary = require('./binary');

test('binary 100 => 1100100', () => {
  expect(binary(100)).toBe("1100100");
});
test('binary 1 => 1', () => {
  expect(binary(1)).toBe("1");
});
test('binary 0 => 0', () => {
  expect(binary(0)).toBe("0");
});
test('binary 69 => 1100100', () => {
  expect(binary(69)).toBe("1000101");
});
test('binary 1023 => 1111111111', () => {
  expect(binary(1023)).toBe("1111111111");
});
test('binary 511 => 111111111', () => {
  expect(binary(511)).toBe("111111111");
});
test('binary 666 => 1010011010', () => {
  expect(binary(666)).toBe("1010011010");
});
test('binary 123 => 1111011', () => {
  expect(binary(123)).toBe("1111011");
});