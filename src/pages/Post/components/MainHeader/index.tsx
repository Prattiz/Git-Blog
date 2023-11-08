import { useContext } from "react";
import { Container, Description } from "./styles";
import { UserGitContext } from "../../../../Context/context";


export function MainHeader() {
    
    const { post } = useContext(UserGitContext);

    
  

    return (
        <Container>
            <div>
                <a href="/"><i className="fa-solid fa-chevron-left"/>voltar</a>
                <a href={post?.url} target="_blank">VER NO GITHUB <i className="fa-solid fa-arrow-up-right-from-square"/></a>
            </div>    

            <Description>
                <h1>{post?.title}</h1>
                <section> 
                    <span><i className="fa-brands fa-github"/>{post?.username}</span>
                    <span><i className="fa-solid fa-calendar-day"/>{post?.createdAt}</span>
                    <span><i className="fa-solid fa-comment"/>{post?.comments}</span>
                </section>
            </Description>
        </Container>
    )
}