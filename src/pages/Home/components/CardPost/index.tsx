import { UserGitContext } from "../../../../Context/context";
import { formatDate } from "../../../../utils/formatDate";
import { Card, Container } from "./styles";
import { useContext } from "react";




export function CardPost() {

    const { post, handlePost } = useContext(UserGitContext);


    return (
        <Container>
            {
                post?.map((item) => (
                <Card key={item.url}> 
                    <button onClick={handlePost}>
                        <header>
                            <h1>{item.title}</h1>
                            <span>{formatDate(item.created_at)}</span>
                        </header>
                        <p>{item.body}</p>
                    </button>
                </Card>     
                ))
            }
        </Container>
    )
}