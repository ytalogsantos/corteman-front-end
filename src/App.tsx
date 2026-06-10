import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { ServicoForm } from "./components/ServicoForm/ServicoForm";

import "./styles/theme.css";
import "./styles/global.css";
import { DefaultInfoCard } from "./components/DefaultInfoCard";

const servico1 = {
    nome: "Corte Americano",
    preco: 0.90,
};

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <DefaultInfoCard title={servico1.nome} info={servico1} />
            </Container>
            
        </>
    );
}
