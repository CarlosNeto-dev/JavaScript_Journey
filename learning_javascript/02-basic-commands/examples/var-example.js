/**
 * Displays the result of testing "var".
 *
 * @function testingVariables
 *
 * @return {void}
 *
 */

export function testingVar() {
    // Testando a variável "var"!

    console.log(`Look, i can see the variable before even declaring!: ${name}`) // Retorna "Undefined"

    var name = 'Carlos'
    var name = 'João'

    console.log(`Look, i can re-declare the variable "var": ${name}`)
}


testingVar()

/**
 * Displays the test about the scope of variable "var".
 *
 * @function varScope
 *
 * @return {void}
 *
 */


export function varScope() {
    // Testando o escopo da variável "var"!

    secretMessage = "Hello, World!"

    if (true) {
        var secretMessage = "Hello, Guys!" // Não cria variável, logo, para o "var". O {} não limita em nada.

        console.log(secretMessage)
    }

    console.log(secretMessage)
}


varScope()
