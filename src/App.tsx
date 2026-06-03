import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Stopwatch } from "./components/Stopwatch";
import { DefaultInput } from "./components/DefaultInput";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
    return (
        <>
            <Container>
                {/* <Heading>BEM VINDO (A) AO CORTEMAN!</Heading> */}
                <Logo />
            </Container>
            <Container>
                <Menu />
            </Container>
            <Container>
                <form>
                    <div>
                        <DefaultInput />
                    </div>
                </form>
            </Container>
        </>
    );
}
