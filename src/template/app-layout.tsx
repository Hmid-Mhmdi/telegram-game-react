import { Outlet } from "react-router";
import AppBottomNavigation from "./app-bottom-navigation";
import { useEffect, useState } from "react";
import Loading from "../components/loading";

const AppLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Outlet />
      <AppBottomNavigation />
    </>
  );
};

export default AppLayout;
