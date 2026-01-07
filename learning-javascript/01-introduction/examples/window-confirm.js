/**
 * Displays a question to the user using browser alert.
 *
 * @function showMessageConfirm
 *
 * @param {string} message The message will be put.
 *
 * @returns {void}
 *
 */

export function showMessageConfirm(message) {
    // Exibe uma mensagem que tem as opções de "ok" e "cancelar" ao entrar no site.

    window.confirm(message)
}


showMessageConfirm('Do you like programing in JavaScript Language?')
