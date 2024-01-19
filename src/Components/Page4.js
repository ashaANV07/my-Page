import React from "react";
import { useState, useEffect } from "react";
import { TextField, Typography, Container, Box, Grid } from "@mui/material";

export const Page4 = ({ onChange }) => {
  const [personalDetails, setPersonalDetails] = useState({
    cdslNumber: "",
    panNumber: "",
    name: "",
    mobileNumber: "",
    email: "",
    bankUPI: "",
  });

  const handleInputChange = (key, value) => {
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  useEffect(() => {
    onChange(personalDetails);
  }, [personalDetails, onChange]);

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
          height: 700,
          // width: 200,
          borderColor: "grey.500",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
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
              Personal Details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              CDSL number
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              sx={{
                width: 400,
                height: 40,
              }}
              onChange={(e) => handleInputChange("cdslNumber", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Pan
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              sx={{
                width: 400,
                height: 40,
              }}
              onChange={(e) => handleInputChange("panNumber", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Name
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              sx={{
                width: 400,
                height: 40,
              }}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Mobile Number
            </Typography>
            <TextField
              type="number"
              id="outlined-basic"
              variant="outlined"
              size="small"
              sx={{
                width: 400,
                height: 40,
              }}
              onChange={(e) =>
                handleInputChange("mobileNumber", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Email
            </Typography>
            <TextField
              type="email"
              id="outlined-basic"
              variant="outlined"
              size="small"
              sx={{
                width: 400,
                height: 40,
              }}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Bank UPI
            </Typography>
            <TextField
              type="email"
              id="outlined-basic"
              variant="outlined"
              size="small"
              sx={{
                width: 400,
                height: 40,
              }}
              onChange={(e) => handleInputChange("bankUPI", e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
