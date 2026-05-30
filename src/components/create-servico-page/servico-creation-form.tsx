import { submitServicoData } from "../../scripts/submit-servico-data";
import styles from "./servico-creation-form.module.css";

export function ServicoCreationForm() {
    return (
        <>
            <div id="create-servico-component" className={styles.servicoCreationDiv}>  
                <form id="create-servico-form" className={styles.servicoCreationForm}>
                    <label htmlFor="servico-nome-input">Nome</label>
                    <input type="text" id="servico-nome-input" />
                    <label htmlFor="servico-valor-input">Valor</label>
                    <input type="text" inputMode="numeric" maxLength={5} id="servico-valor-input" />
                </form>
                <button id="save-servico-button">Salvar</button>

            </div>
        </>
    );
}



