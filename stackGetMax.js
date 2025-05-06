function getMax(operations) {
    const stack = []
    const results = []
    operations.forEach(operation => {
        const [opCode, data] = operation.split(' ').map(c => parseInt(c))
        if (opCode === 1) {
            stack.push(data)
        } else if (opCode === 2) {
            stack.pop()
        } else if (opCode === 3) {
            let biggest = Number.MIN_SAFE_INTEGER
            stack.forEach(el => {
                if (biggest < el) {
                    biggest = el
                }
            })
            console.log(biggest)
            results.push(biggest)
        }
    });
    return results
}