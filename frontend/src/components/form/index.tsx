import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import getAllBrands from "../../services/brands/get-all-brands";
import getAllUsers from "../../services/users/get-all-users";

import {
  ButtonClose,
  Container,
  ContainerForm,
  Wrapper,
  WrapperClose,
  SelectField,
} from "./styles";
import { IUser } from "../../interface/IUsers";

const initialState = {
  model: "",
  year: "",
  description: "",
  brandId: "",
  userId: "",
};

const Form = ({ handleClose }: { handleClose: () => void }) => {
  const [client, setClient] = useState(initialState);

  const [brands, setBrands] = useState([]);
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = async () => {
    const response = await getAllUsers();
    if (response.erro) {
      toast.error(response.error);
    }
    setUsers(response);
  };

  const getBrands = async () => {
    const response = await getAllBrands();
    if (response.erro) {
      toast.error(response.error);
    }
    setBrands(response);
  };

  useEffect(() => {
    getBrands(), getUsers();
  }, []);

  return (
    <Container>
      <ContainerForm>
        <Wrapper>
          <ButtonClose onClick={handleClose}>Close</ButtonClose>
        </Wrapper>

        <Typography variant="h6">Car information</Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Car model"
              fullWidth
              variant="standard"
              value={client.model}
              onChange={(event) =>
                setClient({ ...client, model: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Car year"
              fullWidth
              variant="standard"
              value={client.year}
              onChange={(event) =>
                setClient({ ...client, year: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Description"
              fullWidth
              variant="standard"
              value={client.description}
              onChange={(event) =>
                setClient({ ...client, description: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Brands</InputLabel>
            <SelectField>
              {brands.map((brandCar, index) => (
                <MenuItem
                  key={index}
                  value={brandCar.id}
                  onChange={(event) =>
                    setClient({ ...client, brandId: event.target.value })
                  }
                >
                  {brandCar.brand}
                </MenuItem>
              ))}
            </SelectField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>User</InputLabel>
            <SelectField>
              {users.map((user, index) => (
                <MenuItem
                  key={index}
                  value={user.id}
                  onChange={(event) =>
                    setClient({ ...client, userId: event.target.value })
                  }
                >
                  {user.name}
                </MenuItem>
              ))}
            </SelectField>
          </Grid>
        </Grid>

        <WrapperClose>
          <ButtonClose>Register</ButtonClose>
        </WrapperClose>
      </ContainerForm>
    </Container>
  );
};

export default Form;
