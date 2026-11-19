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

const cards = document.querySelectorAll(".box3");

const infoArea = document.querySelector("#audience-info");
const infoTitle = document.querySelector("#audience-title");
const infoDescription = document.querySelector("#audience-description");

const audiences = {
    cidadaos: {
        title: "Cidadãos",
        description: "A CityUp é voltada para todos os cidadãos que desejam contribuir para uma cidade melhor, especialmente moradores que convivem diariamente com problemas urbanos e querem ter voz na busca por soluções."
    },

    orgaos: {
        title: "Órgãos públicos",
        description: "A plataforma ajuda os órgãos públicos a entender melhor as necessidades da população, facilitando o recebimento de solicitações e a organização dos problemas que precisam de atenção."
    },

    equipes: {
        title: "Equipes de manutenção",
        description: "Com as informações registradas pelos cidadãos, as equipes de manutenção conseguem identificar os locais que precisam de reparos e organizar melhor os serviços, tornando o atendimento mais eficiente."
    },

    comunidades: {
        title: "Comunidades",
        description: "As comunidades têm um papel importante na transformação da cidade. Por meio da participação coletiva, os moradores podem apontar problemas do dia a dia e colaborar para construir bairros mais cuidados e agradáveis."
    }
};

function toggleAudience(card) {

    const audience = card.dataset.audience;

    const isActive = card.classList.contains("active");

    cards.forEach(item => {
        item.classList.remove("active");
        item.setAttribute("aria-expanded", "false");
    });

    if (isActive) {
        infoArea.classList.remove("active");
        infoArea.setAttribute("aria-hidden", "true");
        return;
    }

    card.classList.add("active");
    card.setAttribute("aria-expanded", "true");

    infoTitle.textContent = audiences[audience].title;
    infoDescription.textContent = audiences[audience].description;

    infoArea.classList.add("active");
    infoArea.setAttribute("aria-hidden", "false");
}

cards.forEach(card => {

    card.addEventListener("click", () => {
        toggleAudience(card);
    });

});

const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicator");
const anterior = document.querySelector(".prev");
const proximo = document.querySelector(".next");

let atual = 0;

function mostrarSlide(numero) {

    slides[atual].classList.remove("active");
    indicadores[atual].classList.remove("active");

    atual = numero;

    slides[atual].classList.add("active");
    indicadores[atual].classList.add("active");
}

proximo.addEventListener("click", function() {
    let numero = (atual + 1) % slides.length;
    mostrarSlide(numero);
});

anterior.addEventListener("click", function() {
    let numero = (atual - 1 + slides.length) % slides.length;
    mostrarSlide(numero);
});

indicadores.forEach(function(indicador, numero) {
    indicador.addEventListener("click", function() {
        mostrarSlide(numero);
    });
});