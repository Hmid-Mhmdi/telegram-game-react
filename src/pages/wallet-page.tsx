import { Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import {
  TonConnectButton,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";
import Loading from "../components/loading";
import WalltImage from "../assets/images/crypto-wallet.jpg";

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
    <>
      <Grid container>
        <img src={WalltImage} style={{ width: "100%" }} />

        <Box height={20}></Box>

        <TonConnectButton />
      </Grid>
    </>
  );
};

export default WalletPage;
