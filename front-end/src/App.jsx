import { useState, useEffect } from "react";
import {Api} from './services/api'
import { Container, Header, ContainerInput, Input,Button, TextArea,} from "../styles/styles";

import {Registration} from './components/index'

export function App() {
  
  const [todos, setTodos] = useState([])
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')

  const [car, setCar] = useState('')
  const [brand, setBrand] = useState('')
  const [manufacture, setManufacture] = useState('')
  const [description, setDescription] = useState('')
  
  const [inputInvisible, setInputInvisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

 async function handleWithNewButton() {
    setInputInvisible(!inputInvisible);
  }
  async function handleWithEditButtonClick(registration) {
    setSelectedItem(registration);
    setInputInvisible(true);
  }
  async function createItem() {
    await Api.post("/registration", {
      name: name,
      email: email,
      telephone: telephone,

      car: car,
      brand: brand,
      manufacture: manufacture,
      description: description
    });
    
    setInputInvisible(!inputInvisible);
    setName('');
    setTelephone('')
    setBrand('')
    setCar('')
    setDescription('')
    setEmail('')
    setManufacture('')
    getList()
  }
  
  async function EditItem() {
     await Api.put("/registration", {
      id: selectedItem.id,
      name: name,
      email: email,
      telephone: telephone,

      car: car,
      brand: brand,
      manufacture: manufacture,
      description: description
    });
    
    setSelectedItem();
    setInputInvisible(false);
    getList();
    
  }
  async function deleteItem(item) {
    await Api.delete(`/registration/${item.id}`
    );
    getList();
  }
  async function getList() {
    const response = await Api.get("/registration");
    setTodos(response.data);
    localStorage.setItem('@get', JSON.stringify(response.data))
   
  }
useEffect(() => {
  getList()
  }, []);
  localStorage.getItem('@item', JSON.stringify())
return (
   
      <Container>
        <Header>
          <h1>Lista de Carros</h1>
        </Header>
          
        <Registration 
        item={todos} 
        itemDelete={deleteItem} 
        handleEditButtonClick={handleWithEditButtonClick}
       />
         
        <ContainerInput>
        <Input
          value={name}
          style={{ display: inputInvisible ? "block" : "none" }}
          placeholder='Nome:'
          onChange={(event) => {
            setName(event.target.value);
          }}
        
        ></Input>
        <Input
          value={email}
          placeholder='Email:'
          style={{ display: inputInvisible ? "block" : "none" }}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
        ></Input>
       
         
        <Input
          value={telephone}
          placeholder='Telefone:'
          style={{ display: inputInvisible ? "block" : "none" }}
          onChange={(event) => {
            setTelephone(event.target.value);
          }}
          
        ></Input>
          
         </ContainerInput>
         <ContainerInput>
        <Input
          value={car}
          placeholder='Modelo do carro:'
          style={{ display: inputInvisible ? "block" : "none" }}
          onChange={(event) => {
            setCar(event.target.value);
          }}
         
        ></Input>
       
        <Input
          value={brand}
          placeholder='Marca do carro:'
          style={{ display: inputInvisible ? "block" : "none" }}
          onChange={(event) => {
            setBrand(event.target.value);
          }}
        
        ></Input>
        <Input
          value={manufacture}
          placeholder="Ano de fabricação:"
          style={{ display: inputInvisible ? "block" : "none" }}
          onChange={(event) => {
            setManufacture(event.target.value);
          }}
          
        ></Input>
         </ContainerInput>
    
        <TextArea
          value={description}
          placeholder='Descrição:'
          style={{ display: inputInvisible ? "block" : "none" }}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          
        ></TextArea>
       
        
        <Button
          onClick={
            inputInvisible
              ? selectedItem
                ? EditItem
                : createItem
              : handleWithNewButton
          }
        >
          {inputInvisible ? "Confirm" : "Cadastrar"}
        </Button>
      </Container>
    
  );
}


