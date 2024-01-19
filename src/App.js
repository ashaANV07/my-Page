// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import { Page3 } from "./Components/Page3";
import { Page4 } from "./Components/Page4";
import {
  Grid,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";

function App() {
  const [formData, setFormData] = useState({
    page3Data: null,
    page4Data: null,
  });

  const handlePage3Data = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      page3Data: data,
    }));
  };

  const handlePage4Data = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      page4Data: data,
    }));
  };

  const handleBidding = () => {
    console.log("Page Data:", formData);
  };

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      alignItems="center"
      justifyContent="center"
      // sx={{ minHeight: "100vh",
      // minWidth: "10vh" }}
    >
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          borderRadius: 1,
          bgcolor: "#a5d6a7",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ padding: "10px" }}>
          Note:
          <Typography
            variant="body1"
            gutterBottom
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            IPO window will remain open from 10:00 AM till 5:00 PM on trading
            days. you can accept the UPI mandate request till 5:00 PM on the day
            off IPO close date. If you don't recieve the UPI request till the
            end of the day due to delays from the bank, kindlly delete and apply
            again
          </Typography>
        </Typography>
      </Grid>

      <Grid container spacing={-5} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Page3
            sx={{
              height: 140,
              width: 100,
              border: "2px solid black",
            }}
            onChange={handlePage3Data}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Page4
            sx={{
              height: 140,
              width: 100,
              border: "2px solid black",
            }}
            onChange={handlePage4Data}
          />
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={
            <>
              <Typography variant="body1" gutterBottom>
                I hereby understand that i have read the Red Herring Prospectus
                and i am an eligible UPI bidder as per the application provision
                of the SEBI(Issue of Capital and Disclosure Requirement)
                Regulation, 2018.
              </Typography>
            </>
          }
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box textAlign="center">
          <Button variant="contained" color="success" onClick={handleBidding}>
            Bidding
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
