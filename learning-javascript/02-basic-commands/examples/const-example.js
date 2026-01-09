/**
 * Displays the result of testing "const".
 *
 * @function testingConst
 *
 * @return {void}
 *
 */

export function testingConst() {
    // Testando a funcionalidade "const"!

    try {
        console.log(name)
    }

    catch (error) {
        console.error('Hosting Error captured!', error.message)
    }

    try {
        const name = 'Carlos'
        name = "João"
    }

    catch (error) {
        console.error('Not mutable!', error.message)
    }
}


/**
 * Displays the result of scope "let"
 *
 * @function constScope
 *
 * @returns {void}
 *
 */

export function constScope() {
    // Testando o escopo da variável "const"!

    const secretMessage = 'Hello, World!'

    if (true) {
        const secretMessage = 'Hello, Guys!' // Nova variável, respeitando o escopo.

        console.log(secretMessage)
    }

    console.log(secretMessage)

}
