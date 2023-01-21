import styled from "styled-components";
import img from '../../assets/background-clean.jpg'

export const Container = styled.div`
    background-image:url(${img}) ;
    height:100% ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    h1{
        margin:2rem 0 1rem ;
        color: var(--color-blue);
    }
    form{
        display:flex ;
        flex-direction: column;
        width:28rem ;
        padding-bottom:2rem ;
    }
    input{
        padding:8px ;
        margin-bottom:10px ;
        border-radius:5px ;
    }
    button{
        width:10rem ;
        padding:10px 18px ;
        margin:10px auto ;
        cursor: pointer;
        background-color:var(--color-button) ;
        border:none ;
        border-radius:5px ;
        font-size:16px ;
        :hover{
            opacity:0.9 ;
        }
    }


`