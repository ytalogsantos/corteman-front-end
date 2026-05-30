import "./styles/theme.css";
import "./styles/global.css";
import { ServicoCreationForm } from "./components/create-servico-page/servico-creation-form";
// import { ServicoList } from "./components/servico-list";
import { HomeMenu } from "./components/home/home-menu";


export function App() {
    return (
        <>
            <HomeMenu />
            <ServicoCreationForm />
        </>
    );
}
