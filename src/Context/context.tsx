import { createContext, useState, useEffect, useCallback, ReactNode } from "react";
import { api, UserGitHub } from "../lib/axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface ChildrenProp{
    children: ReactNode
}

interface PostProps {
  title: string,
  comments: number,
  created_at: string,
  username: string,
  url: string,
  body: string,
}

interface UserGitProps{
    post?: PostProps[],
    handlePost: () => void, 
}

export const UserGitContext = createContext({} as UserGitProps)

export function UserGitContextProvider({children}: ChildrenProp){

    const [ post, setPost ] = useState<PostProps[]>([]);
    const { id } = useParams();
    const navigate = useNavigate();

    

    const Post = useCallback(async () => {
      const response = await api.get(
        `repos/${UserGitHub}/git-blog/issues/1`
      );

      setPost([response.data])
    }, [id]);
  
    useEffect(() => {
      Post()
    }, [Post])


    function handlePost(){
      navigate('/post')
    }

    
    return(
        <UserGitContext.Provider value={{ post, handlePost }}>
            {children}
        </UserGitContext.Provider>
    )
} 