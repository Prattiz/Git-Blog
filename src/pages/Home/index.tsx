import { Header } from "../../components/Header";
import { InfoHeader } from "./InfoHeader";
import { Container, Content, Card, CardPost, Search } from "./styles";
import { formatDate } from "../../utils/formatDate";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserGitHub, UserRepos, api } from "../../lib/axios";


export interface PostProps {
    title: string
    body: string
    created_at: string
    number: number
}

export function Home() {

    const [ post, setPost ] = useState<PostProps[]>([] as PostProps[]);
    const navigate = useNavigate();
    const [ counterPost, setCounterPost] = useState(0);
    

    const allCardPosts = useCallback(async (query: string | null) => {
        const response = await api.get(`search/issues?q=${query}is:issue%20is:open%20repo:${UserGitHub}/${UserRepos}`);
        
        setPost(response.data.items)
        setCounterPost(response.data.total_count)
    }, [])

    useEffect(() => {
        allCardPosts('')
    }, [allCardPosts])

    
    function handleButtonPost(number : number){
        navigate(`/post/${number}`)
    }


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
