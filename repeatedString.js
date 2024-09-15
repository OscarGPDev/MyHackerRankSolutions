'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here
    let asOnS = 0;
    const sLength = s.length;
    const charInSubS = (char, s, n) => {
        let result = 0
        for (let i = 0; i < n; i++) {
            if (s[i] === char) {
                result++;
            }
        }
        return result;
    }
    if (n <= sLength) {
        return charInSubS('a', s, n);
    } else {
        asOnS = Math.floor(n / sLength) * charInSubS('a', s, sLength);
        asOnS += charInSubS('a', s, n % sLength)
        return asOnS;
    }


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
