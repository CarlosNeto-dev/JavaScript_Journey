/**
 * Displays the results of testing data types.
 *
 * @function testingValuesTypes
 *
 * @param {any} value The value will be put.
 *
 * @param {string} expectedType The expected type of the value will be put. Ex: "string", "number", "object", "function"
 *
 * @returns {void}
 *
 */

export function testingValuesTypes(value, expectedType) {
    // Testando tipos de dados...

    if (typeof value !== expectedType) {
        console.log(`The value "${value}" is not the expected type "${expectedType}"!`)
    }

    else {
        console.log(`The value "${value}" is the expected type "${expectedType}"!`)
    }

}


testingValuesTypes('Hello, World!', 'string')

testingValuesTypes(NaN, 'number') // Valor especial

testingValuesTypes([1, 2, 3], 'object')

testingValuesTypes(function randomFunction() {}, 'function')
