import { useEffect, useState } from "react";
import { useTonConnectUI } from "@tonconnect/ui-react";
import Loading from "../components/loading";
import { Box, Typography } from "@mui/material";

const WalletPage = () => {
  const [loading, setLoading] = useState(true);
  const [tonConnectUI] = useTonConnectUI();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(
    () =>
      tonConnectUI.onStatusChange((wallet) => {
        if (
          wallet?.connectItems?.tonProof &&
          "proof" in wallet?.connectItems.tonProof
        ) {
          console.log(wallet?.connectItems);
        }
      }),
    []
  );

  return loading ? (
    <Loading />
  ) : (
    <Box>
      <Typography>Wallet Page</Typography>
    </Box>
  );
};

export default WalletPage;
