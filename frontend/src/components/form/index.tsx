import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import {
  ButtonClose,
  Container,
  ContainerForm,
  Wrapper,
  WrapperClose,
  SelectField,
} from "./styles";

const Form = ({ handleClose }: { handleClose: () => void }) => {
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required label="Car year" fullWidth variant="standard" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Description"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Brands</InputLabel>
            <SelectField>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </SelectField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>User</InputLabel>
            <SelectField>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
