import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Container, Ul, ContainerText, Text, Button,Label, Span} from './styles'
export function Registration({ item, handleEditButtonClick, itemDelete, modifyStatus }) {
    return (
      <div>
        {item.map((itens) => {
          return (
            <Container key={itens.id} className="todo">
              <Ul>
              <ContainerText>
                <Label>Dados do vendedor</Label>
                <hr />
              <Text>Nome: <Span>{itens.name}</Span></Text>
              <Text>Email: <Span>{itens.email}</Span></Text>
              <Text>Telefone: <Span>{itens.telephone}</Span></Text>
              </ContainerText>
              <ContainerText>
                <Label>Infomaçoes do carro</Label>
                <hr />
              <Text>Modelo do carro: <Span>{itens.car}</Span></Text>
              <Text>Marca: <Span>{itens.brand}</Span></Text>
              <Text>Ano: <Span>{itens.manufacture}</Span></Text>
              <Text>Descrição: <Span>{itens.description}</Span></Text>
              </ContainerText>
              </Ul>
              <Button onClick={ () => handleEditButtonClick(itens)}>
                <AiOutlineEdit size={20} color={"#64697b"}></AiOutlineEdit>
              </Button>
              
              <Button onClick={() => itemDelete(itens)}>
                <AiOutlineDelete size={20} color={"#64697b"}></AiOutlineDelete>
              </Button>
            
            </Container>
          );
        })}
    </div>
    );
  };