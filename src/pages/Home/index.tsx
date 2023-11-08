import { Header } from "../../components/Header";
import { CardPost } from "./components/CardPost";
import { InfoHeader } from "./components/InfoHeader";
import { Search } from "./components/Search";
import { Container, Content } from "./styles";


export function Home() {


    return (
        <Container>
            <Header/>
            <Content>
                <InfoHeader/>
                <Search/>
                <CardPost/>
            </Content>

        </Container>
    )
}
