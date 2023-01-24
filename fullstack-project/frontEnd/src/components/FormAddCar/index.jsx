import {
  Flex,
  Box,
  Text,
  FormControl,
  Input,
  FormErrorIcon,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { carsContext } from "../../providers";
import { toast } from "react-toastify";
import apiBitCars from "../../service";

const FormAddcar = () => {
  const { carsState, setCarsState } = useContext(carsContext);
  const userToken = JSON.parse(localStorage.getItem("@bitCar:token"));

  const formSchema = yup.object().shape({
    name: yup.string().required("Insira o nome do veiculo"),
    brand: yup.string().required("Insira a marca do viculo"),
    year: yup
      .string()
      .required("Insira o ano do veiculo, com apenas 2 digitos."),
    description: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const AddCar = async (data) => {
    await apiBitCars
      .post(`/cars`, data, {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      })
      .then((response) => {
        setCarsState([...carsState, response.data]);
        toast.success("Carro adicionado com sucesso");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Flex width="100%" display="flex" justifyContent="center">
      <Box
        width="90%"
        display="flex"
        flexDir="column"
        bgColor="#FFF"
        alignContent="center"
        alignItems="center"
        borderRadius="8px"
      >
        <Text
          fontWeight="bold"
          fontSize="20px"
          marginTop="20px"
          color="#2A4058"
        >
          Adicione um carro
        </Text>
        <form onSubmit={handleSubmit(AddCar)}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            w="100%"
          >
            <FormControl padding="12px" isInvalid={errors.name}>
              <Text fontSize={"14px"}>Modelo do veiculo</Text>
              <Input
                borderColor="#855050"
                width="100%"
                placeholder="Nome veiculo"
                {...register("name")}
                color="black"
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl padding="12px" isInvalid={errors.brand}>
              <Text fontSize={"14px"}>Marca do veiculo</Text>
              <Input
                borderColor="#855050"
                width="100%"
                placeholder="Insira a marca do veiculo"
                {...register("brand")}
                color="black"
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.brand && errors.brand.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl padding="12px" isInvalid={errors.year}>
              <Text fontSize={"14px"}>ano do veiculo (apenas 2 digitos)</Text>
              <Input
                borderColor="#855050"
                width="100%"
                placeholder="insira o ano do veiculo"
                {...register("year")}
                color="black"
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.year && errors.year.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl padding="12px" isInvalid={errors.description}>
              <Text fontSize={"14px"}>Descrição</Text>
              <Input
                borderColor="#855050"
                width="100%"
                placeholder="Descrição do veiculo"
                {...register("description")}
                color="black"
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>

            <Button
              width="100%"
              marginTop="20px"
              type="submit"
              colorScheme="#2c2121"
              color="white"
              bgColor="#2A4058"
              marginBottom="20px"
              _hover={{
                background: "#FFF",
                color: "#000",
                border: "2px solid #000000",
              }}
            >
              Adicionar Carro
            </Button>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};
export default FormAddcar;
