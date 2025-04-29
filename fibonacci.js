function fibonacci(n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
// Recursive solution could be simpler but it is limited by the stack limit, then, iterative solution avoid this problem
function fibonacciIterative(n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    let n1 = 0
    let n2 = 1
    let index = 2
    while (index <= n) {
        const tmp = n1
        n1 = n2
        n2 = n2 + tmp
        index++
    }
    return n2
}
console.log(fibonacci(6))
console.log(fibonacciIterative(6))
console.log(fibonacci(10))
console.log(fibonacciIterative(10))

