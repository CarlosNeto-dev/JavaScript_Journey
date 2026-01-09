/**
 * ============================================================
 * JavaScript Playground – Central Controller
 * ============================================================
 *
 * This file:
 * - Overrides the browser console (log / clear)
 * - Mirrors console output to the visual console
 * - Controls example execution by UI interaction
 *
 * Author: Carlos Neto
 */

/* ============================================================
 * VISUAL CONSOLE STATE
 * ============================================================
 */

const output = document.getElementById('output')

let isInitialState = true

/**
 * Disables the initial animation and clears
 * the default "Ready to run..." message.
 *
 * Runs only once.
 */
function disableInitialConsoleState() {
    if (!isInitialState) return

    output.classList.remove('output-initial')

    output.textContent = ''

    isInitialState = false
}

/**
 * Writes a message to the visual console.
 *
 * @param {string} message
 */
function writeOutput(message) {
    disableInitialConsoleState()

    output.textContent += message + '\n'
}

/**
 * Clears the visual console.
 */
function clearOutput() {
    output.textContent = ''
}

/* ============================================================
 * CONSOLE OVERRIDE
 * ============================================================
 */

const originalLog = console.log

const originalClear = console.clear

console.log = function (...args) {
    originalLog(...args)

    const message = args
        .map(arg =>
            typeof arg === 'object'
                ? JSON.stringify(arg, null, 2)
                : String(arg)
        )
        .join(' ')

    writeOutput(message)
}

console.clear = function () {
    originalClear()
    clearOutput()
}

/* ============================================================
 * MODULE IMPORTS
 * ============================================================
 */

// Module 01 – Introduction
import { showMessageAlert } from "../../../01-introduction/examples/window-alert.js"
import { showMessageConfirm } from "../../../01-introduction/examples/window-confirm.js"
import { responseToPrompt } from "../../../01-introduction/examples/window-prompt.js"

// Module 02 – Basic Commands
import { testingVar, varScope } from "../../../02-basic-commands/examples/var-example.js"
import { testingLet, letScope } from "../../../02-basic-commands/examples/let-example.js"
import { testingConst, constScope } from "../../../02-basic-commands/examples/const-example.js"

import { testingValuesTypes } from "../../../02-basic-commands/examples/data-types-example.js"
import { basicArithmeticOperations } from "../../../02-basic-commands/examples/arithmetic-operation-example.js"
import { displayAverageSituation } from "../../../02-basic-commands/examples/ternary-operation-example.js"

/* ============================================================
 * EXAMPLES CONTROLLER
 * ============================================================
 */

const examples = {
    variables() {
        console.clear()
        testingVar()
        varScope()
        testingLet()
        letScope()
        testingConst()
        constScope()
    },

    operators() {
        console.clear()
        basicArithmeticOperations(10, "+", 5)
        basicArithmeticOperations(10, "*", 5)
    },

    dataType() {
        console.clear()
        testingValuesTypes("Carlos", "string")
    },

    conditions() {
        console.clear()
        displayAverageSituation()
    }
}

/* ============================================================
 * UI EVENTS
 * ============================================================
 */

document.querySelectorAll('[data-example]').forEach(card => {
    card.addEventListener('click', () => {
        const key = card.dataset.example

        console.log(`Clicked topic: ${key}`)

        if (examples[key]) {
            examples[key]()
        } else {
            console.warn('Example not found:', key)
        }
    })
})
