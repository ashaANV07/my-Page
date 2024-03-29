import {
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  TextField,
  Typography,
  Container,
  Box,
  Grid,
} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";

export const Page3 = ({ onChange }) => {
  const [ipoDetails, setIpoDetails] = useState({
    ipo: 1,
    quantity: 1,
    cutOffPrice: true,
    // bidPrice: "",
    bidAmount: "",
    ipoType: 1,
    subCategory: 1,
  });

  const handleInputChange = (key, value) => {
    setIpoDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  useEffect(() => {
    onChange(ipoDetails);
  }, [ipoDetails, onChange]);

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        margin: "10px",
      }}
    >
      <Box
        sx={{
          border: 1,
          borderColor: "grey.500",
          height: 700,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justifyContent="center"
          // sx={{ minHeight: "100vh" }}
        >
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              BSE IPO Details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              BSE IPO
            </Typography>
            <Select
              value={ipoDetails.ipo}
              onChange={(e) => handleInputChange("ipo", e.target.value)}
              sx={{
                width: 400,
                height: 40,
              }}
            >
              <MenuItem value={1}>IPO 1</MenuItem>
              <MenuItem value={2}>IPO 2</MenuItem>
              <MenuItem value={3}>IPO 3</MenuItem>
              <MenuItem value={4}>IPO 4</MenuItem>
              <MenuItem value={5}>IPO 5</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Quantity
            </Typography>
            <Select
              value={ipoDetails.quantity}
              onChange={(e) => handleInputChange("quantity", e.target.value)}
              sx={{
                width: 400,
                height: 40,
              }}
            >
              <MenuItem value={1}>Quantity 1</MenuItem>
              <MenuItem value={2}>Quantity 2</MenuItem>
              <MenuItem value={3}>Quantity 3</MenuItem>
              <MenuItem value={4}>Quantity 4</MenuItem>
              <MenuItem value={5}>Quantity 5</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              sx={{ marginRight: 35 }}
              control={<Checkbox defaultChecked />}
              label="Cut-off Price"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Bid Price"
              variant="outlined"
              size="small"
              sx={{
                width: 400,
                height: 30,
              }}
              onChange={(e) => handleInputChange("cutOffPrice", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Amount
            </Typography>
            <TextField
              id="outlined-basic"
              label="Bid amount"
              variant="outlined"
              size="small"
              sx={{
                width: 400,
                height: 30,
              }}
              onChange={(e) => handleInputChange("bidAmount", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              BSE IPO Type
            </Typography>
            <Select
              value={ipoDetails.ipoType}
              onChange={(e) => handleInputChange("ipoType", e.target.value)}
              sx={{
                width: 400,
                height: 40,
              }}
            >
              <MenuItem value={1}>Type 1</MenuItem>
              <MenuItem value={2}>Type 2</MenuItem>
              <MenuItem value={3}>Type 3</MenuItem>
              <MenuItem value={4}>Type 4</MenuItem>
              <MenuItem value={5}>Type 5</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Sub Category
            </Typography>
            <Select
              value={ipoDetails.subCategory}
              onChange={(e) => handleInputChange("subCategory", e.target.value)}
              sx={{
                width: 400,
                height: 40,
              }}
            >
              <MenuItem value={1}>Category 1</MenuItem>
              <MenuItem value={2}>Category 2</MenuItem>
              <MenuItem value={3}>Category 3</MenuItem>
              <MenuItem value={4}>Category 4</MenuItem>
              <MenuItem value={5}>Category 5</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
