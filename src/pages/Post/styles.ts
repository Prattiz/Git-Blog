import styled from "styled-components";

export const Container = styled.div``

export const Content = styled.main`

    width: 86.4rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap:5rem;

    p{
        margin-bottom: 5rem;
    }
`

export const MainHeader = styled.div`

    background-color: ${props => props.theme['base-profile']};
    width: 100%;
    height: 18.2rem;
    padding: 4rem;
    margin-top: -10rem;
    border-radius: 10px;
    position: relative; 
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    position: relative;
    
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    i{
        margin: 0 8px;
    }
`

export const Description = styled.section`

   
    height: 100%;
    position: relative;

    span{
        color: ${props => props.theme['base-subtitle']};
        display: flex;
        gap: 8px;
        align-items: center;

        svg{
            color: ${props => props.theme['base-label']};
        }
    }

    section{
        margin-top: 50px;
        display: flex;
        gap: 2.4rem;
        margin-top: 24px;
        position: absolute;
        bottom: 0;
    }
`