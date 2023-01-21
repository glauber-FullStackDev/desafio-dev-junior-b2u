import CardList from "../../components/cardList";
import Header from "../../components/header";
import { Container } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <CardList />
      </Container>
    </>
  );
};

export default Home;
