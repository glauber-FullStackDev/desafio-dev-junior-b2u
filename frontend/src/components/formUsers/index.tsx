import { useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import {
  ButtonClose,
  Container,
  ContainerForm,
  Wrapper,
  WrapperClose,
} from "./styles";

import { IUsers } from "../../interface/IUsers";
import createUserService from "../../services/users/create-user";
import { toast } from "react-toastify";

const initialState = {
  id: "",
  name: "",
  email: "",
  phone: "",
};

const FormUsers = ({ handleClose }: { handleClose: () => void }) => {
  const [user, setUser] = useState<IUsers>(initialState);

  const createCar = async () => {
    const response = await createUserService(user);

    if (response.error) {
      toast.error(response.error);
      return;
    }
    toast.success(response.message);
  };

  return (
    <Container>
      <ContainerForm onSubmit={createCar}>
        <Wrapper>
          <ButtonClose onClick={handleClose}>Close</ButtonClose>
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
