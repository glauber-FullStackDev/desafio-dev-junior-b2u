import { Box, Flex, Text } from "@chakra-ui/react";

const WelcomeCard = ({ name }) => {
  return (
    <Flex
      width={"100%"}
      maxWidth={"400px"}
      border={"2px solid #FFF"}
      height={"100%"}
      minHeight={"400px"}
      borderRadius={"5px"}
      padding={"10px"}
      marginTop={"50px"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        width={"100%"}
      >
        <Text
          bgGradient="linear(to-l,  #4529E6, #0B0D0D)"
          bgClip="text"
          fontSize={"1.8rem"}
          whiteSpace={1}
          letterSpacing={"3px"}
        >
          Olá <b>{name}</b>!
        </Text>
        <Text
          fontSize={"1.4rem"}
          color={"#FFF"}
          letterSpacing={"3px"}
          textAlign={"center"}
        >
          Seja bem vindo ao Bit Cars! Faça o cadastro do primeiro carro do nosso
          site. É bem simples, basta clicar no botão adicionar um carro no topo!
        </Text>
      </Box>
    </Flex>
  );
};
export default WelcomeCard;
