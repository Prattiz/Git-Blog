import { useParams } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";
import { api, UserGitHub } from "../../../../lib/axios";
import { Container, Description } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";


interface PostProps {
    title: string
    comments: number
    createdAt: string
    username: string
    url: string
    body: string
  }

export function MainHeader() {
    
    const [ post, setPost ] = useState<PostProps>({} as PostProps);
    const { id } = useParams();

    const Post = useCallback(async () => {
      const response = await api.get(
        `/repos/${UserGitHub}/github-blog/issues/${id}`
      );

      const {
        title,
        comments,
        created_at: createdAt,
        user,
        html_url: htmlUrl,
        body,
      } = response.data;

      const postInfo = {
        title,
        username: user.login,
        comments,
        createdAt: formatDistanceToNow(new Date(createdAt), {
          locale: ptBR,
          addSuffix: true,
        }),
        url: htmlUrl,
        body,
      }
      setPost(postInfo)
    }, [id]);
  
    useEffect(() => {
      Post()
    }, [Post])
  

    return (
        <Container>
            <div>
                <a href="/"><i className="fa-solid fa-chevron-left"/>voltar</a>
                <a href="" target="_blank">VER NO GITHUB <i className="fa-solid fa-arrow-up-right-from-square"/></a>
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