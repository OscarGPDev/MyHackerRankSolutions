const designerPdfViewer = require('./designerPDFViewer');

test('designerPdfViewer (designerPdfViewer(h, "torn")', () => {
    expect(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5],
        "torn")).toBe(8);
});

test('designerPdfViewer (designerPdfViewer(h, "abc")', () => {
    expect(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        "abc")).toBe(9);
});

test('designerPdfViewer (designerPdfViewer(h, "zaba")', () => {
    expect(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7],
        "zaba")).toBe(28);
});