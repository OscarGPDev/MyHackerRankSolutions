/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */
/**
 * @param {String} note note we want to form
 * @param {String} magazine magazine we cut to get the words
*/
function checkMagazine(magazine, note) {
    // Write your code here
    const noteParts = new Map()
    note.forEach(word => {
        const reps = noteParts.get(word) || 0;
        noteParts.set(word, reps + 1)
    })
    magazine.find(word => {
        const reps = noteParts.get(word) || 0
        if (reps > 0 && reps - 1 > 0) {
            noteParts.set(word, reps - 1)
        }
        if (reps > 0 && reps - 1 === 0) {
            noteParts.delete(word)
        }
        if (noteParts.size === 0) {
            return true
        }
    })
    if (noteParts.size === 0) {
        console.log("Yes")
    } else {
        console.log("No");
    }
}