import {Container, Content, Arrow, Title, Observation, Mark, Changes} from './styles';
import {BsArrowLeftShort} from 'react-icons/bs';
import {MdClose, MdAdd} from 'react-icons/md';
import {Button} from '../../components/Button';
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import {Link} from 'react-router-dom';


export function CreateMovie() {
    return (
        <Container>
            <Header/>
            <Content>
                <Arrow>
                    <BsArrowLeftShort/>
                    <Link to="/">                    
                        Voltar
                    </Link>
                </Arrow>

                <h1>Novo filme</h1>

                <Title>
                    <Input placeholder='Título' type="text"/>
                    <Input placeholder='Sua nota (de 0 a 5)' type="text"/>
                </Title>
                
                <Observation>
                    <textarea placeholder='Observação' name="Observação" id="Observation" cols="30" rows="10"></textarea>                
                </Observation>

                <h2>Marcadores</h2>

                <Mark>                    
                    <span>React <MdClose/></span>
                    <span>Novo marcador <MdAdd/></span>                            
                </Mark>

                <Changes>
                    <Button className="delete" title="Excluir filme"/>
                    <Button title="Salvar alterações"/>
                </Changes>

                
            </Content>
        </Container>    
    );
}