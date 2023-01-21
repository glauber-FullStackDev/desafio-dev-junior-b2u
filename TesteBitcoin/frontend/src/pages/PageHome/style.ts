import styled from "styled-components";
import img from '../../assets/background-clean.jpg'


export const Container = styled.div`

    height:100vh ;
    background-color: var(--background-color) ;
    background-image: url(${img}) ;
    padding: 0 40px ;
    
    

    h2{
        color: var(--color-blue);
        margin:0 0 2rem ;
        font-size:32px ;
        padding-top:2rem ;
    }
    h3{
        color:white ;
    }
    p{
        color:white ;

    }
    div.list-products{
        display:grid ;
        grid-template-columns:1fr 1fr 1fr ;
        gap:20px;
        padding: 0 5rem 2rem;
    }   

    div.cart-product{
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        background-color:var(--background-cart) ;
        border-radius:5px ;
        padding-bottom: 20px;
        width:fit-content ;
        img{
            width:20rem ;
            border-radius:5px ;
            border:1px solid var(--background-cart) ;
        }
        p{
            font-size:18px ;   
        }
        span{
            font-size:16px ;
            text-align:left ;
            padding-left:10px ;
            color:var(--color-span-secondary) ;
        }
    }
    div.description-product{
        display:flex ;
        gap:120px;
        padding: 10px 12px ;
    }

    .icon-edit{
        font-size:30px ;
        background-color:var(--color-red) ;
        padding:5px 8px ;
        border-radius:1000px ;
        color:#FFF ;
        margin-top:10px ;
        :hover{
            opacity:0.8 ;
        }
    }

`