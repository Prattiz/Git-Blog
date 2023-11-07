import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

   body{
        font-size: 1.6rem;
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        background-color: ${props => props.theme['base-background']};

        *::-webkit-scrollbar {
            width: 2rem;
            height: 2rem;
            border-radius: 100rem;
            color: ${props => props.theme['white']};
        }
   }

   h1{
        font-weight: 700;
        color: ${props => props.theme['base-title']};
        font-size: 2.4rem;
   }

   a{
        font-weight: 700;
        color: ${props => props.theme['blue']};
        text-transform: uppercase;
        font-size: 1.2rem;
        text-decoration: none;
        cursor: pointer;
   }

   p{
        color: ${props => props.theme['base-text']};
        text-overflow: ellipsis;
   }

   input{
        border: 0;
        border-radius: 8px;
   }

    a:hover {
        filter: brightness(.6);
    }
`