import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import {MainHeader} from "./components/MainHeader"


export function Post() {

    return (
        <Container>
            <Header/>
            <Content>
                <MainHeader/>
            </Content>
        </Container>
    )
}