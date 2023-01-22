import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 100px;

  .cars{
    font-size: 20px;
    color: #cdc9c3;
    font-family: 'Roboto';
    font-weight: 600;
  }

.list-cars{
  width: 50%;
  margin: 14px auto;
}

.container-cars{
  background-color: #18191a;

  padding: 15px 20px;

  margin-top: 20px;
  
  width: 100%;
  height: 300px;
  border-radius: 7px;

}

.boxIcons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.container-cars p {
    font-size: 15px;
    margin-top: 5px;
    color: #cdc9c3;
    font-family: 'Roboto';
    font-weight: 600;
}

.container-cars h3 {
  margin-top: 30px;

  color: #DB2423;
  font-family: 'Roboto';
  font-weight: 600;
}

.borda{
  margin-top: 10px;
  height: 1px;
  width: 100%;

  background-color: #fff;
}



.icon{
  font-size: 20px;
  color: #DB2423;
  margin-left: 5px;
  cursor: pointer
}

`;


