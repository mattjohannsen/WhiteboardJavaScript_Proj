const format = require('./format');

test('adds every number from 1 to 4', () => {
  expect(format("John", "Joe", "Jack")).toBe("Their names were: John, Joe and Jack.");
});
test('adds every number from 1 to 13', () => {
  expect(format("Peter", "Pin", "Pan")).toBe("Their names were: Peter, Pin and Pan.");
});
test('adds every number from 1 to 600', () => {
  expect(format("E", "Da", "Bit")).toBe("Their names were: E, Da and Bit.");
});
test('adds every number from 1 to 392', () => {
  expect(format("Bulbasaur", "Charmander", "Squirtle")).toBe("Their names were: Bulbasaur, Charmander and Squirtle.");
});