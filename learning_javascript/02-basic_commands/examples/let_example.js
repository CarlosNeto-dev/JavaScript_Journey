/**
 * Displays the result of testing "let".
 *
 * @function testingLet
 *
 * @return {void}
 *
 */

export function testingLet() {
    // Testando a variável "let"!

    try {
        console.log(name)
    }

    catch (error) {
        console.error('Hosting Error captured!', error.message)
    }

    let name = 'Carlos'
}


testingLet()

/**
 * Displays the result of scope "let".
 *
 * @function letScope
 *
 * @returns {void}
 *
 */


export function letScope() {
    // Testando o escopo da variável "let"!

    let secretMessage = 'Hello, World!'

    if (true) {
        let secretMessage = 'Hello, Guys!' // Nova variável, respeitando o escopo.

        console.log(secretMessage)
    }

    console.log(secretMessage)
}


letScope()
