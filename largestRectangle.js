/*
 * Complete the 'largestRectangle' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY h as parameter.
 */

function largestRectangle(h) {
    // Write your code here
    let result = 0
    const solidAreas = new Map()
    h.forEach((building, buildingIndex) => {
        solidAreas.set(buildingIndex, [{ height: building, length: 1, processesedIndex: buildingIndex, buildingIndex, continue: true }])
        solidAreas.forEach((solidAreasByIndex, key) => {
            if (key !== buildingIndex) {
                solidAreasByIndex.forEach(solidArea => {
                    if (
                        building >= solidArea.height &&
                        buildingIndex != solidArea.buildingIndex &&
                        solidArea.continue
                    ) {
                        solidArea.length++
                    }
                    if (
                        building < solidArea.height &&
                        buildingIndex != solidArea.buildingIndex
                    ) {
                        const existingArea = solidAreasByIndex.find(sa => sa.height === building)
                        solidArea.continue = false
                        if (existingArea && solidArea.processesedIndex !== buildingIndex) {
                            existingArea.length++
                        } else {
                            solidAreasByIndex.push({ ...solidArea, height: building, length: buildingIndex - solidArea.buildingIndex + 1 })
                        }
                    }
                })
            }
        })
    })
    solidAreas.forEach(solidAreasByIndex => {
        solidAreasByIndex.forEach(solidArea => {
            const area = solidArea.height * solidArea.length
            if (result < area) {
                result = area
            }
        })

    })

    return result
}

console.log(largestRectangle([1, 2, 3, 4, 5]))
console.log(largestRectangle([1, 3, 5, 9, 11]))
console.log(largestRectangle([11, 11, 10, 10, 10]))
console.log(largestRectangle([8979, 4570, 6436, 5083, 7780, 3269, 5400, 7579, 2324, 2116]))