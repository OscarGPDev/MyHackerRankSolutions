function caesarCipher(s, k) {
    // Write your code here
    let result = "";
    for (const c of s){
        let helper = c.charCodeAt(0);
        if (helper >= 65 && helper <= 90) {
            helper -= 65;
            helper += k%26;
            helper = helper>25?helper-26:helper;
            helper += 65;
        }else if (helper >= 97 && helper <= 122) {
            helper -= 97;
            helper += k%26;
            helper = helper>25?helper-26:helper;
            helper += 97;
        }
        result+=String.fromCharCode(helper);
    }
    return result;
}
module.exports={caesarCipher}