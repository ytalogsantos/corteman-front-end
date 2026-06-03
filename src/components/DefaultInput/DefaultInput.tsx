import styles from "./DefaultInput.module.css";

export function DefaultInput() {
    return (
        <>
            <label htmlFor="servicoName">Nome do Servico</label>
            <input type="text" id="servicoName" />
        </>
    );
}