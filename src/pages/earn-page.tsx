import { useEffect, useState } from "react";
import Loading from "../components/loading";
import { Box, Typography } from "@mui/material";

const EarnPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Box>
      <Typography>Earn Page</Typography>
    </Box>
  );
};

export default EarnPage;
