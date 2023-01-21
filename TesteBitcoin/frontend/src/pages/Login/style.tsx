import styled from "styled-components";
import img from '../../assets/background-clean.jpg'
export const Container = styled.div`

    height:100vh ;
    background-image: url(${img});
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    
    h1{
        color:var(--color-blue) ;
        margin:3rem 0 1rem ;
    }

    form{
      display:flex ;
      flex-direction:column ;
      align-items:center ;
    }

    input{
        width:25rem ;
        padding:10px ;
        margin-bottom:10px ;
        border-radius:5px ;
    }

    div.buttons-area{
        display:flex ;
        gap:10px;
        button{
            padding:8px 12px;
            border-radius:5px ;
            border:none ;
            cursor: pointer;
            background-color: var(--color-header) ;
            :hover{
                opacity:0.9 ;
            }
        }
    }
    

`