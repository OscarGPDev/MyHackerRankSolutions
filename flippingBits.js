function flippingBits(n) {
    const nbinary = n.toString(2).padStart(32, '0')
    let result = ""
    for (const bit of nbinary) {
        result += bit === "1" ? "0" : "1"
    }
    return BigInt(`0b${result}`)
}
console.log(flippingBits(BigInt("8")))
