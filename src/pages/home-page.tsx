import { useEffect, useState } from "react";

import Loading from "../components/loading";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
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
      <Typography>Home Page</Typography>
    </Box>
  );
};

export default HomePage;
