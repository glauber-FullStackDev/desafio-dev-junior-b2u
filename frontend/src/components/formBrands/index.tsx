import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import {
  ButtonClose,
  Container,
  Form,
  Wrapper,
  WrapperClose,
} from "./styles";

const initialState = {
  id: "",
  name: "",
};

const FormBrands = ({ handleClose }: { handleClose: () => void }) => {
  const [brand, setBrand] = useState(initialState);
  return (
    <Container>
      <Form>
        <Wrapper onClick={handleClose}>
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
              value={brand.name}
              onChange={(event) =>
                setBrand({ ...brand, name: event.target.value })
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
