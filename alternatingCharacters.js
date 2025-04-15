function alternatingCharacters(s) {
    // Write your code here
    let result = 0
    let currentCharacter
    let repetitions = 0
    for (const c of s) {
        
        if (c !== currentCharacter) {
            currentCharacter = c
            result += repetitions
            repetitions = 0
        } else if (c === currentCharacter) {
            repetitions++
        }
    }
    result += repetitions
    return result
}

console.log(alternatingCharacters("AAAA"))
console.log(alternatingCharacters("BBBBB"))
console.log(alternatingCharacters("ABABABAB"))
console.log(alternatingCharacters("BABABA"))
console.log(alternatingCharacters("AAABBB"))