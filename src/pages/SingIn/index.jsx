import { Container, Form, Background, Arrow } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import {Button} from '../../components/Button';
import { Link } from "react-router-dom";


export function SingIn() {
    return (
        <Container>
            
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                
                <Input placeholder="E-mail" type="text" icon={FiMail}/>
                <Input placeholder="Senha" type="password" icon={FiLock}/>

                <Button title="Entrar"/>
                
                <Arrow>
                    <Link to="/register">                    
                        Criar conta
                    </Link>
                </Arrow>

            </Form>
            <Background/>
        </Container>
    );
}