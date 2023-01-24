import { Flex, Box, Image, Text, Button } from "@chakra-ui/react";
import Register from "../../components/FormRegister";
import register from "../../assets/register.jpg";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RegisterPage = ({authenticated}) => {
  const navigate = useNavigate();

  const handlerLogin = () => {
    navigate("/");
  };

  useEffect(() => {
    if (authenticated) {
      return navigate("/home");
    }
  }, [authenticated]);

  return (
    <Flex flexDirection={"column"}>
      <Header
        text={<Text> Ja tem cadastro? </Text>}
        button1={
          <Button
            onClick={() => handlerLogin()}
            bgColor="#FFFFFF"
            border="1px solid black"
            fontSize="16px"
          >
            Login
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
        <Box w={{ md: "100%" }} display="flex" justifyContent="center">
          <Register />
        </Box>
        <Box
          w={{ md: "100%" }}
          display={{ md: "flex", base: "none" }}
          justifyContent={"center"}
        >
          <Image
            src={register}
            width={{ md: "400px" }}
            height={{ md: "370px" }}
            borderRadius="5%"
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default RegisterPage;
