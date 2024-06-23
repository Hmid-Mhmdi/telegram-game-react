import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router";

export default function AppBottomNavigation() {
  const [value, setValue] = React.useState("/telegram-game-react/home");
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(event);
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="/telegram-game-react/home"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Earn"
        value="/telegram-game-react/earn"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Wallet"
        value="/telegram-game-react/wallet"
        icon={<LocationOnIcon />}
      />
    </BottomNavigation>
  );
}
