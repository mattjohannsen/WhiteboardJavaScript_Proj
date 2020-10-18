const bitwiseXOR = require('./bitwiseXOR');

test('7, 12 XOR', () => {
    expect(bitwiseXOR(7, 12)).toBe(11);
});
  test('32, 17 XOR', () => {
    expect(bitwiseXOR(32, 17)).toBe(49);
});
test('13, 19 XOR', () => {
    expect(bitwiseXOR(13, 19)).toBe(30);
});