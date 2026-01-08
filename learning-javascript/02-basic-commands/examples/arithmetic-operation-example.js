/**
 * Displays the result of testing basic arithmetic operations.
 *
 * @function basicArithmeticOperations
 *
 * @param {number} number1 The first number of the operation to be put
 * @param {string} sign The sign of the operation to be put. Example +, -, *, /, % ...
 * @param {number} number2 The second number of the operation to be put
 *
 * @returns {void}
 *
 */

export function basicArithmeticOperations(number1, sign, number2) {
    // Fazendo operações aritméticas básicas:

    if (typeof number1 !== "number" || typeof number2 !== "number") {
        console.log("Can't do the operation. Try put a number type!")
        return;
    }

    let result = null;

    switch (sign) {
        case '+':
            result = number1 + number2;

            break;

        case '-':
            result = number1 - number2;

            break;

        case '*':
            result = number1 * number2;

            break;

        case '/':
            if (number2 === 0) {
                console.log("Can't do the division by zero! Try put another number.")

                return;
            }

            else {
                result = number1 / number2

                break;
            }

        case '%':
            if (number2 === 0) {
                console.log("Can't do the division by zero! Try put another number.")

                return;
            }

            else {
                result = number1 % number2

                break;
            }

        case '**':
            result = number1 ** number2

            break;

        default:
            console.log("Can't do the arithmetic operation. Try put a valid sign!")

            return;
    }

    console.log(`The result of the operation is: ${result}!`)
}

basicArithmeticOperations(10, '+', 5)

basicArithmeticOperations(10, '-', 2.5)

basicArithmeticOperations(10, '@', 2)

basicArithmeticOperations('10', '-', 8)

basicArithmeticOperations(10, '/', 0)
