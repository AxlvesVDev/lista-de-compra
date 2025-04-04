const adicionarItem = () => {
    const input = document.getElementById("novo-item");
    const itemTexto = input.value.trim();
    if (itemTexto) {
        const lista = document.getElementById("lista-compras");
        const novoItem = document.createElement("li");
        novoItem.innerHTML = `<input type="checkbox"> ${itemTexto} <button class="remover">&#128465;</button>`;
        lista.appendChild(novoItem);
        input.value = "";
        adicionarEventosRemover(novoItem.querySelector(".remover"));
    }
};




const removerItem = (botao) => {
    botao.parentElement.remove();
    const alerta = document.querySelector(".alerta-removido");
    alerta.style.display = "flex";
    setTimeout(() => alerta.style.display = "none", 2000);
};

const adicionarEventosRemover = (botao) => {
    botao.addEventListener("click", () => removerItem(botao));
};

document.getElementById("adicionar").addEventListener("click", adicionarItem);
document.querySelectorAll(".remover").forEach(adicionarEventosRemover);