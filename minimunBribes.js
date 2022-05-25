function minimumBribes(q) {
    // Write your code here
    let sortedIndex = 0;

    let counter = 0;
    let sizeOfQ = q.length - 1;
    if (sizeOfQ === 1) {
        console.log(counter);
        return
    }
    while (true){
        let changeWasMade = false;
        while (sortedIndex < sizeOfQ-1) {
            // Is sorted already
            if (sortedIndex + 1 <= sizeOfQ && q[sortedIndex] < q[sortedIndex + 1]) {
                sortedIndex++;
            }
            // Swap once
            else if (sortedIndex + 2 <= sizeOfQ && q[sortedIndex] < q[sortedIndex + 2]) {
                const current = q[sortedIndex];
                q[sortedIndex] = q[sortedIndex + 1];
                q[sortedIndex + 1] = current;
                counter++;
                sortedIndex++;
                changeWasMade = true;
            }
            // Swap twice
            else if (sortedIndex + 3 <= sizeOfQ && q[sortedIndex] < q[sortedIndex + 3]) {
                const current = q[sortedIndex];
                q[sortedIndex] = q[sortedIndex + 2];
                q[sortedIndex + 2] = current;
                counter+=2;
                sortedIndex++;
                changeWasMade = true;
            }
            // Swap once when is the last element
            else if (sortedIndex + 1 === sizeOfQ){
                const current = q[sortedIndex];
                q[sortedIndex] = q[sortedIndex + 1];
                q[sortedIndex + 1] = current;
                counter++;
                sortedIndex++;
                changeWasMade = true;
            }
            // Swap once when is the last element
            else if (sortedIndex + 2 === sizeOfQ){
                const current = q[sortedIndex];
                q[sortedIndex] = q[sortedIndex + 2];
                q[sortedIndex + 2] = current;
                counter+=2;
                sortedIndex++;
                changeWasMade = true;
            }
            else {
                console.log("Too chaotic")
                return
            }
        }
        sortedIndex = 0;
        if (!changeWasMade){
            break;
        }
        let sorted = true;

        for (let i = 0; i <= sizeOfQ - 1; i++) {
            if (q[i] > q[i+1]) {
                sorted = false;
                break;
            }
        }
        if (sorted){
            break;
        }
    }

    console.log(counter);
}
module.exports ={ minimumBribes }