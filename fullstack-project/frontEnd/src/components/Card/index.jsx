import { Box, Flex, Text, Image } from "@chakra-ui/react";
import bitCarWhite from "../../assets/bitCarWhite.png";

const Card = ({
  car,
  brand,
  year,
  description,
  name,
  phone,
  email,
  buttonExcluir,
  buttonUpdate,
}) => {
  return (
    <Flex
      height={"25vh"}
      width={"80%"}
      margin={"10px 0px"}
      borderRadius={"5px"}
      border={"2px solid #FFF"}
    >
      <Box width={"25%"}>
        <Image src={bitCarWhite} width={{ md: "400px" }} height={"100%"} />
      </Box>
      <Box
        height={"100%"}
        width={"45%"}
        padding={"5px 10px"}
        display={"flex"}
        justifyContent={"space-around"}
        flexDirection={"column"}
      >
        <Text fontSize={"1.2rem"} color={"#FFF"}>
          <b>Carro</b>: {car}{" "}
        </Text>
        <Text fontSize={"1.2rem"} color={"#FFF"}>
          <b>Marca</b>: {brand}
        </Text>
        <Text fontSize={"1.2rem"} color={"#FFF"}>
          <b>Descrição</b>: {description}{" "}
        </Text>
        <Text fontSize={"1.2rem"} color={"#FFF"}>
          <b>Ano</b>: {year}{" "}
        </Text>
      </Box>
      <Box
        width={"25%"}
        padding={"5px"}
        borderLeft={"1px solid #c3c3c3"}
        display={"flex"}
        justifyContent={"space-around"}
        flexDirection={"column"}
      >
        <Text fontSize={"1.2rem"} color={"#FFF"}>
          <b>Nome</b>: {name}
        </Text>
        <Text fontSize={"1.2rem"} color={"#FFF"}>
          <b>contato</b>: {phone}
        </Text>
        <Text fontSize={"1.2rem"} color={"#FFF"}>
          <b>email</b>: {email}
        </Text>
      </Box>
      <Box
        width={"10%"}
        padding={"3px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
      >
        {buttonExcluir}
        {buttonUpdate}
      </Box>
    </Flex>
  );
};
export default Card;
