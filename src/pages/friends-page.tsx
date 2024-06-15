import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Loading from "../components/loading";

const FriendsPage = () => {
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
      <Box height={200} />
      <Typography align="center">Friends Page</Typography>
    </>
  );
};

export default FriendsPage;
