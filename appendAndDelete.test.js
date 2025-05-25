const appendAndDelete = require('./appendAndDelete');

test('designerPdfViewer("abc", "dcf", 6)', () => {
    expect(appendAndDelete("abc", "dcf", 6)).toBe("YES");
});

test('appendAndDelete("hackerhappy", "hackerrank", 9)', () => {
    expect(appendAndDelete("hackerhappy", "hackerrank", 9)).toBe("YES");
});

test('appendAndDelete("aba", "aba", 7)', () => {
    expect(appendAndDelete("aba", "aba", 7)).toBe("YES");
});
test('appendAndDelete("ashley", "ash", 2)', () => {
    expect(appendAndDelete("ashley", "ash", 2)).toBe("NO");
});
