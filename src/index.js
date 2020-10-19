module.exports = function check (str, bracketsConfig) {
    let string = [];
    let brackets = Object.fromEntries(bracketsConfig);

    for (let bracket of str.split('')) {
        if (string[0] === bracket) {
            string.shift();
        } else if (brackets[bracket]) {
            string.unshift(brackets[bracket]);
        } else {
            return false;
        }
    }

    return string.length === 0;
}
