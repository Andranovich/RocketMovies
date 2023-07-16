import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <input type="text" placeholder="Pesquisar pelo título"/>
            <Profile to="/profile">
                <div>
                    <strong>Rodrigo Andrade</strong>
                    <Logout to="/">sair</Logout>
                </div>
                <img 
                    src="https://github.com/andranovich.png" 
                    alt="Foto do usuário"
                />
            </Profile>
        </Container>      
    );
}