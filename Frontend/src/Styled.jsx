import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 768px)",
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 98vh;
  margin: auto;
  background-color: #fafafa;
  flex-wrap: wrap;
  ${media.mobile} {
    margin: auto;
  }
`;

export const CardsNewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 1120px;
  height: 405px;
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 50px;
  ${media.mobile} {
    justify-content: center;
  }
`;

export const CardNews = styled.div`
  width: 340px;
  height: 150px;
  background: #ffffff;
  box-shadow: 0px 0px 77px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  text-align: center;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    border: none;
    width: 30%;
    height: 16%;
    font-size: 20px;
    cursor: pointer;
    background-color: #fa6600;
    color: #ffffff;
    :hover {
      background-color: #4e4e4e;
    }
  }
`;

export const CardInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  h3 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 19px;
    color: #656465;
  }
  div {
    display: flex;
    justify-content: space-evenly;
    p {
      margin: 15px 0px 0px 0px;
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      line-height: 26px;
      color: #656465;
    }
  }
`;

export const Paragrf = styled.div`
  width: 290px;
`;
