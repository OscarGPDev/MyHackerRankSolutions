/**
 * In this problem is required a compare function that analizes Player objects, 
 * unfortunetly this class wasn't provided, so I reverse engineered the C++ template instead.
 * They also ask to implement an interface to the Checker class but it wasn't provided either.
*/
class Player {
    /**
     * @type {string}
    */
    name = ""
    /**
     * @type {number}
    */
    score = 0
    /**
     * @param {string} name player's name
     * @param {number} score player's score
    */
    constructor(name, score) {
        if (name) {
            this.name = name
        }
        if (score) {
            this.score = score
        }
    }
}
class Checker {
    /**
     * @param {Player} playera first player element
     * @param {Player} playerb second player element
     * @return {number} In ascending order, returns -1 if a<b , 0 if a=b, and 1 if a>b. 
    */
    static comparator(playera, playerb) {
        let result = 0
        if (playera.score < playerb.score) {
            result = -1
        } else if (playera.score > playerb.score) {
            result = 1
        } else if (playera.score === playerb.score) {
            let index = 0
            let next = true
            while (next) {
                if (!playera.name[index] && playerb.name[index]) {
                    next = false;
                    result = 1
                } else if (playera.name[index] && !playerb.name[index]) {
                    next = false;
                    result = -1
                } else if (!playera.name[index] && !playerb.name[index]) {
                    next = false;
                } else if (playera.name[index] < playerb.name[index]) {
                    next = false;
                    result = 1
                } else if (playera.name[index] > playerb.name[index]) {
                    next = false;
                    result = -1
                } else {
                    index++
                }
            }
        }

        return result
    }
}
/**
 * 
 * @param {string} input 
 */
function processData(input) {
    let data = input.split('\n')
    data.shift()
    data = data.map((line) => {
        const parts = line.split(" ")
        return new Player(parts[0], parseInt(parts[1]))
    })

    data.sort((playera, playerb) => Checker.comparator(playera, playerb) * -1)
    data.forEach(player => console.log(`${player.name} ${player.score}`))
}
const input = `5
amy 100
amyama 100
david 100
heraldo 50
aakansha 75
aleksa 150`
processData(input)