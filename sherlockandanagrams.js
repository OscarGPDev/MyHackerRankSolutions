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
const calcularSubventanasInversa = (ventanaMasGrande, longitud, anagramas) => {
    let subVentana = ventanaMasGrande;
    for (let index = longitud - 1; index >= 1; index--) {
        subVentana = subVentana.substring(1)
        if (subVentana.length > 1) {
            const coordenadas = anagramas.get(subVentana) || []
            // Razonando indices :s 
            coordenadas.push({ x: index, y: longitud })
            anagramas.set(subVentana, coordenadas)
        }
    }
}
function sherlockAndAnagrams(s) {
    const windows = new Map()
    const reversedWindows = new Map()
    const anagrams = new Map()
    let window = ""
    let reversedWindow = ""
    const longitudS = s.length
    for (let index = 0; index < longitudS; index++) {
        const simbolo = s[index]
        const reps = windows.get(simbolo) || []
        reps.push({ x: index, y: index })
        windows.set(simbolo, reps)
        window += simbolo
        reversedWindow = simbolo + reversedWindow
        if (index < longitudS - 1) {
            if (index > 0) {
                const reps = windows.get(window) || [];
                reps.push({ x: 0, y: index })
                windows.set(window, reps)
                calcularSubventanas(window, index, windows)
            }
        } else {
            const lastWindow = window.substring(1)
            const reps = windows.get(lastWindow) || [];
            reps.push({ x: 1, y: index })
            windows.set(lastWindow, reps)
            calcularSubventanas(lastWindow, index, windows)
        }
    }
    window = ""
    for (index = longitudS - 1; index >= 0; index--) {
        const simbolo = s[index]
        window += simbolo
        const reps = reversedWindows.get(simbolo) || []
        reps.push({ x: index, y: index })
        reversedWindows.set(simbolo, reps)
        if (index > 0) {
            if (index < longitudS-1) {
                const reps = reversedWindows.get(window) || [];
                reps.push({ x: index, y: longitudS-1 })
                reversedWindows.set(window, reps)
                calcularSubventanas(window, window.length, reversedWindows)
            }
        } else {
            const lastWindow = window.substring(1)
            const reps = reversedWindows.get(lastWindow) || [];
            reps.push({ x: index, y: longitudS-2 })
            reversedWindows.set(lastWindow, reps)
            calcularSubventanas(lastWindow, window.length, reversedWindows)
        }
    }
    console.log(window)
    console.log(reversedWindows)
    // console.log(combinaciones(anagrams.values()[0]))
}
sherlockAndAnagrams("abba")
sherlockAndAnagrams("kkkk")
sherlockAndAnagrams("abcdefghi")