import styled  from 'styled-components';



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;

`;



export const Registro = styled.div`
     >h2 {
        color: #003d76;
    }
    margin-top: 24px;

    padding: 16px 24px;

    height: 70%;
    width: 70%;

    border: 1px solid #434343;
    border-radius: 1em;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #303030;
    opacity: .7;

   
`;



export const Info = styled.ul`
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


    > li {
        margin-top: 8px;
        list-style: none;
        color: #fff;
        font-size: 1.2em;
    }


`;