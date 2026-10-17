function beautifulDays(i, j, k) {
    let response = 0
    for (let day = i; day <= j; day++) {
	    let reversedDayValue = ""
	    day.toString().split("").forEach(d => reversedDayValue = "" + d + reversedDayValue)
	    reversedDayValue = parseInt(reversedDayValue)
	    const valueToEvaluate = Math.abs(day - reversedDayValue)
	    if (valueToEvaluate % k == 0) {
		    response++
	    }
    }
    return response
}

console.log(beautifulDays(20,23,6))
