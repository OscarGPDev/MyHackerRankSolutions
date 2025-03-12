/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
/**
 * @param {string} s string to check for anagrams
*/
const reverseString = (stringToReverse) => {
    let reversedString = ""
    for (let index = stringToReverse.length - 1; index >= 0; index--) {
        reversedString += stringToReverse[index];
    }
    return reversedString
}
const combinaciones = (a) => {
    let factorial1 = 1
    for (let index = 1; index <= a.length; index++) {
        factorial1 *= index
    }
    let factorial2 = 1
    for (let index = 1; index <= a.length - 2; index++) {
        factorial2 *= index
    }
    return factorial1 / (2 * factorial2)
}
/**
 * 
 * @param {Map<string,Array<object>>} anagramas objeto Map que tiene las cadenas que queremos verificar si es anagrama
*/
const calcularSubventanas = (ventanaMasGrande, longitud, anagramas) => {
    let subVentana = ventanaMasGrande;
    for (let index = longitud - 1; index >= 1; index--) {
        subVentana = subVentana.substring(1)
        if (subVentana.length > 1) {
            const coordenadas = anagramas.get(subVentana) || []
            coordenadas.push({ x: index, y: longitud })
            anagramas.set(subVentana, coordenadas)
        }
    }
}
function sherlockAndAnagrams(s) {
    const anagrams = new Map()

    let window = ""
    let reversedWindow = ""
    for (let index = 0; index < s.length; index++) {
        const reps = anagrams.get(s[index]) || [];
        reps.push({ x: index, y: index })
        anagrams.set(s[index], reps)
        if (index < s.length - 1) {
            window += s[index]
            if (index > 0) {
                const reps = anagrams.get(window) || [];
                reps.push({ x: 0, y: index })
                anagrams.set(window, reps)
                calcularSubventanas(window, index, anagrams)
            }
        } else {
            window += s[index]
            window = window.substring(1)
            const reps = anagrams.get(window) || [];
            reps.push({ x: 1, y: index })
            anagrams.set(window, reps)
            calcularSubventanas(window, index, anagrams)
        }
    }
    console.log(anagrams)
    // console.log(combinaciones(anagrams.values()[0]))
}
sherlockAndAnagrams("abba")
sherlockAndAnagrams("kkkk")
sherlockAndAnagrams("abcdefghi")