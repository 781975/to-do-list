alert("JavaScript está funcionando!");


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("adicionar").addEventListener("click", adicionarTarefa);
});

function adicionarTarefa() {
    let tarefa = document.getElementById("tarefa").value;
    if (tarefa.trim() === "") return;

    let lista = document.getElementById("lista");
    let item = document.createElement("li");

    item.innerHTML = `${tarefa} 
        <button onclick="marcarConcluida(this)">✔</button> 
        <button onclick="removerTarefa(this)">❌</button>`;

    lista.appendChild(item);
    document.getElementById("tarefa").value = "";
}

function marcarConcluida(botao) {
    let item = botao.parentElement;
    item.classList.toggle("completed");
}

function removerTarefa(botao) {
    let item = botao.parentElement;
    item.remove();
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("adicionar").addEventListener("click", adicionarTarefa);
});

function adicionarTarefa() {
    let tarefa = document.getElementById("tarefa").value.trim();
    if (tarefa === "") return; // Evita adicionar tarefas vazias

    let lista = document.getElementById("lista");
    let item = document.createElement("li");

    item.innerHTML = `
        <span class="texto-tarefa">${tarefa}</span>
        <button class="concluir">✔</button>
        <button class="remover">❌</button>
    `;

    lista.appendChild(item);
    document.getElementById("tarefa").value = ""; // Limpa o campo de entrada

    // Adiciona eventos para concluir e remover tarefas
    item.querySelector(".concluir").addEventListener("click", function () {
        item.classList.toggle("concluida");
    });

    item.querySelector(".remover").addEventListener("click", function () {
        item.remove();
    });
}



