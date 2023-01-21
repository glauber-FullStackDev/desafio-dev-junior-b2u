import styled from "styled-components";


export const Container = styled.header`

    display:flex ;
    justify-content:space-between ;
    background-color:var(--background-color) ;
    align-items:center ;
    padding: 8px 15rem ;
    
    h1{
        color:black
    }

    ul{
        display:flex ;
        gap:30px;
    }
    li{
        list-style:none ;
        font-size:20px ;
    }

    span{
        color: var(--color-span) ;
    }
    button{
        background:none ;
        border:none ;
    }

    .icon-logout{
        font-size:25px ;
        color:var(--color-red) ;
        cursor:pointer ;
    }

`