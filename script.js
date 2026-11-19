const botao =
document.querySelector(".btn2");
const texto = 
document.querySelector("#textoNovo")

botao.addEventListener("mouseenter", () =>{
    texto.style.display = "block";



});

botao.addEventListener("mouseleave", () =>{

    texto.style.display = "none";



});

const form = document.createElement("form");
form.id = "form-centro";

// Centraliza na tela sem depender de arquivo CSS externo
form.style.position = "fixed";
form.style.top = "50%";
form.style.left = "50%";
form.style.transform = "translate(-50%, -50%)";
form.style.zIndex = "999";

form.innerHTML = `
    <input type="text" id="nome-centro" placeholder="Digite seu nome">
    <button type="submit">Confirmar</button>
`;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("nome-centro");
    const nome = input.value.trim();

    if (!nome) {
        alert("Por favor, digite seu nome!");
        input.focus();
        return;
    }

    alert("Bem-vindo, " + nome + "!");
    form.remove(); // Remove o formulário da tela após preencher
});

document.body.appendChild(form);
document.getElementById("nome-centro").focus();