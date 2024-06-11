import { Avatar, Box, Chip, Grid, Typography } from "@mui/material";
import CoinIcon from "@mui/icons-material/Paid";
import avatar from "../assets/admin-avatar.jpg";

const HomePage = () => {
  return (
    <>
      <Box height={20} />
      <Grid paddingX={2} container direction={"row"}>
        <Grid item xs={4}>
          <Chip
            avatar={<Avatar alt="Natacha" src={avatar} />}
            label="Hamid Mohammadi"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4} />
        <Grid item container xs={4} justifyContent="flex-end">
          <Chip label="100" icon={<CoinIcon />} color="secondary" />
        </Grid>
      </Grid>
      <Box height={200} />
      <Typography align="center">Game Page</Typography>
    </>
  );
};

export default HomePage;
