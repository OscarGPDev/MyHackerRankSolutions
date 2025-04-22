/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function isBalanced(s) {
    // Write your code here
    const counter = []
    const openSimbols = new Map()
    openSimbols.set('}', '{')
    openSimbols.set(']', '[')
    openSimbols.set(')', '(')
    let result = false
    let valid = true
    for (const character of s) {
        if (character === '{' || character === '[' || character === '(') {
            counter.push(character)
        } else if (character === '}' || character === ']' || character === ')') {
            const openingCharacter = openSimbols.get(character)
            const previousOpeningCharacter = counter.pop()
            if (previousOpeningCharacter !== openingCharacter) {
                valid = false
                break
            }
        }
    }
    if (valid && counter.length === 0) {
        result = true
    }
    return result ? "YES" : "NO"
}
console.log(isBalanced("{[()]}"))
console.log(isBalanced('{[(])}'))
console.log(isBalanced('{{[[(())]]}}'))