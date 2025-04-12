/**
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 * @param {string} a 
 * @param {string} b 
 */

function makeAnagram(a, b) {

    const repetitionsMap = new Map()
    let result = 0
    for (const c of a) {
        const repetitions = repetitionsMap.get(c) || { a: 0, b: 0 }
        repetitions.a++
        repetitionsMap.set(c, repetitions)
    }

    for (const c of b) {
        const repetitions = repetitionsMap.get(c)
        if (!repetitions) {
            result++
            continue
        }
        repetitions.b++
        repetitionsMap.set(c, repetitions)
    }
    repetitionsMap.forEach((reps) => {
        result += Math.abs(reps.a - reps.b)
    })
    return result
}
console.log(makeAnagram("cde", "abc"))
console.log(makeAnagram("bacdc", "dcbac"))
console.log(makeAnagram("bacdc", "dcbad"))
// console.log(makeAnagram())