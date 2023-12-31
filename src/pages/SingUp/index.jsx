import {Container, Form, Background, Arrow} from "./styles";
import {FiMail, FiLock, FiUser} from 'react-icons/fi';
import {BsArrowLeftShort} from 'react-icons/bs';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {Link} from "react-router-dom";



export function SingUp() {
    return (
        <Container>
            
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input placeholder="Nome" type="text" icon={FiUser}/>
                <Input placeholder="E-mail" type="text" icon={FiMail}/>
                <Input placeholder="Senha" type="password" icon={FiLock}/>

                <Button title="Cadastrar"/>
                
                <Arrow>
                    <BsArrowLeftShort/>
                    <Link to="/">                    
                        Voltar para o login
                    </Link>
                </Arrow>

            </Form>
            <Background/>
        </Container>
    );
}