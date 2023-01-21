import styled from 'styled-components';

const Header = styled.div`

width: 100%;
max-height: 80px;
background-color: #fff;
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: 0px 17px 21px 5px rgba(0,0,0,0.2);
position: fixed;
top: 0;
left: 0;

img {
    max-width: 120px;
    max-height: 120px;
}

svg {
    height: 30px;
    width: 30px;
    
    :hover {
        color: red;
        cursor: pointer;
    }
}

div {
    display: flex;
    justify-content: space-around;
    width: 200px;
}

`

export default Header;