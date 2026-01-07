/**
 * Requests a response to the user using browser alert.
 *
 * @function responseToPrompt
 *
 * @param {string} message The message will be put.
 *
 * @returns {void}
 *
 */

export function responseToPrompt(message) {
    // Pede para o usuário digitar o nome através do prompt.

    window.prompt(message) // Retorna sempre uma string.
}


responseToPrompt('Type your name:')
