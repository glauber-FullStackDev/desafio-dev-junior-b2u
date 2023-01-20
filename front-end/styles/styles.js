import styled from 'styled-components'


export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export const Header = styled.header`
  background-color: #007fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fdfdfd;
  font-size: 0.8rem;


`
export const ContainerInput = styled.div`

 display: flex;
 align-items: center;
 justify-content: center;
 gap: 10px;

`
export const Input = styled.input`
  
  margin-top: 10px;
  padding-inline: 10px;
  border: none;
  border-radius: 8px;
  height: 40px;
  width: 100%;
  max-width: 25%;
  font-size: 14px;


`
export const TextArea = styled.textarea`
  
  margin-top: 10px;
 
  border: none;
  border-radius: 8px;
  height: 200px;
  width: 36.5%;
  box-shadow: 0px 0px 21px -7px rgba(0, 0, 0, 0.3);
  font-size: 18px;
  padding: 15px;


`
export const Button = styled.button`

  border: none;
  background-color: #007fff;
  width: 160px;
  height: 50px;
  border-radius: 24px;
  margin-block: 30px;
  color: #fdfdfd;
  font-weight: bold;
  font-size: 0.8rem;



`