import { Header } from "../../components/Header";
import { InfoHeader } from "./components/InfoHeader";
import { Search } from "./components/Search";

import { Container, Content, Card, CardPost } from "./styles";

import { formatDate } from "../../utils/formatDate";
import { api, UserGitHub, UserRepos } from "../../lib/axios";

import { useState, useEffect, useCallback } from "react";

import { useNavigate } from "react-router-dom";


export interface PostProps {
    title: string
    body: string
    created_at: string
    number: string
}




export function Home() {

  const [ post, setPost ] = useState<PostProps[]>([] as PostProps[]);
  const navigate = useNavigate();
  const [ counterPost, setCounterPost] = useState(0);

  const allCardPosts = useCallback(async (query: string) => {
    const response = await api.get(`search/issues?q=${query}is:issue%20is:open%20repo:${UserGitHub}/${UserRepos}`);

    setPost(response.data.items)
    setCounterPost(response.data.total_count)
  }, [])

  useEffect(() => {
    allCardPosts('')
  }, [allCardPosts])

  function handleButtonPost(){
    navigate('/post')
  }


    return (
        <Container>
            <Header/>
            <Content>
                <InfoHeader/>
                <Search value={counterPost}/>
                <CardPost> 
                    {
                        post?.map((item) => {
                            console.log(item.number)
                            return(
                            <Card key={item.created_at}> 
                                <button onClick={handleButtonPost}>
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
