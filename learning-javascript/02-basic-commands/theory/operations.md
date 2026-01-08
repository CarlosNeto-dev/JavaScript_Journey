# 🧮 Operations / Operações

## 🇺🇸 English Version

🚀 **Tip:** For this topic, using **Node.js** is essential and much more practical. It allows you to test commands directly in your terminal/console without needing a browser.

### ➕ Arithmetic Operations
These are the fundamental building blocks for mathematical calculations in JavaScript. They follow the standard order of operations (PEMDAS/BODMAS).

**Precedence Order (Highest to Lowest):**
1.  `()` **Parentheses** (Grouping)
2.  `**` **Exponentiation**
3.  `*`, `/`, `%` **Multiplication, Division, Remainder**
4.  `+`, `-` **Addition, Subtraction**

*   `+` **Addition:** Sums two numbers.
*   `-` **Subtraction:** Subtracts the right operand from the left.
*   `*` **Multiplication:** Multiplies two numbers.
*   `/` **Division:** Divides the left operand by the right.
*   `%` **Remainder (Modulus):** Returns the integer remainder of dividing the two operands.
*   `**` **Exponentiation:** Raises the first operand to the power of the second.

**💻 Console Simulation:**
```javascript
> 5 + 2
7
> 5 - 2
3
> 5 * 2
10
> 5 / 2
2.5
> 5 % 2   // 5 divided by 2 is 2 with a remainder of 1
1
> 5 ** 2  // 5 squared
25
> 5 + 3 / 2
6.5
> (5 + 3) / 2
4
```

#### 🔗 Practical Example (Arithmetic)
I created a specific script to demonstrate these **arithmetic operations**. It uses a function `basicArithmeticOperations` that takes two numbers and an operator sign, simulating a calculator using a `switch` structure.

👉 [arithmetic-operation-example.js](../examples/arithmetic-operation-example.js)

### ⚖️ Relational Operations
Used to compare two values. The result of a relational operation is always a **Boolean** value (`true` or `false`).

*   `>` **Greater than**
*   `<` **Less than**
*   `>=` **Greater than or equal to**
*   `<=` **Less than or equal to**
*   `==` **Equal to:** Checks value equality (performs type conversion if needed).
*   `!=` **Not equal to:** Checks value inequality.
*   `===` **Strict Equal:** Checks if both **value** and **type** are identical (Recommended).
*   `!==` **Strict Not Equal:** Checks if value or type are different.

**💻 Console Simulation:**
```javascript
> 5 > 2
true
> 7 < 4
false
> 8 >= 8
true
> 5 == '5'   // true because values match loosely
true
> 5 === '5'  // false because Number != String
false
```

### 🧠 Logical Operations
These operators allow you to combine multiple boolean expressions or toggle boolean values.

*   `!` **NOT (Negation):** Inverts the boolean value (true becomes false, false becomes true).
*   `&&` **AND (Conjunction):** Returns `true` only if **both** operands are true.
*   `||` **OR (Disjunction):** Returns `true` if **at least one** of the operands is true.

**Truth Table:**

| A | B | A && B (AND) | A \|\| B (OR) |
| :---: | :---: | :---: | :---: |
| `true` | `true` | `true` | `true` |
| `true` | `false` | `false` | `true` |
| `false` | `true` | `false` | `true` |
| `false` | `false` | `false` | `false` |

| A | !A (NOT) |
| :---: | :---: |
| `true` | `false` |
| `false` | `true` |

**💻 Console Simulation:**
```javascript
> true && false
false
> true || false
true
> !true
false
> !false
true
```

### ❓ Ternary Operation
The only operator that takes three operands. It is frequently used as a shortcut for the `if` statement.
**Syntax:** `condition ? value_if_true : value_if_false`

**💻 Console Simulation:**
```javascript
> var average = 5.5
> var result = average >= 7 ? 'Approved' : 'Failed'
> result
'Failed'
```

#### 🔗 Practical Example (Ternary)
This example calculates the average of two grades entered by the user and uses the **ternary operator** to determine if the student is "Approved" (average >= 7) or "Reproved".

👉 [ternary-operation-example.js](../examples/ternary-operation-example.js)

### 📥 Assignment Operations
Used to assign values to variables. You can combine assignment with arithmetic operators for concise code.

