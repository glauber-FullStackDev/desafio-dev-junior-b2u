import { Flex, Box, Image, Button } from "@chakra-ui/react";
import Login from "../../components/FormLogin";
import bitCarWhite from "../../assets/bitCarWhite.png";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = ({ authenticated, setAuthenticated }) => {
  const navigate = useNavigate();
  const handlerRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    if (authenticated) {
      return navigate("/home");
    }
  }, [authenticated]);

  return (
    <Flex flexDirection={"column"}>
      <Header
        button1={
          <Button
            onClick={() => handlerRegister()}
            bgColor="#FFFFFF"
            border="1px solid black"
            fontSize="16px"
            _hover={{
              bgColor: "#2A4058",
              color: "#FFF",
            }}
          >
            {" "}
            Cadastre-se{" "}
          </Button>
        }
      />
      <Box
        display={"flex"}
        width="100%"
        height={"90vh"}
        alignItems="center"
        justifyContent="center"
        bgColor={"#003B79"}
        bgGradient="linear(to-l,  #003B79, #FFF)"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <Box
          w={{ md: "100%" }}
          display={{ md: "flex", base: "none" }}
          justifyContent={"center"}
        >
          <Image
            src={bitCarWhite}
            width={{ md: "400px" }}
            height={{ md: "370px" }}
            borderRadius="5%"
          />
        </Box>
        <Box w={{ md: "100%" }} display="flex" justifyContent="center">
          <Login
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
