import styled from "styled-components";

export const Container = styled.div`

    background-color: ${props => props.theme['base-profile']};
    width: 100%;
    height: 21.2rem;
    padding: 4rem;
    margin-top: -10rem;
    border-radius: 10px;
    position: relative;
    display: flex;

    img{
        width: 148px;
        height: 148px;
        border-radius: 8px;
        margin-right: 2rem;
    }
`

export const Description = styled.div`

    width: 100%;
    position: relative;
    
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    section{
        width: 100%;
        display: flex;
        gap: 2.4rem;
        margin-top: 24px;
        position: absolute;
        bottom: 0;

    }

    span{
        color: ${props => props.theme['base-subtitle']};
        display: flex;
        gap: 8px;
        align-items: center;

        svg{
            color: ${props => props.theme['base-label']};
        }
    }
`