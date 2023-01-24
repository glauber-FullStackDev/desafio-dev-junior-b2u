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

const ModalAddCar = ({ carId, textHeader, textButton, children }) => {
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  return (
    <>
      <Button
        bgColor="#FFF"
        color={"#2A4058"}
        border="1px solid black"
        fontSize="16px"
        _hover={{
          bgColor: "#2A4058",
          color: "#FFF",
        }}
        onClick={onOpenModal}
      >
        {textButton}
      </Button>
      <Modal isOpen={isOpenModal} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent width={"400px"} display="flex" alignItems="center">
          <ModalHeader textAlign="center" fontSize="16px">
            {textHeader}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children} {carId}{" "}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalAddCar;
