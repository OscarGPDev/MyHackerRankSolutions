/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {
    // Write your code here
    let result = arr.length > 0 ? Number.MAX_SAFE_INTEGER : 0
    arr.forEach((element, index) => {
        for (let subIndex = index + 1; subIndex < arr.length; subIndex++) {
            const absDiff = Math.abs(element - arr[subIndex])
            if (absDiff < result) {
                result = absDiff
            }

        }
    });
    return result
}
console.log(minimumAbsoluteDifference([3, -7, 0]))
console.log(minimumAbsoluteDifference([-2, 2, 4]))
console.log(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]))
console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17]))
console.log(minimumAbsoluteDifference([]))