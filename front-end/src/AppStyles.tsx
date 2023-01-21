import styled from "styled-components";

const AppStyles = styled.div`
  & .add-car {
    position: relative;
    transform: translateX(-50%);
    padding-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    left: 50%;
    &__btn {
      display: flex;
      align-items: center;
      color: white;
      justify-content: center;
      font-size: 3rem;
      position: relative;
      width: 3rem;
      height: 3rem;
      background-color: orangered;
      border-radius: 50rem;
      transition: width 50ms ease-in-out, height 50ms ease-in-out;
    }
    &:hover {
      & .add-car__btn {
        width: 3.5rem;
        height: 3.5rem;
      }
    }
  }
`;

export default AppStyles;
