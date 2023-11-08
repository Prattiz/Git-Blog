import { createContext, useState, useEffect, useCallback, ReactNode } from "react";
import { api, UserGitHub } from "../lib/axios";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useParams } from "react-router-dom";

interface ChildrenProp{
    children: ReactNode
}

interface PostProps {
  title: string
  comments: number
  createdAt: string
  username: string
  url: string
  body: string
}

interface UserGitProps{
    post?: PostProps 
}

export const UserGitContext = createContext({} as UserGitProps)

export function UserGitContextProvider({children}: ChildrenProp){

    const [ post, setPost ] = useState<PostProps>({} as PostProps);
    const { id } = useParams();

    const Post = useCallback(async () => {
      const response = await api.get(
        `/repos/${UserGitHub}/git-blog/issues/1`
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

    return(
        <UserGitContext.Provider value={{ post }}>
            {children}
        </UserGitContext.Provider>
    )
} 