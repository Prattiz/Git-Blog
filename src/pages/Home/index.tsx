import { Header } from "../../components/Header";
import { InfoHeader } from "./components/InfoHeader";
import { Container, Content, Card, CardPost, Search } from "./styles";
import { formatDate } from "../../utils/formatDate";
import { useContext } from 'react';
import { GitPostContext } from "../../Context/context";







export function Home() {

    const { post, counterPost, allCardPosts, handleButtonPost } = useContext(GitPostContext);




    return (
        <Container>
            <Header/>
            <Content>
                <InfoHeader/>
                <Search>
                    <div>
                        <h1>Publicações</h1>
                        <span>{counterPost} Publicaç{counterPost == 1? "ão" : "ões"}</span>
                    </div>

                    <input
                        type="text" 
                        placeholder="Buscar Issue"
                        onKeyDown={(e) => e.key === 'Enter' && allCardPosts(e.currentTarget.value)}
                    />
                </Search>
                <CardPost> 
                    {
                        post?.map((item) => {
                            
                            return(
                            <Card key={item.number}> 
                                <button onClick={() => handleButtonPost(item.number)}>
                                    <header>
                                        <h1>{item.title}</h1>
                                        <span>{formatDate(item.created_at)}</span>
                                    </header>
                                    <p>{item.body}</p>
                                </button>
                            </Card>     
                            )
                        })
                    }
                </CardPost>
            </Content>
        </Container>
    )
}