*   `=` **Assignment:** `x = y`
*   `+=` **Add and assign:** `x += y` (same as `x = x + y`)
*   `-=` **Subtract and assign:** `x -= y`
*   `*=` **Multiply and assign:** `x *= y`
*   `/=` **Divide and assign:** `x /= y`
*   `%=` **Modulus and assign:** `x %= y`
*   `**=` **Exponentiation and assign:** `x **= y`

**💻 Console Simulation:**
```javascript
> var n = 3
> n += 4  // n becomes 7
7
> n -= 5  // n becomes 2
2
> n++     // Increment (add 1)
3
> n--     // Decrement (subtract 1)
2
```

### 🔢 General Operator Precedence
When mixing different types of operators, JavaScript follows this general order (from highest to lowest priority):

1.  **Arithmetic Operators** (`*`, `/`, `+`, `-`, etc.)
2.  **Relational Operators** (`>`, `<`, `>=`, `<=`)
3.  **Logical NOT** (`!`)
4.  **Logical AND** (`&&`)
5.  **Logical OR** (`||`)
6.  **Ternary Operator** (`? :`)
7.  **Assignment Operators** (`=`, `+=`, etc.)

**Example:**
`a > b && c % 2 == 0`
1. First, `c % 2` is calculated (Arithmetic).
2. Then, `a > b` and the result of step 1 `== 0` are evaluated (Relational).
3. Finally, the `&&` combines the two boolean results (Logical).

