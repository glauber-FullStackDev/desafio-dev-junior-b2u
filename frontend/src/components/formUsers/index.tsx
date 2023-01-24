import { useState } from "react";
import { toast } from "react-toastify";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import IUsers from "../../interface/IUsers";
import createUserService from "../../services/users/create-user";
import updateUserService from "../../services/users/update-uset";

import {
  ButtonClose,
  Container,
  ContainerForm,
  Wrapper,
  WrapperClose,
} from "./styles";

const initialState = {
  id: "",
  name: "",
  email: "",
  phone: "",
};

const FormUsers = ({
  users,
  handleClose,
  getUsers,
}: {
  users?: IUsers;
  handleClose: (id: string) => void;
  getUsers: () => void;
}) => {
  const [user, setUser] = useState(users || initialState);

  const createUser = async () => {
    const response = await createUserService(user);

    if (response.error) {
      toast.error(response.error);
      return;
    }
    toast.success(response.message);
  };

  const updateUser = async () => {
    if (user.id !== "") {
      const response = await updateUserService(user.id, user);

      if (response) {
        toast.error(response.error);
        return;
      }
      toast.success(response.message);
    }
  };

  const handleSaveSubmit = () => {
    if (user.id !== "") {
      updateUser();
      return;
    }
    getUsers();
    createUser();
  };

  return (
    <Container>
      <ContainerForm onSubmit={handleSaveSubmit}>
        <Wrapper>
          <ButtonClose onClick={() => handleClose(user.id)}>Close</ButtonClose>
        </Wrapper>

        <Typography variant="h6">User information</Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              label="Name"
              fullWidth
              variant="standard"
              value={user.name}
              onChange={(event) =>
                setUser({ ...user, name: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Email"
              fullWidth
              variant="standard"
              value={user.email}
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Phone"
              fullWidth
              variant="standard"
              value={user.phone}
              onChange={(event) =>
                setUser({
                  ...user,
                  phone: event.target.value,
                })
              }
            />
          </Grid>
        </Grid>

        <WrapperClose>
          <ButtonClose type="submit">Register</ButtonClose>
        </WrapperClose>
      </ContainerForm>
    </Container>
  );
};

export default FormUsers;
