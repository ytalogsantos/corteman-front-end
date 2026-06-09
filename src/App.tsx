import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { ServicoForm } from "./components/ServicoForm/ServicoForm";

import "./styles/theme.css";
import "./styles/global.css";


export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <ServicoForm />
            </Container>
            
        </>
    );
}
