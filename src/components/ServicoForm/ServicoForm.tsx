import styles from "./ServicoForm.module.css";

export function ServicoForm() {
    return (
        <>
            <form className={styles.servicoForm}>
                <div className={styles.servicoFormRow}>
                    <label htmlFor="servicoName">Nome do Servico</label>
                    <input type="text" id="servicoName" />
                </div>
                
                <div className={styles.servicoFormRow}>
                    <label htmlFor="servicoPrice">Valor do Servico</label>
                    <input type="text" inputMode="decimal" id="servicoPrice" />
                </div>

                <div className={styles.servicoFormRow}>
                    <button>Salvar</button>
                </div>

            </form>
        </>
    );
}