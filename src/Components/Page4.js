import React from "react";
import { TextField, Typography, Container, Box } from "@mui/material";

export const Page4 = () => {
  return (
    <Box sx={{ border: 1, width: 300, height: 550 }} justifyContent="center">
      <Container maxWidth="sm" justifyContent="center" alignItems="center">
        <div>
          <Typography variant="h5" gutterBottom>
            Personal Details
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            CDSL number
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter CDSL number"
            variant="outlined"
            size="small"
            sx={{
              width: 250,
              height: 30,
            }}
          />
          <br /> <br />
          <Typography variant="subtitle1" gutterBottom>
            Pan
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter Pan number"
            variant="outlined"
            size="small"
            sx={{
              width: 250,
              height: 30,
            }}
          />
          <br /> <br />
          <Typography variant="subtitle1" gutterBottom>
            Name
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter name"
            variant="outlined"
            size="small"
            sx={{
              width: 250,
              height: 30,
            }}
          />
          <br /> <br />
          <Typography variant="subtitle1" gutterBottom>
            Mobile Number
          </Typography>
          <TextField
            type="number"
            id="outlined-basic"
            label="Enter Mobile number"
            variant="outlined"
            size="small"
            sx={{
              width: 250,
              height: 30,
            }}
          />
          <br /> <br />
          <Typography variant="subtitle1" gutterBottom>
            Email
          </Typography>
          <TextField
            type="email"
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
            size="small"
            sx={{
              width: 250,
              height: 30,
            }}
          />
          <br /> <br />
          <Typography variant="subtitle1" gutterBottom>
            Bank UPI
          </Typography>
          <TextField
            type="email"
            id="outlined-basic"
            label="Enter Bank UPI"
            variant="outlined"
            size="small"
            sx={{
              width: 250,
              height: 30,
            }}
          />
        </div>
      </Container>
    </Box>
  );
};
