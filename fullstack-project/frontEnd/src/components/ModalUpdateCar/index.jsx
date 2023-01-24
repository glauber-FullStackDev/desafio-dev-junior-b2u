import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import FormUpdateCar from "../FormUpdateCar";

const ModalUpdateCar = ({ carId }) => {
  const {
    isOpen: isOpenModalCarUpdate,
    onOpen: onOpenModalCarUpdate,
    onClose: onCloseModalCarUpdate,
  } = useDisclosure();

  return (
    <>
      <Button
        margin="2%"
        size="60px"
        padding="2px"
        backgroundColor="#F8F8FF"
        border="2px solid"
        _hover={{
          background: "	#2A4058",
          color: "#FFF",
          border: "2px solid #000000",
        }}
        onClick={() => onOpenModalCarUpdate()}
      >
        {" "}
        Editar{" "}
      </Button>
      <Modal isOpen={isOpenModalCarUpdate} onClose={onCloseModalCarUpdate}>
        <ModalOverlay />
        <ModalContent width="320px" display="flex" alignItems="center">
          <ModalHeader textAlign="center" fontSize="16px">
            Editar Carro
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormUpdateCar carId={carId} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalUpdateCar;
