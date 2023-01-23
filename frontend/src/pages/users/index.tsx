import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Header from "../../components/header";
import getAllUsers from "../../services/users/get-all-users";
import { IUsers } from "../../interface/IUsers";

import { Container, ContainerTable } from "./styles";
import RowsTable from "../../components/rowsTable";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import deleteUserService from "../../services/users/delete-user";

const Users = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  const getUsers = async () => {
    const response = await getAllUsers();
    if (response.erro) {
      toast.error(response.error);
    }
    setUsers(response);
  };

  const deleteUser = async (id: string) => {
    const response = await deleteUserService(id)

    if (response.error) {
      toast.error(response.error);
      return;
    }
    toast.success(response.message);
    getUsers()
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ContainerTable>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <RowsTable
                  key={index}
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  phone={user.email}
                  deleteUser={deleteUser}
                />
              ))}
            </TableBody>
          </Table>
        </ContainerTable>
      </Container>
    </>
  );
};

export default Users;
