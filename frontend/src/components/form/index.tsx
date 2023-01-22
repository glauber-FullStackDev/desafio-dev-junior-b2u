import { useEffect, useState } from "react";
import { Types } from "mongoose";

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
import createCarService from "../../services/cars/create-car";
import updateCarService from "../../services/cars/update-car";

const initialState = {
  model: "",
  year: "",
  description: "",
  brandId: "",
  userId: "",
};

const Form = ({ handleClose, carId }: { handleClose: () => void }) => {
  const [client, setClient] = useState(initialState);

  const [brands, setBrands] = useState([]);
  const [users, setUsers] = useState<IUser[]>([]);

  const createCar = async () => {
    const response = await createCarService(client);

    if (response.error) {
      toast.error(response.error);
      return;
    }
    toast.success(response.message);
  };

  const updateCar = async () => {
    if (carId) {
      const response = await updateCarService(carId, client);

      if (response.error) {
        toast.error(response.error);
        return;
      }
      toast.success(response.message);
    }
  };

  const handleSaveSubmit = () => {
    if (carId) {
      updateCar();
    }
    createCar();
  };

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
      <ContainerForm onSubmit={handleSaveSubmit}>
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
            <SelectField
              value={client.brandId}
              onChange={(event) =>
                setClient({ ...client, brandId: event.target.value })
              }
            >
              {brands.map((brandCar) => (
                <MenuItem key={brandCar.id} value={brandCar.id}>
                  {brandCar.brand}
                </MenuItem>
              ))}
            </SelectField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>User</InputLabel>
            <SelectField
              value={client.userId}
              onChange={(event) =>
                setClient({ ...client, userId: event.target.value })
              }
            >
              {users.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.name}
                </MenuItem>
              ))}
            </SelectField>
          </Grid>
        </Grid>

        <WrapperClose>
          <ButtonClose type="submit">Register</ButtonClose>
        </WrapperClose>
      </ContainerForm>
    </Container>
  );
};

export default Form;
