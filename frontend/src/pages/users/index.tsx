import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Header from "../../components/header";
import TableInfo from "../../components/table";
import getAllUsers from "../../services/users/get-all-users";
import { IUsers } from "../../interface/IUsers";

import { Container } from "./styles";

const Users = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  const getUsers = async () => {
    const response = await getAllUsers();
    if (response.erro) {
      toast.error(response.error);
    }
    setUsers(response);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <TableInfo users={users}/>
      </Container>
    </>
  );
};

export default Users;
