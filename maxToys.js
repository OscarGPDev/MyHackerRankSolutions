/*
 * Complete the 'maximumToys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER k
 */

function maximumToys(prices, k) {
    // Write your code here 
    let budget = k
    let exced = false
    prices.sort((a, b) => a - b)
    let items = prices.findIndex(p => {
        budget -= p
        if (budget < 0) {
            exced = true;
            return true
        } else if (budget === 0) {
            return true
        }
    }) + 1
    if (exced) {
        items--
    }
    return items
}

