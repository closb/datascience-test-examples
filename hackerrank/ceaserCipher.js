function ceaserCipher(s, k) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'a' && s[i] <= 'z') {
            result += String.fromCharCode((s.charCodeAt(i) - 'a'.charCodeAt(0) + k) % 26 + 'a'.charCodeAt(0));
        } else if (s[i] >= 'A' && s[i] <= 'Z') {
            result += String.fromCharCode((s.charCodeAt(i) - 'A'.charCodeAt(0) + k) % 26 + 'A'.charCodeAt(0));
        } else {
            result += s[i];
        }
    }
    return result;
}

console.log(ceaserCipher('middle-Outz', 2));