### 📚 Further Reading
*   [MDN Web Docs - Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

---

> **🤖 Credits:** Most of the content was generated by AI, but the ideas and organization were done by me. The content was strongly influenced by **Gustavo Guanabara's Curso em Vídeo**.

> **🐛 Found a bug?** If you found any error or have a suggestion, please open an issue on GitHub so we can discuss it!

---

## 🇧🇷 Versão em Português

🚀 **Dica:** Para este tópico, o uso do programa **Node.js** é essencial e muito mais prático, permitindo testar os comandos diretamente no terminal sem depender do navegador.

### ➕ Operações Aritméticas
São os blocos fundamentais para cálculos matemáticos. O JavaScript respeita a ordem de precedência matemática padrão (parênteses, potências, multiplicação/divisão, soma/subtração).

**Ordem de Precedência (Maior para Menor):**
1.  `()` **Parênteses** (Agrupamento)
2.  `**` **Potência**
3.  `*`, `/`, `%` **Multiplicação, Divisão, Resto**
4.  `+`, `-` **Adição, Subtração**

*   `+` **Adição:** Soma dois números.
*   `-` **Subtração:** Subtrai o operando da direita do da esquerda.
*   `*` **Multiplicação:** Multiplica dois números.
*   `/` **Divisão:** Realiza a divisão real.
*   `%` **Resto (Módulo):** Retorna o resto inteiro da divisão.
*   `**` **Potência:** Eleva o primeiro número à potência do segundo.

**💻 Simulação de Console:**
```javascript
> 5 + 2
7
> 5 - 2
3
> 5 * 2
10
> 5 / 2
2.5
> 5 % 2   // 5 dividido por 2 dá 2 e sobra 1
1
> 5 ** 2  // 5 ao quadrado
25
> 5 + 3 / 2
6.5
> (5 + 3) / 2
4
```

#### 🔗 Exemplo Prático (Aritmética)
Criei um script específico para demonstrar essas **operações aritméticas**. Ele utiliza uma função `basicArithmeticOperations` que recebe dois números e um sinal de operação, simulando uma calculadora através de uma estrutura `switch`.

👉 [arithmetic-operation-example.js](../examples/arithmetic-operation-example.js)

### ⚖️ Operações Relacionais
Servem para comparar dois valores. O resultado de uma operação relacional é sempre um valor **Booleano** (`true` ou `false`).

*   `>` **Maior que**
*   `<` **Menor que**
*   `>=` **Maior ou igual a**
*   `<=` **Menor ou igual a**
*   `==` **Igual a:** Verifica igualdade de valor (faz conversão de tipo se necessário).
*   `!=` **Diferente de:** Verifica desigualdade de valor.
*   `===` **Igualdade Estrita:** Verifica se **valor** e **tipo** são idênticos (Recomendado).
*   `!==` **Desigualdade Estrita:** Verifica se valor ou tipo são diferentes.

**💻 Simulação de Console:**
```javascript
> 5 > 2
true
> 7 < 4
false
> 8 >= 8
true
> 5 == '5'   // true, pois os valores são "iguais"
true
> 5 === '5'  // false, pois Número é diferente de String
false
```

### 🧠 Operações Lógicas
Permitem combinar múltiplas expressões booleanas ou inverter valores lógicos.

*   `!` **NÃO (Negação):** Inverte o estado (verdadeiro vira falso, falso vira verdadeiro).
*   `&&` **E (Conjunção):** Retorna `true` apenas se **ambos** os operandos forem verdadeiros.
*   `||` **OU (Disjunção):** Retorna `true` se **pelo menos um** dos operandos for verdadeiro.

**Tabela Verdade:**

| A | B | A && B (E) | A \|\| B (OU) |
| :---: | :---: | :---: | :---: |
| `true` | `true` | `true` | `true` |
| `true` | `false` | `false` | `true` |
| `false` | `true` | `false` | `true` |
| `false` | `false` | `false` | `false` |

| A | !A (NÃO) |
| :---: | :---: |
| `true` | `false` |
| `false` | `true` |

**💻 Simulação de Console:**
```javascript
> true && false
false
> true || false
true
> !true
false
> !false
true
```

### ❓ Operação Ternária
É o único operador que aceita três operandos. É frequentemente usado como um atalho para a estrutura `if`.
**Sintaxe:** `condicao ? valor_se_verdadeiro : valor_se_falso`

**💻 Simulação de Console:**
```javascript
> var media = 5.5
> var resultado = media >= 7 ? 'Aprovado' : 'Reprovado'
> resultado
'Reprovado'
```

#### 🔗 Exemplo Prático (Ternário)
Este exemplo calcula a média de duas notas inseridas pelo usuário e utiliza o **operador ternário** para determinar se o aluno está "Aprovado" (média >= 7) ou "Reprovado".

👉 [ternary-operation-example.js](../examples/ternary-operation-example.js)

### 📥 Operações de Atribuição
Usadas para armazenar valores em variáveis. É possível combinar a atribuição com operadores aritméticos para simplificar o código (Auto-atribuição).

*   `=` **Atribuição Simples:** `x = y`
*   `+=` **Soma e atribui:** `x += y` (mesmo que `x = x + y`)
*   `-=` **Subtrai e atribui:** `x -= y`
*   `*=` **Multiplica e atribui:** `x *= y`
*   `/=` **Divide e atribui:** `x /= y`
*   `%=` **Resto e atribui:** `x %= y`
*   `**=` **Potência e atribui:** `x **= y`

**💻 Simulação de Console:**
```javascript
> var n = 3
> n += 4  // n passa a valer 7
7
> n -= 5  // n passa a valer 2
2
> n++     // Incremento (adiciona 1)
3
> n--     // Decremento (subtrai 1)
2
```

### 🔢 Ordem de Precedência Geral
Quando misturamos diferentes tipos de operadores, o JavaScript segue esta ordem geral (da maior para a menor prioridade):

1.  **Operadores Aritméticos** (`*`, `/`, `+`, `-`, etc.)
2.  **Operadores Relacionais** (`>`, `<`, `>=`, `<=`)
3.  **Lógico NÃO** (`!`)
4.  **Lógico E** (`&&`)
5.  **Lógico OU** (`||`)
6.  **Operador Ternário** (`? :`)
7.  **Operadores de Atribuição** (`=`, `+=`, etc.)

**Exemplo:**
`a > b && c % 2 == 0`
1. Primeiro, calcula-se `c % 2` (Aritmético).
2. Depois, avalia-se `a > b` e o resultado do passo 1 `== 0` (Relacional).
3. Por fim, o `&&` combina os dois resultados booleanos (Lógico).

### 📚 Para Saber Mais
*   [MDN Web Docs - Expressões e operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators)

---

> **🤖 Créditos:** A maior parte do conteúdo foi feito por IA, porém as ideias e organização foram feitos por mim. O conteúdo foi fortemente influenciado pelo **Curso em Vídeo do Gustavo Guanabara**.

> **🐛 Encontrou um bug?** Se você encontrou algum erro ou tem uma sugestão, por favor abra uma issue no GitHub para discutirmos!
