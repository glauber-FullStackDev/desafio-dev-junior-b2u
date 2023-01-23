import AppBar from "../../components/appBar";
import CardList from "../../components/cardList";
import Header from "../../components/header";

const Home = () => {
  return (
    <>
      <Header />
      <AppBar children="+ Add a new car"/>
      <CardList />
    </>
  );
};

export default Home;
