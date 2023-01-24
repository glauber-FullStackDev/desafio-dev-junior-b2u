import { Flex, Box, Button } from "@chakra-ui/react";
import Dashboard from "../../components/Dashboard";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ModalAddCar from "../../components/ModalAddCar";
import FormAddcar from "../../components/FormAddCar";

const HomePage = ({ authenticated, setAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      return navigate("/");
    }
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
    setAuthenticated(false);
    return navigate("/");
  };

  return (
    <Flex
      width="100%"
      alignItems="center"
      height={"100%"}
      minHeight={"100vh"}
      justifyContent="center"
      bgGradient="linear(to-l,   #FFF, #003B79,)"
      wrap={"wrap"}
      alignContent={"flex-start"}
    >
      <Box
        w={{ md: "100%" }}
        display="flex"
        justifyContent="center"
        flexDirection={"column"}
      >
        <Header
          button1={
            <ModalAddCar textButton={"Adicionar um carro"}>
              <FormAddcar />
            </ModalAddCar>
          }
          button2={
            <Button
              onClick={() => clearLocalStorage()}
              color={"#2A4058"}
              bgColor="#FFF"
              border="1px solid black"
              fontSize="16px"
              _hover={{
                bgColor: "#2A4058",
                color: "#FFF",
              }}
            >
              Sair
            </Button>
          }
        />
        <Dashboard />
      </Box>
    </Flex>
  );
};

export default HomePage;
