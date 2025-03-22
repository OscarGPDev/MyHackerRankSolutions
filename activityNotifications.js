/**
 * In this case a notification is sent when after 'd' days if the spent amount is higher than twice median
 * @param {Array<number>} expenditure total transaccional data
 * @param {number} d period to check for notifications
 * @return {number} number of sent notifications
*/
function activityNotifications(expenditure, d) {
    // Write your code here
    let result = 0
    const windowOftransactionData = expenditure.slice(0, d)
    const getMedian = (arr, size) => {
        let median = 0
        const sorted = arr.sort((a, b) => a - b)
        if (size % 2 === 0) {
            const index = (size / 2) - 1
            median = (sorted[index] + sorted[index + 1]) / 2
        } else {
            const index = Math.floor(size / 2)
            median = sorted[index]
        }
        return median
    }
    for (let index = d; index < expenditure.length; index++) {
        const element = expenditure[index];
        if (element >= getMedian([...windowOftransactionData], d) * 2) {
            result++
        }
        if (index < expenditure.length - 1) {
            windowOftransactionData.shift()
            windowOftransactionData.push(element)
        }

    }

    return result
}
console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))
console.log(activityNotifications([10, 20, 30, 40, 50], 3))
