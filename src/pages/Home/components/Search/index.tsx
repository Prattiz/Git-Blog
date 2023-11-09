import { Container } from "./styles"

interface ValueProp{
    value: number
}
export function Search({value}: ValueProp) {

    return (
        <Container>
            <div>
                <h1>Publicações</h1>
                <span>{value} Publicaç{value == 1? "ão" : "ões"}</span>
            </div>

            <input type="text" placeholder="Buscar Conteúdo"/>
        </Container>
    )
}