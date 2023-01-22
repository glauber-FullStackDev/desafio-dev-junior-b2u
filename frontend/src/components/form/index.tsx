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
import createCarService from "../../services/cars/create-car";
import updateCarService from "../../services/cars/update-car";
import { TOnlyCar } from "../../interface/ICars";
import { IUsers } from "../../interface/IUsers";
import { IBrands } from "../../interface/IBrands";

const initialState = {
  id: "",
  model: "",
  year: "",
  description: "",
  brandId: "",
  userId: "",
};

const Form = ({ handleClose, car }: { handleClose: () => void; car?: TOnlyCar }) => {
  const [announcement, setAnnouncement] = useState(initialState);
  const [brands, setBrands] = useState<IBrands[]>([]);
  const [users, setUsers] = useState<IUsers[]>([]);

  const createCar = async () => {
    const response = await createCarService(announcement);

    if (response.error) {
      toast.error(response.error);
      return;
    }
    toast.success(response.message);
  };

  const updateCar = async () => {
    if (announcement.id !== "") {
      const response = await updateCarService(announcement.id, announcement);

      if (response) {
        toast.error(response.error);
        return;
      }
      toast.success(response.message);
    }
  };

  const handleSaveSubmit = () => {
    if (announcement.id !== "") {
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
              value={announcement.model}
              onChange={(event) =>
                setAnnouncement({ ...announcement, model: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Car year"
              fullWidth
              variant="standard"
              value={announcement.year}
              onChange={(event) =>
                setAnnouncement({ ...announcement, year: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Description"
              fullWidth
              variant="standard"
              value={announcement.description}
              onChange={(event) =>
                setAnnouncement({
                  ...announcement,
                  description: event.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Brands</InputLabel>
            <SelectField
              value={announcement.brandId}
              onChange={(event) =>
                setAnnouncement({
                  ...announcement,
                  brandId: event.target.value,
                })
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
              value={announcement.userId}
              onChange={(event) =>
                setAnnouncement({ ...announcement, userId: event.target.value })
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
          <ButtonClose type="submit">{children}</ButtonClose>
        </WrapperClose>
      </ContainerForm>
    </Container>
  );
};

export default Form;
