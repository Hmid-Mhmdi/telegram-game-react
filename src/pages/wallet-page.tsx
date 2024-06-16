import { Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { TonConnectButton, useTonConnectUI } from "@tonconnect/ui-react";
import Loading from "../components/loading";
import WalltImage from "../assets/images/crypto-wallet.jpg";

const WalletPage = () => {
  const [loading, setLoading] = useState(true);
  const [tokenBalances, setTokenBalances] = useState({});
  const { isConnected, connect, account } = useTonConnectUI();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (isConnected && account) {
      console.log(isConnected, account);
      // Get the token balances
      account
        .getTokenBalances()
        .then((balances) => {
          setTokenBalances(balances);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [isConnected, account]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Grid container>
        <img src={WalltImage} style={{ width: "100%" }} />

        <Box height={20}></Box>

        <div>
          <TonConnectButton />
          {isConnected ? (
            <div>
              <h1>Token Balances</h1>
              <ul>
                {Object.keys(tokenBalances).map((token) => (
                  <li key={token}>
                    {token}: {tokenBalances[token]}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Connect to Tonkepeer to see your token balances</p>
          )}
        </div>
      </Grid>
    </>
  );
};

export default WalletPage;
