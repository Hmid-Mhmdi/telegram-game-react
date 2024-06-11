import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FriendsIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import ProfileIcon from "@mui/icons-material/VerifiedUser";
import DailyTaskIcon from "@mui/icons-material/Assignment";
import { Task, Wallet } from "@mui/icons-material";
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
          to="/home"
          value="/home"
          label="Home"
          icon={<HomeIcon />}
          component={Link}
        />
        <BottomNavigationAction
          to="/profile"
          value="/profile"
          label="Profile"
          icon={<ProfileIcon />}
          component={Link}
        />
        <BottomNavigationAction
          to="/friends"
          value="/friends"
          label="Friends"
          icon={<FriendsIcon />}
          component={Link}
        />
        <BottomNavigationAction
          to="/daily-tasks"
          value="/daily-tasks"
          label="Daily Tasks"
          icon={<DailyTaskIcon />}
          component={Link}
        />

        <BottomNavigationAction
          component={Link}
          to="/wallet"
          value="/wallet"
          label="Wallet"
          icon={<Wallet />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default AppBottomNavigation;
