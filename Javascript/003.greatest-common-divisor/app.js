const arguments = process.argv.slice(2);
const greatCommonDivisor = calculateGreatCommonDivisor(arguments[0], arguments[1]);
console.log(`El Máximo común divisor de ${arguments[0]} y ${arguments[1]} es ${greatCommonDivisor}.`);

function calculateGreatCommonDivisor(numberA, numberB) {
    if (numberA == numberB) {
        return numberA;
    } else if (numberA > numberB) {
        return calculateGreatCommonDivisor(numberA - numberB, numberB);
    } else {
        return calculateGreatCommonDivisor(numberA, numberB - numberA);
    }
}