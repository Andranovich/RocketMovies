import { Container, Content, Arrow } from "./styles";
import {Header} from "../../components/Header";
import {BsArrowLeftShort} from 'react-icons/bs';


export function MoviePreview() {
    return(
        <Container>
            <Header/>
            <Content>
                <div>
                    <Arrow>
                        <BsArrowLeftShort/>
                    </Arrow>
                    <a href="/">Voltar</a>
                </div>
                <h1>Interestelar</h1>
            </Content>

        </Container>
    );
}