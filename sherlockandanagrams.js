/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
class Coordenadas {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    checkMatch(coordenadas) {
        return this.x === coordenadas.x && this.y === coordenadas.y
    }
}
class ParCoordenadas {
    /**
     * @param {Coordenadas} par1 
     * @param {Coordenadas} par2 
    */
    constructor(par1, par2) {
        this.par1 = par1
        this.par2 = par2
    }
    /**
     * check if a tuple of coordinates is equivalent to the ones stored
    */
    checkMatch(par1, par2) {
        return (this.par1.checkMatch(par1) && this.par2.checkMatch(par2)) || (this.par1.checkMatch(par2) && this.par2.checkMatch(par1))
    }
}
/**
 * 
 * @param {Map<string,Array<Coordenadas>>} anagramas objeto Map que tiene las cadenas que queremos verificar si es anagrama
*/
const calcularSubventanas = (ventanaMasGrande, longitud, anagramas) => {
    let subVentana = ventanaMasGrande;
    for (let index = longitud - 1; index >= 1; index--) {
        subVentana = subVentana.substring(1)
        if (subVentana.length > 1) {
            const coordenadas = anagramas.get(subVentana) || []
            coordenadas.push(new Coordenadas(index, longitud))
            anagramas.set(subVentana, coordenadas)
        }
    }
}
/**
 * @param {Map<string,Array<ParCoordenadas>>} anagrams
*/
const calcularSubventanasInversa = (ventanaMasGrande, startIndex, endIndex, windows, anagrams) => {
    let subVentana = ventanaMasGrande;
    const longitud = ventanaMasGrande.length
    let leftIndex = startIndex
    let rightIndex = endIndex
    let resultado = 0
    for (let index = longitud - 1; index >= 1; index--) {
        subVentana = subVentana.substring(1)
        rightIndex--
        const coordenadasIteracion = new Coordenadas(leftIndex, rightIndex)
        if (subVentana.length > 1) {
            const matches = windows.get(subVentana)
            if (matches) {
                resultado += matches.reduce((matches, el) => {
                    if (!el.checkMatch(coordenadasIteracion)) {
                        const uniqueAnagrams = anagrams.get(subVentana.length) || []
                        if (!uniqueAnagrams.find(parUnico => parUnico.checkMatch(el, coordenadasIteracion))) {
                            uniqueAnagrams.push(new ParCoordenadas(el, coordenadasIteracion))
                            anagrams.set(subVentana.length, uniqueAnagrams)
                            matches++
                        }
                    }
                    return matches
                }, 0)
            }

        }
    }
    return resultado
}
function sherlockAndAnagrams(s) {
    const windows = new Map()

    const anagrams = new Map()
    let window = ""

    const longitudS = s.length
    //creacion de las cadenas que pueden ser anagramas
    for (let index = 0; index < longitudS; index++) {
        const simbolo = s[index]
        const reps = windows.get(simbolo) || []
        reps.push(new Coordenadas(index, index))
        windows.set(simbolo, reps)
        window += simbolo

        if (index < longitudS - 1) {
            if (index > 0) {
                const reps = windows.get(window) || [];
                reps.push(new Coordenadas(0, index))
                windows.set(window, reps)
                calcularSubventanas(window, index, windows)
            }
        } else {
            const lastWindow = window.substring(1)
            const reps = windows.get(lastWindow) || [];
            reps.push(new Coordenadas(1, index))
            windows.set(lastWindow, reps)
            calcularSubventanas(lastWindow, index, windows)
        }
    }
    //busqueda de los anagramas
    window = ""
    const lastIndex = longitudS - 1
    let result = 0
    for (index = longitudS - 1; index >= 0; index--) {
        const simbolo = s[index]
        window += simbolo
        const coordenadasSimbolo = new Coordenadas(index, index)
        const reps = windows.get(simbolo) || []
        if (reps.length > 0) {
            const matches = windows.get(simbolo)
            if (matches) {
                result += matches.reduce((matches, el) => {
                    if (!el.checkMatch(coordenadasSimbolo)) {
                        const uniqueAnagrams = anagrams.get(1) || []
                        if (!uniqueAnagrams.find(parUnico => parUnico.checkMatch(el, coordenadasSimbolo))) {
                            uniqueAnagrams.push(new ParCoordenadas(el, coordenadasSimbolo))
                            anagrams.set(1, uniqueAnagrams)
                            matches++
                        }
                    }
                    return matches
                }, 0)
            }
        }
        if (index > 0) {
            if (index < lastIndex) {
                const matches = windows.get(window)
                const coordenadasVentana = new Coordenadas(index, lastIndex)
                if (matches) {
                    result += matches.reduce((matches, el) => {

                        if (!el.checkMatch(coordenadasVentana)) {
                            const uniqueAnagrams = anagrams.get(window.length) || []
                            if (!uniqueAnagrams.find(parUnico => parUnico.checkMatch(el, coordenadasVentana))) {
                                uniqueAnagrams.push(new ParCoordenadas(el, coordenadasVentana))
                                anagrams.set(window.length, uniqueAnagrams)
                                matches++
                            }
                        }
                        return matches
                    }, 0)
                }

                result += calcularSubventanasInversa(window, index, lastIndex, windows, anagrams)
            }
        } else {
            const lastWindow = window.substring(1)
            const matches = windows.get(lastWindow)
            const coordenadasVentana = new Coordenadas(index, lastIndex - 1)
            if (matches) {
                result += matches.reduce((matches, el) => {
                    const uniqueAnagrams = anagrams.get(lastWindow.length) || []
                    if (!el.checkMatch(coordenadasVentana)) {
                        if (!uniqueAnagrams.find(parUnico => parUnico.checkMatch(el, coordenadasVentana))) {
                            uniqueAnagrams.push(new ParCoordenadas(el, coordenadasVentana))
                            anagrams.set(lastWindow.length, uniqueAnagrams)
                            matches++
                        }
                    }
                    return matches
                }, 0)
            }

            result += calcularSubventanasInversa(lastWindow, index, lastIndex - 1, windows, anagrams)
        }
    }
    return result
}
// console.log(sherlockAndAnagrams("abba"));
// console.log(sherlockAndAnagrams("kkkk"));
console.log( sherlockAndAnagrams("cdcd"));
