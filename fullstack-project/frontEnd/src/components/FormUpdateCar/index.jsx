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

const FormUpdateCar = ({ carId }) => {
  const { carsState, setCarsState } = useContext(carsContext);
  const userToken = JSON.parse(localStorage.getItem("@bitCar:token"));
  const carFind = carsState.find((item) => item.id === carId);

  const formSchema = yup.object().shape({
    name: yup.string(),
    brand: yup.string(),
    year: yup.string(),
    description: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const updateCar = async (data) => {
    let updatedCar = {
      name: data.name ? data.name : carFind.name,
      brand: data.brand ? data.brand : carFind.brand,
      year: data.year ? data.year : carFind.year,
      description: data.description ? data.description : carFind.description,
    };
    await apiBitCars
      .patch(`/cars/${carId}`, updatedCar, {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      })
      .then(() => {
        toast.success("Carro Atualizado com sucesso");
      })
      .catch((error) => console.log(error));

    await apiBitCars
      .get(`/cars/`, {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      })
      .then((response) => {
        setCarsState(response.data);
      })
      .catch((error) => console.log(error));
  };

  // const submitFunction = () => {
  //   onClose;
  // };

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
          Atualizar carro
        </Text>
        <form onSubmit={handleSubmit(updateCar)}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            w="100%"
          >
            <FormControl padding="12px" isInvalid={errors.name}>
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
              // onClick={() => submitFunction()}
              _hover={{
                background: "#FFF",
                color: "#000",
                border: "2px solid #000000",
              }}
            >
              Atualizar Carro
            </Button>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};
export default FormUpdateCar;
