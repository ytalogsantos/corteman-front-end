import { Heading } from "./components/Heading";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
    return (
        <>
            <Container>
                <Heading>BEM VINDO (A) AO CORTEMAN!</Heading>
                <Logo />
            </Container>
            <Container>MENU</Container>
            <Container>FOOT</Container>
        </>
    );
}
