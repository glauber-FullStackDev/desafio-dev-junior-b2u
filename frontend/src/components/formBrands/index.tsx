import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { ButtonClose, Container, Form, Wrapper, WrapperClose } from "./styles";
import createBrandService from "../../services/brands/create-brands";
import { toast } from "react-toastify";
import { IBrands } from "../../interface/IBrands";
import updateBrandService from "../../services/brands/update-brands";

const initialState = {
  id: "",
  brand: "",
};

const FormBrands = ({
  handleClose,
  getBrands,
  brands,
}: {
  handleClose: (id: string) => void;
  brands?: IBrands;
  getBrands: () => void;
}) => {
  const [brand, setBrand] = useState(brands || initialState);
  const createBrand = async () => {
    const response = await createBrandService(brand);

    if (response.error) {
      toast.error(response.error);
      return;
    }
    toast.success(response.message);
  };

  const updateBrand = async () => {
    if (brand.id !== "") {
      const response = await updateBrandService(brand.id, brand);

      if (response) {
        toast.error(response.error);
        return;
      }
      toast.success(response.message);
    }
  };

  const handleSaveSubmit = () => {
    if (brand.id !== "") {
      updateBrand();
      return;
    }
    getBrands();
    createBrand();
  };

  return (
    <Container>
      <Form onSubmit={handleSaveSubmit}>
        <Wrapper onClick={() => handleClose(brand.id)}>
          <ButtonClose>Close</ButtonClose>
        </Wrapper>

        <Typography variant="h6">Brand information</Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              label="Name"
              fullWidth
              variant="standard"
              value={brand.brand}
              onChange={(event) =>
                setBrand({ ...brand, brand: event.target.value })
              }
            />
          </Grid>
        </Grid>

        <WrapperClose>
          <ButtonClose type="submit">Register</ButtonClose>
        </WrapperClose>
      </Form>
    </Container>
  );
};

export default FormBrands;
