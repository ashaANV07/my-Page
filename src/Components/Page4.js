import React from "react";
import { TextField, Typography, Container, Box, Grid } from "@mui/material";

export const Page4 = () => {
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
          height: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Personal Details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              CDSL number
            </Typography>
            <TextField
              id="outlined-basic"
              label="Enter CDSL number"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Pan
            </Typography>
            <TextField
              id="outlined-basic"
              label="Enter Pan number"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Name
            </Typography>
            <TextField
              id="outlined-basic"
              label="Enter name"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Mobile Number
            </Typography>
            <TextField
              type="number"
              id="outlined-basic"
              label="Enter Mobile number"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Email
            </Typography>
            <TextField
              type="email"
              id="outlined-basic"
              label="Enter your email"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Bank UPI
            </Typography>
            <TextField
              type="email"
              id="outlined-basic"
              label="Enter Bank UPI"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
