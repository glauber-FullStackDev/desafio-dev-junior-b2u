import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Header from "../../components/header";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Modal from "@mui/material/Modal";
import FormUsers from "../../components/formUsers";
import TableComponent from "../../components/table";

import getAllUsers from "../../services/users/get-all-users";
import deleteUserService from "../../services/users/delete-user";

import IUsers from "../../interface/IUsers";

import {
  BoxModal,
  Buttom,
  Container,
  ContainerModal,
  ContainerTable,
} from "./styles";

const Users = () => {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getUsers = async () => {
    const response = await getAllUsers();
    if (response.erro) {
      toast.error(response.error);
    }
    setUsers(response);
  };

  const deleteUser = async (id: string) => {
    const response = await deleteUserService(id);

    if (response.error) {
      toast.error(response.error);
      return;
    }
    toast.success(response.message);
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Header />

      <ContainerModal>
        <Buttom onClick={handleOpen}>+ Add new user</Buttom>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <BoxModal>
            <FormUsers handleClose={handleClose} getUsers={getUsers}/>
          </BoxModal>
        </Modal>
      </ContainerModal>

      <Container>
        <ContainerTable>
          <TableComponent
            tableHeader={
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            }
            data={users}
            deleteFn={deleteUser}
          />
        </ContainerTable>
      </Container>
    </>
  );
};

export default Users;
