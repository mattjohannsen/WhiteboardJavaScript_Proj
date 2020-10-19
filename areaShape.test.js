const areaShape = require('./areaShape');

test('areaShape test 1', () => {
  expect(areaShape(2, 3, "triangle")).toBe(3);
});
test('areaShape test 2', () => {
    expect(areaShape(8, 6, "parallelogram")).toBe(48);
});
test('areaShape test 3', () => {
    expect(areaShape(0, 1, "triangle")).toBe(0);
});
test('areaShape test 4', () => {
    expect(areaShape(2.9, 1.3, "parallelogram")).toBe(3.77);
});
test('areaShape test 5', () => {
    expect(areaShape(0.01, 5, "triangle")).toBe(0.025);
});