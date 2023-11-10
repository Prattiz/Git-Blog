import { Container, Description } from "./styles";
import { useState, useCallback, useEffect } from 'react';
import { api, UserGitHub } from "../../../lib/axios";




interface UserProps {
    name: string,
    image: string,
    followers: number,
    description: string,
    username: string,
    url: string,
    company: string, 
}

export function InfoHeader() {

    const [user, setUser] = useState<UserProps>()

    const Users = useCallback(async () => {
        const response = await api.get(`users/${UserGitHub}`);

        const {
          name,
          followers,
          login,
          company,
          html_url: htmlUrl,
          avatar_url: avatarUrl,
          bio,
        } = response.data;

        const userInfo = {
          name,
          image: avatarUrl,
          followers,
          description: bio,
          username: login,
          url: htmlUrl,
          company,  
        };

        setUser(userInfo)
      }, [])

      useEffect(() => {
        Users()
      }, [Users])
      
    
    return (
        <Container>
            <img src={user?.image} alt='foto do usuário'/>  

            <Description>
                <div>
                    <h1>{user?.name}</h1>
                    <a href={user?.url} target="_blank">GITHUB <i className="fa-solid fa-arrow-up-right-from-square"/></a>
                </div>
              
            
                <p>{user?.description}</p>

                <section>
                    <span><i className="fa-brands fa-github"/>{user?.username}</span>
                    <span><i className="fa-solid fa-building"/>{user?.company}</span>
                    <span><i className="fa-solid fa-user-group"/>{user?.followers} Seguidores</span>
                </section>
            </Description>
        </Container>
    )
}