import { Button, Flex } from "@chakra-ui/react";
import useCars from "../../hooks/useCars";
import useUsers from "../../hooks/useUsers";
import apiBitCars from "../../service";
import Card from "../Card";
import { toast } from "react-toastify";
import { useContext, useEffect } from "react";
import { carsContext } from "../../providers";
import FormUpdateCar from "../FormUpdateCar";
import ModalUpdateCar from "../ModalUpdateCar";
import WelcomeCard from "../WelcomeCard";

const Dashboard = () => {
  const { carsState, setCarsState } = useContext(carsContext);
  const emailLogin = localStorage.getItem("userEmail");
  const userToken = JSON.parse(localStorage.getItem("@bitCar:token"));

  const users = useUsers({ token: userToken });
  const cars = useCars({ token: userToken });

  const deleteCar = async (id) => {
    const deleteCarId = carsState?.find((item) => item.id === id);
    const carsFilter = carsState.filter((item) => item.id !== id);

    await apiBitCars
      .delete(`cars/${deleteCarId.id}`, {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      })
      .then(() => {
        setCarsState(carsFilter);
        toast.success("Carro deletado");
      });
  };

  useEffect(() => {}, [carsState]);

  const user = users.find((item) => item.email == emailLogin);

  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      height={"100%"}
      minHeight={"90vh"}
    >
      {carsState.length == 0 ? (
        <WelcomeCard name={user?.name.toUpperCase()} />
      ) : (
        carsState?.map((item) => {
          return (
            <Card
              key={item.id}
              brand={item.brand}
              description={item.description}
              car={item.name}
              year={item.year}
              email={item.user?.email}
              name={item.user?.name}
              phone={item.user?.phone}
              buttonExcluir={
                user?.id == item.userId ? (
                  <Button
                    onClick={() => deleteCar(item.id)}
                    colorScheme="#2c2121"
                    color="#2A4058"
                    bgColor={"azul"[100]}
                    border={" 2px solid #2A4058"}
                    _hover={{
                      background: "#f05c5c",
                      color: "#FFF",
                      border: "2px solid #FFF",
                    }}
                  >
                    Excluir
                  </Button>
                ) : null
              }
              buttonUpdate={
                user?.id == item.userId ? (
                  <ModalUpdateCar carId={item.id}>
                    <FormUpdateCar />
                  </ModalUpdateCar>
                ) : null
              }
            />
          );
        })
      )}
    </Flex>
  );
};
export default Dashboard;
