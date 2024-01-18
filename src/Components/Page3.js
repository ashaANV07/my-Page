import {
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  TextField,
  Typography,
  Container,
  Box
} from "@mui/material";
import React from "react";

export const Page3 = () => {
  return (
    <Box sx={{ border: 1, width: 300, height: 550 }} justifyContent="center" >
    <Container maxWidth="sm" justifyContent="center" alignItems="center">
      <div>
        <Typography variant="h5" gutterBottom>
          BSE IPO Details
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          BSE IPO
        </Typography>
        <Select
          sx={{
            width: 250,
            height: 30,
          }}
        >
          <MenuItem value={1}>IPO 1</MenuItem>
          <MenuItem value={2}>IPO 2</MenuItem>
          <MenuItem value={3}>IPO 3</MenuItem>
          <MenuItem value={4}>IPO 4</MenuItem>
          <MenuItem value={5}>IPO 5</MenuItem>
        </Select>
        <br />
        <br />
        <Typography variant="subtitle1" gutterBottom>
          Quantity
        </Typography>
        <Select
          sx={{
            width: 250,
            height: 30,
          }}
        >
          <MenuItem value={1}>Quantity 1</MenuItem>
          <MenuItem value={2}>Quantity 2</MenuItem>
          <MenuItem value={3}>Quantity 3</MenuItem>
          <MenuItem value={4}>Quantity 4</MenuItem>
          <MenuItem value={5}>Quantity 5</MenuItem>
        </Select>
        <br /> <br />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Cut-off Price"
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Bid Price"
          variant="outlined"
          size="small"
          sx={{
            width: 250,
            height: 30,
          }}
        />
        <br /> <br />
        <Typography variant="subtitle1" gutterBottom>
          Amount
        </Typography>
        <TextField
          id="outlined-basic"
          label="Bid amount"
          variant="outlined"
          size="small"
          sx={{
            width: 250,
            height: 30,
          }}
        />
        <br /> <br />
        <Typography variant="subtitle1" gutterBottom>
          BSE IPO Type
        </Typography>
        <Select
          sx={{
            width: 250,
            height: 30,
          }}
        >
          <MenuItem value={1}>Type 1</MenuItem>
          <MenuItem value={2}>Type 2</MenuItem>
          <MenuItem value={3}>Type 3</MenuItem>
          <MenuItem value={4}>Type 4</MenuItem>
          <MenuItem value={5}>Type 5</MenuItem>
        </Select>
        <br /> <br />
        <Typography variant="subtitle1" gutterBottom>
          Sub Category
        </Typography>
        <Select
          sx={{
            width: 250,
            height: 30,
          }}
        >
          <MenuItem value={1}>Category 1</MenuItem>
          <MenuItem value={2}>Category 2</MenuItem>
          <MenuItem value={3}>Category 3</MenuItem>
          <MenuItem value={4}>Category 4</MenuItem>
          <MenuItem value={5}>Category 5</MenuItem>
        </Select>
      </div>
    </Container>
    </Box>
  );
};
