function designerPdfViewer(h, word) {
    let result = 0
    const baseindex = 'a'.charCodeAt(0)
    for (const char of word) {
        const size = h[char.charCodeAt(0) - baseindex]
        if (size > result) {
            result = size
        }
    }
    result = result * word.length
    return result
}
module.exports = designerPdfViewer