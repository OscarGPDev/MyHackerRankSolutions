/*
 * Complete the 'luckBalance' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. 2D_INTEGER_ARRAY contests
 */

function luckBalance(k, contests) {
    const lowerValueContest = []
    let maxLuckPossible = 0
    contests.forEach(element => {
        if (element[1] === 1) {
            lowerValueContest.push(element[0])
        } else {
            maxLuckPossible += element[0]
        }
    });
    if (k < lowerValueContest.length) {
        lowerValueContest.sort((a, b) => a - b)
    }
    while (k > 0 && lowerValueContest.length > 0) {
        maxLuckPossible += lowerValueContest.pop()
        k--
    }
    for (let index = 0; index < lowerValueContest.length; index++) {
        maxLuckPossible -= lowerValueContest[index]

    }
    return maxLuckPossible
}
console.log(luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]))
console.log(luckBalance(99, [
    [5351, 0],
    [1870, 0],
    [9359, 0],
    [6828, 0],
    [9896, 0],
    [6335, 0],
    [38, 0],
    [2440, 0],
    [4627, 0],
    [2663, 0],
    [6300, 0],
    [107, 0],
    [4605, 0],
    [5437, 0],
    [4394, 0],
    [7530, 0],
    [8254, 0],
    [5668, 0],
    [6945, 0],
    [1539, 0],
    [1323, 0],
    [1841, 0],
    [2191, 0],
    [8943, 0],
    [7645, 0],
    [3903, 0],
    [4772, 0],
    [2392, 0],
    [1539, 0],
    [7712, 0],
    [9955, 0],
    [9895, 0],
    [7422, 0],
    [4665, 0],
    [5448, 0],
    [2317, 0],
    [6963, 0],
    [9170, 0],
    [2860, 0],
    [3812, 0],
    [5725, 0],
    [1324, 0],
    [7377, 0],
    [5538, 0],
    [2383, 0],
    [7674, 0],
    [5142, 0],
    [3932, 0],
    [2624, 0],
    [8704, 0],
    [5706, 0],
    [2649, 0],
    [6730, 0],
    [8757, 0],
    [2930, 0],
    [4465, 0],
    [6119, 0],
    [4967, 0],
    [8717, 0],
    [334, 0],
    [9962, 0],
    [293, 0],
    [1943, 0],
    [8146, 0],
    [4085, 0],
    [779, 0],
    [9630, 0],
    [1843, 0],
    [289, 0],
    [2083, 0],
    [9742, 0],
    [5891, 0],
    [2996, 0],
    [7447, 0],
    [4371, 0],
    [1102, 0],
    [6501, 0],
    [492, 0],
    [3806, 0],
    [3549, 0],
    [9719, 0],
    [9913, 0],
    [9265, 0],
    [8468, 0],
    [5007, 0],
    [1479, 0],
    [2758, 0],
    [1727, 0],
    [5548, 0],
    [6869, 0],
    [154, 0],
    [42, 0],
    [6309, 0],
    [9041, 0],
    [3036, 0],
    [3282, 0],
    [4828, 0],
    [7036, 0],
    [8724, 0]
]))
// console.log(luckBalance(,[]))
// console.log(luckBalance(,[]))
// console.log(luckBalance(,[]))