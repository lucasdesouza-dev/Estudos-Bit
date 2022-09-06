import { NegociacaoController } from "./controllers/negociacao.controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form != null
    ? form.addEventListener("submit", (event) => {
        event.preventDefault();
        controller.adicionar();
    })
    : Error("Não foi possivel iniciar aplicação, verifique se o form existe! ");
console;
