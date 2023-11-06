import { Header } from "../../components/Header"
import { InfoHeader } from "./components/InfoHeader"
import { Container, Content } from "./styles"


export function Home() {

    return (
        <Container>
            <Header/>
            <Content>
                <InfoHeader/>
                
            </Content>

        </Container>
    )
}
