import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FriendsIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import ProfileIcon from "@mui/icons-material/Person";
import DailyTaskIcon from "@mui/icons-material/Assignment";
import { Wallet } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useLocation, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: "0px",
    left: "0px",
    right: "0px",
    marginBottom: "0px",
    width: "100vw",
    backgroundColor: "red",
  },
});

const AppBottomNavigation = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={location.pathname}
        className={classes.root}
      >
        <BottomNavigationAction
          to="/telegram-game-react/home"
          value="/telegram-game-react/home"
          label="Home"
          icon={<HomeIcon />}
          component={Link}
        />
        <BottomNavigationAction
          to="/telegram-game-react/profile"
          value="/telegram-game-react/profile"
          label="Profile"
          icon={<ProfileIcon />}
          component={Link}
        />
        <BottomNavigationAction
          to="/telegram-game-react/friends"
          value="/telegram-game-react/friends"
          label="Friends"
          icon={<FriendsIcon />}
          component={Link}
        />
        <BottomNavigationAction
          to="/telegram-game-react/tasks"
          value="/telegram-game-react/tasks"
          label="Tasks"
          icon={<DailyTaskIcon />}
          component={Link}
        />

        <BottomNavigationAction
          component={Link}
          to="/telegram-game-react/wallet"
          value="/telegram-game-react/wallet"
          label="Wallet"
          icon={<Wallet />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default AppBottomNavigation;
