// import logo from './logo.svg';
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
  return (
    <Grid container spacing={2}>
      {/* <Grid container> */}
      <Grid item xs={12} md={12}>
        {/* <Box
          sx={{
            width: 680,
            height: 100,
            borderRadius: 1,
            bgcolor: "#c8e6c9",
          }}
        > */}
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ borderRadius: 1, bgcolor: "#c8e6c9" }}
        >
          Note:
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ borderRadius: 1, bgcolor: "#c8e6c9" }}
        >
          IPO window will remain open from 10:00 AM till 5:00 PM on trading
          days. you can accept the UPI mandate request till 5:00 PM on the day
          off IPO close date. If you don't recieve the UPI request till the end
          of the day due to delays from the bank, kindlly delete and apply again
        </Typography>
        {/* </Box> */}
        <br />
      </Grid>

      <Grid container spacing={5} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Page3
            sx={{
              height: 140,
              width: 100,
              border: "2px solid black",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Page4
            sx={{
              height: 140,
              width: 100,
              border: "2px solid black",
            }}
          />
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12}>
        <FormControlLabel control={<Checkbox defaultChecked />} />I hereby
        understand that i have read the Red Herring Prospectus and i am an
        eligible UPI bidder as per the application provision of the SEBI(Issue
        of Capital and Disclosure Requirement) Regulation, 2018.
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box textAlign="center">
          <Button variant="contained" color="success">
            Bidding
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
