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
