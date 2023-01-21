import styled from "styled-components";
import img from '../../assets/background-clean.jpg'

export const Container = styled.div`

    background-image:url(${img}) ;
    height:100vh ;
    padding: 2rem 5rem  ;

    h1{
        color: var(--color-blue);
    }
    h2{
        opacity:0.8 ;
    }
    h3{
        background-color: var(--color-button);
        border-radius:5px ;
        padding:8px 15px ;
        font-size:32px ;
    }
    img{
        width:35rem ;
        border-radius:5px ;
        border:1px solid #000 ;
    }
    div.total-product{
        display:flex ;
        gap:20px;
    }
    div.sub-description{
        background-color: var(--color-header) ;
        margin-top:10px ;
        border-radius:5px ;
        padding:8px ;
        display:flex ;
        flex-direction:column ;
        
        p{
            font-size:20px ;
            margin-bottom:10px ;
        }
        span{
            display:flex ;
            justify-content:space-between ;
        }
    }

    button{
        padding:10px 15px ;
        background-color:var(--color-red) ;
        border:none ;
        border-radius:5px ;
        margin-top:10px ;
        cursor:pointer ;
        color:#FFF ;
        :hover{
            opacity:0.9 ;
        }
    }

`