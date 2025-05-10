const catAndMouse = require('./catAndMouse');

test('test (Cat A, Cat B, Mouse C) (2, 5, 4)', () => {
  expect(catAndMouse(2, 5, 4)).toBe("Cat B");
});