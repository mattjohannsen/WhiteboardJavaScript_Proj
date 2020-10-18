const signYourName = require('./signYourName');
const obj = { yourSignature: "" };

test('test explanation here', () => {
  expect(signYourName(obj)).toEqual({yourSignature: 'Whatever'});
});