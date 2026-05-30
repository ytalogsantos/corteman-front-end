import { getAllServicos } from "../scripts/servico";

export function ServicoList() {
    loadServicos();
    return (
        <div id="servicos-output">
            <ul id="servico-list-element">
                <li>Nothing is real</li>
                
            </ul>
        </div>
    );
}

async function loadServicos() {
    alert("SERVICO LIST");
    const servicos = await getAllServicos();
    console.log(typeof servicos);
    console.log(servicos);
}