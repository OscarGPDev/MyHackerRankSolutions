function countSwaps(a) {
    const swap = (x1, x2) => {
        const bucket = a[x1]
        a[x1] = a[x2]
        a[x2] = bucket
    }
    let swapsCounter = 0
    const n = a.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                swap(j, j + 1)
                swapsCounter++
            }
        }

    }
    console.log(`Array is sorted in ${swapsCounter} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[n - 1]}`)
}
countSwaps([1, 2, 3])
countSwaps([3, 2, 1])