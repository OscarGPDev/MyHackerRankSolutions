function pickingNumbers(a) {
    let result = 0
    const calculatedSet = new Set()
    a.forEach((element, index) => {
        let elementUpperSubarrayLength = 0
        let elementLowerSubarrayLength = 0
        let higher = element + 1
        let lower = element - 1
        if (calculatedSet.has(element)) {
            return
        } else {
            calculatedSet.add(element)
        }

        for (let subIndex = index; subIndex < a.length; subIndex++) {
            const subElement = a[subIndex];

            if (subElement === element || subElement === higher) {
                elementUpperSubarrayLength++
            }
            if (subElement === element || subElement === lower) {
                elementLowerSubarrayLength++
            }
        }
        const largerSubArray = elementLowerSubarrayLength >= elementUpperSubarrayLength ? elementLowerSubarrayLength : elementUpperSubarrayLength
        if (largerSubArray > result) {
            result = largerSubArray
        }
    });
    return result
}
module.exports = pickingNumbers