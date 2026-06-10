import styles from "./ServicoForm.module.css";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { createServico } from "../../scripts/servico";

type servicoProps = {
    nome: string,
    preco: number
}

function AddServicoButton() {
    async function handleAddServicoClick() {
        const servico = getServicoInputValue();

        try {
            await createServico(servico.nome, servico.preco);
            alert(`Serviço ${servico.nome} adicionado com sucesso!`);

        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <DefaultButton text="Salvar" onClick={handleAddServicoClick} />
        </>
    );
}

function getServicoInputValue(): servicoProps {
    const nomeInput = document.getElementById("servicoNameInput") as HTMLInputElement;
    const precoInput = document.getElementById("servicoPriceInput") as HTMLInputElement;

    const nome = String(nomeInput.value);
    const preco = Number(precoInput.value);

    return { nome, preco }
}

function CancelButton() {
    function handleCancelClick() {
        alert("Operação cancelada!");
    }
    return (
        <>
            <DefaultButton text="Cancelar" onClick={handleCancelClick} />
        </>
    );
}

export function ServicoForm() {
    return (
        <div className={styles.servicoFormContainer}>
            <div className={styles.servicoFormInput}>
                <DefaultInput id="servicoNameInput" labelText="Nome" />
                <DefaultInput id="servicoPriceInput" labelText="Valor" />
            </div>
            <div className={styles.servicoFormButtom}>
                <AddServicoButton />
                <CancelButton />
            </div>
        </div>
    );
}