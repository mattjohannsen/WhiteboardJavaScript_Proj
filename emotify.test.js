const emotify = require('./emotify');

test('turns smile => :D', () => {
  expect(emotify('Make me smile')).toBe('Make me :D');
});
test('turns grin => :)', () => {
  expect(emotify('Make me grin')).toBe('Make me :)');
});
test('turns sad => :(', () => {
  expect(emotify('Make me sad')).toBe('Make me :(');
});
test('turns mad => :P', () => {
  expect(emotify('Make me mad')).toBe('Make me :P');
});