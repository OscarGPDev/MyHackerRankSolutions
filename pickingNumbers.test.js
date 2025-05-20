const pickingNumbers = require('./pickingNumbers');

test('pickingNumbers(a)', () => {
    expect(pickingNumbers([4, 6, 5, 3, 3, 1])).toBe(3);
});
test('pickingNumbers(a)', () => {
    expect(pickingNumbers([1, 2, 2, 3, 1, 2])).toBe(5);
});