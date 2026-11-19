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

const btnFacaParte = document.querySelector(".btn2");

btnFacaParte.addEventListener("click", (e) => {
    e.preventDefault();

    if (document.getElementById("form-faca-parte")) {
        document.getElementById("nome-faca-parte").focus();
        return;
    }

    const form = document.createElement("form");
    form.id = "form-faca-parte";
    form.innerHTML = `
        <input type="text" id="nome-faca-parte" placeholder="Digite seu nome">
        <button type="submit">Confirmar</button>
    `;

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const input = document.getElementById("nome-faca-parte");
        const nome = input.value.trim();

        if (!nome) {
            alert("Por favor, digite seu nome!");
            input.focus();
            return;
        }

        alert("Bem-vindo ao CityUp, " + nome + "!");
        form.remove();
    });

    btnFacaParte.parentElement.insertAdjacentElement("afterend", form);
    document.getElementById("nome-faca-parte").focus();
});