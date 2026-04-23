function formulaCalculating(rate, usableNumber = 1, one = "1") {
    if (usableNumber === rate) {
        return one;
    }
    if (usableNumber > rate) {
        return null;
    }
    let multiply = formulaCalculating(rate, usableNumber * 3, `(${one} * 3)`);
    if (multiply !== null) return multiply;
    let sum = formulaCalculating(rate, usableNumber + 5, `(${one} + 5)`);
    if (sum !== null) return sum;
    return null;
}
console.log(formulaCalculating(42));
// (((1 * 3) + 5) + 5)
//I have done it using AI, I have no idea how it works overall
// я прочитал много и искал how to, но так и не понял.
// С факториалом я понял и очень легко сделал, а здесь так и не смог
