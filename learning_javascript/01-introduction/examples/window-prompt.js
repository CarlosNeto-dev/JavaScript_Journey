/**
 * Requests a response to the user using browser alert.
 *
 * @function responseToPrompt
 *
 * @returns {void}
 *
 */

export function responseToPrompt() {
    // Pede para o usuário digitar o nome através do prompt.

    window.prompt('Type your name: ') // Retorna sempre uma string.
}

responseToPrompt()
