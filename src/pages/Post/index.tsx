import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { MainHeader } from "./components/MainHeader";
import { useContext } from "react";
import { UserGitContext } from "../../Context/context";



export function Post() {

    const { post } = useContext(UserGitContext)

    return (
        <Container>
            <Header/>
            <Content>
                <MainHeader/>

                <p>{post?.body}</p>
                
            </Content>
        </Container>
    )
}