import { Outlet } from "react-router";
import AppBottomNavigation from "./app-bottom-navigation";

const AppLayout = () => {
  return (
    <>
      <Outlet />
      <AppBottomNavigation />
    </>
  );
};

export default AppLayout;
