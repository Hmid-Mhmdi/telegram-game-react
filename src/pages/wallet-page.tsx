import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Loading from "../components/loading";

const WalletPage = () => {
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
      <Typography align="center">Wallet Page</Typography>
    </>
  );
};

export default WalletPage;
