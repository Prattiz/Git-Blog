import { createContext, ReactNode, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserGitHub, UserRepos } from "../lib/axios";
import { api } from "../lib/axios";


interface ChildrenProps{
    children: ReactNode,
}

export interface PostProps {
    title: string
    body: string
    created_at: string
    number: number
}


interface GitPostProps{
    handleButtonPost(number: number): void,
    counterPost: number,
    post?: PostProps[],
    allCardPosts: (query: string | null) => Promise<void>
}

export const GitPostContext = createContext({} as GitPostProps)

export function GitPostContextProvider({children}: ChildrenProps){

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
   

    return(
        <GitPostContext.Provider value={{ handleButtonPost, post, counterPost, allCardPosts }}>
            {children}
        </GitPostContext.Provider>
    )
} 