import {
  Flex,
  Box,
  Text,
  FormControl,
  Input,
  FormErrorIcon,
  FormErrorMessage,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import apiBitCars from "../../service";

const Register = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const handleClick2 = () => {
    setShow2(!show2);
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Insira seu nome completo"),
    email: yup.string().required("insira um E-mail").email("E-mail Inválido"),
    phone: yup.string().required("Você precisa inserir pelo menos 1 telefone"),
    password: yup
      .string()
      .required("Senha Obrigatória")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Senha deve conter no mínimo 8 caracteres, 1 letra, 1 número e 1 caractere especial"
      ),
    confirmPassword: yup
      .string()
      .required("Digite a confirmação da Senha")
      .oneOf([yup.ref("password"), null], "Senhas não conferem"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data) => {
    await apiBitCars
      .post("/users", data)
      .then(() => {
        toast.success("Cadastro realizado com sucesso");
        return navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Flex width="100%" display="flex" justifyContent="center">
      <Box
        width="80%"
        maxWidth={"450px"}
        display="flex"
        flexDir="column"
        bgColor="#FFF"
        alignContent="center"
        alignItems="center"
        borderRadius="8px"
        border="1px solid black"
        margin={"15px 10px"}
      >
        <Text
          fontWeight="bold"
          fontSize="1.3rem"
          marginTop="20px"
          color="#2A4058"
        >
          Cadastre um usuario
        </Text>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
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
                placeholder="Insira seu nome completo"
                {...register("name")}
                color="black"
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl padding="12px" isInvalid={errors.email}>
              <Input
                borderColor="#855050"
                width="100%"
                placeholder="Insira seu email"
                {...register("email")}
                color="black"
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl padding="12px" isInvalid={errors.phone}>
              <Input
                borderColor="#855050"
                width="100%"
                placeholder="Insira seu telefone"
                {...register("phone")}
                color="black"
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.phone && errors.phone.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl padding="12px" isInvalid={errors.password}>
              <InputGroup size="md">
                <Input
                  color="#000"
                  width="100%"
                  type={show ? "text" : "password"}
                  placeholder="Digite sua Senha"
                  {...register("password")}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    marginRight="5%"
                    h="1.75rem"
                    fontSize="12px"
                    size="lg"
                    onClick={handleClick}
                  >
                    {show ? <GrFormViewHide /> : <GrFormView />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl padding="12px" isInvalid={errors.confirmPassword}>
              <InputGroup size="md">
                <Input
                  color="#000"
                  width="100%"
                  type={show2 ? "text" : "password"}
                  placeholder="Confirme sua Senha"
                  {...register("confirmPassword")}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    marginRight="5%"
                    h="1.75rem"
                    fontSize="12px"
                    size="lg"
                    onClick={handleClick2}
                  >
                    {show2 ? <GrFormViewHide /> : <GrFormView />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.confirmPassword && errors.confirmPassword.message}
              </FormErrorMessage>
            </FormControl>

            <Button
              width="130px"
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
              Registrar
            </Button>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};
export default Register;
