function hurdleRace(k, height) {
    let result = 0
    height.forEach(obstacle => {
        if (k < obstacle) {
            const diff = obstacle - k

            result = diff > result ? diff : result
        }
    });
    return result
}