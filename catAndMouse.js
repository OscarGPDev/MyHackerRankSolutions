// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    const zxAbsDiff = Math.abs(z - x)
    const zyAbsDiff = Math.abs(z - y)
    let result
    if (zxAbsDiff === zyAbsDiff) {
        result = "Mouse C"
    } else if (zxAbsDiff < zyAbsDiff) {
        result = "Cat A"
    } else if (zyAbsDiff < zxAbsDiff) {
        result = "Cat B"
    }

    return result
}
module.exports = catAndMouse