import { Container, Profile } from "./styles";

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <input type="text" placeholder="Pesquisar pelo título" />
            <Profile>
                <div>
                    <strong>Rodrigo Andrade</strong>
                    <span>sair</span>
                </div>
                <img 
                    src="https://github.com/andranovich.png" 
                    alt="Foto do usuário"
                />
            </Profile>
        </Container>      
    );
}