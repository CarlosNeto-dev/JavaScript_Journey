/**
 * Displays the Average result of two school grades.
 *
 * @function displayAverageSituation
 *
 * @returns {void}
 *
 */

export function displayAverageSituation() {
    // Mostra na tela a situação de "Aprovado" ou "Reprovado".

    let grade1 = Number(window.prompt("Type the first grade: "))
    let grade2 = Number(window.prompt("Type the second grade: "))

    if (Number.isNaN(grade1) || Number.isNaN(grade2)) {
        window.alert("Please, type a number type!")
    }

    else {
        let average = (grade1 + grade2) / 2

        let situationResult = average >= 7 ? "Approved!" : "Reproved"

        window.alert(`Your situation is: ${situationResult}!`)
    }
}


displayAverageSituation()
