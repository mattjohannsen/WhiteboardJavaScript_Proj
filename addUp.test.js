const addUp = require('./addUp');

test('adds every number from 1 to 4', () => {
  expect(addUp(4)).toBe(10);
});
test('adds every number from 1 to 13', () => {
  expect(addUp(13)).toBe(91);
});
test('adds every number from 1 to 600', () => {
  expect(addUp(600)).toBe(180300);
});
test('adds every number from 1 to 392', () => {
  expect(addUp(392)).toBe(77028);
});