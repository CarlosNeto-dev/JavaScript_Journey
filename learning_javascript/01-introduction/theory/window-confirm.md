# ❓ window.confirm()

---

## 🇺🇸 English Version

### 🎯 Purpose
The `window.confirm()` method displays a modal dialog with a message, an **OK** button, and a **Cancel** button.
*   **Behavior:** Pauses execution until the user makes a choice.
*   **Return:** Returns a `boolean` value:
    *   `true` if the user clicks **OK**.
    *   `false` if the user clicks **Cancel**.

### 🏗️ Context of Use
Used when you need a binary decision from the user (Yes/No).
1.  **Critical Actions:** "Are you sure you want to delete this item?"
2.  **Navigation Confirmation:** "You have unsaved changes. Do you really want to leave?"
3.  **Simple Logic Flows:** Branching code execution based on user choice in simple scripts.

### 💻 Syntax
```javascript
let result = window.confirm("Do you like JavaScript?");

if (result) {
    console.log("User clicked OK!");
} else {
    console.log("User clicked Cancel!");
}
```

---

## 🇧🇷 Versão em Português

### 🎯 Propósito
O método `window.confirm()` exibe uma caixa de diálogo modal com uma mensagem, um botão **OK** e um botão **Cancelar**.
*   **Comportamento:** Pausa a execução até que o usuário faça uma escolha.
*   **Retorno:** Retorna um valor `boolean` (booleano):
    *   `true` se o usuário clicar em **OK**.
    *   `false` se o usuário clicar em **Cancelar**.

### 🏗️ Contexto de Uso
Usado quando você precisa de uma decisão binária do usuário (Sim/Não).
1.  **Ações Críticas:** "Tem certeza que deseja excluir este item?"
2.  **Confirmação de Navegação:** "Você tem alterações não salvas. Deseja realmente sair?"
3.  **Fluxos Lógicos Simples:** Desviar a execução do código com base na escolha do usuário em scripts simples.

### 💻 Sintaxe
```javascript
let resultado = window.confirm("Você gosta de JavaScript?");

if (resultado) {
    console.log("Usuário clicou em OK!");
} else {
    console.log("Usuário clicou em Cancelar!");
}
```

---

### 🙌 Credits / Créditos
Inspired by **Curso em Vídeo (Gustavo Guanabara)**.
