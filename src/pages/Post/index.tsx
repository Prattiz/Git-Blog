import { Container, Content, Description, MainHeader } from "./styles";
import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { api } from "../../lib/axios";
import { formatDate } from "../../utils/formatDate";


interface SelectedPostProps {
    title: string,
    text: string,
    createdAt: string,
    username: string,
    url: string,
    comments: number,
}


export function Post() {

    const [ selectedPost, setSelectedPost ] = useState<SelectedPostProps>({} as SelectedPostProps);
    const { id } = useParams();

    const getSelectedPost = useCallback(async () => {
        const response = await api.get(`/repos/prattiz/git-blog/issues/1`);
        const {
            title,
            comments,
            created_at: createdAt,
            user,
            html_url: htmlUrl,
            body,
          } = response.data
      
        setSelectedPost({
            title,
            text: body,
            username: user.login,
            comments,
            createdAt: formatDate(createdAt),
            url: htmlUrl,
          })
      }, [id])
    
      useEffect(() => {
        getSelectedPost()
      }, [getSelectedPost])

      
    

    return (
        <Container>
            <Header/>
            <Content>
                <MainHeader>
                    <div>
                        <a href="/"><i className="fa-solid fa-chevron-left"/>voltar</a>

                        <a href={selectedPost.url} target="_blank">
                            VER NO GITHUB 
                            <i className="fa-solid fa-arrow-up-right-from-square"/>
                        </a>
                    </div>    

                    <Description>
                        <h1>{selectedPost.title}</h1>
                        <section> 
                            <span>
                                <i className="fa-brands fa-github"/>
                                {selectedPost.username}
                            </span>
                            <span>
                                <i className="fa-solid fa-calendar-day"/>
                                {selectedPost.createdAt}
                            </span>
                            <span>
                                <i className="fa-solid fa-comment"/>
                                {selectedPost.comments}
                            </span>
                        </section>
                    </Description>
                </MainHeader>

                <p>{selectedPost.text}</p>
                
            </Content>
        </Container>
    )
}