import styled from "styled-components";

export const Container = styled.div`

    
    
`

export const Content = styled.main`

    width: 86.4rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap:5rem;
`

export const CardPost = styled.section`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
`

export const Card = styled.div`

    background-color: ${props => props.theme['base-post']};
    width: 100%;
    height: 26rem;
    padding: 3rem;
    border-radius: 10px;
    
    p{
        font-size: 16px;
        line-height: 160%; 
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }

    header{
        width: 100%;
        gap: 3.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;

        h1{
            font-size: 2rem;
            text-align: start;
        }

        span{
            white-space: nowrap;
        }
    }

    span{
        color: ${props => props.theme['base-span']};
    }

    button{
        background: none;
    }

    &:last-child{
        margin-bottom: 4rem;
    }
`

export const Search = styled.div`

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