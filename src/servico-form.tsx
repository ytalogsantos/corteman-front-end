import { submitServicoData } from "./scripts/submit-servico-data";

export function ServicoForm() {
    return (
        <>
            <form id="servico-form">
                <input type="text" id="servico-name-input" />
                <label htmlFor="servico-name-input">Nome do serviço</label>

                <input type="number" id="servico-price-input" />
                <label htmlFor="servico-price-input">Valor do Serviço</label>

                <button type="submit" onClick={submitServicoData} id="submit-servico-form-button">Adicionar serviço</button>
                <script>

                </script>
            </form>
        </>
    );
}



