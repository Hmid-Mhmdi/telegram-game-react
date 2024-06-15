import React, { useEffect, useState } from "react";
import {
  Alert,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Chip,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import CoinIcon from "@mui/icons-material/Paid";
import avatar from "../assets/images/admin-avatar.jpg";
import BattleIcon from "../assets/images/battle-icon.png";
import GameTimer from "../components/game-timer";
import GameCards from "../components/game-cards";
import User1Image from "../assets/images/user-1.png";
import User2Image from "../assets/images/user-2.png";
import User3Image from "../assets/images/user-3.jpg";
import User4Image from "../assets/images/user-4.png";
import Loading from "../components/loading";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <React.Fragment>
      <Box height={10} />
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

      <Box height={10} />

      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Grid item mx={2}>
          <img width={40} height={40} src={BattleIcon} />
        </Grid>
        <Grid item>
          <AvatarGroup
            max={4}
            renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
            total={4251}
          >
            <Avatar alt="Remy Sharp" src={User1Image} />
            <Avatar alt="Travis Howard" src={User2Image} />
            <Avatar alt="Cindy Baker" src={User3Image} />
            <Avatar alt="Agnes Walker" src={User4Image} />
          </AvatarGroup>
        </Grid>
      </Grid>
      <Box height={10}></Box>

      <GameCards />

      <Box height={10}></Box>
      <GameTimer />

      <Box height={10}></Box>

      <Box mx={2}>
        <Grid
          container
          direction={"row"}
          justifyContent={"space-around"}
          alignItems={"stretch"}
        >
          <Grid item xs={8}>
            <Button
              sx={{ height: "56px" }}
              variant="contained"
              color="info"
              fullWidth
              onClick={() => setOpen(true)}
            >
              Enter Game
            </Button>
          </Grid>
          <Grid item xs={3} alignItems={"stretch"}>
            <TextField
              sx={{ height: "56px" }}
              id="outlined-basic"
              label="Coin Size"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          You Added To Game Successfuly !
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default HomePage;
