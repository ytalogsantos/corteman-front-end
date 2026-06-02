import { createServico } from "./servico";
export function submitServicoData() {
    const servicoForm = document.getElementById("servico-form") as HTMLFormElement;
    const servicoNameInputElement = document.getElementById("servico-name-input") as HTMLInputElement;
    const servicoPriceInputElement = document.getElementById("servico-price-input") as HTMLInputElement;
    const servicoName = servicoNameInputElement.value;
    const servicoPrice = Number(servicoPriceInputElement.value);
    
    servicoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        createServico(servicoName, servicoPrice);
    });
}