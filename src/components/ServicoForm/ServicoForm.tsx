import styles from "./ServicoForm.module.css";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { createServico } from "../../scripts/servico";

type addServiceButtonProps = {
    servico: {
        nome: string,
        preco: number
    },
}

function AddServicoButton({ servico }: addServiceButtonProps) {
    async function handleAddServicoClick() {
        try {
            await createServico(servico.nome, servico.preco);
            alert(`Serviço ${servico.nome} adicionado com sucesso!`);

        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <DefaultButton text="Salvar" onClick={handleAddServicoClick}/>
        </>
    );
}


function CancelButton() {
    function handleCancelClick() {
        alert("Operação cancelada!");
    }
    return (
        <>
            <DefaultButton text="Cancelar" onClick={handleCancelClick}/>
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
                {/* <AddServicoButton servico={{}} /> */}
                <CancelButton />
            </div>
        </div>
    )
}