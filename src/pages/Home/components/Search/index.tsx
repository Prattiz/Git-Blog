import { Container } from "./styles"


export function Search() {

    return (
        <Container>
            <div>
                <h1>Publicações</h1>
                <span>6 Publicações</span>
            </div>

            <input type="text" placeholder="Buscar Conteúdo"/>
        </Container>
    )
}