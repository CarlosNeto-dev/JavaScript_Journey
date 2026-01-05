# 📝 window.prompt()

---

## 🇺🇸 English Version

### 🎯 Purpose
The `window.prompt()` method displays a dialog box that prompts the visitor for input. It includes a text field, an **OK** button, and a **Cancel** button.
*   **Behavior:** Pauses execution waiting for user input.
*   **Return:**
    *   Returns the **text (string)** entered if the user clicks **OK**.
    *   Returns `null` if the user clicks **Cancel**.
    *   **Important:** Even if the user types a number, it returns a `string`.

### 🏗️ Context of Use
Used to collect simple data from the user without creating a form.
1.  **Simple Data Collection:** Asking for a name, age, or simple value in educational scripts.
2.  **Quick Testing:** Testing functions that require arguments without hardcoding them.
3.  **Legacy Systems:** Older internal tools might still use this for quick inputs.

### 💻 Syntax
```javascript
// prompt(message, defaultValue);
let name = window.prompt("What is your name?", "Guest");

if (name !== null) {
    console.log("Hello, " + name);
} else {
    console.log("User cancelled the prompt.");
}
```

---

## 🇧🇷 Versão em Português

### 🎯 Propósito
O método `window.prompt()` exibe uma caixa de diálogo que solicita uma entrada do visitante. Inclui um campo de texto, um botão **OK** e um botão **Cancelar**.
*   **Comportamento:** Pausa a execução aguardando a entrada do usuário.
*   **Retorno:**
    *   Retorna o **texto (string)** digitado se o usuário clicar em **OK**.
    *   Retorna `null` se o usuário clicar em **Cancelar**.
    *   **Importante:** Mesmo que o usuário digite um número, ele retorna uma `string`.

### 🏗️ Contexto de Uso
Usado para coletar dados simples do usuário sem criar um formulário HTML.
1.  **Coleta de Dados Simples:** Perguntar nome, idade ou valor simples em scripts educacionais.
2.  **Testes Rápidos:** Testar funções que requerem argumentos sem precisar escrevê-los fixos no código.
3.  **Sistemas Legados:** Ferramentas internas antigas ainda podem usar isso para entradas rápidas.

### 💻 Sintaxe
```javascript
// prompt(mensagem, valorPadrao);
let nome = window.prompt("Qual é o seu nome?", "Visitante");

if (nome !== null) {
    console.log("Olá, " + nome);
} else {
    console.log("Usuário cancelou a entrada.");
}
```

---

### 🙌 Credits / Créditos
Inspired by **Curso em Vídeo (Gustavo Guanabara)**.
