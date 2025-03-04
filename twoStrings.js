/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */
/**
 * @param {string} s1 first string
 * @param {string} s2 second string
*/
function twoStrings(s1, s2) {
    /*
    They say a minimun substring could be a single character, and they just ask if they share any substring.
    Looking fo the largest substring or something it's not required and due to effort and computing cost I'm not doing it.
    */
   for (const character of s1) {
    if(s2.includes(character)){
        return "YES"
    }
   }
   return "NO"
}