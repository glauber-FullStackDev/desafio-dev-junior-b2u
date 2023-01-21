import styled, { keyframes } from 'styled-components'

const scaleUpCenter = keyframes`
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
`
export const Container = styled.div`
    background:  #fffefe ;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    width: 100vw;

`
export const Logo = styled.img`
    animation: ${scaleUpCenter} 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    width: 500px;
    @media screen and (max-device-width: 500px){width:290px;}
`