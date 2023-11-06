import styled from "styled-components";

export const Container = styled.div`

    margin-top: 2.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;


    div{
        display: flex;
        justify-content: space-between;
        

        h1{
            font-size: 2rem
        }

        span{
            font-size: 1.5rem;
            color: ${props => props.theme['base-span']};
        }
    }

    input{
        background-color: ${props => props.theme['base-input']};
        border: 1px solid ${props => props.theme['base-border']};
        color: ${props => props.theme['white']};    
        width: 100%;
        padding: 1.2rem 1.6rem;
    }
`